import { siteConfig } from '@/site.config'
import { ButtonLink } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

export function ContactCta() {
  const { business } = siteConfig

  return (
    <Section id="contact-cta" labelledBy="contact-cta-heading">
      <div className="border-muted/20 bg-surface rounded-lg border px-6 py-14 text-center sm:px-12">
        <h2
          id="contact-cta-heading"
          className="text-text mx-auto max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl"
        >
          Ready to get started?
        </h2>
        <p className="text-muted mx-auto mt-4 max-w-xl text-lg leading-relaxed">
          Replace this line with a short prompt to get in touch.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact">Send a message</ButtonLink>
          <ButtonLink href={`tel:${business.phone}`} variant="secondary">
            Call {business.phone}
          </ButtonLink>
        </div>

        <p className="text-muted mt-8 text-sm">{business.hours}</p>
      </div>
    </Section>
  )
}
