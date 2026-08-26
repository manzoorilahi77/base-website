import { siteConfig } from '@/site.config'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Hero() {
  const { business } = siteConfig

  return (
    <section className="py-20 sm:py-28 lg:py-36" aria-labelledby="hero-heading">
      <Container>
        <div className="max-w-3xl">
          <p className="text-accent-text mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            {business.city}, {business.state}
          </p>

          <h1
            id="hero-heading"
            className="text-text text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl"
          >
            {business.name}
          </h1>

          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
            {business.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request a quote</ButtonLink>
            <ButtonLink href={`tel:${business.phone}`} variant="secondary">
              Call {business.phone}
            </ButtonLink>
          </div>

          <p className="text-muted mt-8 text-sm">{business.hours}</p>
        </div>
      </Container>
    </section>
  )
}
