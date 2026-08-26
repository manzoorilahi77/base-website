import type { MetadataRoute } from 'next'

import { siteUrl } from '@/site.config'

/**
 * Public, indexable routes only.
 *
 * /style-guide and /demo-shots are development tools and are deliberately absent -
 * they are also blocked in robots.ts and carry noindex metadata.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ]
}
