'use client'

import { motion } from 'framer-motion'
import { Button } from './common/Button'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo/20 via-violet/20 to-cyan/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-light/50 backdrop-blur-md border border-indigo/20 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Ready to <span className="gradient-text">Start Your Journey?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with CodeNext. Limited spots available for this batch!
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button size="lg">Enroll Now</Button>
            <Button variant="secondary" size="lg">
              <Mail size={20} /> Book a Call
            </Button>
          </motion.div>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-indigo/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-indigo to-violet text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo/50"
            >
              Subscribe
            </motion.button>
          </motion.form>

          <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  )
}
