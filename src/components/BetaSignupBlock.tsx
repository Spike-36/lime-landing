'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BetaSignupBlock() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)

    // Honeypot field (prevent bot signups)
    const botField = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement)?.value
    if (botField) {
      setStatus("Spam detected.")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("https://formspree.io/f/mzzggkyb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const data = await res.json()
      console.log("Formspree response:", data)

      if (res.ok) {
        router.push("/thanks")
      } else {
        setStatus(data?.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Form error:", err)
      setStatus("Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white px-4 py-16 text-center text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        Beta Testers
      </h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        Join our team of WordBento <em>beta</em> testers — help us shape the product and get free access to Version 1.0 on release.
      </p>

      <div className="bg-yellow-300 px-6 py-8 rounded-md max-w-md mx-auto shadow-md">
        <h3 className="text-xl font-bold mb-2">Join the Team</h3>
        <p className="text-sm mb-6">
          Absolutely no commitment whatsoever. <br />
          Not having fun? Opt out any time you want...
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Add to List"}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 transition-opacity duration-300 ${
                status.toLowerCase().includes("error") || status.toLowerCase().includes("wrong") || status.includes("Spam")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
