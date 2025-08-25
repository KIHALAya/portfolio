/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',   // enable static HTML export
  images: {
    unoptimized: true,  // since GH pages doesn't support Next.js image optimization
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
