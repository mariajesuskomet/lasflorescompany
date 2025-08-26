// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Mantén estos flags solo si los necesitas en build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
