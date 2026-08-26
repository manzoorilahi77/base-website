import type { Metadata, Viewport } from 'next'

import { defaultMetadata } from '@/lib/metadata'
import { activeTheme, fontVariableClassName, themeStyle } from '@/themes/active'

import './globals.css'

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Follows the active combo's declared mode so browser UI matches the page.
  themeColor: activeTheme.bg,
}

/**
 * Root layout holds ONLY the theme and the document shell.
 *
 * Site chrome (skip link, header, footer) lives in `(site)/layout.tsx` so that
 * /demo-shots and /style-guide can render unchromed for screenshots.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The theme's seven roles and two font families are written here as inline custom
    // properties, so they are present in the first byte of HTML - no theme flash.
    <html
      lang="en"
      className={fontVariableClassName}
      style={themeStyle}
      data-theme={activeTheme.id}
      data-mode={activeTheme.mode}
    >
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  )
}
