/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'static.ghost.org' }, { hostname: 'blog.ianduhamel.com' }],
  }
};

export default nextConfig;
