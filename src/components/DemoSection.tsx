import AppDemo from "@/components/app-demo/AppDemo";

type Variant = "lime" | "cheese";

export default function DemoSection({ variant = "lime" }: { variant?: Variant }) {
  const content =
    variant === "cheese"
      ? {
          lead: "See how you choose better cheese",
          body: "Explore a curated range of cheeses, and tap any item to understand flavour, texture, and when to choose it.",
        }
      : {
          lead: "See how YumWords helps you choose",
          body: "Browse a focused selection of local food and drink, and tap any item for quick clarity.",
        };

  return (
    <section className="px-6 pt-8 pb-14 md:pt-12 md:pb-16">
      {/* Text intro */}
      <div className="max-w-3xl mx-auto mb-10 md:mb-14">
        
        <p className="text-lg font-medium text-gray-900 mb-3">
          {content.lead}
        </p>

        <p className="text-lg text-gray-800 leading-relaxed">
          {content.body}
        </p>
      </div>

      {/* ✅ Pass variant through */}
      <AppDemo variant={variant} />
    </section>
  );
}