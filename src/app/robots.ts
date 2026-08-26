import type { MetadataRoute } from 'next'

import { siteUrl } from '@/site.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Development-only routes. Keep in step with `noIndexMetadata` usage.
      disallow: ['/style-guide', '/demo-shots'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
