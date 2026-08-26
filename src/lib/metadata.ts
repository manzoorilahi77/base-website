import type { Metadata } from 'next'

import { siteConfig, siteUrl } from '@/site.config'

const { business, seo } = siteConfig

/** Default title when a page does not set its own. */
export const defaultTitle = `${business.name} | ${business.tagline}`

/**
 * Root metadata, driven entirely from site.config.ts.
 *
 * `metadataBase` makes every relative OG/canonical URL absolute, which is what lets
 * the generated OG image route resolve correctly when shared.
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  applicationName: business.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: business.name,
    title: defaultTitle,
    description: seo.description,
    url: siteUrl,
    locale: seo.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

/** Marks the dev-only routes (/style-guide, /demo-shots) as never-index. */
export const noIndexMetadata: Metadata['robots'] = {
  index: false,
  follow: false,
  nocache: true,
}
