// @ts-check
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empty turbopack config to silence Next.js 16 warning
  // next-pwa uses webpack under the hood
  turbopack: {},
};

export default withPWA(nextConfig);
