/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = nextConfig