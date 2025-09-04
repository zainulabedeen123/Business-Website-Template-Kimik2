'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    id: 'ai-workflow-audits',
    icon: '🔍',
    title: 'AI Workflow Audits',
    description: 'Comprehensive analysis of your current processes to identify automation opportunities and create a strategic roadmap.',
    features: [
      'Process mapping and analysis',
      'ROI projections and timelines',
      'Custom automation roadmap',
      'Implementation priority matrix'
    ],
    pricing: 'Starting at $2,500',
    timeline: '1-2 weeks',
    slug: 'ai-workflow-audits',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'custom-ai-agents',
    icon: '🤖',
    title: 'Custom AI Agent Development',
    description: 'Bespoke AI agents designed specifically for your business needs, workflows, and industry requirements.',
    features: [
      'Custom AI model training',
      'Workflow integration',
      'Real-time monitoring',
      'Continuous optimization'
    ],
    pricing: 'Starting at $15,000',
    timeline: '4-8 weeks',
    slug: 'custom-ai-agents',
    color: 'from-electric-teal/20 to-green-500/20',
    borderColor: 'border-electric-teal/30'
  },
  {
    id: 'integrations',
    icon: '🔗',
    title: 'Zapier/Make Integrations',
    description: 'Seamless connections between your existing tools and new AI agents for unified workflow automation.',
    features: [
      'Multi-platform integrations',
      'Data synchronization',
      'Error handling & monitoring',
      'Custom webhook development'
    ],
    pricing: 'Starting at $5,000',
    timeline: '2-4 weeks',
    slug: 'integrations',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 'ai-chatbots',
    icon: '💬',
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents for customer support, lead qualification, and internal assistance.',
    features: [
      'Natural language processing',
      'Multi-channel deployment',
      'Knowledge base integration',
      'Analytics and insights'
    ],
    pricing: 'Starting at $8,000',
    timeline: '3-5 weeks',
    slug: 'ai-chatbots',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    id: 'managed-support',
    icon: '🛠️',
    title: 'Managed Automation Support',
    description: 'Ongoing maintenance, optimization, and support for all your AI automation systems.',
    features: [
      '24/7 monitoring and support',
      'Performance optimization',
      'Regular updates and improvements',
      'Dedicated account manager'
    ],
    pricing: 'Starting at $3,000/month',
    timeline: 'Ongoing',
    slug: 'managed-support',
    color: 'from-accent-coral/20 to-yellow-500/20',
    borderColor: 'border-accent-coral/30'
  }
]

export function ServicesGrid() {
  return (
    <Section id="services" background="default" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6"
        >
          🛠️ Our Service Portfolio
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Everything You Need to{' '}
          <span className="gradient-text">Automate Your Business</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          From initial strategy to ongoing support, our comprehensive service suite 
          covers every aspect of AI automation implementation and management.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={index === 4 ? 'xl:col-span-3 xl:max-w-md xl:mx-auto' : ''}
          >
            <Card variant="elevated" hover className="h-full overflow-hidden group">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${service.color} p-6 border-b ${service.borderColor}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{service.pricing}</span>
                      <span>•</span>
                      <span>{service.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6 flex-1">
                  <h4 className="font-medium mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-electric-teal rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-electric-teal hover:text-electric-teal/80 font-medium text-sm transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </Link>
                  
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Custom Solutions CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-midnight-navy to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          Need Something Custom?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Every business is unique. If our standard services don't fit your exact needs, 
          we'll create a custom solution that does. Let's discuss your specific requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">
              Discuss Custom Solution
            </Link>
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
            <Link href="/case-studies">
              View Custom Projects
            </Link>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
