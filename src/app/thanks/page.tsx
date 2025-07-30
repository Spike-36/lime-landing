export default function ThanksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-offwhite px-4 text-center text-charcoal">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        You are on the list — welcome to the WordBento beta!
      </h1>

      <p className="text-base md:text-lg mb-6 max-w-md leading-relaxed">
        We will be in touch soon with early access and updates.
        Thanks for helping us shape WordBento — we’re building it for you.
      </p>

      <p className="text-sm text-charcoal">
        Questions? Feedback? Reach us any time at{" "}
        <a
          href="mailto:hello@kumamoto.dev"
          className="font-semibold underline hover:text-olive"
        >
          hello@kumamoto.dev
        </a>.
      </p>

      <p className="text-sm text-charcoal mt-4">
        You can unsubscribe at any time. Read our{" "}
        <a href="/privacy" className="underline hover:text-olive">
          Privacy Policy
        </a>{" "}
        to learn how we handle your data.
      </p>
    </main>
  )
}
