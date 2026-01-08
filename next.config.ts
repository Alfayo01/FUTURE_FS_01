import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://localhost:3000/'],
  crossOrigin: "anonymous",
};

export default nextConfig;
