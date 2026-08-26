import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { SkipLink } from '@/components/layout/skip-link'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

/**
 * Global 404. It sits outside the `(site)` route group so it can catch every
 * unmatched URL, which means it renders its own chrome.
 */
export default function NotFound() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="flex-1">
        <Container className="py-28 sm:py-40">
          <div className="max-w-xl">
            <p className="text-accent-text mb-4 text-sm font-semibold tracking-[0.14em] uppercase">
              Error 404
            </p>
            <h1 className="text-text text-4xl leading-tight font-semibold sm:text-5xl">
              We couldn&apos;t find that page
            </h1>
            <p className="text-muted mt-5 text-lg leading-relaxed">
              The page you were looking for may have moved or no longer exists.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/">Back to home</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
