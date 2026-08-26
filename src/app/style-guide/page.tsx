import type { Metadata } from 'next'

import { Accordion } from '@/components/ui/accordion'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Field } from '@/components/ui/field'
import { SectionHeading } from '@/components/ui/section'
import { noIndexMetadata } from '@/lib/metadata'
import {
  accentText,
  activeFonts,
  activeTheme,
  mutedText,
  onAccent,
  THEME_ROLES,
} from '@/themes/active'
import { contrastRatioLabel, wcagGrade } from '@/themes/contrast'

export const metadata: Metadata = {
  title: 'Style guide',
  robots: noIndexMetadata,
}

const TYPE_SCALE = [
  { className: 'text-5xl', label: 'text-5xl', note: 'Hero headline' },
  { className: 'text-4xl', label: 'text-4xl', note: 'Section heading' },
  { className: 'text-3xl', label: 'text-3xl', note: 'Section heading, small' },
  { className: 'text-2xl', label: 'text-2xl', note: 'Card heading' },
  { className: 'text-xl', label: 'text-xl', note: 'Sub-heading' },
  { className: 'text-lg', label: 'text-lg', note: 'Lede / large body' },
  { className: 'text-base', label: 'text-base', note: 'Body' },
  { className: 'text-sm', label: 'text-sm', note: 'Meta, captions' },
] as const

function Swatch({
  label,
  hex,
  cssVar,
  swatchClass,
  applied,
  note,
  against,
}: {
  label: string
  hex: string
  cssVar: string
  swatchClass: string
  /** Set when the value actually rendered differs from the library value. */
  applied?: string
  note?: string
  /**
   * What this colour has to be legible against, and the name to show.
   * Omitted for roles that ARE a background - grading those against themselves
   * would print a meaningless "Fail" and hide real problems.
   */
  against?: { color: string; label: string }
}) {
  const shown = applied ?? hex
  const grade = against ? wcagGrade(against.color, shown) : null

  return (
    <div className="border-muted/20 overflow-hidden rounded-lg border">
      <div className={`h-24 w-full ${swatchClass}`} />
      <div className="bg-surface p-4">
        <p className="text-text font-semibold">{label}</p>
        <p className="text-muted mt-1 font-mono text-sm uppercase">{hex}</p>
        {applied && applied !== hex ? (
          <p className="text-muted mt-1 font-mono text-sm uppercase">&rarr; applied {applied}</p>
        ) : null}
        <p className="text-muted mt-2 font-mono text-xs">{cssVar}</p>
        {against && grade ? (
          <p className="text-muted mt-2 text-xs">
            vs {against.label}: {contrastRatioLabel(against.color, shown)}{' '}
            <span className={grade === 'Fail' ? 'text-negative' : 'text-positive'}>({grade})</span>
          </p>
        ) : (
          <p className="text-muted mt-2 text-xs italic">Background role - not graded.</p>
        )}
        {note ? <p className="text-muted mt-2 text-xs italic">{note}</p> : null}
      </div>
    </div>
  )
}

