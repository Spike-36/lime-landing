import Link from 'next/link';

export default function TechnicalPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Technical Overview</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">Technology Stack</h2>
        <ul className="list-disc list-inside text-base text-gray-300">
          <li>Frontend: Next.js 14 with App Router, Tailwind CSS, TypeScript</li>
          <li>Backend: Node.js (Express or custom API routes)</li>
          <li>CMS: Sanity (hosted)</li>
          <li>Hosting: Vercel (with GitHub integration)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">Security & Compliance</h2>
        <p className="text-gray-300 text-base">
          Data is encrypted in transit and at rest. Deployment supports UK/EU data residency. No sensitive data is stored without explicit client consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">Export & Integration</h2>
        <ul className="list-disc list-inside text-base text-gray-300">
          <li>Supported export formats: PDF, Microsoft Word (.docx)</li>
          <li>Integration-ready API endpoints for timeline data</li>
          <li>Coming soon: OAuth login for legal team accounts</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">Development Roadmap</h2>
        <p className="text-gray-300 text-base">
          Focused on usability, security, and export flexibility. Planned features include versioned timelines, multi-user access, and advanced date filtering.
        </p>
      </section>

      <div className="text-sm text-gray-400">
        <Link href="/services" className="underline hover:text-yellow-400">
          View service overview →
        </Link>
      </div>
    </div>
  );
}
