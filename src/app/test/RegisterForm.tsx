"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import type { Contact, Platform } from "@/lib/registration"

const field = "mt-1.5 w-full rounded-xl border border-[#D9D1C3] bg-white px-4 py-3 text-base outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
const choice = "flex flex-1 cursor-pointer items-center gap-2.5 rounded-xl border border-[#D9D1C3] bg-white px-4 py-3 has-[:checked]:border-orange-600 has-[:checked]:bg-orange-50"

export default function RegisterForm() {
  const [contact, setContact] = useState<Contact | null>(null)
  const [state, setState] = useState<"idle" | "sending" | "done">("idle")
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<{ name: string; contact: Contact } | null>(null)
  const started = useRef(0)
  const heading = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    started.current = Date.now()
  }, [])
  useEffect(() => {
    if (state === "done") heading.current?.focus()
  }, [state])

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      platform: f.get("platform") as Platform | null,
      contact: f.get("contact") as Contact | null,
      whatsapp: String(f.get("whatsapp") ?? ""),
      consent: f.get("consent") === "yes",
      website: String(f.get("website") ?? ""),
      elapsed: Date.now() - started.current,
    }
    setState("sending")
    setError(null)
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const r = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null
      if (res.ok && r?.ok) {
        setDone({ name: body.name.trim().split(/\s+/)[0], contact: body.contact as Contact })
        setState("done")
        return
      }
      setError(r?.error ?? "Something went wrong. Please try again.")
    } catch {
      setError("Couldn’t connect. Check your connection and try again.")
    }
    setState("idle")
  }

  if (state === "done" && done) {
    return (
      <div className="rounded-[24px] bg-[#E7EFE9] p-6 md:p-8" role="status">
        <h3 ref={heading} tabIndex={-1} className="text-2xl font-semibold outline-none">Thank you, {done.name}</h3>
        <p className="mt-3 text-lg leading-relaxed text-[#2F3A31]">
          We’ve received your registration. We’ll arrange your testing access, then send your installation
          instructions by {done.contact === "whatsapp" ? "WhatsApp" : "email"}. Nothing needs to be installed yet.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-medium">Name</label>
        <input id="name" name="name" required maxLength={200} autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="font-medium">Email address</label>
        <input id="email" name="email" type="email" required maxLength={320} autoComplete="email"
          aria-describedby="email-help" className={field} />
        <p id="email-help" className="mt-1.5 text-sm text-[#6B5E4E]">
          Android: use the email address of the Google account signed in to Google Play on your phone. iPhone: use an
          email address where you can receive Apple’s TestFlight invitation.
        </p>
      </div>

      <fieldset>
        <legend className="font-medium">Your phone</legend>
        <div className="mt-1.5 flex gap-3">
          <label className={choice}><input type="radio" name="platform" value="iphone" required className="accent-orange-600" /> iPhone</label>
          <label className={choice}><input type="radio" name="platform" value="android" className="accent-orange-600" /> Android</label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-medium">How should we contact you?</legend>
        <div className="mt-1.5 flex gap-3">
          <label className={choice}>
            <input type="radio" name="contact" value="email" required className="accent-orange-600" onChange={() => setContact("email")} /> Email
          </label>
          <label className={choice}>
            <input type="radio" name="contact" value="whatsapp" className="accent-orange-600" onChange={() => setContact("whatsapp")} /> WhatsApp
          </label>
        </div>
      </fieldset>

      {contact === "whatsapp" && (
        <div>
          <label htmlFor="whatsapp" className="font-medium">WhatsApp number</label>
          <input id="whatsapp" name="whatsapp" type="tel" required autoComplete="tel" placeholder="+66 81 234 5678"
            aria-describedby="whatsapp-help" className={field} />
          <p id="whatsapp-help" className="mt-1.5 text-sm text-[#6B5E4E]">Include + and your country code.</p>
        </div>
      )}

      {/* Hidden from people; bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="rounded-xl bg-white/70 p-4 text-sm leading-relaxed text-[#4A4036]">
        <p>
          We use your name, email address, phone type and, if you give it, your WhatsApp number only to run the
          YumWords Thailand testing programme: to give you access to the test version through Apple TestFlight or
          Google Play testing, to send you installation instructions, and to ask for your feedback. We keep these
          details for 12 months after the testing programme ends, unless you ask us to delete them sooner or the
          law requires otherwise. See our <Link href="/privacy#testing" className="underline">privacy policy</Link>.
        </p>
        <label className="mt-3 flex items-start gap-2.5 font-medium text-[#1F1B16]">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 accent-orange-600" />
          I agree to YumWords contacting me about testing YumWords Thailand.
        </label>
      </div>

      {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-red-800">{error}</p>}

      <button type="submit" disabled={state === "sending"}
        className="w-full rounded-full bg-orange-600 px-6 py-3.5 text-lg font-semibold text-white hover:bg-orange-700 disabled:opacity-60 sm:w-auto">
        {state === "sending" ? "Sending…" : "Register to test"}
      </button>
    </form>
  )
}
