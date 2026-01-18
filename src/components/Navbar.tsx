"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="relative flex items-center justify-between px-6 py-3 md:py-4 border-b border-gray-200 bg-white">
      {/* Brand */}
      <Link href="/" className="text-xl font-semibold">
        YumWords
      </Link>

      {/* Hamburger (utility menu only) */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
      >
        <span className="block w-6 h-0.5 bg-gray-900" />
        <span className="block w-6 h-0.5 bg-gray-900" />
        <span className="block w-6 h-0.5 bg-gray-900" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-6 top-full mt-2 w-44 rounded-md border border-gray-200 bg-white shadow-md z-50"
        >
          <ul className="flex flex-col py-1 text-sm">
            <li>
              <Link
                href="/privacy"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
