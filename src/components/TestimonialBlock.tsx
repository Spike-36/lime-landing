// components/TestimonialBlock.tsx

import React from "react";

const testimonials = [
  {
    quote:
      "Born in the 1960s, I’ve experienced that familiar fear and anxiety while walking home alone—especially after dark.",
    name: "Noriko - Japan",
    italic: false,
  },
  {
    quote:
      "Born in the 1960s, I’ve experienced that familiar fear and anxiety while walking home alone—especially after dark.",
    name: "John - UK",
    italic: true,
  },
  {
    quote:
      "Born in the 1960s, I’ve experienced that familiar fear and anxiety while walking home alone—especially after dark.",
    name: "Chou - Thailand",
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
