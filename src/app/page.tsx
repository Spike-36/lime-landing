import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFraming from "@/components/ProblemFraming";
import ExploreAppsSection from "@/components/ExploreAppsSection";
import WhyYumWordsSection from "@/components/WhyYumWordsSection";
import JourneySection from "@/components/JourneySection";
import ExploreYumWordsSection from "@/components/ExploreYumWordsSection";
import Footer from "@/components/Footer";

export default function Page() {
  const variant = "yumwords";

  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">

      {/* Global navigation */}
      <Navbar />

      {/* 1. Hero — YumWords umbrella landing */}
      <Hero variant={variant} />

      {/* 2. Problem Framing */}
      <ProblemFraming variant={variant} />

      {/* 3. Explore the YumWords apps */}
      <ExploreAppsSection />

      {/* 4. Why YumWords exists */}
      <WhyYumWordsSection />

      {/* 5. Project journey */}
      <JourneySection />

      {/* 6. Explore CTA */}
      <ExploreYumWordsSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}