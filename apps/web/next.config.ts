import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@xedan/shared'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
