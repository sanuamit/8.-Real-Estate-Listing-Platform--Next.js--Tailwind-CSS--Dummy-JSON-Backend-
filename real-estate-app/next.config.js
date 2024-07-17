/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "placekitten.com"], // Add your domains here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
