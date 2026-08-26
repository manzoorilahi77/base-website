import Link from 'next/link'

import { siteConfig } from '@/site.config'
import { Container } from '@/components/ui/container'

export function Footer() {
  const { business, footer } = siteConfig
  const year = new Date().getFullYear()

  return (
    <footer className="border-muted/20 bg-surface mt-auto border-t">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-text font-display text-lg font-semibold">{business.name}</p>
            <p className="text-muted mt-3 leading-relaxed">{business.tagline}</p>
          </div>

          <div>
            <h2 className="text-text text-sm font-semibold tracking-[0.14em] uppercase">Visit</h2>
            <address className="text-muted mt-4 space-y-1 not-italic">
              <p>{business.streetAddress}</p>
              <p>
                {business.city}, {business.state} {business.postalCode}
              </p>
              <p className="pt-2">{business.hours}</p>
            </address>
          </div>

          <div>
            <h2 className="text-text text-sm font-semibold tracking-[0.14em] uppercase">Contact</h2>
            <ul className="text-muted mt-4 space-y-2">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-accent-text transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-accent-text transition-colors break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>

            <nav aria-label="Footer" className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {footer.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted hover:text-accent-text text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="border-muted/20 text-muted mt-12 border-t pt-6 text-sm">
          &copy; {year} {footer.legal}
        </p>
      </Container>
    </footer>
  )
}
