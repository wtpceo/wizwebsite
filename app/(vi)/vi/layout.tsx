import "../../globals.css"
import type { Metadata, Viewport } from "next"
import RootShell from "@/components/layout/RootShell"
import { BASE_METADATA } from "@/lib/site-metadata"

// /vi 전용 루트 레이아웃. 제목·설명·OG·hreflang은 page.tsx가 자기 언어로 정의한다.
export const metadata: Metadata = { ...BASE_METADATA }

// 휴대폰 브라우저 주소창 색. 사이트 머리글과 같은 남색(11-10)
export const viewport: Viewport = { themeColor: "#0A1A33" }

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="vi">{children}</RootShell>
}
