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
    audioRef.current.play()
  }

  const next = () => {
    setIndex((i) => (i + 1) % demoItems.length)
  }

  const prev = () => {
    setIndex((i) => (i - 1 + demoItems.length) % demoItems.length)
  }

  return (
    <div>
      <img src={item.image} alt={item.word} width={300} />

      <div>{item.word}</div>
      <div>{item.phonetic}</div>

      <button onClick={playAudio}>Play</button>

      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}
