'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UsersIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const values = [
  {
    icon: HeartIcon,
    title: "Human-Centric",
    description: "Technology should enhance human capabilities, not replace them. We design AI that amplifies what makes us uniquely human.",
    color: "text-red-500"
  },
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    description: "We're constantly exploring new possibilities, pushing boundaries, and finding creative solutions to complex challenges.",
    color: "text-yellow-500"
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust & Transparency",
    description: "We build relationships on honesty, deliver on our promises, and maintain the highest standards of data security.",
    color: "text-green-500"
  },
  {
    icon: RocketLaunchIcon,
    title: "Results-Driven",
    description: "Every solution we create is measured by its impact on your business. We're not satisfied unless you're seeing real ROI.",
    color: "text-blue-500"
  },
  {
    icon: UsersIcon,
    title: "Collaborative Partnership",
    description: "We don't just work for you; we work with you. Your success is our success, and we're invested in your long-term growth.",
    color: "text-purple-500"
  },
  {
    icon: SparklesIcon,
    title: "Continuous Excellence",
    description: "We're never done improving. Every project teaches us something new, and we apply those learnings to serve you better.",
    color: "text-electric-teal"
  }
]

export function ValuesSection() {
  return (
    <Section background="muted" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6"
        >
          💎 Our Values
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          The Principles That{' '}
          <span className="gradient-text">Guide Everything We Do</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Our values aren't just words on a wall – they're the foundation of every 
          decision we make and every solution we build.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" hover className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-electric-teal/20 to-accent-coral/20 flex items-center justify-center`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Culture Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-midnight-navy to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          Our Culture in Action
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          These values create a culture where innovation thrives, relationships matter, 
          and every team member is empowered to make a meaningful impact.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-electric-teal mb-2">4.9/5</div>
            <div className="text-gray-300">Employee Satisfaction</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-electric-teal mb-2">98%</div>
            <div className="text-gray-300">Client Retention Rate</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-electric-teal mb-2">24h</div>
            <div className="text-gray-300">Average Response Time</div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
