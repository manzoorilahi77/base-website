import { Accordion, type AccordionItem } from '@/components/ui/accordion'
import { Section, SectionHeading } from '@/components/ui/section'

/**
 * PLACEHOLDER QUESTIONS.
 *
 * Replace with the questions the business is actually asked. Answers must be truthful;
 * never invent pricing, turnaround times, warranties, or service areas.
 */
const FAQ_ITEMS: readonly AccordionItem[] = [
  {
    question: 'Question one goes here?',
    answer: 'Answer one goes here. Keep it to a short paragraph.',
  },
  {
    question: 'Question two goes here?',
    answer: 'Answer two goes here. Keep it to a short paragraph.',
  },
  {
    question: 'Question three goes here?',
    answer: 'Answer three goes here. Keep it to a short paragraph.',
  },
  {
    question: 'Question four goes here?',
    answer: 'Answer four goes here. Keep it to a short paragraph.',
  },
  {
    question: 'Question five goes here?',
    answer: 'Answer five goes here. Keep it to a short paragraph.',
  },
]

export function Faq() {
  return (
    <Section id="faq" surface labelledBy="faq-heading">
      <SectionHeading id="faq-heading" eyebrow="FAQ" title="Common questions" />
      <div className="mt-10 max-w-3xl">
        <Accordion items={FAQ_ITEMS} />
      </div>
    </Section>
  )
}
