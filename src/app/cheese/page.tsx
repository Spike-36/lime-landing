import Hero from "@/components/Hero";
import ProblemFraming from "@/components/ProblemFraming";
import DemoSection from "@/components/DemoSection";
import OutcomeSection from "@/components/OutcomeSection";
import FeatureRestraint from "@/components/FeatureRestraint";
import HumanValidation from "@/components/HumanValidation";
import Footer from "@/components/Footer";
import TryYumWords from "@/components/TryYumWords";

export default function Page() {
  const variant: "lime" | "cheese" = "cheese";

  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">

      {/* ❌ Navbar removed — handled by layout.tsx */}

      <Hero variant={variant} />

      <ProblemFraming />

      <DemoSection variant={variant} />

      <OutcomeSection />

      <FeatureRestraint />
      <HumanValidation />

      <TryYumWords variant={variant} />

      <Footer />

    </main>
  );
}