"use client"

type InfoSheetProps = {
  open: boolean
  onClose: () => void
  word: string
  phonetic?: string
  meaning: string
  description?: string
  about?: string
  ingredients?: string[]
  preparation?: string
  onPlayAudio?: () => void
}

export default function InfoSheet({
  open,
  onClose,
  word,
  phonetic,
  meaning,
  description,
  about,
  ingredients = [],
  preparation,
  onPlayAudio,
}: InfoSheetProps) {
  return (
    <div
      className={`
        absolute inset-0 z-50 bg-white flex flex-col
        transition-all duration-300 ease-out
        ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}
      `}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white px-6 pt-6 pb-4 border-b border-gray-200">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
        >
          ✕
        </button>

        <div className="relative mt-10">
          <div className="text-3xl font-semibold text-gray-900">
            {word}
          </div>

          {onPlayAudio && (
            <button
              onClick={onPlayAudio}
              aria-label="Play audio"
              className="absolute right-0 top-1 text-gray-400 hover:text-gray-600"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 }}
              >
                volume_up
              </span>
            </button>
          )}
        </div>

        {phonetic && (
          <div className="mt-2 italic text-orange-500">
            [{phonetic}]
          </div>
        )}

        <div className="mt-1 text-xl font-semibold text-gray-900">
          {meaning}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {description && (
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            {description}
          </p>
        )}

        {about && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {about}
            </p>
          </section>
        )}

        {ingredients.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {preparation && (
          <section>
            <h3 className="text-lg font-semibold mb-2">Preparation</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {preparation}
            </p>
          </section>
        )}
      </div>
    </div>
  )
}
