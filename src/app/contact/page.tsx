'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mzzggkyb', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold mb-2">Contact</h1>
        <p className="text-sm text-gray-600 mb-6">
          Use this form for app support or general enquiries.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-gray-300 p-2 w-full text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 p-2 w-full text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="border border-gray-300 p-2 w-full text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 text-sm"
          >
            Send message
          </button>

          {status === 'success' && (
            <div className="mt-6">
              <p className="text-sm text-green-600">
                Your message has been sent.
              </p>

              <div className="mt-6">
                <Link
                  href="/"
                  className="text-sm text-gray-700 underline"
                >
                  Return to home
                </Link>
              </div>
            </div>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
