import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

// Next.js App Router props shape
export interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): PageProps["params"][] {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4 text-gray-700">{project.summary}</p>
      <ul className="list-disc ml-6 text-gray-700">
        {project.details.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
