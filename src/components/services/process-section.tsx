'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current workflows, identify automation opportunities, and create a strategic roadmap.',
    duration: '1-2 weeks'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Custom solution design with detailed specifications, timelines, and success metrics.',
    duration: '1 week'
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Build and rigorously test your AI agents in a controlled environment before deployment.',
    duration: '2-6 weeks'
  },
  {
    number: '04',
    title: 'Deployment & Training',
    description: 'Seamless implementation with comprehensive team training and documentation.',
    duration: '1 week'
  },
  {
    number: '05',
    title: 'Optimization & Support',
    description: 'Ongoing monitoring, optimization, and support to ensure maximum performance.',
    duration: 'Ongoing'
  }
]

export function ProcessSection() {
  return (
    <Section background="muted" padding="xl">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Proven <span className="gradient-text">Implementation Process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          From initial consultation to ongoing support, our structured approach ensures 
          successful AI automation implementation every time.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="h-full text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-electric-teal text-midnight-navy rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                <div className="text-xs text-electric-teal font-medium">{step.duration}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
