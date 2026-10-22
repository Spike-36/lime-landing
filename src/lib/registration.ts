// Tester registration for YumWords Thailand: the wording people agree to,
// and the checks applied to what they send. Used by the /test form and by
// /api/register. The YumWords Editor's database checks everything again
// (register_tester in the editor repository's 008_tester_registration.sql).

// The approved offer. Don't change it without Pete's approval.
export const OFFER =
  "Participate in the YumWords Thailand testing phase and provide feedback to receive lifetime free access to the app."

// Which wording (privacy notice, consent and offer) someone saw. Change the
// date whenever that wording changes, so each tester's record shows what
// they agreed to.
export const CONSENT_VERSION = "2026-10-22"

export type Platform = "iphone" | "android"
export type Contact = "email" | "whatsapp"

export interface Registration {
  name: string
  email: string
  platform: Platform
  contact: Contact
  whatsapp: string
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** A WhatsApp number in international format: +, country code, number.
 *  Spaces, dashes, dots and brackets are dropped; a leading 00 becomes +.
 *  The same rule as the Editor's. */
export function normaliseWhatsapp(input: string): { value: string } | { error: string } {
  let v = input.replace(/[\s\-.()]/g, "")
  if (v.startsWith("00")) v = `+${v.slice(2)}`
  if (!v) return { error: "Enter your WhatsApp number." }
  if (!v.startsWith("+")) return { error: "Start your WhatsApp number with + and the country code, for example +66 81 234 5678." }
  if (!/^\+[0-9]{7,15}$/.test(v)) return { error: "That WhatsApp number doesn’t look right. Use digits only after the +." }
  return { value: v }
}

/** What was sent, tidied, or the first problem in words for the form. */
export function readRegistration(input: unknown): Registration | { error: string } {
  const o = (input && typeof input === "object" ? input : {}) as Record<string, unknown>
  const text = (v: unknown) => (typeof v === "string" ? v : "")
  const name = text(o.name).replace(/\s+/g, " ").trim()
  const email = text(o.email).trim().toLowerCase()
  const platform = text(o.platform)
  const contact = text(o.contact)

  if (!name) return { error: "Enter your name." }
  if (name.length > 200 || /[\u0000-\u001f\u007f]/.test(name)) return { error: "That name is too long." }
  if (!EMAIL.test(email) || email.length > 320) return { error: "Enter a valid email address." }
  if (platform !== "iphone" && platform !== "android") return { error: "Choose iPhone or Android." }
  if (contact !== "email" && contact !== "whatsapp") return { error: "Choose email or WhatsApp." }
  if (o.consent !== true) return { error: "Please tick the box to agree to be contacted about testing." }
  let whatsapp = ""
  if (contact === "whatsapp") {
    const phone = normaliseWhatsapp(text(o.whatsapp))
    if ("error" in phone) return phone
    whatsapp = phone.value
  }
  return { name, email, platform, contact, whatsapp }
}
