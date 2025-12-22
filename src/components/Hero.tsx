import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-gray-900 mb-4">
          Launching September 2029
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
          Enjoy food,<br />
          travel and learning<br />
          new words?
        </h1>

        <p className="text-lg text-gray-800">
          For a limited time, we are offering <br />
          free access to <span className="font-semibold">YumWords</span><br />
          in return for your valuable feedback
        </p>
      </div>
    </section>
  );
};

export default Hero;
