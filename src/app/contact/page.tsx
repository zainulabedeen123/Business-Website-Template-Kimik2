import { Metadata } from 'next'
import { HeroSection } from '@/components/contact/hero-section'
import { ContactForm } from '@/components/contact/contact-form'
import { CalendlySection } from '@/components/contact/calendly-section'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: "Contact Us - Book Your Free Discovery Call | Nexus Agents",
  description: "Ready to automate your business? Book a free 15-minute discovery call or contact our AI automation experts. Get your custom quote today.",
  openGraph: {
    title: "Contact Us - Book Your Free Discovery Call | Nexus Agents",
    description: "Ready to automate your business? Book a free 15-minute discovery call with our AI automation experts.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <CalendlySection />
      <ContactForm />
      <ContactInfo />
    </>
  )
}
