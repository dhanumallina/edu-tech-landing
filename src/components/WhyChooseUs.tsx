'use client'

import { motion } from 'framer-motion'
import { Users, Rocket, Award } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with 10+ years of experience',
      image: '👨‍🏫',
    },
    {
      icon: Rocket,
      title: 'Real-World Projects',
      description: 'Build production-ready projects that boost your portfolio',
      image: '🚀',
    },
    {
      icon: Award,
      title: '100% Placement Support',
      description: 'Dedicated career guidance and job placement assistance',
      image: '🏆',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">CodeNext?</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-cols-2 md:auto-cols-max'}`}
              >
                {isEven ? (
                  <>
                    <div className="text-6xl text-center">{feature.image}</div>
                    <div>
                      <Icon className="text-indigo text-4xl mb-4" />
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Icon className="text-indigo text-4xl mb-4" />
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                    <div className="text-6xl text-center">{feature.image}</div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
