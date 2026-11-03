"use client"

import { KAKAO_CHAT_URL } from "@/components/ChatWidget"
import { trackChatClick } from "@/lib/analytics"

// 카카오톡 버튼. 주소와 클릭 이벤트(chat_click)는 사이트 상담 위젯과 같다
// solid: 문의 섹션의 노란 버튼 / ghost: 첫 화면 보조 버튼
export default function KakaoChatButton({
  variant = "solid",
  label = "카카오톡으로 바로 연결",
  className = "",
}: {
  variant?: "solid" | "ghost"
  label?: string
  className?: string
}) {
  const look =
    variant === "solid"
      ? "bg-[#fee500] text-[#191600] hover:bg-[#f5dc00]"
      : "bg-white/10 text-white hover:bg-white/20"
  return (
    <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackChatClick()}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md font-bold transition-[background-color,transform] active:scale-[0.98] ${look} ${className}`}
    >
      {/* 카카오 심볼 (카카오 로그인 디자인 가이드의 말풍선) */}
      <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden className="flex-none">
        <path
          fill={variant === "solid" ? "#000" : "#fff"}
          d="M9 1.5C4.58 1.5 1 4.33 1 7.82c0 2.25 1.5 4.23 3.76 5.35l-.77 2.8c-.07.25.21.45.43.3l3.36-2.22c.4.05.81.08 1.22.08 4.42 0 8-2.83 8-6.31S13.42 1.5 9 1.5z"
        />
      </svg>
      {label}
    </a>
  )
}
