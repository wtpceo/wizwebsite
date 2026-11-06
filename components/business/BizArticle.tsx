import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { relatedBizArticles } from "@/lib/business-articles"
import { fmtDate } from "@/components/guide/format"
import s from "@/components/guide/guide.module.css"

export { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 본문 중간 행동 유도 문단. 글 하단 박스까지 내려가지 않고 떠나는 담당자를 위해 글마다 한 곳에 둔다.
// 문구 안에 /business/contact 링크를 직접 넣는다(자영업 경로 링크 금지).
export function BizContactNote({ children }: { children: React.ReactNode }) {
  return <aside className={s.note}>{children}</aside>
}

// 기업 경로 글 레이아웃. 본문 스타일 규칙은 가이드 글과 같게 두되(guide.module.css),
// CTA는 무료 진단이 아니라 제안 요청(/business/contact)으로만 보낸다.
// 2026-11 리브랜딩: 흰 바탕·잉크 글자. 제목 위 머리말(kicker)은 화면에서 빼고 prop만 받는다
export default function BizArticle({
  href,
  title,
  description,
  date,
  ctaTitle,
  ctaBody,
  children,
}: {
  href: string
  /** 화면에는 그리지 않는다(디자인 기준: 제목 위 머리말 금지). 글 파일 호환용 */
  kicker: string
  title: string
  description: string
  date: string
  /** 하단 박스 제목·본문. 회신 메일에서 지킬 약속이 글마다 달라서 글별로 받는다 */
  ctaTitle: string
  ctaBody: string
  children: React.ReactNode
}) {
  const related = relatedBizArticles(href)
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <header className={s.head}>
          <h1 className={s.title}>{title}</h1>
        </header>

        <div className={`${s.grid} ${s.intro}`}>
          <div className={s.meta}>
            <span>
              위즈더플래닝 · <span className={s.num}>{date}</span>
            </span>
            <Link href="/business/insights" className={s.textLink}>
              인사이트 목록
            </Link>
          </div>
          <div className={s.col}>
            <p className={s.lead}>{description}</p>
            <article className={`${s.prose} ${s.biz}`}>{children}</article>
          </div>
        </div>

        {related.length > 0 && (
          <section aria-label="이어서 읽기" className={s.sec}>
            <h2 className={s.secHead}>이어서 읽기</h2>
            <div className={s.rows}>
              {related.map((a) => (
                <Link key={a.href} href={a.href} className={s.row}>
                  <span className={s.rowMeta}>
                    <b>{a.kicker}</b>
                    <span className={s.num}>{fmtDate(a.updated ?? a.date)}</span>
                  </span>
                  <span className={s.rowTitle}>{a.title}</span>
                  <span className={s.rowDesc}>{a.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className={s.cta} aria-label="제안 요청">
          <h2 className={s.ctaTitle}>{ctaTitle}</h2>
          <p className={s.ctaBody}>{ctaBody}</p>
          <Link href="/business/contact" className={`${s.btn} ${s.ctaBtn}`}>
            제안 요청 보내기
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
