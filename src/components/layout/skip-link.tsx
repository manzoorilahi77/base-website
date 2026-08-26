/**
 * Visually hidden until focused, then pinned to the top-left. First thing a keyboard
 * user reaches on every page.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="bg-accent text-on-accent sr-only rounded-md px-4 py-2 font-semibold focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
    >
      Skip to content
    </a>
  )
}
