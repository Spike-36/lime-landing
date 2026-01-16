"use client"

import type { DemoItem } from "./demoData"

type Props = {
  items: DemoItem[]
  onSelect: (item: DemoItem) => void
}

export default function FeaturedFoodScreen({ items, onSelect }: Props) {
  const hero = items[0]
  const rest = items.slice(1, 5)

  return (
    <div className="h-full overflow-y-auto p-5 space-y-5">
      
      {/* Hero item — 1:1 to match image optimisation */}
      {hero && (
        <button
          type="button"
          onClick={() => onSelect(hero)}
          className="relative w-full aspect-square overflow-hidden rounded-xl"
        >
          <img
            src={hero.image}
            alt={hero.word}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </button>
      )}

      {/* 2x2 grid */}
      <div className="grid grid-cols-2 gap-5">
        {rest.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={item.image}
              alt={item.word}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
