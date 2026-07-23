"use client"

import { MessageCircle } from "lucide-react"
import { trackChatClick } from "@/lib/analytics"

// 카카오톡 실시간 상담 플로팅 위젯 — 전역(layout) 상시 노출
const KAKAO_CHAT_URL = "http://pf.kakao.com/_QUTxcb/chat"

export default function ChatWidget() {
  return (
    <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackChatClick()}
      aria-label="카카오톡 실시간 상담 열기"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#00e5a0] py-3.5 pl-4 pr-5 font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/30 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/40 sm:bottom-6 sm:right-6"
    >
      {/* 주목용 펄스 링 */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[#00e5a0] opacity-60 motion-safe:[animation:ping_2s_ease-out_infinite]" />

      <span className="relative flex h-6 w-6 items-center justify-center">
        <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
        {/* 온라인 표시 점 */}
        <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:[animation:ping_2s_ease-out_infinite]" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-[#00e5a0] bg-emerald-500" />
        </span>
      </span>

      <span className="relative flex flex-col leading-tight">
        <span className="whitespace-nowrap text-sm font-bold">실시간 상담</span>
        <span className="whitespace-nowrap text-[10px] font-medium text-[#0a3b2c]">
          카카오톡으로 바로 연결
        </span>
      </span>
    </a>
  )
}
