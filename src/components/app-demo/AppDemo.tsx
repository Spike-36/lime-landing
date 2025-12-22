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
    audioRef.current.play().catch(() => {
      // swallow errors silently for demo safety
    })
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
      {/* Phone shell */}
      <div className="w-[360px] h-[720px] rounded-[2.5rem] bg-black p-2 shadow-xl">
        <div className="relative h-full w-full rounded-[2rem] bg-white overflow-hidden">

          {/* Camera / notch hint */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-10" />

          {/* Status bar */}
          <div className="h-8 flex items-center justify-center text-xs text-gray-500 border-b">
            9:41
          </div>

          {/* App content */}
          <div className="flex flex-col items-center gap-4 p-4">
            <img
              src={item.image}
              alt={item.word}
              className="w-full rounded-lg"
            />

            <div className="text-2xl font-semibold">{item.word}</div>
            <div className="text-gray-600">{item.phonetic}</div>

            <button
              onClick={playAudio}
              className="px-4 py-2 border rounded"
            >
              Play
            </button>

            <div className="flex gap-4 mt-2">
              <button
                onClick={prev}
                className="px-3 py-1 border rounded"
              >
                Prev
              </button>
              <button
                onClick={next}
                className="px-3 py-1 border rounded"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
