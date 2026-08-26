import { JsonLd } from '@/components/seo/json-ld'
import { AboutBlock, ContactCta, Faq, Hero, ServiceGrid, TrustRow } from '@/components/sections'

export default function HomePage() {
  return (
    <>
      {/* Defaults to a LocalBusiness payload built from site.config.ts. */}
      <JsonLd />
      <Hero />
      <TrustRow />
      <ServiceGrid />
      <AboutBlock />
      <Faq />
      <ContactCta />
    </>
  )
}
