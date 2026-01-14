type Props = {
  item: any
  onBack: () => void
  onPlayAudio?: () => void
}

export default function InfoSheet({ item, onBack, onPlayAudio }: Props) {
  return (
    <div className="absolute inset-0 bg-white flex flex-col">

      {/* Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center">
        <button
          onClick={onBack}
          className="mr-3 text-sm font-medium text-orange-500"
        >
          ← Back
        </button>
        <div className="text-lg font-semibold">{item.word}</div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">

        <img
          src={item.image}
          alt={item.word}
          className="w-full rounded-xl mb-6"
        />

        <div className="text-center">
          {onPlayAudio && (
            <button onClick={onPlayAudio} className="mb-2">
              🔊
            </button>
          )}

          <div className="italic text-orange-500">
            [{item.phonetic}]
          </div>

          <div className="text-xl font-semibold mt-2">
            {item.translation}
          </div>
        </div>

        {item.description && (
          <p className="mt-6 text-gray-700">
            {item.description}
          </p>
        )}

        {item.about && (
          <section className="mt-8">
            <h3 className="font-semibold mb-2">About</h3>
            <p>{item.about}</p>
          </section>
        )}

        {item.ingredients?.length > 0 && (
          <section className="mt-8">
            <h3 className="font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-5">
              {item.ingredients.map((i: string, idx: number) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </section>
        )}

        {item.preparation && (
          <section className="mt-8">
            <h3 className="font-semibold mb-2">Preparation</h3>
            <p>{item.preparation}</p>
          </section>
        )}
      </div>
    </div>
  )
}
