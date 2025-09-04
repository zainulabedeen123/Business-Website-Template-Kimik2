'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  'Free 15-minute consultation',
  'Custom automation roadmap',
  'ROI projection for your business',
  'No obligation or pressure',
  'Expert advice and insights'
]

export function CalendlySection() {
  return (
    <Section background="default" padding="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6">
            🗓️ Book Your Call
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free{' '}
            <span className="gradient-text">Discovery Call</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            In just 15 minutes, we'll analyze your current workflows and show you 
            exactly how AI automation can transform your business operations.
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckIcon className="w-5 h-5 text-electric-teal flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <Card variant="elevated" className="p-6 bg-gradient-to-r from-electric-teal/10 to-accent-coral/10 border-electric-teal/20">
            <CardContent>
              <h3 className="font-semibold mb-2">What to Expect:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Quick overview of your current processes</li>
                <li>• Identification of automation opportunities</li>
                <li>• Estimated time and cost savings</li>
                <li>• Next steps and timeline discussion</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card variant="elevated" className="overflow-hidden">
            <CardContent className="p-0">
              {/* Calendly Embed Placeholder */}
              <div className="bg-gradient-to-br from-electric-teal/20 to-accent-coral/20 p-8 text-center min-h-[500px] flex items-center justify-center">
                <div>
                  <div className="w-16 h-16 bg-electric-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-midnight-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Calendly Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Replace this section with your actual Calendly embed code
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm text-left">
                    <code className="text-electric-teal">
                      {`<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/your-link" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async>
</script>
<!-- Calendly inline widget end -->`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
