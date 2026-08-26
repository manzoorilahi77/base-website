'use client'

import { useId, useState } from 'react'

import { cn } from '@/lib/cn'

export interface AccordionItem {
  question: string
  answer: string
}

/**
 * WAI-ARIA APG disclosure pattern: a real <button> per item carrying aria-expanded
 * and aria-controls. Keyboard operable for free (Tab to move, Enter/Space to toggle)
 * and announced correctly by screen readers.
 */
export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="border-muted/20 divide-muted/20 divide-y border-t border-b">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-trigger-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="text-text flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'text-accent-text shrink-0 text-2xl leading-none transition-transform duration-200',
                    isOpen && 'rotate-45',
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="text-muted pb-5 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
