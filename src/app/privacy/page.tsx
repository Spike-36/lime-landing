import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy – Agile Advocacy</h1>

      <p className="mb-6 text-sm text-gray-500">Last updated: 10 July 2025</p>

      <section className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl mb-2">What we collect</h2>
          <p>When you download an article or fill out a form on our website, we may collect:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your organisation name (optional)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Why we collect it</h2>
          <p>We use this information to:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Send you the article or resource you requested</li>
            <li>Occasionally follow up with relevant updates, insights, or legal tech services we offer</li>
            <li>Improve the relevance of the content we share</li>
          </ul>
          <p className="mt-2">
            We do <strong>not</strong> sell, rent, or share your information with third parties.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Your rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Access the personal data we hold about you</li>
            <li>Ask us to correct or delete your data</li>
            <li>Withdraw your consent at any time</li>
          </ul>
          <p className="mt-2">
            To do any of the above, just email us at <strong>petermilligan@agileadvocacy.co.uk</strong>.
            Every email we send will include an unsubscribe link.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">How we store your data</h2>
          <p>
            We store your data securely using trusted tools such as Formspree and Airtable, which comply with UK/EU data protection standards.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Who we are</h2>
          <p>Agile Advocacy is a UK-based legal tech consultancy.</p>
          <p>Contact us at: <strong>petermilligan@agileadvocacy.co.uk</strong></p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Updates to this policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be posted here.</p>
        </div>
      </section>

      <div className="mt-12">
        <Link href="/" className="text-sm text-olive hover:underline">
          ← Back to homepage
        </Link>
      </div>
    </main>
  )
}
