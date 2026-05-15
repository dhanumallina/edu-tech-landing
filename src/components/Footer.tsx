'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Programs', 'Mentorship', 'Projects', 'Placements'],
    Company: ['About Us', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'FAQ', 'Community', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'],
  }

  return (
    <footer className="bg-navy-light/30 border-t border-indigo/20 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">CodeNext</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Transform your coding journey with expert mentorship and real-world projects.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {[Mail, Linkedin, Twitter, Github].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-indigo/20 hover:bg-indigo/30 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-indigo" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-indigo/10 pt-8">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h4 className="font-semibold mb-4">Subscribe to Updates</h4>
            <form className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-indigo/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo hover:bg-indigo/80 px-6 py-2 rounded-lg text-sm font-semibold"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} CodeNext. All rights reserved.</p>
            <p>Made with ❤️ by CodeNext Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
