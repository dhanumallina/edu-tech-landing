'use client'

import { motion } from 'framer-motion'

export function GradientBlob() {
  const blobVariants = {
    animate: {
      x: [0, 50, -50, 0],
      y: [0, 100, -100, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-violet/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
        className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan/20 to-transparent rounded-full blur-3xl"
      />
    </div>
  )
}
