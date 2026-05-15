'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-200'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo to-violet text-white hover:shadow-lg hover:shadow-indigo/50',
    secondary: 'border border-indigo/50 text-white hover:bg-indigo/10 hover:border-indigo',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </motion.button>
  )
}
