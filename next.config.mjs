/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn-site.gojek.com",
        },
      ],
    },
    compiler: {
      styledComponents: true,
    },
  }
export default nextConfig;
