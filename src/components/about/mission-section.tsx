'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

export function MissionSection() {
  return (
    <Section background="default" padding="xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6">
            🎯 Our Mission
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Businesses Through{' '}
            <span className="gradient-text">Intelligent Automation</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We founded Nexus Agents with a simple belief: every business deserves to operate 
              at peak efficiency without being bogged down by repetitive, manual tasks.
            </p>
            
            <p>
              Our mission is to democratize AI automation, making it accessible and affordable 
              for businesses of all sizes. We don't just build AI agents – we craft intelligent 
              solutions that understand your unique workflows and adapt to your specific needs.
            </p>
            
            <p>
              By 2030, we envision a world where every business can focus on innovation and 
              growth while AI handles the routine work. We're not just automating processes; 
              we're liberating human potential.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card variant="elevated" className="p-8">
            <CardContent>
              <div className="space-y-8">
                {/* Vision Statement */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-teal/20 to-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-electric-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where AI and humans work in perfect harmony, 
                    with technology handling the mundane so people can focus on the meaningful.
                  </p>
                </div>

                {/* Core Principles */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: '🎯', title: 'Purpose-Driven', desc: 'Every solution serves a clear business goal' },
                    { icon: '🔧', title: 'Practical', desc: 'Real-world solutions that work from day one' },
                    { icon: '🤝', title: 'Partnership', desc: 'We succeed when our clients succeed' },
                    { icon: '🚀', title: 'Innovation', desc: 'Always pushing the boundaries of what\'s possible' }
                  ].map((principle, index) => (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-2xl mb-2">{principle.icon}</div>
                      <h4 className="font-medium mb-1">{principle.title}</h4>
                      <p className="text-xs text-muted-foreground">{principle.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 bg-electric-teal/10 backdrop-blur-sm rounded-lg p-4 border border-electric-teal/20"
          >
            <div className="text-electric-teal font-bold text-sm">150+ Clients</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-4 -right-4 bg-accent-coral/10 backdrop-blur-sm rounded-lg p-4 border border-accent-coral/20"
          >
            <div className="text-accent-coral font-bold text-sm">99.9% Uptime</div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
