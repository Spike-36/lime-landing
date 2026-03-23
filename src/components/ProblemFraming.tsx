export default function ProblemFraming() {
  return (
    <section className="px-6 py-8 md:py-14">
      <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        {/* Section lead — quiet anchor */}
        <p className="font-medium text-gray-900 mb-3 md:mb-4">
          When you’re travelling, the hardest part isn’t finding food.
          It’s choosing what to eat when many things are unfamiliar.
        </p>

        {/* Body text */}
        <p className="mb-6 md:mb-8">
          YumWords doesn’t try to show you everything. 
          It focuses on what matters — local food and drink that are genuinely worth choosing.
        </p>

        {/* Emphasis — hinge line */}
        <p className="font-semibold text-gray-900">
          Less browsing. Less guessing. Better meals.
        </p>
      </div>
    </section>
  );
}
