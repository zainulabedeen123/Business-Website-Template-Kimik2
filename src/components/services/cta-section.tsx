'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <Section background="gradient" padding="xl">
      <div className="relative text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Transform Your{' '}
          <span className="gradient-text">Business Operations</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
        >
          Join 150+ businesses that have already automated their workflows and seen 
          dramatic improvements in efficiency and cost savings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            variant="cta" 
            size="xl" 
            className="text-lg px-8 py-4"
            asChild
          >
            <Link href="/contact">
              Start Your Automation Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="xl" 
            className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/case-studies">
              View Success Stories
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
