"use client"

import { useState, useRef } from "react"
import { demoItems } from "./demoData"
import FeaturedFoodScreen from "./FeaturedFoodScreen"
import DetailView from "./InfoSheet"

type Screen = "featured" | "detail"

export default function AppDemo() {
  const [screen, setScreen] = useState<Screen>("featured")
  const [selectedItem, setSelectedItem] = useState<
    (typeof demoItems)[number] | null
  >(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playAudio = (audio: string) => {
    if (!audio) return
    if (typeof window === "undefined") return

    if (!audioRef.current) {
      audioRef.current = new Audio(audio)
    } else {
      audioRef.current.src = audio
    }

    audioRef.current.currentTime = 0
    audioRef.current.play().catch(() => {})
  }

  const openDetail = (item: (typeof demoItems)[number]) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    setSelectedItem(item)
    setScreen("detail")
  }

  const goBack = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    setScreen("featured")
    setSelectedItem(null)
  }

  return (
    <div className="flex justify-center">
      <div className="w-[360px] h-[720px] rounded-[2.5rem] bg-black/80 p-1.5 shadow-lg">
        <div className="relative h-full w-full rounded-[2rem] bg-white overflow-hidden">

          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

          {/* Screen switch */}
          {screen === "featured" && (
            <FeaturedFoodScreen
              items={demoItems}
              onSelect={openDetail}
            />
          )}

          {screen === "detail" && selectedItem && (
            <DetailView
              item={selectedItem}
              onBack={goBack}
              onPlayAudio={() => playAudio(selectedItem.audio)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
