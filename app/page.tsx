import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { FaqStructuredData } from '@/components/faq-accordion'
import { AcademicLevels } from '@/components/home/academic-levels'
import { AreasPreview } from '@/components/home/areas-preview'
import { Differentiators } from '@/components/home/differentiators'
import { FaqPreview } from '@/components/home/faq-preview'
import { Hero } from '@/components/home/hero'
import { LearningModel } from '@/components/home/learning-model'
import { MatchingProcess } from '@/components/home/matching-process'
import { ParentFeedback } from '@/components/home/parent-feedback'
import { ServicesPreview } from '@/components/home/services-preview'
import { ValuePanel } from '@/components/home/value-panel'
import { LocationMap } from '@/components/location-map'
import { faqs } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `${siteConfig.name} | Home Tuition in Kukatpally, Hyderabad`,
  description:
    'One-to-one home tuition across Hyderabad, serving students in Kukatpally, KPHB Colony, Nizampet, Pragathi Nagar, Moosapet, Miyapur, and nearby localities with focused academic support.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <FaqStructuredData items={faqs.slice(0, 5)} />
      <Hero />
      <ValuePanel />
      <Differentiators />
      <LearningModel />
      <ServicesPreview />
      <AcademicLevels />
      <AreasPreview />
      <LocationMap
        id="home-map"
        showDetails
        description="Our Tuition Office is in KPHB Phase 1, Kukatpally, Hyderabad. Visit us or use the map to plan your route before discussing your tuition requirement."
      />
      <MatchingProcess />
      <ParentFeedback />
      <FaqPreview />
      <ContactSection />
    </>
  )
}
