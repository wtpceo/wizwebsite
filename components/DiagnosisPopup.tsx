"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Stethoscope, ChevronRight } from "lucide-react"

const STORAGE_KEY = "geoDiagnosisPopupHideUntil"
const HIDE_DAYS = 7
const SHOW_DELAY_MS = 2500

// 병원 리드 전환 팝업 — localStorage 기반 "7일 안 보기"로 페이지 이동·새로고침에도 재등장 방지
export default function DiagnosisPopup() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // 진단 페이지 자체에서는 노출하지 않음
    if (pathname?.startsWith("/medical-diagnosis")) return
    // 제휴 전용 랜딩(/luke)은 자체 CTA로 완결 — 전역 팝업이 유입 추적을 깨뜨리지 않게 제외
    if (pathname?.startsWith("/luke")) return
    // 외국어(중국어/베트남어) 페이지에서는 한국어 팝업 노출 안 함
    if (pathname?.startsWith("/zh") || pathname?.startsWith("/vi")) return

    // 마운트할 때마다 먼저 검사 → 7일 안 보기 상태면 절대 표시 안 함
    let hideUntil = 0
    try {
      hideUntil = Number(window.localStorage.getItem(STORAGE_KEY) || 0)
    } catch {
      hideUntil = 0
    }
    if (hideUntil && Date.now() < hideUntil) return

    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [pathname])

  // 단순 닫기 — 이번 세션에서만 숨김(다음 방문 시 다시 노출)
  const close = () => setVisible(false)

  // 7일 동안 보지 않기 — localStorage에 만료 시각 저장 → 이동/새로고침에도 안 뜸
  const hideForWeek = () => {
    try {
      const until = Date.now() + HIDE_DAYS * 24 * 60 * 60 * 1000
      window.localStorage.setItem(STORAGE_KEY, String(until))
    } catch {
      /* localStorage 불가 환경은 무시 */
    }
    setVisible(false)
  }

  // CTA 클릭 시에도 7일 숨김 처리(진단 페이지로 이동 후 재노출 방지)
  const onCtaClick = () => {
    hideForWeek()
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagnosis-popup-title"
    >
      {/* 배경 딤 */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200"
        onClick={close}
      />

      {/* 카드 */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* 닫기 X */}
        <button
          type="button"
          onClick={close}
          aria-label="팝업 닫기"
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* 다크 헤더 */}
        <div className="relative overflow-hidden bg-[#070b14] px-6 pb-7 pt-8">
          <div className="geo-grid-bg absolute inset-0 opacity-50" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00e5a0]/15 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-3 py-1 text-xs font-bold tracking-wide text-[#00e5a0]">
              <Stethoscope className="h-3.5 w-3.5" />
              병원·의원 전용 · 100% 무료
            </span>
            <h2
              id="diagnosis-popup-title"
              className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-white"
            >
              병원이라면?
              <br />
              <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">
                AI 검색 최적화(GEO) 진단서
              </span>
              <br />
              무료로 받으세요
            </h2>
          </div>
        </div>

        {/* 본문 */}
        <div className="px-6 py-6">
          <p className="text-sm leading-relaxed text-gray-600">
            환자들은 이제 ChatGPT·네이버 AI에게 &ldquo;○○ 잘하는 병원 추천해줘&rdquo;라고 묻습니다.
            <span className="font-semibold text-gray-900"> 우리 병원이 AI 검색에 나오는지</span>,
            혹시 잘못된 정보가 안내되는지 무료로 진단해 드립니다.
          </p>

          <Link href="/medical-diagnosis" onClick={onCtaClick} className="mt-5 block">
            <span className="flex h-13 w-full items-center justify-center gap-1 rounded-xl bg-[#00e5a0] py-4 text-base font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb]">
              무료 진단서 받기
              <ChevronRight className="h-5 w-5" />
            </span>
          </Link>

          <button
            type="button"
            onClick={hideForWeek}
            className="mt-3 w-full py-1 text-center text-xs text-gray-400 transition-colors hover:text-gray-600"
          >
            7일 동안 보지 않기
          </button>
        </div>
      </div>
    </div>
  )
}
