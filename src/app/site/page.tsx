import Hero from "@/components/Hero";
import AppDemo from "@/components/app-demo/AppDemo";
import FeatureIntro from "@/components/FeatureIntro";
import FeatureHighlight from "@/components/FeatureHighlight";
import TestimonialBlock from "@/components/TestimonialBlock";
import BetaSignupBlock from "@/components/BetaSignupBlock";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">
      
      {/* 1. Hero — Orientation */}
      <Hero />

      {/* 2. Differentiation by Behaviour — Quiet Framing */}
      <FeatureIntro />

      {/* 3. Product in Motion — Center of Gravity */}
      <section className="px-4 py-8">
        <AppDemo />
      </section>

      {/* 4. Value Translation — Emphatic */}
      <FeatureHighlight />

      {/* 5. Scope & Restraint — Trust Building */}
      <FeatureIntro />

      {/* 6. Human Validation — Emotional Proof */}
      <TestimonialBlock />

      {/* 7. The Ask — Primary CTA */}
      <BetaSignupBlock />

      {/* Footer */}
      <Footer />

    </main>
  );
}
