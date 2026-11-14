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
  // 11-10 속도 점검: 글꼴 파일은 이름이 바뀌지 않는 한 내용도 그대로라 1년 캐시(다시 방문할 때 700KB를 새로 받지 않게).
  // 글꼴을 바꿀 때는 파일 이름을 바꾼다.
  async headers() {
    return [{ source: '/sf/fonts/:file*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }]
  },
  async redirects() {
    return [
      // 11-09 대표: 기업 제안 요청 폼을 문의(/contact) 하나로 합침. 운영에서 쓰던 주소라 영구 이동
      { source: '/business/contact', destination: '/contact', permanent: true },
      // 11-10 대표 「합치고 배포」: 운영에서 11/6 색인을 연 매체 페이지 5곳은 새 서비스 페이지로 영구 이동
      { source: '/search-ai', destination: '/services/search', permanent: true },
      { source: '/meta-ads', destination: '/services/performance', permanent: true },
      { source: '/google-ads', destination: '/services/performance', permanent: true },
      { source: '/shortform', destination: '/services/content', permanent: true },
      { source: '/website', destination: '/services/homepage', permanent: true },
      // 11-10 대표 「세 가지 고쳐」: 리뉴얼 전 페이지 정리. 사이트 안에서 가는 링크가 없고 자영업 말투라 새 서비스 페이지로 영구 이동.
      // /influencer 는 11-08 승인(본부장 소개 칸·FAQ는 옮기지 않음). /focusmedia 는 엘리베이터TV 검색 노출이 있어 그대로 둔다.
      { source: '/influencer', destination: '/services/influencer', permanent: true },
      // 11-14 대표 「외국어 페이지도 완벽하게 업데이트(전부 기업 대상)」: 외국인 사장님 영문 랜딩은 영문 회사 홈으로 영구 이동
      { source: '/en/business-owners-in-korea', destination: '/en', permanent: true },
      { source: '/naver-marketing', destination: '/services/search', permanent: true },
      { source: '/portfolio', destination: '/services/content', permanent: true },
      { source: '/strategy/:n(\\d+)', destination: '/', permanent: true },
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
