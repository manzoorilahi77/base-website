import { Card } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/ui/section'

/**
 * PLACEHOLDER SERVICES.
 *
 * Six generic slots. Replace titles and descriptions with the business's real
 * services. Add or remove entries freely - the grid reflows. Keep the shape generic:
 * this component must not assume a trade or industry.
 */
const SERVICES = [
  { title: 'Service one', description: 'One or two sentences on what this service includes.' },
  { title: 'Service two', description: 'One or two sentences on what this service includes.' },
  { title: 'Service three', description: 'One or two sentences on what this service includes.' },
  { title: 'Service four', description: 'One or two sentences on what this service includes.' },
  { title: 'Service five', description: 'One or two sentences on what this service includes.' },
  { title: 'Service six', description: 'One or two sentences on what this service includes.' },
] as const

export function ServiceGrid() {
  return (
    <Section id="services" surface labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="What we do"
        lede="Replace this lede with a sentence describing the range of work on offer."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <li key={service.title}>
            <Card className="bg-bg h-full">
              <h3 className="text-text font-display text-xl font-semibold">{service.title}</h3>
              <p className="text-muted mt-3 leading-relaxed">{service.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
