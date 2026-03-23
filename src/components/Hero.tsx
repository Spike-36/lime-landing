"use client";

import React from "react";

type Variant = "lime" | "cheese";

interface HeroProps {
  variant?: Variant;
}

const Hero: React.FC<HeroProps> = ({ variant = "lime" }) => {
  const content =
    variant === "cheese"
      ? {
          title: (
            <>
              Choose better cheese,
              <br />
              every time
            </>
          ),
          subtitle: (
            <>
              Understand what cheese you’re buying,
              <br />
              and enjoy it more
            </>
          ),
          cta: "Explore Cheese",
        }
      : {
          title: (
            <>
              Great food choices,
              <br />
              wherever you travel
            </>
          ),
          subtitle: (
            <>
              Designed to help you choose local food you’ll love,
              <br />
              before you order
            </>
          ),
          cta: "Try YumWords",
        };

  // 👉 Variant-driven button styling
  const buttonStyles =
    variant === "cheese"
      ? "bg-cheese-black hover:bg-cheese-amber text-white"
      : "bg-green-700 hover:bg-green-600 text-white";

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* H1 — Orientation */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {content.title}
        </h1>

        {/* Section lead — quiet anchor */}
        <p className="text-lg font-medium text-gray-900 mb-8">
          {content.subtitle}
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={() => {
            document
              .getElementById("download")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition ${buttonStyles}`}
        >
          {content.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;