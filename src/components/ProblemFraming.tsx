export default function ProblemFraming() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed space-y-5">
        {/* Section lead — quiet anchor */}
        <p className="font-medium text-gray-900">
          When you’re travelling, the hardest part isn’t finding food.
          It’s choosing what to eat when many things are unfamiliar.
        </p>

        {/* Body text */}
        <p>
          YumWords doesn’t try to show you everything.
          It focuses on a small number of local food and drink that are genuinely worth choosing.
        </p>

        {/* Emphasis — hinge line */}
        <p className="font-semibold text-gray-900">
          Less browsing. Less guessing. Better meals.
        </p>
      </div>
    </section>
  );
}
