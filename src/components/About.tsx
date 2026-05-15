'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function About() {
  const achievements = [
    { label: '10K+ Students', value: '10K+' },
    { label: 'Expert Mentors', value: '120+' },
    { label: 'Job Placements', value: '500+' },
    { label: 'Success Rate', value: '98%' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image Placeholder */}
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-indigo/10 to-violet/10 border border-indigo/20 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center"
            >
              <div className="text-6xl mb-4">📚</div>
              <p className="text-gray-400">Your Image Here</p>
            </motion.div>
          </div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                About <span className="gradient-text">CodeNext</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                CodeNext is a premium online learning platform dedicated to transforming aspiring developers into industry-ready professionals. With expert mentorship, real-world projects, and dedicated placement support, we've helped thousands of students achieve their career goals.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-indigo/10 rounded-lg p-4 border border-indigo/20"
                >
                  <div className="text-2xl font-bold gradient-text">{achievement.value}</div>
                  <div className="text-sm text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
