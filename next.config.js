/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'], // Add any other domains you need
  },
}

module.exports = nextConfig
