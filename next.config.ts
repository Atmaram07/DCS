import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Change "DCS" to your repository name if different
  basePath: isGithubPages ? "/DCS" : "",
  assetPrefix: isGithubPages ? "/DCS/" : "",
};

export default nextConfig;
