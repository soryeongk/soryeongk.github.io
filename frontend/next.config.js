/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_SERVER_BASE_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_BASE_URL: NEXT_PUBLIC_SERVER_BASE_URL,
  },
  pageExtensions: ["page.tsx", "api.ts"],
};

module.exports = nextConfig;
