import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Only the pages we want found: the Thailand landing page and its
// supporting pages. Legacy routes are deliberately left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/thailand`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/test`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
