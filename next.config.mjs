/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        pathname: "https",
        hostname: "files.edgestore.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
