/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "flagcdn.com",
      },
      {
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
