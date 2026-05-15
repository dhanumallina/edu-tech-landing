import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CodeNext - Premium Ed-Tech Landing Page',
  description: 'Transform your coding journey with expert mentors, real-world projects, and 100% placement support.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
