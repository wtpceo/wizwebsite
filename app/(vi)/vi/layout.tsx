import "../../globals.css"
import type { Metadata } from "next"
import RootShell from "@/components/layout/RootShell"
import { BASE_METADATA } from "@/lib/site-metadata"

// /vi 전용 루트 레이아웃. 제목·설명·OG·hreflang은 page.tsx가 자기 언어로 정의한다.
export const metadata: Metadata = { ...BASE_METADATA }

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="vi">{children}</RootShell>
}
