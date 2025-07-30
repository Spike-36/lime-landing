// components/FeatureIcons.tsx

type IconFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: IconFeature[] = [
  {
    title: "Female Voices",
    description: "We can integrate Skån into virtually any design of backpack.",
    icon: <span className="text-yellow-400 text-5xl">👩‍🦰</span>, // replace with actual SVG/icon
  },
  {
    title: "Features",
    description: "We can integrate Skån into virtually any design of backpack.",
    icon: <span className="text-green-400 text-5xl">🎙️</span>,
  },
  {
    title: "Features",
    description: "We can integrate Skån into virtually any design of backpack.",
    icon: <span className="text-orange-400 text-5xl">🔊</span>,
  },
  {
    title: "Slow Mode",
    description: "We can integrate Skån into virtually any design of backpack.",
    icon: <span className="text-lime-400 text-5xl">🐢</span>,
  },
  {
    title: "Audio",
    description: "We can integrate Skån into virtually any design of backpack.",
    icon: <span className="text-yellow-300 text-5xl">🔁</span>,
  },
];

export default function FeatureIcons() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Selected Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-black text-white rounded-3xl p-6 flex flex-col items-center justify-center space-y-4 shadow-md"
            >
              <div>{feature.icon}</div>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
