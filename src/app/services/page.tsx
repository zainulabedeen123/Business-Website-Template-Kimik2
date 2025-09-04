import { Metadata } from 'next'
import { HeroSection } from '@/components/services/hero-section'
import { ServicesGrid } from '@/components/services/services-grid'
import { ProcessSection } from '@/components/services/process-section'
import { PricingSection } from '@/components/services/pricing-section'
import { FAQSection } from '@/components/services/faq-section'
import { CTASection } from '@/components/services/cta-section'

export const metadata: Metadata = {
  title: "AI Automation Services - Nexus Agents",
  description: "Comprehensive AI automation services including workflow audits, custom AI agents, integrations, chatbots, and managed support. Transform your business operations today.",
  openGraph: {
    title: "AI Automation Services - Nexus Agents",
    description: "Comprehensive AI automation services to transform your business operations. Custom AI agents, workflow automation, and more.",
    images: ["/og-services.jpg"],
  },
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
