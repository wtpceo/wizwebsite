"use client"

import { MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { trackChatClick } from "@/lib/analytics"

// 카카오톡 실시간 상담 플로팅 위젯 — 전역(layout) 상시 노출
export const KAKAO_CHAT_URL = "http://pf.kakao.com/_QUTxcb/chat"

// 로케일별 라벨 (외국인 사장님 페이지에서 언어에 맞게 표시)
const CHAT_LABELS = {
  ko: { title: "실시간 상담", sub: "카카오톡으로 바로 연결", aria: "카카오톡 실시간 상담 열기" },
  zh: { title: "在线咨询", sub: "通过KakaoTalk联系", aria: "打开KakaoTalk在线咨询" },
  vi: { title: "Tư vấn trực tiếp", sub: "Kết nối qua KakaoTalk", aria: "Mở tư vấn qua KakaoTalk" },
  en: { title: "Live chat", sub: "Connect on KakaoTalk", aria: "Open KakaoTalk live chat" },
}

export default function ChatWidget() {
  const pathname = usePathname()
  // 제휴사 명의 랜딩(/luke)에서는 위즈 카카오채널 위젯 숨김 — 명의 일관성 + 유입 추적 보호
  if (pathname?.startsWith("/luke")) return null
  const locale = pathname?.startsWith("/zh") ? "zh" : pathname?.startsWith("/vi") ? "vi" : pathname === "/en" || pathname?.startsWith("/en/") ? "en" : "ko"
  const label = CHAT_LABELS[locale]

  return (
    <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackChatClick()}
      aria-label={label.aria}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-[var(--ink)] py-3.5 pl-4 pr-5 font-bold text-[var(--on-dark)] transition-colors duration-200 hover:bg-[var(--tone-1)] active:scale-[0.97] sm:bottom-6 sm:right-6"
    >
      {/* 디자인기준 v1: 모서리 0, 그림자·펄스 없음, 잉크 바탕. 민트는 첫 화면 주 버튼에만 남긴다(디자이너 점검 2026-11-03) */}
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2.2} aria-hidden="true" />

      <span className="flex flex-col leading-tight">
        <span className="whitespace-nowrap text-sm font-bold">{label.title}</span>
        <span className="whitespace-nowrap text-[10px] font-medium text-[var(--on-dark-muted)]">{label.sub}</span>
      </span>
    </a>
  )
}
