/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
        pathname: '/ipfs/*',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        pathname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
