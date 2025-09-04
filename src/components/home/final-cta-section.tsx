'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  "Free 15-minute consultation",
  "Custom automation roadmap",
  "ROI projection for your business",
  "No obligation or pressure"
]

const urgencyFactors = [
  "⏰ Your competitors are already automating",
  "💰 Every day costs you money in manual work",
  "📈 Q1 is the perfect time to implement changes",
  "🎯 Limited spots available this month"
]

export function FinalCTASection() {
  return (
    <Section background="gradient" padding="xl">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-teal/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-coral/20 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
          >
            🚀 Ready to Transform Your Business?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6"
          >
            Stop Wasting Time on{' '}
            <span className="gradient-text">Manual Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
          >
            Book a 15-minute discovery call and see exactly how AI automation 
            can save you 40+ hours per week and cut costs by 60%.
          </motion.p>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Button 
              variant="cta" 
              size="xl" 
              className="text-xl px-12 py-6 shadow-2xl"
              asChild
            >
              <Link href="/contact">
                Book Your Free Discovery Call
                <ArrowRightIcon className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <p className="text-gray-300 text-sm mt-4">
              ⚡ Usually booked within 24 hours • No credit card required
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-electric-teal" />
                </div>
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Why You Need to Act Now
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {urgencyFactors.map((factor, index) => (
                <motion.div
                  key={factor}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-left text-gray-200"
                >
                  {factor}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-6">
              Join 150+ businesses that have already transformed their operations
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-teal">150+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-teal">$50M+</div>
                <div className="text-gray-400 text-sm">Saved Annually</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-teal">99.9%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Alternative CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-4">
              Not ready for a call? Start with our free resources:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/blog/roi-calculator-ai-automation-savings">
                  Calculate Your ROI
                </Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
