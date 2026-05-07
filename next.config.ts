import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: '/public/**' }
    ]
  }
};

export default nextConfig;
