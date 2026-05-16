'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun Singh',
      role: 'Software Engineer at Google',
      text: 'CodeNext transformed my career. The mentorship and real-world projects were invaluable!',
      image: '/assets/student1.jpg',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Full Stack Dev at Microsoft',
      text: 'Best investment I made in my tech journey. Highly recommended!',
      image: '/assets/student2.jpg',
      rating: 5,
    },
    {
      name: 'Rahul Patel',
      role: 'Data Scientist at Amazon',
      text: 'The AI/ML program was comprehensive and industry-relevant. Amazing support!',
      image: '/assets/student3.jpg',
      rating: 5,
    },
    {
      name: 'Ananya Gupta',
      role: 'UI/UX Designer at Adobe',
      text: 'Learned so much about design systems and user experience. Highly valuable!',
      image: '/assets/student4.jpg',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-navy-light/50 border border-indigo/20 rounded-xl p-6 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
