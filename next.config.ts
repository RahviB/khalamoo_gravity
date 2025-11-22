import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.khalamoo.fr",
      },
    ],
  },
};

export default nextConfig;
