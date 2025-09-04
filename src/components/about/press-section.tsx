'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const pressFeatures = [
  {
    publication: "TechCrunch",
    headline: "Nexus Agents Raises $10M to Democratize AI Automation for SMBs",
    date: "January 2024",
    excerpt: "The startup's innovative approach to making enterprise-grade AI accessible to smaller businesses is reshaping the automation landscape.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
    url: "#"
  },
  {
    publication: "Forbes",
    headline: "The Future of Work: How AI Agents Are Transforming Business Operations",
    date: "December 2023",
    excerpt: "Nexus Agents is leading the charge in helping businesses automate complex workflows without replacing human creativity.",
    logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop",
    url: "#"
  },
  {
    publication: "VentureBeat",
    headline: "Why Smart Businesses Are Choosing AI Agents Over Traditional Automation",
    date: "November 2023",
    excerpt: "CEO Alex Chen explains how intelligent automation is creating competitive advantages for forward-thinking companies.",
    logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=100&fit=crop",
    url: "#"
  }
]

const awards = [
  {
    title: "Best AI Startup 2024",
    organization: "AI Innovation Awards",
    year: "2024",
    icon: "🏆"
  },
  {
    title: "Top 50 SaaS Companies",
    organization: "SaaS Weekly",
    year: "2023",
    icon: "🌟"
  },
  {
    title: "Innovation Excellence",
    organization: "Tech Leaders Forum",
    year: "2023",
    icon: "💡"
  },
  {
    title: "Customer Choice Award",
    organization: "G2 Crowd",
    year: "2023",
    icon: "❤️"
  }
]

const partnerships = [
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Google Cloud", logo: "Google" },
  { name: "AWS", logo: "Amazon" },
  { name: "Zapier", logo: "Zapier" },
  { name: "Salesforce", logo: "Salesforce" },
  { name: "HubSpot", logo: "HubSpot" }
]

export function PressSection() {
  return (
    <Section background="muted" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6"
        >
          📰 In the News
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Recognition & {' '}
          <span className="gradient-text">Media Coverage</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Our work is being recognized by industry leaders and featured in top publications 
          as we continue to push the boundaries of business automation.
        </motion.p>
      </div>

      {/* Press Features */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {pressFeatures.map((feature, index) => (
          <motion.div
            key={feature.publication}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" hover className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-6 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {feature.publication}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{feature.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 leading-tight">
                  {feature.headline}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.excerpt}
                </p>
                
                <a
                  href={feature.url}
                  className="inline-flex items-center text-electric-teal hover:text-electric-teal/80 font-medium text-sm transition-colors duration-200"
                >
                  Read Article
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Awards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card variant="elevated" className="p-6">
                <CardContent>
                  <div className="text-3xl mb-3">{award.icon}</div>
                  <h4 className="font-semibold mb-2">{award.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                  <p className="text-xs text-electric-teal font-medium">{award.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Partnerships */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">Trusted Partners</h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          We work with industry leaders to deliver the best possible solutions for our clients.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium text-sm">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
