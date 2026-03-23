"use client";

import React from "react";

type Variant = "lime" | "cheese";

export default function TryYumWords({ variant = "lime" }: { variant?: Variant }) {
  const content =
    variant === "cheese"
      ? {
          title: "Discover great cheese with confidence",
          body: "Learn the essentials. Choose better. Enjoy more.",
          button: "Coming soon",
          href: "#",
          bg: "bg-black",
          hover: "hover:bg-gray-800",
        }
      : {
          title: "Try YumWords",
          body: "Available now on the App Store. Android coming soon.",
          button: "Download on the App Store",
          href: "https://apps.apple.com/gb/app/yumwords-thailand/id6754214751",
          bg: "bg-green-700",
          hover: "hover:bg-green-600",
        };

  return (
    <section
      id="download"
      className="bg-white px-6 py-12 md:py-20 text-center text-gray-900"
    >
      <div className="max-w-2xl mx-auto">

        {/* CTA heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {content.title}
        </h2>

        {/* Section lead */}
        <p className="text-lg text-gray-800 mb-8">
          {content.body}
        </p>

        {/* Primary action */}
        <div className="flex justify-center">
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full px-10 py-4 text-white font-medium transition ${content.bg} ${content.hover}`}
          >
            {content.button}
          </a>
        </div>
      </div>
    </section>
  );
}