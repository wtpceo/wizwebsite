import Link from "next/link"
import MenuCloser from "@/components/rebrand/MenuCloser"

// 새 메뉴 (2026-10 사이트맵). 컨셉: 매체가 아니라 "지금 단계"에서 시작한다.
// 좁은 화면에서는 <details>로 펼친다. 자바스크립트 없이도 동작한다.
const NAV = [
  { href: "/#stage", label: "단계 진단", note: "우리 회사는 지금 어느 단계인가" },
  { href: "/#report", label: "분석 사례", note: "진단서 양식과 실측 기록" },
  { href: "/#work", label: "무엇을", note: "설계·운영 · 개발 · 제작" },
  { href: "/#clients", label: "누구와", note: "기업 · 로컬 사업자 · 병·의원 · 브랜드" },
  { href: "/#ax", label: "회사", note: "AI 에이전트와 일하는 19명" },
  { href: "/family", label: "관계사 플랫폼", note: "(주)위플 운영 · 위플 · 스토어레이더" },
]

export default function SiteHeader() {
  return (
    <header className="rb-top">
      <div className="rb-wrap">
        <Link className="rb-mark" href="/">
          위즈더플래닝
        </Link>
        <nav className="rb-nav" aria-label="주요 메뉴">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <a className="rb-nav-ask" href="/#stage">
            맞춤 기획서 받기
          </a>
          <details className="rb-menu">
            <summary>메뉴</summary>
            <div className="rb-menu-panel">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                  <small>{n.note}</small>
                </a>
              ))}
            </div>
          </details>
          <MenuCloser />
        </nav>
      </div>
    </header>
  )
}
