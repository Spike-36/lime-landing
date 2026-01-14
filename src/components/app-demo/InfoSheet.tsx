"use client"

import type { DemoItem } from "./demoData"

type Props = {
  item: DemoItem
  onBack: () => void
  onPlayAudio?: () => void
}

export default function DetailView({
  item,
  onBack,
  onPlayAudio,
}: Props) {
  return (
    <div className="absolute inset-0 bg-white overflow-y-auto">
      <div className="p-4">
        <button
          onClick={onBack}
          className="text-sm text-orange-500 mb-4"
        >
          ← Back
        </button>

        <img
          src={item.image}
          alt={item.word}
          className="w-full rounded-xl mb-4"
        />

        <h1 className="text-2xl font-semibold">{item.word}</h1>

        {onPlayAudio && (
          <button
            onClick={onPlayAudio}
            className="mt-2 text-gray-500"
          >
            🔊 Play audio
          </button>
        )}

        <p className="mt-2 italic text-orange-500">
          [{item.phonetic}]
        </p>

        <p className="mt-4 font-medium">
          {item.translation}
        </p>

        {item.description && (
          <p className="mt-4 text-gray-600">
            {item.description}
          </p>
        )}

        {item.about && (
          <section className="mt-6">
            <h3 className="font-semibold mb-1">About</h3>
            <p>{item.about}</p>
          </section>
        )}

        {item.ingredients?.length ? (
          <section className="mt-6">
            <h3 className="font-semibold mb-1">Ingredients</h3>
            <ul className="list-disc pl-5">
              {item.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {item.preparation && (
          <section className="mt-6">
            <h3 className="font-semibold mb-1">Preparation</h3>
            <p>{item.preparation}</p>
          </section>
        )}
      </div>
    </div>
  )
}
