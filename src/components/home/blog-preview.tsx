'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate, getReadingTime } from '@/lib/utils'

const blogPosts = [
  {
    id: 1,
    title: "10 Business Processes You Should Automate Right Now",
    excerpt: "Discover the most impactful workflows to automate first for maximum ROI. From customer service to data entry, these processes will transform your business.",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-15",
    readingTime: "8 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    slug: "10-business-processes-automate-right-now",
    featured: true
  },
  {
    id: 2,
    title: "AI vs Human: When to Use Each in Your Business",
    excerpt: "Learn the strategic framework for deciding when AI automation makes sense and when human touch is irreplaceable.",
    author: "Marcus Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-12",
    readingTime: "6 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    slug: "ai-vs-human-business-decisions"
  },
  {
    id: 3,
    title: "ROI Calculator: How Much Can AI Automation Save You?",
    excerpt: "Use our comprehensive framework to calculate the exact ROI of implementing AI automation in your specific business context.",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-10",
    readingTime: "12 min read",
    category: "ROI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    slug: "roi-calculator-ai-automation-savings"
  }
]

export function BlogPreview() {
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
          📚 Latest Insights
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Learn How to{' '}
          <span className="gradient-text">Automate Smarter</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Stay ahead of the curve with actionable insights, case studies, 
          and best practices for business automation.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              variant="elevated" 
              hover 
              className={`h-full overflow-hidden group ${post.featured ? 'ring-2 ring-electric-teal/20' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-electric-teal text-midnight-navy px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-coral text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-electric-teal hover:text-electric-teal/80 font-medium text-sm transition-colors duration-200"
                    >
                      Read More
                      <ArrowRightIcon className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-midnight-navy to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          Get Weekly Automation Insights
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join 5,000+ business leaders who get our weekly newsletter with actionable 
          automation strategies, case studies, and industry insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-teal"
          />
          <Button variant="cta" size="lg">
            Subscribe
          </Button>
        </div>
        
        <p className="text-gray-400 text-sm">
          No spam. Unsubscribe anytime. Read by 5,000+ automation enthusiasts.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="outline" size="lg" asChild>
          <Link href="/blog">
            View All Articles
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
