/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_SERVER_BASE_URL, NEXT_PUBLIC_SERVER_GITHUB_USER_URL } =
  process.env;

const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_BASE_URL: NEXT_PUBLIC_SERVER_BASE_URL,
    SERVER_GITHUB_USER_URL: NEXT_PUBLIC_SERVER_GITHUB_USER_URL,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  pageExtensions: ["page.tsx", "api.ts"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
