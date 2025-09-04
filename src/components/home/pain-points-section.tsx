'use client'

import { motion } from 'framer-motion'
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  ExclamationTriangleIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const painPoints = [
  {
    icon: ClockIcon,
    title: "Drowning in Repetitive Tasks",
    description: "Your team spends 40+ hours weekly on manual data entry, email responses, and routine processes that could be automated.",
    impact: "40+ hours wasted weekly"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Skyrocketing Operational Costs",
    description: "Manual processes are expensive. Every repetitive task costs you money that could be invested in growth and innovation.",
    impact: "60% higher costs"
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Human Error & Inconsistency",
    description: "Manual work leads to mistakes, missed opportunities, and inconsistent customer experiences that hurt your brand.",
    impact: "15% error rate"
  },
  {
    icon: UserGroupIcon,
    title: "Team Burnout & Turnover",
    description: "Your best people are leaving because they're stuck doing boring, repetitive work instead of meaningful, strategic tasks.",
    impact: "30% higher turnover"
  }
]

export function PainPointsSection() {
  return (
    <Section background="muted" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-accent-coral/10 text-accent-coral text-sm font-medium mb-6"
        >
          ⚠️ The Hidden Cost of Manual Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Is Your Business Stuck in the{' '}
          <span className="text-accent-coral">Stone Age</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          While your competitors automate and scale, are you still doing everything manually? 
          Here's what it's really costing you...
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {painPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" hover className="h-full">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-coral/10 rounded-lg flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-accent-coral" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {point.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral text-sm font-medium">
                      📊 {point.impact}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-accent-coral/10 to-electric-teal/10 rounded-2xl p-8 border border-accent-coral/20">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Break Free from Manual Work?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't let your business fall behind. See how AI automation can transform 
            your operations in just 15 minutes.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#benefits"
              className="inline-flex items-center px-6 py-3 bg-accent-coral text-white rounded-lg font-medium hover:bg-accent-coral/90 transition-colors duration-200"
            >
              See the Solution
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
