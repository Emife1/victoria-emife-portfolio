/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: async () => String(Date.now())
};

module.exports = nextConfig;
