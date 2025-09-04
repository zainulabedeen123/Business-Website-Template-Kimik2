'use client'

import { motion } from 'framer-motion'
import { 
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  {
    icon: RocketLaunchIcon,
    title: "Scale 10x Faster",
    description: "Automate workflows that used to take hours. Scale your operations without hiring more staff.",
    metric: "10x faster growth",
    color: "text-electric-teal"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cut Costs by 60%",
    description: "Reduce operational expenses dramatically while improving quality and consistency.",
    metric: "60% cost reduction",
    color: "text-green-500"
  },
  {
    icon: ClockIcon,
    title: "Save 40+ Hours Weekly",
    description: "Free up your team to focus on strategic work that actually grows your business.",
    metric: "40+ hours saved",
    color: "text-blue-500"
  },
  {
    icon: ChartBarIcon,
    title: "Boost Productivity 5x",
    description: "AI agents work 24/7 without breaks, sick days, or vacation time.",
    metric: "5x productivity",
    color: "text-purple-500"
  },
  {
    icon: ShieldCheckIcon,
    title: "99.9% Accuracy",
    description: "Eliminate human errors and ensure consistent, high-quality results every time.",
    metric: "99.9% accuracy",
    color: "text-accent-coral"
  },
  {
    icon: LightBulbIcon,
    title: "Unlock Innovation",
    description: "Free your team from mundane tasks so they can focus on creative, strategic initiatives.",
    metric: "Unlimited potential",
    color: "text-yellow-500"
  }
]

export function BenefitsSection() {
  return (
    <Section id="benefits" background="default" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6"
        >
          ✨ Transform Your Business
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          What Happens When You{' '}
          <span className="gradient-text">Automate Everything</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Stop dreaming about what your business could be. Here's exactly what happens 
          when you implement our AI automation solutions.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" hover className="h-full">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-electric-teal/20 to-accent-coral/20 flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${benefit.color} mb-2`}>
                    {benefit.metric}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ROI Calculator Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-midnight-navy to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          Calculate Your ROI in 60 Seconds
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          See exactly how much time and money you'll save with AI automation. 
          Most clients see ROI within 30 days.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-electric-teal mb-2">$50K+</div>
            <div className="text-gray-300">Average Annual Savings</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-electric-teal mb-2">30 Days</div>
            <div className="text-gray-300">Average ROI Timeline</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-electric-teal mb-2">400%</div>
            <div className="text-gray-300">Average ROI in Year 1</div>
          </div>
        </div>

        <Button variant="cta" size="lg" asChild>
          <Link href="/contact">
            Book Your Discovery Call Now
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
