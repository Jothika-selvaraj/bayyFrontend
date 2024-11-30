/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-domain-if-any'],
    unoptimized: true
  }
}

module.exports = nextConfig
