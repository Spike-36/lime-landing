"use client"

import { useRef } from "react"
import type { DemoItem } from "./demoData"

type Props = {
  item: DemoItem
  onBack: () => void
}

export default function InfoSheet({ item, onBack }: Props) {

  // 👉 Keep single audio instance stable
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // 👉 Simple audio playback
  const playAudio = () => {
    if (!item.audio) return

    // 👉 Stop previous playback
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    const audio = new Audio(item.audio)
    audioRef.current = audio

    audio.play().catch((err) => {
      console.error("Audio playback failed:", err)
    })
  }

  return (
    <div className="absolute inset-0 bg-white overflow-y-auto scrollbar-hide">

      {/* 👉 Hero image */}
      <div className="w-full aspect-square max-h-[45vh] overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.word}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 👉 Content */}
      <div className="p-5 pb-32">

        {/* 👉 Dish / product name */}
        <h1 className="text-[22px] font-medium leading-tight text-gray-900">
          {item.word}
        </h1>

        {/* 👉 Phonetic + audio */}
        {(item.phonetic || item.audio) && (
          <div className="mt-2 flex items-center gap-3">

            {item.phonetic && (
              <p className="text-[13px] text-gray-400">
                {item.phonetic}
              </p>
            )}

            {item.audio && (
              <button
                onClick={playAudio}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition"
                aria-label={`Play pronunciation for ${item.word}`}
              >
                🔊
              </button>
            )}

          </div>
        )}

        {/* 👉 Description */}
        <p className="mt-5 text-[15px] leading-[1.75] text-gray-700">
          {item.demoText}
        </p>

        {/* 👉 Context */}
        {item.context && (
          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-[13px] leading-relaxed text-gray-500">
              {item.context}
            </p>
          </div>
        )}

      </div>

      {/* 👉 Floating back button */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20">

        <button
          onClick={onBack}
          className="px-5 py-3 rounded-full bg-white/95 backdrop-blur shadow-lg border border-gray-200 text-sm font-medium text-gray-900 hover:bg-white transition"
        >
          ← Back
        </button>

      </div>

    </div>
  )
}