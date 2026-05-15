'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient'
}

export function Card({
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  const variantClasses = {
    default: 'bg-navy-light/50 border border-indigo/20',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10',
    gradient: 'bg-gradient-to-br from-indigo/20 to-violet/20 border border-indigo/30',
  }

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
      transition={{ duration: 0.3 }}
      className={clsx(
        'rounded-xl p-6 transition-all duration-300',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.div>
  )
}
