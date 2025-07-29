import Image from "next/image"
import Footer from "@/components/Footer"

export default function LimeLandingPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen px-4 py-12 flex flex-col justify-between">
      {/* Header */}
      <div className="max-w-6xl mb-8 px-4">
        <Image
          src="/images/lime-logo.png"
          alt="Lime logo"
          width={70}
          height={20}
          className="h-auto w-auto"
          priority
        />
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-lime-700 mb-6 leading-tight">
          Speak Food. Connect Deeper.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Lime helps travellers master the language of food in the countries they visit — fast, practical, and immersive.
        </p>

        <div className="text-left text-base leading-relaxed space-y-4">
          <p>
            Whether you are ordering sushi in Tokyo or asking for vegetarian options in rural France, Lime gives you the words — and the confidence — to do it right.
          </p>
          <p>
            No grammar drills. No generic phrasebooks. Just real, useful words in context — spoken clearly, beautifully designed, and tailored for food lovers on the move.
          </p>
        </div>

        {/* Early Access CTA */}
        <div className="bg-lime-50 border border-lime-200 rounded-xl shadow-md p-6 mt-12 text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-lime-700 text-center">
            Get Early Access
          </h2>
          <p className="text-base text-gray-800 text-center mb-4">
            Be the first to try Lime — and help shape the app as we build it.
          </p>
          <form
            action="https://formspree.io/f/mjkorpjr"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="px-4 py-3 w-full sm:w-80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <button
              type="submit"
              className="bg-lime-600 text-white px-6 py-3 rounded-md hover:bg-lime-700 transition"
            >
              Join Waitlist
            </button>
          </form>
        </div>

        <p className="mt-12 text-base text-gray-700 text-center">
          Questions or feedback?{" "}
          <a
            href="mailto:hello@wordbento.com"
            className="text-lime-700 underline hover:text-lime-800"
          >
            Get in touch.
          </a>
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
