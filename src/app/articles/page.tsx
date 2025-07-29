import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function ArticlesIndex() {
  const postsDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary, // ✅ should be present
    };
  });

  // 🔍 Debug: Print post metadata to terminal
  console.log("Posts loaded:", posts);

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/articles/${post.slug}`}
              className="text-xl text-blue-600 underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">{post.date}</p>
            {post.summary && (
              <p className="text-base text-gray-700 mt-1">{post.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
