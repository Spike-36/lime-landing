// Tester feedback at /feedback: the checks applied to what is sent. The
// YumWords Editor's database checks everything again (submit_feedback in
// the editor repository's 010_tester_feedback.sql).

export const ANSWER_MAX = 2000

export const QUESTIONS = [
  { key: "tried", label: "What did you try?", hint: "For example, ordering at a market, reading a menu or cooking a dish." },
  { key: "worked", label: "What worked well?", hint: "" },
  { key: "problems", label: "Any problems, or anything confusing?", hint: "" },
  { key: "suggestions", label: "Any suggestions?", hint: "" },
] as const

export type AnswerKey = (typeof QUESTIONS)[number]["key"]

export interface FeedbackInput {
  token: string
  email: string
  answers: Record<AnswerKey, string>
  installed: boolean
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TOKEN = /^[0-9a-f]{32}$/

/** What was sent, tidied, or the first problem in words for the form. */
export function readFeedback(input: unknown): FeedbackInput | { error: string; oldLink?: boolean } {
  const o = (input && typeof input === "object" ? input : {}) as Record<string, unknown>
  const text = (v: unknown) => (typeof v === "string" ? v : "")
  const token = text(o.token).trim().toLowerCase()
  const email = text(o.email).trim().toLowerCase()
  const answers = Object.fromEntries(
    QUESTIONS.map((q) => [q.key, text(o[q.key]).replace(/\r\n?/g, "\n").trim()]),
  ) as Record<AnswerKey, string>

  if (token && !TOKEN.test(token)) {
    return { error: "This feedback link isn’t recognised. You can still send feedback below with the email address you registered with.", oldLink: true }
  }
  if (!token && (!EMAIL.test(email) || email.length > 320)) return { error: "Enter the email address you registered with." }
  for (const a of Object.values(answers)) {
    if (a.length > ANSWER_MAX) return { error: "Each answer can be up to 2,000 characters." }
    if (/[\u0001-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(a)) return { error: "An answer contains characters that can’t be used." }
  }
  if (!Object.values(answers).some((a) => a.replace(/\s/g, "").length >= 5)) return { error: "Please answer at least one question." }
  return { token, email: token ? "" : email, answers, installed: o.installed === true }
}
