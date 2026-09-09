import type { Metadata } from "next"

// 캐시 무효화를 위한 타임스탬프 (파비콘)
const timestamp = Date.now()

// 언어별 루트 레이아웃(ko / zh / vi)이 공통으로 쓰는 메타데이터.
// 제목·설명·OG는 각 레이아웃과 페이지가 자기 언어로 채운다.
export const BASE_METADATA: Metadata = {
  metadataBase: new URL("https://wiztheplanning.com"),
  verification: {
    other: {
      "naver-site-verification": "9eab0615b13363708461a16fe6a3733fe44cf0e3",
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      { url: `/favicon.ico?v=${timestamp}`, sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
    shortcut: `/favicon.ico?v=${timestamp}`,
  },
}

export const OG_TIMESTAMP = timestamp
