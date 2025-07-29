// src/app/articles/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync("content/blog");
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const filePath = path.join("content/blog", `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className="prose mx-auto px-4 py-8">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      {data.summary && (
        <p className="text-base text-gray-700 mt-2 italic">{data.summary}</p>
      )}
      <MDXRemote source={content} />
    </article>
  );
}
