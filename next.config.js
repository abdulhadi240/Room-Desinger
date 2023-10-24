/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'ekndpczqlutxzbglyjxd.supabase.co',
        
      },
      {
        protocol: 'https',
        hostname: 'www.contractorbhai.com',
        
      },
      {
        protocol: 'https',
        hostname: 'www.build-review.com',
        
      },
      {
        protocol: 'https',
        hostname: 'www.thehousedesigners.com',
        
      },

    ],
  },
};

module.exports = nextConfig;

