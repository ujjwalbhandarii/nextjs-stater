import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Only use standalone output for Docker / self-hosted container builds.
  // On Vercel, serverless lambdas are generated natively by Vercel's build runner.
  output: process.env.VERCEL
    ? undefined
    : process.env.BUILD_STANDALONE === 'true'
      ? 'standalone'
      : undefined,
};

export default nextConfig;
