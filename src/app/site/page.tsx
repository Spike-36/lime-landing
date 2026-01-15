// src/app/site/page.tsx
import Hero from "@/components/Hero";
import ProblemFraming from "@/components/ProblemFraming";
import DemoSection from "@/components/DemoSection";
import OutcomeSection from "@/components/OutcomeSection";
import FeatureRestraint from "@/components/FeatureRestraint";
import TryYumWords from "@/components/TryYumWords";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">

      {/* 1. Hero — Orientation */}
      <Hero />

      {/* 2. Problem Framing — Why choosing food is hard */}
      <ProblemFraming />

      {/* 3. Product in Motion — Show, don’t explain */}
      <DemoSection />

      {/* 4. Outcome — Why this matters */}
      <OutcomeSection />

      {/* 5. Scope & Restraint — Trust-building */}
      <FeatureRestraint />

      {/* 6. The Ask — Primary CTA */}
      <TryYumWords />

      {/* Footer */}
      <Footer />

    </main>
  );
}
