'use client'

import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    value: 'hello@nexusagents.com',
    href: 'mailto:hello@nexusagents.com'
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: 'Speak directly with our automation experts',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    description: 'Our headquarters in the heart of tech innovation',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,+CA'
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    description: 'When you can reach us for immediate assistance',
    value: 'Mon-Fri: 9AM-6PM PST',
    href: null
  }
]

export function ContactInfo() {
  return (
    <Section background="default" padding="xl">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Other Ways to <span className="gradient-text">Reach Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Choose the method that works best for you. We're here to help and 
          answer any questions about AI automation for your business.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              variant="elevated" 
              hover={!!method.href}
              onClick={method.href ? () => window.open(method.href, '_blank') : undefined}
              className="h-full text-center"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-electric-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-electric-teal" />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                <div className={`font-medium ${method.href ? 'text-electric-teal' : ''}`}>
                  {method.value}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* FAQ Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card variant="elevated" className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-electric-teal/10 to-accent-coral/10 border-electric-teal/20">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Check out our frequently asked questions or reach out directly. 
              We're here to help you understand how AI automation can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services#faq"
                className="inline-flex items-center justify-center px-6 py-3 bg-electric-teal text-midnight-navy rounded-lg font-medium hover:bg-electric-teal/90 transition-colors duration-200"
              >
                View FAQ
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 border border-electric-teal text-electric-teal rounded-lg font-medium hover:bg-electric-teal/10 transition-colors duration-200"
              >
                See Success Stories
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  )
}
