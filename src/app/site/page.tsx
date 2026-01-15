import Hero from "@/components/Hero";
import AppDemo from "@/components/app-demo/AppDemo";
import FeatureIntro from "@/components/FeatureIntro";
import FeatureHighlight from "@/components/FeatureHighlight";
import FeatureRestraint from "@/components/FeatureRestraint";
import TestimonialBlock from "@/components/TestimonialBlock";
import BetaSignupBlock from "@/components/BetaSignupBlock";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">

      {/* 1. Hero — Orientation */}
      <Hero />

      {/* 2. Problem Framing — Why choosing food is hard */}
      <FeatureIntro />

      {/* 3. Product in Motion — Show, don’t explain */}
      <section className="px-4 py-8">
        <AppDemo />
      </section>

      {/* 4. Outcome — Why this matters */}
      <FeatureHighlight />

      {/* 5. Scope & Restraint — Trust-building */}
      <FeatureRestraint />

      {/* 6. Human Validation — Social proof */}
      <TestimonialBlock />

      {/* 7. The Ask — Primary CTA */}
      <BetaSignupBlock />

      {/* Footer */}
      <Footer />

    </main>
  );
}
