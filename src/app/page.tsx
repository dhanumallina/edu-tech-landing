'use client'

import { Navbar } from '@/components/Navbar'
import { ScrollProgressBar } from '@/components/common/ScrollProgressBar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Programs } from '@/components/Programs'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { Statistics } from '@/components/Statistics'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-white overflow-hidden">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
