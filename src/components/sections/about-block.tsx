import Image from 'next/image'

import { siteConfig } from '@/site.config'
import { Section } from '@/components/ui/section'

export function AboutBlock() {
  const { business } = siteConfig

  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-accent-text mb-3 text-sm font-semibold tracking-[0.14em] uppercase">
            About
          </p>
          <h2
            id="about-heading"
            className="text-text text-3xl leading-tight font-semibold sm:text-4xl"
          >
            About {business.name}
          </h2>
          {/* PLACEHOLDER COPY - replace with the business's real story. Do not invent
              founding dates, staff counts, or credentials. */}
          <div className="text-muted mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              Replace this paragraph with the business&apos;s story: who they are, how long they
              have worked in {business.city}, and what they are known for.
            </p>
            <p>
              Use a second paragraph for the detail that builds confidence - approach, guarantees,
              or the people who do the work.
            </p>
          </div>
        </div>

        <div className="border-muted/20 overflow-hidden rounded-lg border">
          {/*
            `unoptimized` because Next's image optimizer refuses SVG unless the
            dangerouslyAllowSVG escape hatch is enabled. Swap this for a real photo
            (JPG/PNG/WebP) and delete the prop - explicit width/height stay, so the
            slot reserves its space and nothing shifts on load.
          */}
          <Image
            src="/placeholder.svg"
            alt=""
            width={1200}
            height={900}
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    </Section>
  )
}
