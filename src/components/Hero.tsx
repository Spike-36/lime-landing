import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
        Why Legal Tech Fails — and How to Avoid It
      </h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        7 mistakes smart lawyers keep making — and how to fix them before they waste more time and money.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#signup"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Get the Free Guide
        </a>
        <Link
          href="/articles/why-legal-tech-fails"
          className="inline-block bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-100"
        >
          Read the Article
        </Link>
      </div>
    </section>
  );
}
