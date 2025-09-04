import { Metadata } from 'next'
import { HeroSection } from '@/components/home/hero-section'
import { PainPointsSection } from '@/components/home/pain-points-section'
import { BenefitsSection } from '@/components/home/benefits-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CaseStudiesPreview } from '@/components/home/case-studies-preview'
import { BlogPreview } from '@/components/home/blog-preview'
import { FinalCTASection } from '@/components/home/final-cta-section'

export const metadata: Metadata = {
  title: "Nexus Agents - AI Agents Development & Business Process Automation",
  description: "Scale your business with custom AI agents. Automate workflows, cut costs by 60%, and save 40+ hours weekly. Book your free discovery call today.",
  openGraph: {
    title: "Nexus Agents - AI Agents Development & Business Process Automation",
    description: "Scale your business with custom AI agents. Automate workflows, cut costs by 60%, and save 40+ hours weekly.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <BlogPreview />
      <FinalCTASection />
    </>
  )
}
