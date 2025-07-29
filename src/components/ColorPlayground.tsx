export default function ColorPlayground() {
  const colors = [
    { name: 'charcoal', class: 'bg-charcoal', text: 'text-white' },
    { name: 'offwhite', class: 'bg-offwhite', text: 'text-black' },
    { name: 'sand', class: 'bg-sand', text: 'text-black' },
    { name: 'olive', class: 'bg-olive', text: 'text-white' },
  ]

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Brand Colour Swatches</h2>
      {colors.map((color) => (
        <div
          key={color.name}
          className={`rounded px-4 py-6 ${color.class} ${color.text} shadow`}
        >
          <strong>{color.name}</strong>
        </div>
      ))}
    </div>
  )
}
