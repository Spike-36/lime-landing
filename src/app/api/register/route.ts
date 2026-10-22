// Receives the /test registration form and passes it to the YumWords
// Editor's database through register_tester(), the one function the
// publishable key may call. This route never reads tester records.
//
// Needs, in the Vercel project's environment (server-side only):
//   YUMWORDS_SUPABASE_URL              the Editor's Supabase project URL
//   YUMWORDS_SUPABASE_PUBLISHABLE_KEY  its publishable key
//   REGISTRATION_SECRET                a long random string, used to hash
//                                      visitors' IP addresses for rate limits
import { createHmac } from "node:crypto"
import { CONSENT_VERSION, readRegistration } from "@/lib/registration"

const MAX_BYTES = 4096
// Quicker than a person can fill in the form.
const MIN_MS = 2500

const reply = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } })

const OK = { ok: true }
const UNAVAILABLE = "Registration isn’t available just now. Please try again later, or email support@yumwords.com."

/** Only the site's own pages may post here. */
function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin")
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  const url = process.env.YUMWORDS_SUPABASE_URL
  const key = process.env.YUMWORDS_SUPABASE_PUBLISHABLE_KEY
  const secret = process.env.REGISTRATION_SECRET
  if (!url || !key || !secret || secret.length < 32) {
    console.error("Registration is not configured.")
    return reply(503, { ok: false, error: UNAVAILABLE })
  }
  if (!sameOrigin(request)) return reply(403, { ok: false, error: "Please use the form on yumwords.com/test." })
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply(415, { ok: false, error: "Please use the form on yumwords.com/test." })
  }

  const raw = await request.text()
  if (raw.length > MAX_BYTES) return reply(413, { ok: false, error: "That is too much text." })
  let body: Record<string, unknown>
  try {
    body = JSON.parse(raw)
  } catch {
    return reply(400, { ok: false, error: "Please use the form on yumwords.com/test." })
  }

  // Basic bot checks: a hidden field people don't see, and a form filled in
  // faster than a person could. Bots are told it worked, and nothing is kept.
  if (typeof body.website === "string" && body.website !== "") return reply(200, OK)
  if (typeof body.elapsed !== "number" || body.elapsed < MIN_MS) return reply(200, OK)

  const r = readRegistration(body)
  if ("error" in r) return reply(400, { ok: false, error: r.error })

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown"
  const client = createHmac("sha256", secret).update(ip).digest("hex")

  let res: Response
  try {
    res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/register_tester`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({
        p_name: r.name, p_email: r.email, p_device: r.platform, p_contact: r.contact, p_whatsapp: r.whatsapp,
        p_consent_version: CONSENT_VERSION, p_client_key: client,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    })
  } catch (e) {
    console.error("Registration request failed:", e)
    return reply(503, { ok: false, error: UNAVAILABLE })
  }
  if (res.ok) return reply(200, OK)

  const problem = (await res.json().catch(() => null)) as { message?: string } | null
  const message = problem?.message ?? ""
  if (message.startsWith("rate_limited: ")) {
    return reply(429, { ok: false, error: "There have been too many registrations. Please try again later." })
  }
  if (message.startsWith("invalid: ")) {
    const said = message.slice("invalid: ".length)
    return reply(400, { ok: false, error: said.charAt(0).toUpperCase() + said.slice(1) })
  }
  console.error("Registration refused:", res.status, message)
  return reply(503, { ok: false, error: UNAVAILABLE })
}
