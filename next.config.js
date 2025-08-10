import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default withContentlayer(nextConfig);

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}
