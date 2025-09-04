'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Giant Saves $2M Annually",
    company: "RetailMax",
    industry: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    challenge: "Manual order processing and customer service",
    solution: "AI-powered order automation and chatbot system",
    results: [
      "90% reduction in processing time",
      "$2M annual cost savings",
      "99.5% order accuracy"
    ],
    metric: "$2M",
    metricLabel: "Annual Savings",
    slug: "retailmax-automation-success"
  },
  {
    id: 2,
    title: "SaaS Startup Scales 10x Without Hiring",
    company: "CloudSync",
    industry: "SaaS",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    challenge: "Customer onboarding and support bottlenecks",
    solution: "Automated onboarding flow and AI support agents",
    results: [
      "10x user growth with same team",
      "85% faster onboarding",
      "40% increase in retention"
    ],
    metric: "10x",
    metricLabel: "Growth Scale",
    slug: "cloudsync-scaling-success"
  },
  {
    id: 3,
    title: "Manufacturing Firm Cuts Errors by 95%",
    company: "PrecisionTech",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=250&fit=crop",
    challenge: "Quality control and inventory management",
    solution: "AI-powered quality inspection and inventory optimization",
    results: [
      "95% reduction in defects",
      "30% inventory cost savings",
      "50% faster production cycles"
    ],
    metric: "95%",
    metricLabel: "Error Reduction",
    slug: "precisiontech-quality-improvement"
  }
]

export function CaseStudiesPreview() {
  return (
    <Section background="default" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-6"
        >
          📈 Real Results
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          See How We've Transformed{' '}
          <span className="gradient-text">Real Businesses</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          From startups to enterprise companies, see the measurable impact 
          our AI automation solutions have delivered.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" hover className="h-full overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-sm font-medium mb-1">{study.industry}</div>
                  <div className="text-white/80 text-xs">{study.company}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-electric-teal text-midnight-navy px-3 py-1 rounded-full text-sm font-bold">
                    {study.metric}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg leading-tight">
                  {study.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Challenge</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Solution</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-electric-teal rounded-full mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-electric-teal hover:text-electric-teal/80 font-medium text-sm transition-colors duration-200"
                  >
                    Read Full Story
                    <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button variant="outline" size="lg" asChild>
          <Link href="/case-studies">
            View All Case Studies
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
