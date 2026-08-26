import type { Metadata } from 'next'

import { siteConfig } from '@/site.config'
import { ContactForm } from '@/components/contact-form'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.business.name}.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const { business } = siteConfig

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <h1 className="text-text text-4xl leading-tight font-semibold sm:text-5xl">Contact</h1>
          <p className="text-muted mt-5 text-lg leading-relaxed">
            Send a message and we&apos;ll get back to you, or call during opening hours.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-muted text-sm font-semibold tracking-[0.14em] uppercase">
                Phone
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`tel:${business.phone}`}
                  className="text-text hover:text-accent-text text-lg"
                >
                  {business.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted text-sm font-semibold tracking-[0.14em] uppercase">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${business.email}`}
                  className="text-text hover:text-accent-text text-lg break-all"
                >
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted text-sm font-semibold tracking-[0.14em] uppercase">
                Address
              </dt>
              <dd className="text-text mt-1.5">
                <address className="text-lg not-italic">
                  {business.streetAddress}
                  <br />
                  {business.city}, {business.state} {business.postalCode}
                </address>
              </dd>
            </div>
            <div>
              <dt className="text-muted text-sm font-semibold tracking-[0.14em] uppercase">
                Hours
              </dt>
              <dd className="text-text mt-1.5 text-lg">{business.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="border-muted/20 bg-surface rounded-lg border p-6 sm:p-9">
          <h2 className="text-text font-display mb-6 text-2xl font-semibold">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
