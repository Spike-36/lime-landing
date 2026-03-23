'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)

    try {
      const res = await fetch("https://formspree.io/f/mzzggkyb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        router.push("/thanks")
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Form error:", err)
      setStatus("Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="signup" className="bg-gray-50 py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Get the Free Article</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-8">
        Download “Want Legal Tech That Works? Start With the Requirements”
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded w-full"
        />
        <p className="text-xs text-gray-500 text-left">
          We’ll send you this and future articles and occasional legal tech updates. Unsubscribe anytime.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-olive text-white px-6 py-3 rounded hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Start Reading"}
        </button>
        {status && <p className="mt-2 text-red-600">{status}</p>}
      </form>
    </section>
  )
}
