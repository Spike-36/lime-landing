import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* H1 — Orientation */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          Great food choices,<br />
          wherever you travel
        </h1>

        {/* Section lead — quiet anchor */}
        <p className="text-lg font-medium text-gray-900 mb-10">
          Designed to help you choose local food you’ll love,<br />
          before you order
        </p>

        {/* CTA — visual placeholder (no accent colour yet) */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-gray-900 px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-100 transition"
        >
          Try YumWords
        </button>
      </div>
    </section>
  );
};

export default Hero;
