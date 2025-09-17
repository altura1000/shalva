/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next to make a static site in /out
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
