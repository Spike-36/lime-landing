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
    imageSrc: "/images/apple.png",
    alt: "Phone showing ingredient screen",
    description:
      "Tap to learn ingredient names in the local language — spoken clearly and visually memorable.",
  },
  {
    title: "Dishes",
    imageSrc: "/images/apple.png",
    alt: "Phone showing local dish",
    description:
      "Browse local dishes and hear how to pronounce them correctly before you order.",
  },
  {
    title: "Useful Phrases",
    imageSrc: "/images/apple.png",
    alt: "Phone with useful phrases screen",
    description:
      "Speak up with phrases tailored for food, ordering, and polite dining interaction.",
  },
]

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-6 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="w-full md:flex-1 px-2 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-8">{feature.title}</h3>
            <img
              src={feature.imageSrc}
              alt={feature.alt}
              className="mb-6 w-[173px] h-auto"
            />
            <div className="max-w-[220px]">
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
