"use client"

import type { DemoItem } from "./demoData"

type Props = {
  items: DemoItem[]
  onSelect: (item: DemoItem) => void
}

export default function FeaturedFoodScreen({
  items,
  onSelect,
}: Props) {

  const hero = items[0]
  const rest = items.slice(1, 5)

  return (
    <div className="h-full overflow-y-auto scrollbar-hide px-5 pt-11 pb-8">

    
      {/* 👉 Hero item */}
      {hero && (
        <button
          type="button"
          onClick={() => onSelect(hero)}
          className="group relative w-full aspect-square overflow-hidden rounded-2xl shadow-sm"
        >
          <img
            src={hero.image}
            alt={hero.word}
            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />

          {/* 👉 Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* 👉 Hero text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
            <p className="text-white text-[22px] font-medium leading-tight">
              {hero.word}
            </p>

            {hero.phonetic && (
              <p className="mt-1 text-white/80 text-[13px]">
                {hero.phonetic}
              </p>
            )}
          </div>
        </button>
      )}

      {/* 👉 Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {rest.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={item.image}
              alt={item.word}
              className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />

            {/* 👉 Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

            {/* 👉 Label */}
            <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
              <p className="text-white text-[14px] font-medium leading-tight">
                {item.word}
              </p>
            </div>
          </button>
        ))}
      </div>

    </div>
  )
}