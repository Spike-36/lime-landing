// src/app/page.tsx
import Image from "next/image"
import SignupForm from "@/components/SignupForm"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <main className="bg-offwhite text-charcoal min-h-screen px-4 py-12 flex flex-col justify-between">
      {/* Header */}
      <div className="max-w-6xl mb-8 px-4">
        <Image
          src="/images/logo.png"
          alt="Agile Advocacy logo"
          width={70}
          height={20}
          className="h-auto w-auto"
          priority
        />
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-medium text-charcoal mb-6 leading-snug">
          Preparation: The Key to Legal Tech Success
        </h1>

        <p className="text-lg text-charcoal mb-8 leading-relaxed italic">
          Why, in my opinion, so many legal tech projects fail before a single line of code is written.
        </p>

        <div className="text-left text-base leading-relaxed space-y-4">
          <p>
          I’m a former litigation lawyer now working on the product and technology side of legal innovation. Over the years, I’ve worn multiple ‘techie’ hats—developer, UX designer, product owner, and delivery lead—but at its core, my work is about problem-solving. Whether I’m writing code or shaping product strategy, I focus on making things clearer, faster, and genuinely usable.
          </p>
          <p>
            I’ve seen legal tech projects from both sides: legal teams frustrated by clunky tools, and tech teams struggling to deliver against vague, shifting briefs. I work in the gap between those worlds—helping turn good ideas into software that actually gets used.
          </p>
          <p>
            <em>The most valuable lesson I’ve learned is simple.</em>
          </p>
          <blockquote className="border-l-4 border-olive pl-4 text-charcoal font-semibold">
            Without proper preparation, legal tech projects invariably fail to deliver.
          </blockquote>
          <p>
            Over the next few months, I’ll be publishing an 8-part series to help lawyers and legal ops professionals avoid that fate. Each article will walk through the kind of preparation that’s essential <em>before</em> a build begins — the part too many legal tech projects skip, often at great cost.
          </p>
        </div>

        {/* Article 1 Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-12 text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-olive text-center">
            Article 1: Want Legal Tech That Works? Start With the Requirements
          </h2>
          <ul className="list-disc list-inside text-base space-y-2 leading-relaxed text-charcoal">
            <li>Why unclear requirements are the root cause of scope creep, budget overrun, and failed pilots</li>
            <li>What <em>usable</em> requirements actually look like</li>
            <li>How to bridge the gap between legal insight and tech execution — without needing to “speak dev”</li>
          </ul>
          <p className="mt-4 text-base">
            Follow along for the full series, and share with your team if you’re planning a legal tech build of your own.
          </p>
        </div>

        <SignupForm />

        <p className="mt-12 text-base text-charcoal">
          Got thoughts or questions?{" "}
          <a
            href="mailto:hello@agileadvocacy.co.uk"
            className="text-black underline hover:text-olive"
          >
            Get in touch.
          </a>{" "}
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}