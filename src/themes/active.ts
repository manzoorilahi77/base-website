// Resolves the theme id in `site.config.ts` into everything the app shell needs:
// the seven color roles, the two font families, and the base color scheme.
//
// This is the only place the config and the theme library meet. Nothing else in the
// app should import `library.ts` directly except /style-guide and /demo-shots, which
// legitimately display theme data.

import { siteConfig } from '@/site.config'

import { contrastRatio, ensureContrast, pickReadable } from './contrast'
import { FONT_FAMILIES } from './fonts'
import { getTheme, type Theme } from './library'

/** CSS custom properties are not part of React's CSSProperties, so widen it. */
export type StyleWithVars = React.CSSProperties & Record<`--${string}`, string>

export const activeTheme: Theme = getTheme(siteConfig.themeId)

const displayFamily = FONT_FAMILIES[activeTheme.type.display]
const bodyFamily = FONT_FAMILIES[activeTheme.type.body]

export const activeFonts = { display: displayFamily, body: bodyFamily } as const

/**
 * A readable foreground for text sitting ON the accent colour.
 *
 * Chosen by contrast rather than hard-coded, because accent is a dark red in C39 and
 * a near-white in C48 - a fixed label colour would fail AA in one of them.
 */
export const onAccent = pickReadable(activeTheme.accent, [
  activeTheme.bg,
  activeTheme.surface,
  activeTheme.text,
])

/**
 * Text colors sit on either `bg` or `surface`, so they are validated against
 * whichever of the two is the harder background for that color.
 */
function harderBackground(color: string): string {
  return contrastRatio(color, activeTheme.bg) <= contrastRatio(color, activeTheme.surface)
    ? activeTheme.bg
    : activeTheme.surface
}

/**
 * AA-safe secondary text. Most of the library's `muted` roles are too light to carry
 * body copy, so this is what `--color-muted` actually resolves to. The untouched
 * library value stays on `activeTheme.muted` and is shown on /style-guide.
 */
export const mutedText = ensureContrast(
  activeTheme.muted,
  harderBackground(activeTheme.muted),
  activeTheme.text,
)

/** AA-safe accent for TEXT. Accent-as-a-fill keeps the raw value. */
export const accentText = ensureContrast(
  activeTheme.accent,
  harderBackground(activeTheme.accent),
  activeTheme.text,
)

/**
 * Classes that must sit on <html> so the active families' CSS variables exist.
 * De-duplicated because several directions use one family for both roles.
 */
export const fontVariableClassName = Array.from(
  new Set([displayFamily.variableClassName, bodyFamily.variableClassName]),
).join(' ')

/**
 * The seven color roles plus both font families, as CSS custom properties.
 * Applied inline on <html> in `layout.tsx` so they are present in the very first
 * byte of HTML - no flash of unstyled or mis-coloured content.
 *
 * `globals.css` maps these onto Tailwind's @theme namespace, which is why no
 * component ever needs a raw hex value.
 */
export const themeStyle: StyleWithVars = {
  colorScheme: activeTheme.mode,
  '--site-bg': activeTheme.bg,
  '--site-surface': activeTheme.surface,
  '--site-text': activeTheme.text,
  '--site-muted': mutedText,
  '--site-accent': activeTheme.accent,
  '--site-positive': activeTheme.positive,
  '--site-negative': activeTheme.negative,
  '--site-on-accent': onAccent,
  '--site-accent-text': accentText,
  '--site-font-display': `var(${displayFamily.cssVar})`,
  '--site-font-body': `var(${bodyFamily.cssVar})`,
}

/** The seven roles in reference order, for /style-guide. */
export const THEME_ROLES = [
  { role: 'bg', label: 'Background', cssVar: '--color-bg' },
  { role: 'surface', label: 'Surface', cssVar: '--color-surface' },
  { role: 'text', label: 'Text', cssVar: '--color-text' },
  { role: 'muted', label: 'Muted', cssVar: '--color-muted' },
  { role: 'accent', label: 'Accent', cssVar: '--color-accent' },
  { role: 'positive', label: 'Positive', cssVar: '--color-positive' },
  { role: 'negative', label: 'Negative', cssVar: '--color-negative' },
] as const satisfies ReadonlyArray<{
  role: keyof Pick<Theme, 'bg' | 'surface' | 'text' | 'muted' | 'accent' | 'positive' | 'negative'>
  label: string
  cssVar: string
}>
