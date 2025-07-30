// src/components/FeatureGrid.tsx

type Feature = {
  title: string
  imageSrc: string
  alt: string
  description: string
}

const features: Feature[] = [
  {
    title: "Ingredients",
    imageSrc: "/images/mango-phone-mockup.png",
    alt: "Phone showing mango ingredient",
    description:
      "Tap to learn ingredient names in the local language — spoken clearly and visually memorable.",
  },
  {
    title: "Dishes",
    imageSrc: "/images/mango-phone-mockup.png",
    alt: "Phone showing local dish",
    description:
      "Browse local dishes and hear how to pronounce them correctly before you order.",
  },
  {
    title: "Useful Phrases",
    imageSrc: "/images/mango-phone-mockup.png",
    alt: "Phone with useful phrases screen",
    description:
      "Speak up with phrases tailored for food, ordering, and polite dining interaction.",
  },
]

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <img
              src={feature.imageSrc}
              alt={feature.alt}
              className="mx-auto mb-6 w-48 h-auto"
            />
            <p className="text-gray-700 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
