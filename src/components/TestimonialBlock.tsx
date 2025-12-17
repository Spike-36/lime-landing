// components/TestimonialBlock.tsx

import React from "react";

const testimonials = [
  {
    quote:
      "Exactly what I needed when eating out — simple, fast, and no distractions.",
    name: "Yoko - Japan",
    italic: false,
  },
  {
    quote:
      "I like that it works offline and doesn’t try to do too much",
    name: "John - UK",
    italic: true,
  },
  {
    quote:
      "Clean design, useful words, and no clutter. It does one job well.",
    italic: false,
  },
];

export default function TestimonialBlock() {
  return (
    <section className="bg-yellow-300 py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        {testimonials.map(({ quote, name, italic }, i) => (
          <div key={i} className="text-lg text-black">
            <p className={italic ? "italic mb-2" : "mb-2"}>{quote}</p>
            <p className="text-gray-700 italic text-right">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
