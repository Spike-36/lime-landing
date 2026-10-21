import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true, // Enable MDX (still required in Next 15+ with @next/mdx)
  },
  // Thailand is the only product page for now. Temporary (307) so the root
  // can become a multi-product homepage later. Host-agnostic on purpose:
  // www.yumwords.com -> yumwords.com is handled by Vercel's domain settings,
  // and a host redirect here as well could loop against them.
  async redirects() {
    return [{ source: '/', destination: '/thailand', permanent: false }];
  },
};

export default nextConfig;