export default function StyleGuidePage() {
  const roleValues: Record<string, string> = {
    bg: activeTheme.bg,
    surface: activeTheme.surface,
    text: activeTheme.text,
    muted: activeTheme.muted,
    accent: activeTheme.accent,
    positive: activeTheme.positive,
    negative: activeTheme.negative,
  }

  const swatchClasses: Record<string, string> = {
    bg: 'bg-bg',
    surface: 'bg-surface',
    text: 'bg-text',
    muted: 'bg-muted',
    accent: 'bg-accent',
    positive: 'bg-positive',
    negative: 'bg-negative',
  }

  return (
    <main id="main" className="flex-1 py-16">
      <Container>
        <header className="border-muted/20 mb-14 border-b pb-10">
          <p className="text-accent-text mb-3 text-sm font-semibold tracking-[0.14em] uppercase">
            Development only
          </p>
          <h1 className="text-text text-4xl font-semibold sm:text-5xl">Style guide</h1>
          <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
            The active theme, rendered through the same Tailwind tokens the site uses. If a swatch
            here disagrees with its hex label, a token is mis-wired.
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-muted text-xs tracking-[0.14em] uppercase">Combo</dt>
              <dd className="text-text font-semibold">
                {activeTheme.id} &middot; {activeTheme.name}
              </dd>
            </div>
            <div>
              <dt className="text-muted text-xs tracking-[0.14em] uppercase">Mode</dt>
              <dd className="text-text font-semibold">
                {activeTheme.mode}
                {activeTheme.tone ? `, ${activeTheme.tone}` : ''}
              </dd>
            </div>
            <div>
              <dt className="text-muted text-xs tracking-[0.14em] uppercase">Type direction</dt>
              <dd className="text-text font-semibold">
                {activeTheme.type.id} &middot; {activeTheme.type.name}
              </dd>
            </div>
            <div>
              <dt className="text-muted text-xs tracking-[0.14em] uppercase">Best for</dt>
              <dd className="text-text font-semibold">{activeTheme.bestFor}</dd>
            </div>
          </dl>
        </header>

        {/* --- Colour roles --- */}
        <section aria-labelledby="roles-heading" className="mb-16">
          <SectionHeading
            id="roles-heading"
            title="Colour roles"
            lede="All seven roles of the active combo."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {THEME_ROLES.map((role) => (
              <Swatch
                key={role.role}
                label={role.label}
                hex={roleValues[role.role] ?? ''}
                cssVar={role.cssVar}
                swatchClass={swatchClasses[role.role] ?? ''}
                applied={role.role === 'muted' ? mutedText : undefined}
                against={
                  role.role === 'bg' || role.role === 'surface'
                    ? undefined
                    : { color: activeTheme.bg, label: 'background' }
                }
                note={
                  role.role === 'muted' && mutedText !== activeTheme.muted
                    ? 'Deepened from the library value to reach AA for body text.'
                    : undefined
                }
              />
            ))}
            <Swatch
              label="Accent text (computed)"
              hex={activeTheme.accent}
              applied={accentText}
              cssVar="--color-accent-text"
              swatchClass="bg-accent-text"
              against={{ color: activeTheme.bg, label: 'background' }}
              note="Accent used as type. Fills keep the raw accent."
            />
            <Swatch
              label="On accent (computed)"
              hex={onAccent}
              cssVar="--color-on-accent"
              swatchClass="bg-on-accent"
              against={{ color: activeTheme.accent, label: 'accent' }}
              note="Most legible theme colour on an accent fill."
            />
          </div>
        </section>

        {/* --- Typography --- */}
        <section aria-labelledby="type-heading" className="mb-16">
          <SectionHeading
            id="type-heading"
            title="Typography"
            lede={`Display: ${activeFonts.display.label}. Body: ${activeFonts.body.label}.`}
          />

          <div className="mt-8 space-y-8">
            <div>
              <p className="text-muted mb-4 font-mono text-xs tracking-[0.14em] uppercase">
                font-display &middot; {activeFonts.display.label} &middot;{' '}
                {activeFonts.display.cssVar}
              </p>
              <div className="space-y-3">
                {TYPE_SCALE.map((step) => (
                  <div key={step.label} className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="text-muted w-24 shrink-0 font-mono text-xs">{step.label}</span>
                    <span className={`font-display text-text font-semibold ${step.className}`}>
                      The quick brown fox
                    </span>
                    <span className="text-muted text-xs">{step.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-muted/20 border-t pt-8">
              <p className="text-muted mb-4 font-mono text-xs tracking-[0.14em] uppercase">
                font-body &middot; {activeFonts.body.label} &middot; {activeFonts.body.cssVar}
              </p>
              <p className="text-text font-body max-w-2xl text-lg leading-relaxed">
                Body copy set in {activeFonts.body.label}. The quick brown fox jumps over the lazy
                dog. 0123456789 &mdash; punctuation, &ldquo;quotes&rdquo;, and an em dash.
              </p>
              <p className="text-muted font-body mt-4 max-w-2xl leading-relaxed">
                Muted body copy, used for supporting text throughout the site.
              </p>
            </div>
          </div>
        </section>

        {/* --- Primitives --- */}
        <section aria-labelledby="primitives-heading" className="mb-16">
          <SectionHeading
            id="primitives-heading"
            title="UI primitives"
            lede="Every reusable component in the repo."
          />

          <div className="mt-8 space-y-10">
            <div>
              <h3 className="text-text mb-4 font-semibold">Buttons</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button disabled>Disabled</Button>
                <ButtonLink href="/style-guide">Button link</ButtonLink>
              </div>
            </div>

            <div>
              <h3 className="text-text mb-4 font-semibold">Card</h3>
              <Card className="max-w-md">
                <h4 className="text-text font-display text-xl font-semibold">Card heading</h4>
                <p className="text-muted mt-3 leading-relaxed">
                  Cards sit on the surface role and carry a muted border.
                </p>
              </Card>
            </div>

            <div>
              <h3 className="text-text mb-4 font-semibold">Form fields</h3>
              <div className="max-w-md space-y-4">
                <Field id="sg-name" label="Name" required>
                  {(props) => <input {...props} type="text" defaultValue="" />}
                </Field>
                <Field id="sg-email" label="Email" error="Please enter a valid email address.">
                  {(props) => <input {...props} type="email" defaultValue="not-an-email" />}
                </Field>
                <Field id="sg-message" label="Message" hint="Optional">
                  {(props) => <textarea {...props} rows={3} defaultValue="" />}
                </Field>
              </div>
            </div>

            <div>
              <h3 className="text-text mb-4 font-semibold">Accordion</h3>
              <div className="max-w-2xl">
                <Accordion
                  items={[
                    { question: 'First disclosure item', answer: 'Its panel content.' },
                    { question: 'Second disclosure item', answer: 'Its panel content.' },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
