import Link from "next/link"
import MenuCloser from "@/components/rebrand/MenuCloser"

// 새 메뉴 (2026-10 사이트맵). 컨셉: 매체가 아니라 "지금 단계"에서 시작한다.
// tone="blue"는 블루 첫 화면 위에 겹치는 머리글, "light"는 일반 페이지용.
const NAV = [
  { href: "/#stage", label: "단계 진단", note: "우리 회사는 지금 어느 단계인가" },
  { href: "/#proof", label: "분석 사례", note: "진단서, 관제 화면, 실측 기록" },
  { href: "/#work", label: "무엇을", note: "설계·운영, 개발, 제작" },
  { href: "/#who", label: "누구와", note: "기업, 로컬 사업자, 병·의원, 브랜드" },
  { href: "/#ax", label: "회사", note: "사람 19명과 AI 에이전트 6개" },
  { href: "/family", label: "관계사 플랫폼", note: "(주)위플이 운영하는 위플, 스토어레이더" },
]

export default function SiteHeader({ tone = "light" }: { tone?: "blue" | "light" }) {
  return (
    <header className={`rb-top is-${tone}`}>
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
