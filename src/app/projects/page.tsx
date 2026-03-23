'use client'

export default function ProjectsPage() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Selected Projects</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white">Legal Tech Builder</h2>
        <p className="text-gray-300 mb-2">
          A document automation and client portal system for a boutique law firm.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          <li>Dynamic templates with conditional logic</li>
          <li>Client dashboard with case tracking</li>
          <li>Deployed via Vercel, backed by Sanity CMS</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white">Litigation Timeline App</h2>
        <p className="text-gray-300 mb-2">
          A streamlined tool to build, view, and export legal event timelines.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          <li>Built with Next.js, Tailwind, and TypeScript</li>
          <li>Exports to PDF and Word for court-ready documents</li>
          <li>Designed for solo practitioners and litigation teams</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white">Language Learning App (Lime)</h2>
        <p className="text-gray-300 mb-2">
          A mobile-first flashcard and voice practice app built with React Native.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          <li>Native audio playback, SRS engine, and speech recognition</li>
          <li>Clean UI using custom components</li>
          <li>Currently supports Thai and Japanese learning modes</li>
        </ul>
      </section>
    </div>
  )
}
