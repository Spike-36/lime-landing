import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-500 text-xs px-6 py-8 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} YumWords. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-gray-800">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
