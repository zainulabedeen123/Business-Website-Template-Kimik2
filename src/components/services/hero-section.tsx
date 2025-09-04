'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  "Custom AI solutions tailored to your business",
  "60% reduction in operational costs",
  "40+ hours saved per week",
  "99.9% uptime and reliability",
  "24/7 expert support and monitoring"
]

export function HeroSection() {
  return (
    <Section background="gradient" padding="xl" animate={false}>
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-teal/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-coral/20 rounded-full blur-3xl" />
        </div>

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
            >
              🛠️ Our Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Complete{' '}
              <span className="gradient-text">
                AI Automation Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              From strategy to implementation, we provide end-to-end AI automation services 
              that transform how your business operates. Choose from our comprehensive suite 
              of solutions or let us create a custom package for your unique needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckIcon className="w-5 h-5 text-electric-teal flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-4"
                asChild
              >
                <Link href="/contact">
                  Get Custom Quote
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              >
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Service Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🔍', title: 'AI Audits', desc: 'Workflow Analysis' },
                { icon: '🤖', title: 'Custom Agents', desc: 'Tailored Solutions' },
                { icon: '🔗', title: 'Integrations', desc: 'Seamless Connections' },
                { icon: '💬', title: 'AI Chatbots', desc: '24/7 Support' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-electric-teal/20 backdrop-blur-sm rounded-lg p-4 border border-electric-teal/30"
            >
              <div className="text-electric-teal font-bold">150+ Projects</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -right-4 bg-accent-coral/20 backdrop-blur-sm rounded-lg p-4 border border-accent-coral/30"
            >
              <div className="text-accent-coral font-bold">99.9% Success</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
