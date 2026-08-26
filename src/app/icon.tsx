import { ImageResponse } from 'next/og'

import { activeTheme, onAccent } from '@/themes/active'

// Generated favicon. Deliberately NOT a binary: the template ships no image assets
// beyond one placeholder SVG, and every site replaces this with its own mark anyway.
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: activeTheme.accent,
        color: onAccent,
        borderRadius: '7px',
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: 'sans-serif',
      }}
    >
      &#9679;
    </div>,
    size,
  )
}
