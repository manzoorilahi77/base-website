import { siteConfig, siteUrl } from '@/site.config'

/**
 * Renders a JSON-LD block.
 *
 * Usage:
 *   <JsonLd />                                  // LocalBusiness, built from site.config
 *   <JsonLd type="FAQPage" data={{ ... }} />    // any other schema.org type
 *
 * The payload is JSON-serialised, not interpolated as markup, and `<` is escaped so a
 * value can never break out of the script tag.
 */
export interface JsonLdProps {
  type?: string
  data?: Record<string, unknown>
}

const { business } = siteConfig

/** Default LocalBusiness payload. Every value comes from site.config.ts. */
export function localBusinessSchema(): Record<string, unknown> {
  return {
    name: business.name,
    description: siteConfig.seo.description,
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
    },
    openingHours: business.hours,
    areaServed: business.city,
  }
}

export function JsonLd({ type = 'LocalBusiness', data }: JsonLdProps) {
  const payload = {
    '@context': 'https://schema.org',
    '@type': type,
    ...(data ?? localBusinessSchema()),
  }

  return (
    <script
      type="application/ld+json"
      // Safe: JSON.stringify output with angle brackets escaped below.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, '\\u003c'),
      }}
    />
  )
}
