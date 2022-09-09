/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = withContentlayer({ nextConfig })
