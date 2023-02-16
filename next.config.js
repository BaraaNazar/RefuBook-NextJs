/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["images.wsj.net","play-lh.googleusercontent.com","techcrunch.com"]
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
