import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 text-sm px-6 py-8 mt-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} YumWords — All rights reserved</p>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link href="/services"><span className="hover:text-black">Services</span></Link>
          <Link href="/projects"><span className="hover:text-black">Projects</span></Link>
          <Link href="/technical"><span className="hover:text-black">Technical</span></Link>
          <Link href="/contact"><span className="hover:text-black">Contact</span></Link>
          <Link href="/privacy"><span className="hover:text-black">Privacy</span></Link>
          <a
            href="https://github.com/Spike-36"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-link-here/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
