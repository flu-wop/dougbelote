/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder image hosts. Remove these once Doug's real photos
    // live in /public/images and are referenced locally.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
