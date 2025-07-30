import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeatureIntro from "@/components/FeatureIntro";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureHighlight from "@/components/FeatureHighlight";
import FeatureIcons from "@/components/FeatureIcons";
import TestimonialBlock from "@/components/TestimonialBlock";
import BetaSignupBlock from "@/components/BetaSignupBlock";
import WhoWeAreBlock from "@/components/WhoWeAreBlock"; // ✅ NEW

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col justify-between">
      {/* Hero */}
      <Hero />

      {/* Feature Intro – simple paragraph section */}
      <FeatureIntro />

      {/* Feature Grid – Ingredients / Dishes / Useful Phrases */}
      <FeatureGrid />

      {/* Feature Highlight – big yellow block with heading + para */}
      <FeatureHighlight />

      {/* Feature Icons – visual tiles for secondary features */}
      <FeatureIcons />

      {/* Testimonials – user quotes in yellow background */}
      <TestimonialBlock />

      {/* Early Access CTA – Beta Signup */}
      <BetaSignupBlock />

      {/* Who We Are – final component */}
      <WhoWeAreBlock />

      {/* Contact */}
      <div className="mt-12 text-base text-gray-700 text-center px-4">
        Questions or feedback?{" "}
        <a
          href="mailto:hello@kumamoto.dev"
          className="text-lime-700 underline hover:text-lime-800"
        >
          Get in touch.
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
