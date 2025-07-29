import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true, // Enable MDX (still required in Next 15+ with @next/mdx)
  },
};

export default nextConfig;
