import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages serves the generated `out/` directory,
  // which is what .github/workflows/nextjs.yml uploads.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
