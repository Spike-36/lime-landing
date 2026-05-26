"use client"

import type { DemoItem } from "./demoData"

type Props = {
  item: DemoItem
  onBack: () => void
}

export default function InfoSheet({ item, onBack }: Props) {

  // 👉 Simple audio playback
  const playAudio = () => {
    if (!item.audio) return

    const audio = new Audio(item.audio)
    audio.play()
  }

  return (
    <div className="absolute inset-0 bg-white overflow-y-auto">

      {/* Image — true 1:1, mobile-safe */}
      <div className="w-full aspect-square max-h-[45vh] overflow-hidden">
        <img
          src={item.image}
          alt={item.word}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 pb-28">
        {/* Dish name */}
        <h1 className="text-[21px] font-medium leading-tight">
          {item.word}
        </h1>

        {/* Phonetic */}
        {item.phonetic && (
          <p className="mt-1 text-[13px] text-gray-400">
            {item.phonetic}
          </p>
        )}

        {/* Description */}
        <p className="mt-5 text-[15px] leading-relaxed text-gray-700">
          {item.demoText}
        </p>

        {/* Context */}
        {item.context && (
          <p className="mt-4 text-[13px] text-gray-500">
            {item.context}
          </p>
        )}
      </div>

      {/* Floating controls */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">

        {/* 👉 Back button */}
        <button
          onClick={onBack}
          className="px-5 py-3 rounded-full bg-white/90 backdrop-blur shadow-md border border-gray-200 text-sm font-medium text-gray-900 hover:bg-white transition"
        >
          ← Back
        </button>

        {/* 👉 Audio button */}
        {item.audio && (
          <button
            onClick={playAudio}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-md border border-gray-200 text-xl hover:bg-white transition"
          >
            🔊
          </button>
        )}

      </div>

    </div>
  )
}