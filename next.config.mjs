/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
    loader: "custom",
    loaderFile: "./src/utils/image-loader.js",
  },
};

export default nextConfig;
