"use client"

import type { DemoItem } from "./demoData"

type Props = {
  items: DemoItem[]
  onSelect: (item: DemoItem) => void
}

export default function FeaturedFoodScreen({ items, onSelect }: Props) {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
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
