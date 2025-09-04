import { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "AI Automation Blog - Insights & Best Practices | Nexus Agents",
  description: "Learn about AI automation, business process optimization, and industry best practices. Expert insights to help you automate smarter.",
}

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
  },
  {
    id: 4,
    title: "The Complete Guide to AI Chatbot Implementation",
    excerpt: "Step-by-step guide to implementing AI chatbots that actually help your customers and reduce support costs.",
    author: "David Kim",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-08",
    readingTime: "10 min read",
    category: "Chatbots",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
    slug: "complete-guide-ai-chatbot-implementation"
  },
  {
    id: 5,
    title: "5 Common AI Automation Mistakes (And How to Avoid Them)",
    excerpt: "Learn from others' mistakes. These common pitfalls can derail your automation project before it starts.",
    author: "Lisa Thompson",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-05",
    readingTime: "7 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    slug: "5-common-ai-automation-mistakes"
  },
  {
    id: 6,
    title: "The Future of Work: Humans + AI = Success",
    excerpt: "Explore how the most successful companies are combining human creativity with AI efficiency to create competitive advantages.",
    author: "Alex Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-03",
    readingTime: "9 min read",
    category: "Future of Work",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    slug: "future-of-work-humans-ai-success"
  }
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Learn to Automate{' '}
            <span className="gradient-text">Smarter</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Expert insights, best practices, and actionable strategies for implementing 
            AI automation in your business. Stay ahead of the curve.
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="default" padding="xl">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              variant="elevated" 
              hover 
              className={`h-full overflow-hidden ${post.featured ? 'ring-2 ring-electric-teal/20' : ''}`}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-electric-teal text-midnight-navy px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
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

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>

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
                      className="text-electric-teal hover:text-electric-teal/80 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
