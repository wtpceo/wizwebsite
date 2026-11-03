"use client"

// 상품 목록의 '이걸로 후보 받기'. 스크립트가 없으면 그냥 문의 폼으로 내려간다
export default function PickNeedLink({ need, className = "" }: { need: string; className?: string }) {
  return (
    <a
      href="#contact"
      onClick={() => window.dispatchEvent(new CustomEvent("influencer:pick", { detail: need }))}
      className={className}
    >
      이걸로 후보 받기
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  )
}
