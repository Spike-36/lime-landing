"use client";

import React from "react";

export default function TryYumWords() {
  return (
    <section
      id="download"
      className="bg-white px-6 py-12 md:py-20 text-center text-gray-900"
    >
      <div className="max-w-2xl mx-auto">
        {/* CTA heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Try YumWords
        </h2>

        {/* Section lead */}
        <p className="text-lg text-gray-800 mb-8">
          Available now on the App Store. Android coming soon.
        </p>

        {/* Primary action */}
        <div className="flex justify-center">
          <a
            href="https://apps.apple.com/gb/app/yumwords-thailand/id6754214751"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-green-700 px-10 py-4 text-white font-medium hover:bg-green-600 transition"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
}
