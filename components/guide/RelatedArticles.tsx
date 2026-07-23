import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getRelatedArticles, getCategory } from "@/lib/guide-articles"

// 글 끝 "이어서 읽기" — 서버 컴포넌트라 링크가 HTML에 그대로 남아 크롤러도 따라간다
export default function RelatedArticles({ currentHref }: { currentHref: string }) {
  const related = getRelatedArticles(currentHref, 3)
  if (related.length === 0) return null

  return (
    <section
      aria-label="이어서 읽기"
      className="container mx-auto max-w-3xl px-4 pb-4 md:px-6"
    >
      <div className="border-t border-gray-200 pt-10">
        <h2 className="mb-5 flex items-center gap-3 text-lg font-extrabold tracking-tight text-gray-900">
          <span className="h-5 w-1 rounded-full bg-[#00e5a0]" />
          이어서 읽기
        </h2>

        <div className="grid gap-3 sm:grid-cols-3">
          {related.map((a) => {
            const cat = getCategory(a.category)
            return (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/[0.07]"
              >
                <span className={`w-fit rounded-lg p-2 ring-1 ${cat?.tile ?? "bg-emerald-50 text-emerald-600 ring-emerald-100"}`}>
                  <a.icon className="h-4 w-4" />
                </span>
                <span className="mt-3 text-[10px] font-bold tracking-[0.18em] text-emerald-600">
                  {a.kicker}
                </span>
                <span className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-gray-900 group-hover:text-emerald-700">
                  {a.title}
                </span>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-400 transition-colors group-hover:text-emerald-600">
                  읽기
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          더 많은 글은{" "}
          <Link href="/guide" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
            마케팅 가이드 전체보기
          </Link>
        </p>
      </div>
    </section>
  )
}
