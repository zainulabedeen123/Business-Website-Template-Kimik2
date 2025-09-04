'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: "How long does it take to implement AI automation?",
    answer: "Implementation timelines vary based on complexity. Simple automations can be deployed in 2-4 weeks, while comprehensive custom solutions may take 6-12 weeks. We provide detailed timelines during the discovery phase."
  },
  {
    question: "What's the typical ROI for AI automation projects?",
    answer: "Most clients see 300-500% ROI within the first year. Typical savings include 40+ hours per week in manual work, 60% reduction in operational costs, and significant improvements in accuracy and consistency."
  },
  {
    question: "Do you work with existing software and tools?",
    answer: "Absolutely! We specialize in integrating with your existing tech stack. Whether you use Salesforce, HubSpot, Slack, or custom software, we ensure seamless integration without disrupting your current workflows."
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive ongoing support including 24/7 monitoring, regular optimization, troubleshooting, and updates. Our managed support plans ensure your AI agents continue performing at peak efficiency."
  },
  {
    question: "Is my data secure with AI automation?",
    answer: "Data security is our top priority. We implement enterprise-grade security measures, comply with GDPR and SOC 2 standards, and ensure all data processing happens within secure, encrypted environments."
  },
  {
    question: "Can AI automation work for small businesses?",
    answer: "Yes! We've designed scalable solutions for businesses of all sizes. Our entry-level packages start at $2,500 and can deliver significant value even for small teams by automating repetitive tasks and improving efficiency."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section background="default" padding="xl">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Get answers to common questions about our AI automation services and implementation process.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="bordered" className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
