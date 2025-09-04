'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses looking to automate basic workflows',
    features: [
      'AI Workflow Audit',
      'Up to 3 simple automations',
      'Basic integrations',
      '30 days support',
      'Implementation guide'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$15,000',
    description: 'Comprehensive automation for growing businesses',
    features: [
      'Everything in Starter',
      'Custom AI agent development',
      'Advanced integrations',
      'AI chatbot implementation',
      '90 days support',
      'Training sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Unlimited automations',
      'Dedicated account manager',
      'Priority support',
      'Custom integrations',
      'Ongoing optimization'
    ],
    popular: false
  }
]

export function PricingSection() {
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
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Choose the package that fits your needs. All plans include implementation, 
          training, and support to ensure your success.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              variant="elevated" 
              className={`h-full relative ${tier.popular ? 'ring-2 ring-electric-teal' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-electric-teal text-midnight-navy px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-muted-foreground"> one-time</span>}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-electric-teal mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.popular ? "cta" : "outline"} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-4">
          All plans include free consultation and custom quote based on your specific needs.
        </p>
        <p className="text-sm text-muted-foreground">
          Need something different? <Link href="/contact" className="text-electric-teal hover:underline">Contact us</Link> for a custom solution.
        </p>
      </motion.div>
    </Section>
  )
}
