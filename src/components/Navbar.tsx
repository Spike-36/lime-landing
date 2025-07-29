// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        Pete Milligan
      </Link>
      <div className="space-x-4">
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/articles" className="hover:underline font-medium text-blue-600">Articles</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
