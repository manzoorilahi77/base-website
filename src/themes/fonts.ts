// The twelve unique Google font families used across typography directions T1-T10.
//
// WHY ALL TWELVE ARE DECLARED HERE
// `next/font/google` resolves families at compile time, so a loader call cannot be
// built from a runtime value. Declaring all twelve is what makes switching themes a
// one-line edit in `site.config.ts`. The cost is paid at BUILD time (the compiler
// fetches all twelve); the browser still only ever downloads the two families the
// active theme actually uses. Do not "optimise" this by deleting loaders - you would
// break every theme except the current one. See CLAUDE.md.
//
// WHY EVERY LOADER SETS `preload: false`
// `next/font` emits a <link rel="preload"> for every family it is told to preload.
// With twelve declared that meant sixteen font files preloaded on every page - all
// twelve families downloaded whether used or not. `preload: false` makes the browser
// fetch a family only when it actually matches rendered text, so exactly the two
// families of the active theme are downloaded. Combined with `display: 'swap'` there
// is no invisible text while they load. Turning preload back on re-introduces the bug.
//
// Neue Haas Grotesk (listed as an alternative for T1) is not on Google Fonts, so T1
// falls back to its listed alternative, Inter. Where the reference lists "A or B",
// the first family is used for both display and body.

import {
  Bitter,
  Bodoni_Moda,
  DM_Sans,
  IBM_Plex_Sans,
  Inter,
  Jost,
  Libre_Caslon_Text,
  Nunito,
  Nunito_Sans,
  Source_Sans_3,
  Source_Serif_4,
  Zilla_Slab,
} from 'next/font/google'

import type { FontFamilyKey } from './library'

// --- variable families (no explicit weights needed) ---
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-inter',
})
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-nunito-sans',
})
const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-source-serif-4',
})
const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-bitter',
})
const jost = Jost({ subsets: ['latin'], display: 'swap', preload: false, variable: '--font-jost' })
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-dm-sans',
})
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-source-sans-3',
})
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-nunito',
})
const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-bodoni-moda',
})

// --- static families (weights must be listed explicitly) ---
const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '700'],
  variable: '--font-libre-caslon-text',
})
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})
const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '500', '600', '700'],
  variable: '--font-zilla-slab',
})

export interface FontFamily {
  /** Human-readable family name, shown on /style-guide. */
  label: string
  /** The CSS custom property `next/font` writes the family into. */
  cssVar: string
  /** The class that must be present on <html> for `cssVar` to resolve. */
  variableClassName: string
}

export const FONT_FAMILIES: Record<FontFamilyKey, FontFamily> = {
  bitter: { label: 'Bitter', cssVar: '--font-bitter', variableClassName: bitter.variable },
  bodoniModa: {
    label: 'Bodoni Moda',
    cssVar: '--font-bodoni-moda',
    variableClassName: bodoniModa.variable,
  },
  dmSans: { label: 'DM Sans', cssVar: '--font-dm-sans', variableClassName: dmSans.variable },
  ibmPlexSans: {
    label: 'IBM Plex Sans',
    cssVar: '--font-ibm-plex-sans',
    variableClassName: ibmPlexSans.variable,
  },
  inter: { label: 'Inter', cssVar: '--font-inter', variableClassName: inter.variable },
  jost: { label: 'Jost', cssVar: '--font-jost', variableClassName: jost.variable },
  libreCaslonText: {
    label: 'Libre Caslon Text',
    cssVar: '--font-libre-caslon-text',
    variableClassName: libreCaslonText.variable,
  },
  nunito: { label: 'Nunito', cssVar: '--font-nunito', variableClassName: nunito.variable },
  nunitoSans: {
    label: 'Nunito Sans',
    cssVar: '--font-nunito-sans',
    variableClassName: nunitoSans.variable,
  },
  sourceSans3: {
    label: 'Source Sans 3',
    cssVar: '--font-source-sans-3',
    variableClassName: sourceSans3.variable,
  },
  sourceSerif4: {
    label: 'Source Serif 4',
    cssVar: '--font-source-serif-4',
    variableClassName: sourceSerif4.variable,
  },
  zillaSlab: {
    label: 'Zilla Slab',
    cssVar: '--font-zilla-slab',
    variableClassName: zillaSlab.variable,
  },
}
