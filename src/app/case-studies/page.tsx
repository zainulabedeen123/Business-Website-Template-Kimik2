import { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Case Studies - Real AI Automation Success Stories | Nexus Agents",
  description: "See how businesses like yours have transformed their operations with AI automation. Real results, measurable ROI, and proven success stories.",
}

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Giant Saves $2M Annually",
    company: "RetailMax",
    industry: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    challenge: "Manual order processing and customer service bottlenecks",
    solution: "AI-powered order automation and intelligent chatbot system",
    results: ["90% reduction in processing time", "$2M annual cost savings", "99.5% order accuracy"],
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
    challenge: "Customer onboarding and support bottlenecks limiting growth",
    solution: "Automated onboarding flow and AI-powered support system",
    results: ["10x user growth with same team", "85% faster onboarding", "40% increase in retention"],
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
    challenge: "Quality control issues and inventory management inefficiencies",
    solution: "AI-powered quality inspection and inventory optimization",
    results: ["95% reduction in defects", "30% inventory cost savings", "50% faster production cycles"],
    metric: "95%",
    metricLabel: "Error Reduction",
    slug: "precisiontech-quality-improvement"
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Real Businesses, Real{' '}
            <span className="gradient-text">Results</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            See how companies like yours have transformed their operations with AI automation. 
            These aren't just case studies – they're proof of what's possible.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section background="default" padding="xl">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <Card key={study.id} variant="elevated" hover className="h-full overflow-hidden">
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-electric-teal text-midnight-navy px-3 py-1 rounded-full text-sm font-bold">
                    {study.metric}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{study.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{study.industry}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-electric-teal rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/case-studies/${study.slug}`}>
                      Read Full Story
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these successful companies and see how AI automation can transform your business operations.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">
              Start Your Transformation
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
