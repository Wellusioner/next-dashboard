/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandwell.ac.uk"
      },
      {
        protocol: "https",
        hostname: "images.samsung.com"
      },
      {
        protocol: "https",
        hostname: "labourlist.org"
      }
    ]
  }
};

export default nextConfig;
