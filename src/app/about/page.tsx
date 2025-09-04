import { Metadata } from 'next'
import { HeroSection } from '@/components/about/hero-section'
import { MissionSection } from '@/components/about/mission-section'
import { ValuesSection } from '@/components/about/values-section'
import { TeamSection } from '@/components/about/team-section'
import { PressSection } from '@/components/about/press-section'
import { CTASection } from '@/components/about/cta-section'

export const metadata: Metadata = {
  title: "About Us - Nexus Agents",
  description: "Learn about Nexus Agents' mission to empower businesses with AI automation. Meet our team of experts dedicated to transforming how companies work.",
  openGraph: {
    title: "About Us - Nexus Agents",
    description: "Learn about Nexus Agents' mission to empower businesses with AI automation. Meet our team of experts.",
    images: ["/og-about.jpg"],
  },
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <PressSection />
      <CTASection />
    </>
  )
}
