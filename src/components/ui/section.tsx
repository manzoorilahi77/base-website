import { cn } from '@/lib/cn'

import { Container } from './container'

/**
 * A page section with consistent vertical rhythm and a landmark id for in-page nav.
 * `surface` lifts the band off the page background to separate adjacent sections.
 */
export function Section({
  id,
  surface = false,
  className,
  labelledBy,
  children,
}: {
  id?: string
  surface?: boolean
  className?: string
  labelledBy?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-16 sm:py-24', surface && 'bg-surface', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}

/** Eyebrow + heading + optional lede, used at the top of most sections. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = 'left',
}: {
  id?: string
  eyebrow?: string
  title: string
  lede?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="text-accent-text mb-3 text-sm font-semibold tracking-[0.14em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-text text-3xl leading-tight font-semibold sm:text-4xl">
        {title}
      </h2>
      {lede ? <p className="text-muted mt-4 text-lg leading-relaxed">{lede}</p> : null}
    </div>
  )
}
