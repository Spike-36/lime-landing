"use client"

import { useEffect, useRef, useState } from "react"
import { getDemoItems } from "./demoData"
import FeaturedFoodScreen from "./FeaturedFoodScreen"
import InfoSheet from "./InfoSheet"

type Screen = "featured" | "detail"
type Variant = "yumwords" | "asia" | "france" | "cheese"

export default function AppDemo({
  variant = "yumwords",
}: {
  variant?: Variant
}) {
  // 👉 YumWords currently reuses Asia content
  const demoVariant =
    variant === "yumwords" ? "asia" : variant

  const items = getDemoItems(demoVariant)

  const [screen, setScreen] = useState<Screen>("featured")

  // 👉 Explicit typing avoids stale inference issues
  const [selectedItem, setSelectedItem] = useState<
    ReturnType<typeof getDemoItems>[number] | null
  >(null)

  const demoRef = useRef<HTMLDivElement | null>(null)

  // 👉 Open detail modal
  const openDetail = (
    item: ReturnType<typeof getDemoItems>[number]
  ) => {
    setSelectedItem(item)
    setScreen("detail")
  }

  // 👉 Back to featured screen
  const goBack = () => {
    setScreen("featured")
    setSelectedItem(null)
  }

  // 👉 Reset demo when leaving viewport
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

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={demoRef} className="flex justify-center">
      <div className="w-[360px] h-[720px] rounded-[2.5rem] bg-black/80 p-1.5 shadow-lg">
        <div className="relative h-full w-full rounded-[2rem] bg-white overflow-hidden">

          {/* 👉 iPhone notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

          {/* 👉 Featured list */}
          {screen === "featured" && (
            <FeaturedFoodScreen
              items={items}
              onSelect={openDetail}
            />
          )}

          {/* 👉 Detail modal */}
          {screen === "detail" && selectedItem && (
            <InfoSheet
              item={selectedItem}
              onBack={goBack}
            />
          )}
        </div>
      </div>
    </div>
  )
}