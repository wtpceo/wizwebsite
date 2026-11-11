import type { MetadataRoute } from "next"

// 11-10 대표 「파비콘·메타데이터도 우리 디자인과 통일」: 홈 화면 추가·브라우저 주소창에 쓰이는 이름·색·아이콘.
// 색은 사이트 머리글과 같은 남색(#0A1A33). 아이콘은 위즈블루 바탕의 W 심볼(public/icon.png)
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "위즈더플래닝",
    short_name: "위즈더플래닝",
    description: "광고·마케팅 대행사 위즈더플래닝",
    start_url: "/",
    display: "browser",
    background_color: "#0A1A33",
    theme_color: "#0A1A33",
    lang: "ko",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
