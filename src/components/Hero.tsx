'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from './common/Button'
import { GradientBlob } from './common/GradientBlob'

export function Hero() {
  const stats = [
    { label: '15K+ Students', value: '15K' },
    { label: '120+ Mentors', value: '120' },
    { label: '500+ Placements', value: '500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pb-20">
      {/* Background Blobs */}
      <GradientBlob />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-indigo/30 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-sm text-gray-300">Welcome to Premium Learning</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transform Your <span className="gradient-text">Coding Journey</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-lg"
            >
              Master in-demand skills with expert mentors, real-world projects, and 100% placement support. Start your premium learning experience today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg">
                Get Started <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg">
                <Play size={20} /> Watch Demo
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-2xl font-bold text-indigo">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration Area */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full"
          >
            {/* Placeholder for illustration/image */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 to-violet/10 rounded-2xl border border-indigo/20 flex items-center justify-center backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo/30 to-violet/30 flex items-center justify-center mx-auto">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="mt-4 text-gray-400">Your Hero Image Here</p>
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-navy-light rounded-xl border border-indigo/20 p-4 shadow-xl max-w-xs"
            >
              <p className="text-sm text-gray-400 mb-3">⭐ Student Success Rate</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo to-violet" />
                <div>
                  <p className="font-semibold">98% Success</p>
                  <p className="text-xs text-gray-500">Job Placement</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
