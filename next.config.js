/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Clean build cache more aggressively
    config.optimization.moduleIds = 'deterministic';
    return config;
  },
  poweredByHeader: false,
  images: {
    domains: ['placehold.co', 'via.placeholder.com']
  }
}

module.exports = nextConfig
