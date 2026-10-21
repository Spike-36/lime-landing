import Link from "next/link";

export const metadata = {
  title: "Page not found · YumWords",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-3xl font-semibold">Page not found</h1>
        <p className="mb-6">This page doesn’t exist or is no longer available.</p>
        <Link
          href="/thailand"
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          ← Back to YumWords Thailand
        </Link>
      </div>
    </main>
  );
}
