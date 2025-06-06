/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
  // Disable some features that can cause instability in development
  experimental: {
    optimizePackageImports: false,
  },
  // Better error handling
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig; 