'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'default' | 'muted' | 'dark' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

export function Section({ 
  children, 
  className, 
  id,
  background = 'default',
  padding = 'lg',
  animate = true
}: SectionProps) {
  const backgrounds = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    dark: 'bg-midnight-navy text-white',
    gradient: 'gradient-bg text-white'
  }

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  }

  const content = (
    <section 
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )

  if (!animate) {
    return content
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {content}
    </motion.div>
  )
}
