/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'static.ghost.org' }, { hostname: 'ianduhamel-tech.cap.devink.site' }],
  }
};

export default nextConfig;
