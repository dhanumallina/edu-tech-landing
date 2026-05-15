/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
