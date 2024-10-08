/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themealdb.com", "firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
