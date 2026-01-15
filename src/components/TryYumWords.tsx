export default function BetaSignupBlock() {
  return (
    <section className="bg-white px-6 py-12 md:py-20 text-center text-gray-900">
      <div className="max-w-2xl mx-auto">
        {/* CTA heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Try YumWords
        </h2>

        {/* Section lead */}
        <p className="text-lg text-gray-800 mb-8">
          Available on the App Store and Google Play.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className="w-full sm:w-auto rounded-full bg-gray-900 px-8 py-4 text-white font-medium hover:bg-gray-800 transition"
          >
            App Store
          </button>

          <button
            type="button"
            className="w-full sm:w-auto rounded-full bg-gray-900 px-8 py-4 text-white font-medium hover:bg-gray-800 transition"
          >
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
