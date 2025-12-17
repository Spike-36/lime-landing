import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-accent py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-24 px-6">
        {/* Left: Text */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Launching September 2029
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Enjoy food,<br />travel and learning<br />new words?
          </h1>

          <p className="text-lg text-gray-800">
            For a limited time, we are offering <br />
            free access to <span className="font-semibold">YumWords</span><br />
            in return for your valuable feedback
          </p>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex justify-center md:justify-center">
          <div className="pl-8">
            <Image
              src="/images/apple.png"
              alt="WordBento app showing mango screen"
              width={450}
              height={900}
              className="w-auto h-auto max-h-[750px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
