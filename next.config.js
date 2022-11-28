const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 120,
  },
};

module.exports = nextConfig;
