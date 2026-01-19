"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* H1 — Orientation */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Great food choices,
          <br />
          wherever you travel
        </h1>

        {/* Section lead — quiet anchor */}
        <p className="text-lg font-medium text-gray-900 mb-8">
          Designed to help you choose local food you’ll love,
          <br />
          before you order
        </p>

        {/* CTA — scrolls to main CTA */}
        <button
          type="button"
          onClick={() => {
            document
              .getElementById("download")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-4 text-base font-semibold text-white hover:bg-green-600 transition"
        >
          Try YumWords
        </button>
      </div>
    </section>
  );
};

export default Hero;
