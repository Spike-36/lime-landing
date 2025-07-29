'use client'

import { aboutMe } from "@/lib/aboutMe"

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{aboutMe.headline}</h1>
      <p className="text-lg text-gray-700">{aboutMe.subheading}</p>
      <div className="space-y-4 text-gray-800">
        {aboutMe.bio.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-8 mb-2">Tech Stack</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {aboutMe.techStack.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
