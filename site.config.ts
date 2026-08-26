// THE single source of truth for this site.
//
// Every business-specific string below is a placeholder wrapped in double curly
// braces. Replace them all before shipping; the README has the full token table.
// When you are done, searching this repo for a double-open-brace must return nothing.
//
// NEVER replace a token with invented content. If you do not know a business's real
// phone number, licence number, or review, leave the token in place and ask. A
// plausible-sounding fake silently survives into a client-facing site - that is the
// single worst failure mode for this template.

import type { ThemeId } from '@/themes/library'

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  /**
   * Active palette + typography combo, C1-C50. This one value drives every color
   * and both font families across the whole site. See THEMES.md for the full list.
   */
  themeId: ThemeId

  business: {
    name: string
    /** Short positioning line, used in the hero and as the metadata title suffix. */
    tagline: string
    city: string
    state: string
    postalCode: string
    streetAddress: string
    phone: string
    email: string
    /** Opening hours as displayed, e.g. "Mon-Fri 9am-5pm". */
    hours: string
    /** Bare domain, no protocol, e.g. "example.com". */
    domain: string
  }

  nav: NavItem[]

  footer: {
    /** Column of secondary links shown beside the business details. */
    links: NavItem[]
    /** Rendered after "(c) <year>". */
    legal: string
  }

  seo: {
    /** Falls back to `${business.name} | ${business.tagline}` when composing titles. */
    titleTemplate: string
    description: string
    locale: string
  }
}

export const siteConfig: SiteConfig = {
  themeId: 'C39',

  business: {
    name: '{{BUSINESS_NAME}}',
    tagline: '{{TAGLINE}}',
    city: '{{CITY}}',
    state: '{{STATE}}',
    postalCode: '{{POSTAL_CODE}}',
    streetAddress: '{{STREET_ADDRESS}}',
    phone: '{{PHONE}}',
    email: '{{EMAIL}}',
    hours: '{{HOURS}}',
    domain: '{{DOMAIN}}',
  },

  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ],

  footer: {
    links: [
      { label: 'Services', href: '/#services' },
      { label: 'About', href: '/#about' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: '{{BUSINESS_NAME}}. All rights reserved.',
  },

  seo: {
    titleTemplate: '%s | {{BUSINESS_NAME}}',
    description: '{{SEO_DESCRIPTION}}',
    locale: 'en_US',
  },
}

/** Absolute site origin, derived from the domain token. */
export const siteUrl = `https://${siteConfig.business.domain}`

export default siteConfig
