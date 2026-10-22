// Receives the /feedback form and passes it to the YumWords Editor's
// database through submit_feedback(), which the publishable key may call.
// This route never reads tester records. Uses the same environment as
// /api/register.
import { createHmac } from "node:crypto"
import { readFeedback } from "@/lib/feedback"

const MAX_BYTES = 12_000
// Quicker than a person can write anything.
const MIN_MS = 3000

const reply = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } })

const OK = { ok: true }
const UNAVAILABLE = "Feedback can’t be sent just now. Please try again later, or email support@yumwords.com."
const OLD_LINK = "This feedback link is no longer in use. You can still send feedback below with the email address you registered with."

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
    console.error("Feedback is not configured.")
    return reply(503, { ok: false, error: UNAVAILABLE })
  }
  if (!sameOrigin(request)) return reply(403, { ok: false, error: "Please use the form on yumwords.com/feedback." })
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply(415, { ok: false, error: "Please use the form on yumwords.com/feedback." })
  }

  const raw = await request.text()
  if (raw.length > MAX_BYTES) return reply(413, { ok: false, error: "That is too much text." })
  let body: Record<string, unknown>
  try {
    body = JSON.parse(raw)
  } catch {
    return reply(400, { ok: false, error: "Please use the form on yumwords.com/feedback." })
  }

  // Basic bot checks, as for registration: bots are told it worked, and nothing is kept.
  if (typeof body.website === "string" && body.website !== "") return reply(200, OK)
  if (typeof body.elapsed !== "number" || body.elapsed < MIN_MS) return reply(200, OK)

  const f = readFeedback(body)
  if ("error" in f) return reply(400, { ok: false, error: f.error, ...(f.oldLink ? { oldLink: true } : {}) })

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown"
  const client = createHmac("sha256", secret).update(ip).digest("hex")

  let res: Response
  try {
    res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/submit_feedback`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({
        p_token: f.token, p_email: f.email, p_tried: f.answers.tried, p_worked: f.answers.worked,
        p_problems: f.answers.problems, p_suggestions: f.answers.suggestions, p_installed: f.installed, p_client_key: client,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    })
  } catch (e) {
    console.error("Feedback request failed:", e)
    return reply(503, { ok: false, error: UNAVAILABLE })
  }
  if (res.ok) return reply(200, OK)

  const problem = (await res.json().catch(() => null)) as { message?: string } | null
  const message = problem?.message ?? ""
  if (message.startsWith("old_link: ")) return reply(400, { ok: false, oldLink: true, error: OLD_LINK })
  if (message.startsWith("rate_limited: ")) {
    return reply(429, { ok: false, error: "There has been too much feedback at once. Please try again later." })
  }
  if (message.startsWith("invalid: ")) {
    const said = message.slice("invalid: ".length)
    return reply(400, { ok: false, error: said.charAt(0).toUpperCase() + said.slice(1) })
  }
  console.error("Feedback refused:", res.status, message)
  return reply(503, { ok: false, error: UNAVAILABLE })
}
