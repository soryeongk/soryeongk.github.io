/** @type {import('next').NextConfig} */
const {
  NEXT_PUBLIC_NODE_ENV,
  NEXT_PUBLIC_SERVER_BASE_URL,
  NEXT_PUBLIC_SERVER_GITHUB_USER_URL,
  NEXT_PUBLIC_PREFIX_URL,
} = process.env;

const homepageUrl = NEXT_PUBLIC_PREFIX_URL;
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: NEXT_PUBLIC_NODE_ENV === "PRODUCTION" ? `/${homepageUrl}/` : "",
  env: {
    SERVER_BASE_URL: NEXT_PUBLIC_SERVER_BASE_URL,
    SERVER_GITHUB_USER_URL: NEXT_PUBLIC_SERVER_GITHUB_USER_URL,
    PREFIX_URL: NEXT_PUBLIC_NODE_ENV === "PRODUCTION" ? `/${homepageUrl}/` : "",
  },
  images: {
    domains: ["avatars.githubusercontent.com", "help.instagram.com"],
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
