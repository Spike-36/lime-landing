export default function OutcomeSection() {
  return (
    <section className="bg-neutral-100 px-6 py-8 md:py-14">
      <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        {/* Section lead — quiet anchor */}
        <p className="font-medium text-gray-900 mb-2 md:mb-3">
          You only have so many chances to eat and drink well.
        </p>

        {/* Emphasis — hinge sentence */}
        <p className="font-semibold text-gray-900 mb-5 md:mb-6">
          Guessing doesn’t always pay off.
        </p>

        {/* Body text */}
        <p className="mb-6 md:mb-8">
          YumWords helps you choose food and drink you’re likely to enjoy,
          so you don’t waste opportunities.
        </p>

        {/* Outcome — payoff */}
        <p className="font-semibold text-gray-900">
          The result is simple: better experiences, fewer regrets.
        </p>
      </div>
    </section>
  );
}
