
"use client"

import { useState, useRef } from "react"
import { demoItems } from "./demoData"

export default function AppDemo() {
  const [index, setIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const item = demoItems[index]

  const playAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(item.audio)
    } else {
      audioRef.current.src = item.audio
    }

    audioRef.current.currentTime = 0
    audioRef.current.play().catch(() => {})
  }

  const next = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIndex((i) => (i + 1) % demoItems.length)
  }

  const prev = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIndex((i) => (i - 1 + demoItems.length) % demoItems.length)
  }

  return (
    <div className="flex justify-center">
      <div className="w-[360px] h-[720px] rounded-[2.5rem] bg-black/80 p-1.5 shadow-lg">
        <div className="relative h-full w-full rounded-[2rem] bg-white overflow-hidden">

          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

          <div className="flex flex-col h-full">

            {/* TOP HALF — IMAGE */}
            <div className="relative h-1/2 w-full">
              <img
                src={item.image}
                alt={item.word}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM HALF — CONTENT */}
            <div className="relative h-1/2 flex flex-col items-center pt-10 px-6 text-center">

              {/* Native word */}
              <div className="text-3xl font-semibold">
                {item.word}
              </div>

              {/* Speaker (Material icon) */}
              <button
                onClick={playAudio}
                aria-label="Play audio"
                className="mt-4 text-gray-400 hover:text-gray-600 transition"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 32, lineHeight: 1 }}
                >
                  volume_up
                </span>
              </button>

              {/* Phonetic */}
              <div className="mt-3 italic text-orange-500">
  [{item.phonetic}]
</div>

              {/* English */}
              <div className="mt-3 text-lg font-medium">
                {item.translation}
              </div>

              {/* Description */}
              {item.description && (
                <>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-[260px]">
                    {item.description}
                  </p>

                  {/* More … */}
                  <button
                    type="button"
                    className="mt-2 text-sm font-medium text-orange-500 hover:underline"
                    aria-label="More information"
                    onClick={() => {}}
                  >
                    More …
                  </button>
                </>
              )}

              {/* Navigation chevrons */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-6 bottom-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

