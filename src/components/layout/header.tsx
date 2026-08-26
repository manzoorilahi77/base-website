'use client'

import Link from 'next/link'
import { useState } from 'react'

import { siteConfig } from '@/site.config'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/cn'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { business, nav } = siteConfig

  return (
    <header className="border-muted/20 bg-bg/95 sticky top-0 z-40 border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          {/* min-w-0 + truncate let a long business name shrink instead of forcing
              the row wider than the viewport. */}
          <Link
            href="/"
            className="text-text font-display min-w-0 flex-1 truncate text-lg font-semibold sm:text-xl"
          >
            {business.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted hover:text-text text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* Prominent contact action - a phone tap is the primary conversion on a
                local-business site, so it stays visible at every breakpoint. */}
            <a
              href={`tel:${business.phone}`}
              className="bg-accent text-on-accent rounded-md px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90 sm:px-4"
            >
              <span className="sr-only">Call </span>
              {business.phone}
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="text-text -mr-2 p-2 md:hidden"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {isOpen ? (
                  <>
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Main"
          hidden={!isOpen}
          className={cn('border-muted/20 border-t py-4 md:hidden')}
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text hover:bg-surface block rounded-md px-2 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
