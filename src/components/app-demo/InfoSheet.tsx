"use client"

import type { DemoItem } from "./demoData"

type Props = {
  item: DemoItem
}

export default function InfoSheet({ item }: Props) {
  return (
    <div className="absolute inset-0 bg-white overflow-y-auto">
      
      {/* Image — 1:1, calm, contained */}
      <div className="w-full aspect-square max-h-[45vh] overflow-hidden">
        <img
          src={item.image}
          alt={item.word}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        {/* Dish name */}
        <h1 className="text-[21px] font-medium leading-tight">
          {item.word}
        </h1>

        {/* Phonetic — present but de-emphasised */}
        {item.phonetic && (
          <p className="mt-1 text-[13px] text-gray-400">
            {item.phonetic}
          </p>
        )}

        {/* Main reassurance paragraph */}
        <p className="mt-5 text-[15px] leading-relaxed text-gray-700">
          {item.demoText}
        </p>

        {/* Context line */}
        {item.context && (
          <p className="mt-4 text-[13px] text-gray-500">
            {item.context}
          </p>
        )}
      </div>
    </div>
  )
}
