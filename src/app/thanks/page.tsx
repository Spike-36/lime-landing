export default function ThanksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-offwhite px-4 text-center text-charcoal">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        All set — hope you find this helpful
      </h1>

      {/* <p className="text-base md:text-lg mb-6 max-w-md leading-relaxed">
        Your article is ready to download below.
      </p> */}

      <a
        href="/pdfs/legal-tech-guide.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-olive text-white px-6 py-3 rounded hover:bg-[#5e6f5e] transition"
      >
        Download “Why Legal Tech Fails” (PDF)
      </a>

      <p className="text-sm text-charcoal mt-4">
        If the download doesn’t start,{" "}
        <a href="/pdfs/legal-tech-guide.pdf" className="underline hover:text-olive">
          click here
        </a>{" "}
        to open it manually.
      </p>

      <p className="text-sm text-charcoal mt-6">
        You can unsubscribe at any time or contact us at{" "}
        <strong>petermilligan@agileadvocacy.co.uk</strong>.
      </p>

      <p className="text-sm text-charcoal mt-2">
        Read our{" "}
        <a href="/privacy" className="underline hover:text-olive">
          Privacy Policy
        </a>{" "}
        to learn how we handle your data.
      </p>
    </main>
  );
}
