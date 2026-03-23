"use client"

import { useEffect, useRef, useState } from "react"
import { demoItems } from "./demoData"
import FeaturedFoodScreen from "./FeaturedFoodScreen"
import InfoSheet from "./InfoSheet"

type Screen = "featured" | "detail"

export default function AppDemo() {
  const [screen, setScreen] = useState<Screen>("featured")
  const [selectedItem, setSelectedItem] = useState<
    (typeof demoItems)[number] | null
  >(null)

  const demoRef = useRef<HTMLDivElement | null>(null)

  const openDetail = (item: (typeof demoItems)[number]) => {
    setSelectedItem(item)
    setScreen("detail")
  }

  // Reset demo when it leaves the viewport
  useEffect(() => {
    const node = demoRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setScreen("featured")
          setSelectedItem(null)
        }
      },
      {
        threshold: 0,
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={demoRef} className="flex justify-center">
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
            <InfoSheet item={selectedItem} />
          )}
        </div>
      </div>
    </div>
  )
}
