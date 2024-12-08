/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staff.skbkontur.ru",
      },
    ],
  },
};

export default nextConfig;
