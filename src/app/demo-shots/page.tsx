import type { Metadata } from 'next'

import { AboutBlock, ContactCta, Faq, Hero, ServiceGrid, TrustRow } from '@/components/sections'
import { noIndexMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Demo shots',
  robots: noIndexMetadata,
}

/**
 * Every section, back to back, with no header, footer, or navigation.
 *
 * Purpose: screenshotting client demos. Deliberately unchromed - it renders outside
 * the `(site)` route group, so the root layout supplies only the theme.
 *
 * When you add a section, export it from `@/components/sections` and add it here and
 * on the homepage. Keeping this list in step with the homepage is the whole point.
 */
export default function DemoShotsPage() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <TrustRow />
      <ServiceGrid />
      <AboutBlock />
      <Faq />
      <ContactCta />
    </main>
  )
}
