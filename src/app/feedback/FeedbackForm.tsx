"use client"

import { useEffect, useRef, useState } from "react"
import { ANSWER_MAX, QUESTIONS } from "@/lib/feedback"

const field = "mt-1.5 w-full rounded-xl border border-[#D9D1C3] bg-white px-4 py-3 text-base outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"

/** The personal code from a link like /feedback#t=…; it never leaves the browser except with the feedback. */
function codeFromHash(): string {
  const m = /(?:^|[#&])t=([0-9a-fA-F]{32})(?:&|$)/.exec(window.location.hash)
  return m ? m[1].toLowerCase() : ""
}

export default function FeedbackForm() {
  const [token, setToken] = useState<string | null>(null)
  const [state, setState] = useState<"idle" | "sending" | "done">("idle")
  const [error, setError] = useState<string | null>(null)
  const [round, setRound] = useState(0)
  const started = useRef(0)
  const heading = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const read = () => setToken(codeFromHash())
    read()
    window.addEventListener("hashchange", read)
    return () => window.removeEventListener("hashchange", read)
  }, [])
  useEffect(() => {
    started.current = Date.now()
  }, [round])
  useEffect(() => {
    if (state === "done") heading.current?.focus()
  }, [state])

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = {
      token: token ?? "",
      email: String(f.get("email") ?? ""),
      ...Object.fromEntries(QUESTIONS.map((q) => [q.key, String(f.get(q.key) ?? "")])),
      installed: f.get("installed") === "yes",
      website: String(f.get("website") ?? ""),
      elapsed: Date.now() - started.current,
    }
    setState("sending")
    setError(null)
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const r = (await res.json().catch(() => null)) as { ok?: boolean; error?: string; oldLink?: boolean } | null
      if (res.ok && r?.ok) {
        setState("done")
        return
      }
      // An old or broken link: carry on with an email address instead, keeping what they wrote.
      if (r?.oldLink) setToken("")
      setError(r?.error ?? "Something went wrong. Please try again.")
    } catch {
      setError("Couldn’t connect. Check your connection and try again.")
    }
    setState("idle")
  }

  if (token === null) return <p className="text-[#6B5E4E]">Loading…</p>

  if (state === "done") {
    return (
      <div className="rounded-[24px] bg-[#E7EFE9] p-6 md:p-8" role="status">
        <h2 ref={heading} tabIndex={-1} className="text-2xl font-semibold outline-none">Thank you</h2>
        <p className="mt-3 text-lg leading-relaxed text-[#2F3A31]">
          Your feedback has been received. It really helps us improve YumWords Thailand.
        </p>
        <button type="button" onClick={() => { setState("idle"); setRound((n) => n + 1) }}
          className="mt-5 rounded-full border border-[#2F3A31] px-5 py-2.5 font-semibold text-[#2F3A31] hover:bg-white">
          Send more feedback
        </button>
      </div>
    )
  }

  return (
    <form key={round} onSubmit={submit} className="space-y-6">
      {token ? (
        <p className="rounded-xl bg-white/70 p-4 text-sm text-[#4A4036]">
          This is your personal feedback link, so we’ll know it’s from you. You can use it again whenever something comes to mind.
        </p>
      ) : (
        <div>
          <label htmlFor="email" className="font-medium">Your email address</label>
          <input id="email" name="email" type="email" required maxLength={320} autoComplete="email" aria-describedby="email-help" className={field} />
          <p id="email-help" className="mt-1.5 text-sm text-[#6B5E4E]">
            The one you registered with, so we can match your feedback to your registration. If you have your personal feedback link,
            using it is quicker.
          </p>
        </div>
      )}

      <p className="text-[#4A4036]">Answer as many questions as you like. One is enough.</p>

      {QUESTIONS.map((q) => (
        <div key={q.key}>
          <label htmlFor={q.key} className="font-medium">{q.label}</label>
          {q.hint && <p className="text-sm text-[#6B5E4E]">{q.hint}</p>}
          <textarea id={q.key} name={q.key} rows={3} maxLength={ANSWER_MAX} className={field} />
        </div>
      ))}

      <label className="flex items-center gap-2.5 font-medium">
        <input type="checkbox" name="installed" value="yes" className="h-4 w-4 accent-orange-600" />
        I’ve installed the app
      </label>

      {/* Hidden from people; bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-red-800">{error}</p>}

      <button type="submit" disabled={state === "sending"}
        className="w-full rounded-full bg-orange-600 px-6 py-3.5 text-lg font-semibold text-white hover:bg-orange-700 disabled:opacity-60 sm:w-auto">
        {state === "sending" ? "Sending…" : "Send feedback"}
      </button>
    </form>
  )
}
