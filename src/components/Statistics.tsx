'use client'

import { motion } from 'framer-motion'
import { CountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'

export function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true })

  const stats = [
    { label: 'Students Trained', value: 15000 },
    { label: 'Expert Mentors', value: 120 },
    { label: 'Job Placements', value: 500 },
    { label: 'Success Rate', value: 98, suffix: '%' },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo/5 to-violet/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-bold gradient-text mb-3">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix || ''}
                    separator=","
                  />
                )}
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
