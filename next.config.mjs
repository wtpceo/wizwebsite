/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 11-09 기술 점검: Next 15는 기본 목록에 없는 봇에게 title·description·og를 <head> 밖(본문)으로 늦게 보낸다.
  // 자바스크립트를 실행하지 않는 카카오톡 미리보기·AI 수집봇이 메타를 놓치지 않게, Next 기본 목록에 이 봇들을 더한다.
  htmlLimitedBots:
    /[\w-]+-Google|Google-[\w-]+|Googlebot|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight|kakaotalk|Daum|GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai|PerplexityBot|Perplexity-User|CCBot|Amazonbot|Bytespider|TelegramBot|\bLine\//i,
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
      // 11-09 대표: 기업 제안 요청 폼을 문의(/contact) 하나로 합침. 운영에서 쓰던 주소라 영구 이동
      { source: '/business/contact', destination: '/contact', permanent: true },
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
