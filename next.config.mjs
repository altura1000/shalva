/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next to make a static site in /out
  basePath: '/shalva',       // repo name
  assetPrefix: '/shalva',    // ensures CSS/img URLs work
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
