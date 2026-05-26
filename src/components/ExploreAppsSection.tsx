import AppDemo from "./app-demo/AppDemo";

export default function ExploreAppsSection() {
  const apps = [
    {
      title: "YumWords Asia",
      description:
        "Discover local food and drink more confidently while travelling across Asia.",
      href: "/asia",
      button: "Explore Asia",
      variant: "asia" as const,
    },
    {
      title: "YumWords France",
      description:
        "Learn French food, recipes, and language through practical everyday cooking.",
      href: "/france",
      button: "Explore France",
      variant: "france" as const,
    },
    {
      title: "YumWords Cheese",
      description:
        "Understand French and European cheese more clearly and choose with confidence.",
      href: "/cheese",
      button: "Explore Cheese",
      variant: "cheese" as const,
    },
  ];

  return (
  <section className="px-6 pt-4 pb-14 md:pt-6 md:pb-20 bg-white">
      <div className="max-w-4xl mx-auto">

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
        <div className="grid gap-12 lg:grid-cols-3">

          {apps.map((app) => (
            <div
              key={app.title}
              className="flex flex-col items-center"
            >

              {/* Interactive demo */}
              <div className="mb-[-280px] scale-[0.56] origin-top">
                <AppDemo variant={app.variant} />
              </div>

              {/* Content */}
              <div className="w-full max-w-sm text-center">

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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