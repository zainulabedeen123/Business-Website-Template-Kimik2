'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CEO",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Nexus Agents transformed our customer service. We went from 4-hour response times to instant replies, and our customer satisfaction scores jumped 40%. The ROI was immediate.",
    rating: 5,
    metric: "40% increase in satisfaction"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Operations Director",
    company: "ScaleUp Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "We were drowning in manual data entry. Their AI agents now handle 90% of our data processing, saving us 35 hours per week. Our team can finally focus on strategy.",
    rating: 5,
    metric: "35 hours saved weekly"
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Founder",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The lead qualification system they built increased our conversion rate by 65%. We're closing more deals with less effort. It's like having a sales team that never sleeps.",
    rating: 5,
    metric: "65% higher conversion"
  },
  {
    id: 4,
    name: "David Kim",
    title: "CTO",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Their automation reduced our operational costs by 55% in the first quarter. The AI agents handle complex workflows flawlessly. Best investment we've made.",
    rating: 5,
    metric: "55% cost reduction"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "VP Marketing",
    company: "BrandBoost",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    content: "Our content creation process is now 10x faster. The AI agents research, draft, and optimize content while maintaining our brand voice. Incredible results.",
    rating: 5,
    metric: "10x faster content"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

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
          ⭐ Client Success Stories
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          What Our Clients Say About{' '}
          <span className="gradient-text">Their Results</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Don't just take our word for it. Here's what happens when businesses 
          implement our AI automation solutions.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="elevated" className="p-8 lg:p-12">
                <CardContent className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8 text-foreground">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Metric */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 text-electric-teal text-sm font-medium mb-8">
                    📊 {testimonials[currentIndex].metric}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-electric-teal scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground mb-8">Trusted by 150+ growing businesses</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {/* Company logos placeholder */}
          {['TechFlow', 'ScaleUp', 'GrowthLab', 'InnovateCorp', 'BrandBoost'].map((company) => (
            <div key={company} className="text-center">
              <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
