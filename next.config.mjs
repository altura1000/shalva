/** @type {import('next').NextConfig} */

/* const IS_PRODUCTION = true;

const nextConfig = {
  output: 'export', // tells Next to make a static site in /out
  basePath: IS_PRODUCTION ?  '/shalva' : "",       // repo name
  assetPrefix: IS_PRODUCTION ?  '/shalva' : "",    // ensures CSS/img URLs work
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

export default nextConfig;*/

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath: BASE_PATH,            // "" לדומיין, "/shalva" ל-GH Pages
  assetPrefix: BASE_PATH || '',   // ריק לדומיין
  images: { unoptimized: true },
};

export default nextConfig;