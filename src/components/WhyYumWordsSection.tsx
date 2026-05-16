export default function WhyYumWordsSection() {
  return (
    <section className="px-6 py-14 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Why YumWords exists
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Food is one of the most natural ways people connect with
            language, culture, and place — but many food experiences
            still feel difficult to navigate with confidence.
          </p>
        </div>

        {/* Content blocks */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Built around real experiences
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              YumWords was created from everyday situations:
              travelling, ordering unfamiliar food, learning through
              cooking, and trying to better understand regional food
              traditions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The apps are designed to make those experiences feel
              more approachable, practical, and enjoyable.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Focused rather than overwhelming
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              YumWords does not try to catalogue everything.
              The goal is careful selection, clarity, and helping
              people make better choices with less friction.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Each app focuses on a specific area —
              travel, French cooking, or cheese —
              while sharing the same broader philosophy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}