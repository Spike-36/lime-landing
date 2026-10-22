import Link from "next/link";

export const metadata = {
  title: "YumWords – Privacy Policy",
  description: "How YumWords apps and the yumwords.com website handle your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <Link
          href="/thailand"
          className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-900"
        >
          ← Back to YumWords Thailand
        </Link>

        <h1 className="mb-4 text-3xl font-semibold">
          YumWords – Privacy Policy
        </h1>

        <p className="mb-6 text-sm">
          <strong>Effective Date:</strong> 22 October 2026
        </p>

        <p className="mb-6">
          This policy explains how YumWords apps and the yumwords.com website
          handle your information. The apps and the website work differently,
          so each is covered in its own section. The app section currently
          applies to YumWords Thailand.
        </p>

        <h2 className="mt-10 mb-2 text-2xl font-semibold">
          1. The YumWords App
        </h2>

        <h3 className="mt-6 mb-2 text-lg font-semibold">Offline content</h3>
        <p>
          All app content, including food cards, recipes, images and audio, is
          built into the app and works without an internet connection.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">No accounts</h3>
        <p>
          You don’t need to register, sign in or provide any personal details
          to use the app.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">
          Information stored on your device
        </h3>
        <p>
          Your favourites and app data are stored only on your device. We
          do not receive them. They are removed when you delete the app, but
          may be included in your device’s own backups.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">Voice search</h3>
        <p>
          Voice search is optional. When you use it, the app uses your device’s
          built-in speech-recognition service to turn what you say into search
          text:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>On iPhone and iPad, this is Apple’s speech recognition.</li>
          <li>
            On Android, this is your device’s speech service, usually provided
            by Google.
          </li>
        </ul>
        <p className="mt-2">
          Depending on your device, voice search may need an internet
          connection, and your speech may be sent to Apple or Google for
          processing under their own privacy policies. YumWords does not
          receive or store your recordings on its servers. Recognised text is
          used locally in the app to run your search and is not sent to
          YumWords servers.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">Permissions</h3>
        <p>
          Voice search needs permission to use your device’s microphone, which
          is used only while voice search is listening, after you tap the
          microphone button.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <strong>Android:</strong> microphone permission.
          </li>
          <li>
            <strong>iPhone and iPad:</strong> microphone and
            speech-recognition permissions.
          </li>
        </ul>
        <p className="mt-2">
          Your device asks the first time you use voice search. You can decline
          or later revoke these permissions in your device settings without
          affecting the app’s other features.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">
          No advertising, analytics or tracking
        </h3>
        <p>
          YumWords does not include advertising, analytics, crash-reporting or
          tracking software. The app does not collect usage data or device
          identifiers, and does not track you across apps or websites.
        </p>

        <h2 className="mt-10 mb-2 text-2xl font-semibold">
          2. The yumwords.com Website
        </h2>

        <h3 className="mt-6 mb-2 text-lg font-semibold">Contact form</h3>
        <p>
          If you use the contact form, the name, email address and message you
          enter are sent to us through Formspree, a form-handling service, and
          we use them only to reply to you. Formspree handles this information
          under its own privacy policy.
        </p>

        <h3 id="testing" className="mt-6 mb-2 scroll-mt-6 text-lg font-semibold">
          Testing programme registration
        </h3>
        <p>
          If you register to test YumWords Thailand at yumwords.com/test, we
          collect your name, email address, phone type (iPhone or Android),
          how you prefer to be contacted and, if you choose WhatsApp, your
          WhatsApp number. We also record when you registered and that you
          agreed to be contacted about testing.
        </p>
        <p className="mt-3">
          We use these details only to run the testing programme: to give you
          access to the test version of the app, to send you installation
          instructions, to contact you about testing and your feedback, and to
          record any lifetime free access granted to testers. To give you
          access, we add your email address to Apple TestFlight or Google Play
          testing, which Apple and Google handle under their own privacy
          policies. Your details are stored in our editorial database, hosted
          by Supabase. We do not use them for marketing, and we share them
          only as described here.
        </p>
        <p className="mt-3">
          We keep these details for 12 months after the testing programme ends
          and then delete them, unless the law requires us to keep them longer.
          If you have been granted lifetime free access, we may keep the record
          of that, with your name and email address, for as long as it
          applies. You can ask us to see, correct or delete your details at any
          time by emailing support@yumwords.com.
        </p>
        <p className="mt-3">
          To protect the form from abuse, we keep a scrambled (hashed) form of
          your IP address and email address for two days.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">Hosting</h3>
        <p>
          The website is hosted by Vercel, which processes standard technical
          information, such as IP addresses and browser details, to deliver
          pages and keep the service secure.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">Fonts</h3>
        <p>
          Most of the website’s fonts are served from our own site. Pages also
          load an icon-font stylesheet from Google Fonts, so your browser
          connects to Google’s servers, which receive your IP address.
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold">
          No analytics or tracking
        </h3>
        <p>
          The website does not use analytics, advertising or tracking tools,
          and does not use cookies for these purposes.
        </p>

        <h2 className="mt-10 mb-2 text-2xl font-semibold">
          3. Changes to This Policy
        </h2>
        <p>
          If a YumWords app or the website changes how it handles information,
          we will update this policy and its effective date.
        </p>

        <h2 className="mt-10 mb-2 text-2xl font-semibold">4. Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <strong>support@yumwords.com</strong>.
        </p>
      </div>
    </main>
  );
}
