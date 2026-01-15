import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
          Great food choices,<br />
          wherever you travel
        </h1>

        <p className="text-lg text-gray-800 mb-10">
          Designed to help you choose local food you’ll love<br />
          before you order
        </p>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
        >
          Try YumWords
        </button>
      </div>
    </section>
  );
};

export default Hero;
