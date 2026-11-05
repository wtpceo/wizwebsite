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
          <span className="h-5 w-1 bg-[#2A93C2]" />
          이어서 읽기
        </h2>

        <div className="grid gap-3 sm:grid-cols-3">
          {related.map((a) => {
            const cat = getCategory(a.category)
            return (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col overflow-hidden rounded-lg border border-[#E3EAF2] bg-[#F3F7FB] transition-colors hover:border-[#2A93C2]"
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
                  <span className="text-[11px] font-bold text-[#1E6C9F]" data-cat={cat?.key}>
                    {a.kicker}
                  </span>
                  <span className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-gray-900 group-hover:text-[#1E6C9F]">
                    {a.title}
                  </span>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4B5565] transition-colors group-hover:text-[#1E6C9F]">
                    읽기
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-[#4B5565]">
          더 많은 글은{" "}
          <Link href="/guide" className="font-bold text-[#1E6C9F] underline underline-offset-4">
            마케팅 칼럼 전체 보기
          </Link>
        </p>
      </div>
    </section>
  )
}
