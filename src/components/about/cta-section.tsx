'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <Section background="gradient" padding="xl">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-teal/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-coral/20 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
          >
            🚀 Ready to Get Started?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Build Your{' '}
            <span className="gradient-text">First AI Agent</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
          >
            Join 150+ businesses that have already transformed their operations with our AI automation solutions. 
            Your journey to 60% cost savings and 40+ hours of freed time starts with a simple conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              variant="cta" 
              size="xl" 
              className="text-lg px-8 py-4"
              asChild
            >
              <Link href="/contact">
                Book Your Discovery Call
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-electric-teal mb-2">15 min</div>
              <div className="text-gray-300">Free Discovery Call</div>
              <div className="text-gray-400 text-sm mt-1">No commitment required</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-electric-teal mb-2">24h</div>
              <div className="text-gray-300">Response Time</div>
              <div className="text-gray-400 text-sm mt-1">We'll get back to you fast</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-electric-teal mb-2">100%</div>
              <div className="text-gray-300">Satisfaction Guarantee</div>
              <div className="text-gray-400 text-sm mt-1">Your success is our priority</div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-4">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a 
                href="mailto:hello@nexusagents.com" 
                className="text-electric-teal hover:text-electric-teal/80 transition-colors duration-200"
              >
                hello@nexusagents.com
              </a>
              <span className="hidden sm:inline text-gray-500">•</span>
              <a 
                href="tel:+15551234567" 
                className="text-electric-teal hover:text-electric-teal/80 transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
