'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/mzzggkyb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (res.ok) {
      setStatus("Message sent!")
      form.reset()
    } else {
      setStatus("Oops! Something went wrong.")
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-black text-white px-4 py-2">
          Send
        </button>
        {status && <p className="text-sm text-green-600">{status}</p>}
      </form>
    </div>
  )
}
