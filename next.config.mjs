/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // www → non-www 301 리다이렉트 (중복 도메인 정리, 단일 canonical 신호)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.wiztheplanning.com' }],
        destination: 'https://wiztheplanning.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
