import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "이용약관",
  description: "위즈더플래닝 이용약관입니다.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
