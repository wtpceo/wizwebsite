"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

/**
 * 히어로 우측 패널 — 상담 첫 5분의 재현.
 *
 * 브랜드 이름을 받아 "우리가 AI에 실제로 물어볼 질문 10개"를 즉석에서 보여준다.
 * AI를 호출하지 않는다. 측정 '계획'만 보여주고 점수는 만들지 않는다.
 * (없는 숫자를 화면에 띄우지 않는다는 원칙 — CLAUDE.md '절대 금지' 참조)
 *
 * 입력값은 /diagnosis 폼의 상호 칸으로 넘긴다. 이름을 이미 적은 사람이 넘어오므로
 * 폼 이탈이 줄고, 우리는 진단 전에 대상 브랜드를 먼저 알게 된다.
 */

/** 실제 측정에 쓰는 질문 유형. 브랜드 지명형 8 + 비지명(카테고리) 대체형 2 */
const QUESTION_TEMPLATES: ((brand: string) => string)[] = [
  (b) => `${b} 어때?`,
  (b) => `${b} 후기 믿을만해?`,
  (b) => `${b} 가격 얼마야`,
  (b) => `${b} 위치 어디야`,
  (b) => `${b} 영업시간 알려줘`,
  (b) => `${b} 예약 어떻게 해`,
  (b) => `${b} 장단점 정리해줘`,
  (b) => `${b} 처음 가는데 뭘 알아야 해`,
  (b) => `${b} 대신 갈 만한 곳 추천해줘`,
  (b) => `${b}${hasJongseong(b) ? "이" : ""}랑 비슷한 곳 비교해줘`,
]

/** 한글 마지막 글자에 받침이 있는지 (이/가, 을/를 조사 선택용) */
function hasJongseong(word: string): boolean {
  const code = word.charCodeAt(word.length - 1)
  if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 !== 0
  return false
}

/** 받침 여부에 따라 이/가를 고른다. 한글이 아니면 '이(가)' */
function subjectParticle(word: string): string {
  const code = word.charCodeAt(word.length - 1)
  if (code >= 0xac00 && code <= 0xd7a3) return hasJongseong(word) ? "이" : "가"
  return "이(가)"
}

export default function BrandAskBox() {
  const [brand, setBrand] = useState("")
  const trimmed = brand.trim()

  const questions = useMemo(
    () => (trimmed ? QUESTION_TEMPLATES.map((build) => build(trimmed)) : []),
    [trimmed],
  )

  // 해시(#apply)를 붙이지 않는다. /diagnosis 는 ForceTopOnLoad 가 해시를 지우고
  // 상단으로 되돌리도록 설계돼 있다(2026-08-30 실측). 죽은 앵커를 만들지 않는다.
  const applyHref = trimmed
    ? `/diagnosis?brand=${encodeURIComponent(trimmed)}`
    : "/diagnosis"

  return (
    <div className="w-full max-w-md rounded-xl border border-white/15 bg-[#070b14]/75 p-5 backdrop-blur-sm sm:p-6">
      <p className="text-xs font-bold tracking-wide text-[#00e5a0]">지금 바로 해보기</p>

      <label htmlFor="brand-ask" className="mt-3 block text-sm text-slate-400">
        브랜드 이름을 넣어보세요
      </label>

      <div className="mt-2 flex gap-2">
        <input
          id="brand-ask"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          maxLength={30}
          autoComplete="off"
          placeholder="예: 우리치과"
          className="min-w-0 flex-1 rounded-lg border border-[#23304a] bg-[#0b1220] px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-slate-600 focus:border-[#00e5a0]"
        />
        <span
          aria-hidden="true"
          className="flex w-12 shrink-0 items-center justify-center rounded-lg bg-[#00e5a0] text-[#070b14]"
        >
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>

      {questions.length > 0 && (
        <ul className="mt-4 grid gap-1.5" aria-live="polite">
          {questions.map((q, i) => (
            <li
              key={q}
              className="flex items-start gap-2.5 rounded-md bg-white/[0.04] px-3 py-2 text-sm leading-snug text-slate-200"
            >
              <span className="min-w-[1.1rem] pt-px text-[11px] font-bold text-[#00e5a0]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 break-keep">{q}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 border-t border-white/[0.08] pt-3 text-[13px] leading-relaxed text-slate-400">
        {trimmed ? (
          <>
            ChatGPT·퍼플렉시티·네이버 AI에 이 <strong className="text-white">10문항을 3회씩, 총 30번</strong>{" "}
            물어 <strong className="text-white">{trimmed}</strong>
            {subjectParticle(trimmed)} 몇 번 나오는지 셉니다. 이 숫자가 계약 전 기준선입니다.
          </>
        ) : (
          <>
            AI에 <strong className="text-white">10문항을 3회씩, 총 30번</strong> 물어 이름이 몇 번
            나오는지 셉니다. 이 숫자가 계약 전 기준선이고, 매주 같은 질문으로 다시 잽니다.
          </>
        )}
      </p>

      <Link
        href={applyHref}
        className="mt-4 flex items-center justify-center gap-1 rounded-md bg-[#00e5a0] px-5 py-3.5 text-base font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb]"
      >
        {trimmed ? `${trimmed} 진단 신청하기` : "이 질문으로 진단 받기"}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
