/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drops.moda.audio',
        pathname: '/ipfs/*',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
        pathname: '/ipfs/*',
      },
    ],
  },
};

module.exports = nextConfig;
