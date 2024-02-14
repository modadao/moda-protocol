/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drops.moda.audio',
        pathname: '/ipfs/*',
      },
    ],
  },
};

module.exports = nextConfig;
