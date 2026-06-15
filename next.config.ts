import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "syspree.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "syspree.com",
        pathname: "/wp-content/smush-webp/**",
      },
    ],
  },
};

export default nextConfig;
