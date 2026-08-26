import { Container } from '@/components/ui/container'

/**
 * PLACEHOLDER PROOF POINTS.
 *
 * Replace each label with something the business can actually substantiate - years in
 * business, a real certification, a real service-area count. Do NOT invent licence
 * numbers, award names, or review counts. If a claim cannot be verified, delete the
 * slot rather than filling it.
 */
const PROOF_POINTS = [
  { value: 'Proof point one', label: 'Short supporting label' },
  { value: 'Proof point two', label: 'Short supporting label' },
  { value: 'Proof point three', label: 'Short supporting label' },
  { value: 'Proof point four', label: 'Short supporting label' },
] as const

export function TrustRow() {
  return (
    <section className="border-muted/20 border-y py-10" aria-label="Why choose us">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {PROOF_POINTS.map((point) => (
            <li key={point.value}>
              <p className="text-text font-display text-lg font-semibold">{point.value}</p>
              <p className="text-muted mt-1 text-sm">{point.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
