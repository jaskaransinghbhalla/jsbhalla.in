/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /canvas\.node/,
      use: "raw-loader",
    })

    return config;
  },
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
    loader: "custom",
    loaderFile: "./src/utils/image-loader.js",
  },
};

export default nextConfig;
