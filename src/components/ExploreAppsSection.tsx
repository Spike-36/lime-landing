export default function ExploreAppsSection() {
  const apps = [
    {
      title: "YumWords Asia",
      description:
        "Discover local food and drink more confidently while travelling across Asia.",
      href: "/asia",
      button: "Explore Asia",
      image: "/demo/images/pad_thai.jpg",
    },
    {
      title: "YumWords France",
      description:
        "Learn French food, recipes, and language through practical everyday cooking.",
      href: "/france",
      button: "Explore France",
      image: "/demo/images/coq_au_vin.jpg",
    },
    {
      title: "YumWords Cheese",
      description:
        "Understand French and European cheese more clearly and choose with confidence.",
      href: "/cheese",
      button: "Explore Cheese",
      image: "/demo/images/brie.jpg",
    },
  ];

  return (
    <section className="px-6 py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Explore the YumWords apps
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Each YumWords app focuses on a different aspect of food,
            language, and cultural discovery.
          </p>
        </div>

        {/* App cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {apps.map((app) => (
            <div
              key={app.title}
              className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm"
            >

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {app.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {app.description}
                </p>

                <a
                  href={app.href}
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-sm font-medium transition"
                >
                  {app.button}
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}