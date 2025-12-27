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
      <div className="w-[360px] h-[720px] rounded-[2.5rem] bg-black p-2 shadow-xl">
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
            <div className="relative h-1/2 flex flex-col items-center pt-10 px-6">

              {/* Left chevron */}
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

              {/* Right chevron */}
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

              <div className="text-3xl font-semibold mt-2">{item.word}</div>
              <div className="text-gray-500 italic">{item.phonetic}</div>

              <button
                onClick={playAudio}
                className="mt-4 px-4 py-2 border rounded"
              >
                Play
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
