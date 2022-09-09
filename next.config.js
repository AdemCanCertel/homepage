/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

export default withContentlayer({ nextConfig })
