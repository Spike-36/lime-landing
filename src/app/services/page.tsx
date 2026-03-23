import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-yellow-400 mb-4">What I Offer</h1>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Startup MVPs (React, Sanity, full-stack)</li>
        <li>Legal tech workflows, doc builders, portals</li>
        <li>Rapid prototyping & UI logic design</li>
      </ul>
      <div className="mt-8 text-sm text-gray-400">
        For implementation details,{' '}
        <Link href="/technical" className="underline hover:text-yellow-300">
          view the technical overview →
        </Link>
      </div>
    </div>
  );
}
