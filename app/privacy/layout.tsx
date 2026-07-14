import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "위즈더플래닝 개인정보처리방침입니다.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
