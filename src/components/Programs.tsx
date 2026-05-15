'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Palette, Cloud, Briefcase, Zap } from 'lucide-react'
import { Card } from './common/Card'

export function Programs() {
  const programs = [
    { icon: Code2, title: 'Full Stack Development', description: 'Master MERN, Django, and modern web technologies' },
    { icon: Brain, title: 'AI & Data Science', description: 'Python, ML, Deep Learning, and NLP specialization' },
    { icon: Palette, title: 'UI/UX Design', description: 'Figma, Design Systems, and User Experience principles' },
    { icon: Cloud, title: 'Cloud Computing', description: 'AWS, Docker, Kubernetes, and DevOps engineering' },
    { icon: Briefcase, title: 'Placement Training', description: 'Interview prep, DSA, and resume building' },
    { icon: Zap, title: 'DSA & Competitive', description: 'Data Structures, Algorithms, and Competitive Programming' },
  ]

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our curated programs designed by industry experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card variant="gradient">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="text-4xl text-indigo mb-4 w-fit"
                  >
                    <Icon size={40} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-400">{program.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
