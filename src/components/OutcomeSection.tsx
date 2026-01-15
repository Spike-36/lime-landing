export default function OutcomeSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed space-y-6">
        {/* Section lead — quiet anchor */}
        <p className="font-medium text-gray-900">
          When you’re travelling, you only have so many chances to eat and drink well.
        </p>

        {/* Emphasis — hinge sentence */}
        <p className="font-semibold text-gray-900">
          Guessing doesn’t always pay off.
        </p>

        {/* Body text */}
        <p>
          YumWords helps you choose food and drink you’re likely to enjoy,
          so you don’t waste opportunities.
        </p>

        {/* Emphasis — outcome */}
        <p className="font-semibold text-gray-900">
          The result is simple: better experiences, fewer regrets.
        </p>
      </div>
    </section>
  );
}
