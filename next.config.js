/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.pexels.com', 'via.placeholder.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig;