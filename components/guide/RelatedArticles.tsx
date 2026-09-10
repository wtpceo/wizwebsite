import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getRelatedArticles, getCategory } from "@/lib/guide-articles"
import { coverFor } from "@/lib/guide-cover"

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
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/[0.07]"
              >
                <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={coverFor(a.href)}
                    alt=""
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex flex-1 flex-col p-4">
                  <span className={`text-[10px] font-bold tracking-[0.18em] ${cat ? "text-emerald-600" : "text-emerald-600"}`}>
                    {a.kicker}
                  </span>
                  <span className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-gray-900 group-hover:text-emerald-700">
                    {a.title}
                  </span>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-400 transition-colors group-hover:text-emerald-600">
                    읽기
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
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
