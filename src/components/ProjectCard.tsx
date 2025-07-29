// src/components/ProjectCard.tsx
import Link from "next/link"

type Project = {
  title: string
  slug: string
  summary: string
  image?: string
}

export default function ProjectCard({ title, slug, summary }: Project) {
  return (
    <div className="border rounded-xl p-4 hover:shadow transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{summary}</p>
      <Link href={`/projects/${slug}`} className="text-blue-600 underline">
        Read more →
      </Link>
    </div>
  )
}
