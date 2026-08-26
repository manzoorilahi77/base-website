import { ImageResponse } from 'next/og'

import { siteConfig } from '@/site.config'
import { activeTheme, onAccent } from '@/themes/active'

// Applies to every route that does not define its own OG image.
export const alt = `${siteConfig.business.name} - ${siteConfig.business.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Generated OG image.
 *
 * Drawn from the active theme so the social card re-themes with everything else.
 * Colors are read from the theme object rather than written as literals - this file
 * and the theme library are the only places hex values are allowed to appear.
 *
 * System fonts are used deliberately: pulling a webfont here would add a network
 * fetch to every build for a 1200x630 image almost nobody views at full size.
 */
export default function OpengraphImage() {
  const { business } = siteConfig

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: activeTheme.bg,
        color: activeTheme.text,
        padding: '80px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '9999px',
            backgroundColor: activeTheme.accent,
          }}
        />
        <div
          style={{
            fontSize: '26px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: activeTheme.muted,
          }}
        >
          {`${business.city}, ${business.state}`}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '76px', fontWeight: 700, lineHeight: 1.1 }}>{business.name}</div>
        <div style={{ fontSize: '34px', marginTop: '20px', color: activeTheme.muted }}>
          {business.tagline}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            fontWeight: 600,
            padding: '14px 28px',
            borderRadius: '8px',
            backgroundColor: activeTheme.accent,
            color: onAccent,
          }}
        >
          {business.phone}
        </div>
        <div style={{ fontSize: '28px', color: activeTheme.muted }}>{business.domain}</div>
      </div>
    </div>,
    size,
  )
}
