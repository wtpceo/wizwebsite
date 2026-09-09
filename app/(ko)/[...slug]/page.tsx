import { notFound } from "next/navigation"

// 루트 레이아웃을 언어별(ko/zh/vi)로 나누면서 app/not-found.tsx를 최상위에 둘 수 없게 됐다.
// 정의되지 않은 모든 경로를 이 캐치올이 받아 (ko)/not-found.tsx(한국어 404 페이지)로 보낸다.
export default function CatchAll() {
  notFound()
}
