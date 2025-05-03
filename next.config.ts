import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/Bimals_terminal', // 👈 Must match your GitHub repo name exactly
  images: {
    unoptimized: true, // 👈 Required if using next/image with static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output:'export',
};

export default nextConfig;
