import Link from "next/link"
import { getRelatedArticles, getCategory } from "@/lib/guide-articles"
import s from "@/components/guide/guide.module.css"
import { fmtDate } from "@/components/guide/format"

// 글 끝 "이어서 읽기" — 서버 컴포넌트라 링크가 HTML에 그대로 남아 크롤러도 따라간다.
// 2026-11 리브랜딩: 표지 카드 대신 면 막대(매체 페이지 '일한 기록'과 같은 구성)
export default function RelatedArticles({ currentHref }: { currentHref: string }) {
  const related = getRelatedArticles(currentHref, 3)
  if (related.length === 0) return null

  return (
    <section aria-label="이어서 읽기" className={s.sec}>
      <h2 className={s.secHead}>이어서 읽기</h2>

      <div className={s.rows}>
        {related.map((a) => (
          <Link key={a.href} href={a.href} className={s.row}>
            <span className={s.rowMeta}>
              <b>{getCategory(a.category)?.short ?? a.kicker}</b>
              <span className={s.num}>{fmtDate(a.updated ?? a.date)}</span>
            </span>
            <span className={s.rowTitle}>{a.title}</span>
            <span className={s.rowDesc}>{a.desc}</span>
          </Link>
        ))}
      </div>

      <p className={s.more}>
        <Link href="/guide" className={s.textLink}>
          마케팅 가이드 전체보기
        </Link>
      </p>
    </section>
  )
}
