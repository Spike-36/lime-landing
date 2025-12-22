import Hero from "@/components/Hero";
import AppDemo from "@/components/app-demo/AppDemo";
import FeatureIntro from "@/components/FeatureIntro";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureHighlight from "@/components/FeatureHighlight";
import FeatureIcons from "@/components/FeatureIcons";
import TestimonialBlock from "@/components/TestimonialBlock";
import BetaSignupBlock from "@/components/BetaSignupBlock";
import WhoWeAreBlock from "@/components/WhoWeAreBlock";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col justify-between">
      {/* Hero */}
      <Hero />

      {/* Functional App Demo */}
      <section className="px-4 py-8">
        <AppDemo />
      </section>

      <FeatureIntro />
      <FeatureGrid />
      <FeatureHighlight />
      <FeatureIcons />
      <TestimonialBlock />
      <BetaSignupBlock />
      <WhoWeAreBlock />

      <div className="mt-12 text-base text-gray-700 text-center px-4">
        Questions or feedback?{" "}
        <a
          href="mailto:hello@kumamoto.dev"
          className="text-lime-700 underline hover:text-lime-800"
        >
          Get in touch.
        </a>
      </div>

      <Footer />
    </main>
  );
}
