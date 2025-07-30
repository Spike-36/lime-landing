// src/components/InfoCard.tsx
type InfoCardProps = {
  title: string
  body: string
}

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <div className="bg-white max-w-2xl mx-auto px-6 py-10 text-center rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{body}</p>
    </div>
  )
}
