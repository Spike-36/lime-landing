"use client";

import React from "react";

type Variant = "yumwords" | "asia" | "france" | "cheese";

interface HeroProps {
  variant?: Variant;
}

const Hero: React.FC<HeroProps> = ({ variant = "yumwords" }) => {
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
      : variant === "france"
      ? {
          title: (
            <>
              Learn French through
              <br />
              cooking and food
            </>
          ),
          subtitle: (
            <>
              Discover authentic French dishes,
              <br />
              recipes, and food language
            </>
          ),
          cta: "Explore France",
        }
      : variant === "asia"
      ? {
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
          cta: "Explore Asia",
        }
      : {
          title: (
            <>
              Travel well, eat better
            </>
          ),
          subtitle: (
            <>
              Simple food and language apps for curious people
            </>
          ),
          tagline: (
            <>
              Helping travellers eat beyond the tourist menu.
            </>
          ),
          cta: "Try YumWords",
        };

  // 👉 Variant-driven button styling
  const buttonStyles =
    variant === "cheese"
      ? "bg-cheese-black hover:bg-cheese-amber text-white"
      : variant === "france"
      ? "bg-blue-700 hover:bg-blue-600 text-white"
      : variant === "asia"
      ? "bg-green-700 hover:bg-green-600 text-white"
      : "bg-gray-900 hover:bg-gray-800 text-white";

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* H1 — Orientation */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {content.title}
        </h1>

        {/* 👉 Subtitle */}
        <p className="text-xl md:text-2xl font-medium text-gray-900 mb-4 leading-relaxed">
          {content.subtitle}
        </p>

        {/* 👉 Tagline */}
        {"tagline" in content && content.tagline && (
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {content.tagline}
          </p>
        )}

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