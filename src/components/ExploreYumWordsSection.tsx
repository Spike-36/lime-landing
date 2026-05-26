export default function ExploreYumWordsSection() {
  const links = [
    {
      title: "YumWords Asia",
      description:
        "Food discovery and practical language support for travel across Asia.",
      href: "/asia",
      button: "App Store",
    },
    {
      title: "YumWords France",
      description:
        "French food, recipes, and language learning through everyday cooking.",
      href: "/france",
      button: "App Store",
    },
    {
      title: "YumWords Cheese",
      description:
        "A practical guide to understanding and choosing European cheese.",
      href: "/cheese",
      button: "App Store",
    },
  ];

  return (
    <section
      id="explore"
      className="px-6 py-14 md:py-20 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          Explore the YumWords apps
        </h2>

        {/* Intro */}
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-14">
          Each YumWords experience focuses on a different aspect of food,
          language, and cultural discovery — while sharing the same
          practical philosophy.
        </p>

        {/* App links */}
        <div className="grid gap-8 md:grid-cols-3">

          {links.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                {item.description}
              </p>

              <a
                href={item.href}
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-200 transition px-6 py-3 text-sm font-medium"
              >
                {item.button}
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}