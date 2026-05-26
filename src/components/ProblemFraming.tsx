type Variant = "yumwords" | "asia" | "france" | "cheese";

export default function ProblemFraming({
  variant = "yumwords",
}: {
  variant?: Variant;
}) {
  const content =
    variant === "cheese"
      ? {
          lead:
            "Most people know they like cheese. Far fewer feel confident choosing it.",
          body:
            "French cheese can feel unfamiliar, inconsistent, and difficult to understand — especially outside the small handful of cheeses people already recognise.",
          emphasis:
            "Less confusion. Better choices. More enjoyment.",
        }
      : variant === "france"
      ? {
          lead:
            "French food becomes far more enjoyable when you understand what you’re eating.",
          body:
            "Recipes, ingredients, menus, and food culture can feel intimidating at first. YumWords France helps make French food and language more approachable through practical everyday cooking.",
          emphasis:
            "Cook more confidently. Learn more naturally.",
        }
      : variant === "asia"
      ? {
          lead:
            "When you’re travelling, the hardest part isn’t finding food. It’s choosing what to eat when many things are unfamiliar.",
          body:
            "YumWords doesn’t try to show you everything. It focuses on what matters — local food and drink that are genuinely worth choosing.",
          emphasis:
            "Less browsing. Less guessing. Better meals.",
        }
      : {
          lead:
            "Eating delicious food is one of the fastest and most powerful ways to connect with culture, language and place – but it can also be intimidating and overwhelming.",
          body:
            "YumWords is a growing family of apps specifically designed to encourage travelers to follow their curiosity (and their appetites), and explore new cultures with confidence and ease.",
          // emphasis:
          //   "Practical experiences. Real food. Genuine cultural connection.",
        };

  return (
    <section className="px-6 py-6 md:py-10">
      <div className="max-w-4xl mx-auto text-lg text-gray-800 leading-relaxed">

        {/* Section lead — quiet anchor */}
        <p className="font-medium text-gray-900 mb-3 md:mb-4">
          {content.lead}
        </p>

        {/* Body text */}
        <p className="mb-6 md:mb-8">
          {content.body}
        </p>

        {/* Emphasis — hinge line */}
        <p className="font-semibold text-gray-900">
          {content.emphasis}
        </p>
      </div>
    </section>
  );
}