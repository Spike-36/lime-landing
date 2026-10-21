"use client"

import { useRef, useState } from "react"
import { cards } from "./cards"
import CardDetail from "./CardDetail"

export default function CollectionGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Return focus to the card that is showing when the panel closes
  const close = (lastIndex: number) => {
    setOpenIndex(null)
    tileRefs.current[lastIndex]?.focus()
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
        {cards.map((card, i) => (
          <li key={card.id}>
            <button
              ref={(el) => {
                tileRefs.current[i] = el
              }}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              className="group block w-full overflow-hidden rounded-2xl bg-white text-left shadow-[0_1px_2px_rgba(31,27,22,0.06),0_8px_24px_-12px_rgba(31,27,22,0.18)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(31,27,22,0.06),0_20px_40px_-16px_rgba(31,27,22,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 lg:rounded-3xl"
            >
              <div className="aspect-square overflow-hidden bg-[#EFE8DD]">
                <img
                  src={`/media/thailand/cards/${card.id}.webp`}
                  alt=""
                  width={512}
                  height={512}
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex items-center justify-between gap-2 px-3.5 py-3 sm:px-5 sm:py-4">
                <span className="text-[15px] font-semibold leading-snug text-[#1F1B16] sm:text-lg">
                  {card.name}
                </span>
                <span
                  aria-hidden
                  className="hidden shrink-0 text-xl text-[#B5A898] transition group-hover:translate-x-0.5 group-hover:text-orange-600 sm:block"
                >
                  →
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <CardDetail
          index={openIndex}
          onChange={setOpenIndex}
          onClose={close}
        />
      )}
    </>
  )
}
