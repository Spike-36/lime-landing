type Props = {
  items: typeof import("./demoData").demoItems
  onSelect: (item: any) => void
}

export default function FeaturedFoodScreen({ items, onSelect }: Props) {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
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
