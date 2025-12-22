export const metadata = {
  title: "YumWords – Privacy Policy",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">

        {/* Under construction notice */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
          <strong>YumWords is currently under development.</strong>
          <br />
          This site is temporarily serving our Privacy Policy for app store compliance.
        </div>

        {/* Privacy Policy */}
        <h1 className="mb-4 text-3xl font-semibold">
          YumWords – Privacy Policy
        </h1>

        <p className="mb-4">
          <strong>Effective Date:</strong> November 2025
        </p>

        <p className="mb-6">
          YumWords is a completely offline learning app. It does not collect,
          store, transmit, or share any personal data.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          1. No Data Collected
        </h2>
        <p>
          YumWords does not collect any personal information, usage data,
          analytics data, or device identifiers.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          2. No Internet Connection
        </h2>
        <p>
          The app operates fully offline once installed. It sends no data to
          external servers and does not communicate over the internet.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          3. No Third-Party Services
        </h2>
        <p>
          The app does not use analytics, advertising SDKs, crash reporting,
          tracking tools, or third-party data processors.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          4. No User Accounts
        </h2>
        <p>
          YumWords does not require registration, login, or any user-provided
          information.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          5. Contact
        </h2>
        <p>
          For any inquiries about this policy, you may contact the developer at:
          <br />
          <strong>support@yumwords.com</strong>
        </p>

      </div>
    </main>
  );
}
