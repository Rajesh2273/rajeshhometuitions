import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FaqAccordion } from '@/components/faq-accordion'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { faqs } from '@/lib/content'

export function FaqPreview() {
  return (
    <section
      aria-labelledby="faq-preview-heading"
      className="border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="faq-preview-heading"
              eyebrow="Common Questions"
              title="Clear Answers for Confident Decisions"
              description="Find quick answers about classes, tutor matching, schedules, locations, and how to begin."
            />
            <Button
              asChild
              variant="outline"
              className="mt-8 w-fit rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-card"
            >
              <Link href="/faq">
                Read All FAQs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
      </div>
    </section>
  )
}
