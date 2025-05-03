import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
 eslint:{
  ignoreDuringBuilds:true
 },
 basePath: '/Bimals_terminal',
};

export default nextConfig;
