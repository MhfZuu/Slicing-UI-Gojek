/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn-site.gojek.com",
        },
      ],
    },
  }
export default nextConfig;
