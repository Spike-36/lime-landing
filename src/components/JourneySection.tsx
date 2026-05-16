export default function JourneySection() {
  return (
    <section className="px-6 py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section intro */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            A growing long-term project
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            YumWords began as a practical idea:
            helping people feel more confident exploring unfamiliar food,
            language, and local culture through everyday experiences.
          </p>
        </div>

        {/* Timeline / journey blocks */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Step 1 */}
          <div>
            <div className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
              STEP 1
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Travel and food discovery
            </h3>

            <p className="text-gray-700 leading-relaxed">
              The first YumWords experiences focused on helping travellers
              understand local dishes more clearly and make better food choices
              with less uncertainty.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
              STEP 2
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cooking and language learning
            </h3>

            <p className="text-gray-700 leading-relaxed">
              The project expanded into French food and cooking,
              combining recipes, ingredients, and practical language learning
              through real-world food experiences.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
              STEP 3
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Regional food culture
            </h3>

            <p className="text-gray-700 leading-relaxed">
              YumWords continues to grow through focused food experiences,
              including regional traditions such as European cheese,
              with future areas planned over time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}