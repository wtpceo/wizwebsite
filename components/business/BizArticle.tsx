import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { relatedBizArticles } from "@/lib/business-articles"

export { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 기업 경로 글 레이아웃. 본문 스타일 규칙은 가이드 글과 같게 두되,
// CTA는 무료 진단이 아니라 제안 요청(/business/contact)으로만 보낸다.
export default function BizArticle({
  href,
  kicker,
  title,
  description,
  date,
  children,
}: {
  href: string
  kicker: string
  title: string
  description: string
  date: string
  children: React.ReactNode
}) {
  const related = relatedBizArticles(href)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-3xl px-4 md:px-6">
            <Link href="/business/insights" className="text-xs font-bold tracking-[0.2em] text-[#00e5a0] hover:underline">
              {kicker.toUpperCase()}
            </Link>
            <h1 className="mt-4 text-[clamp(1.75rem,3.6vw,2.75rem)] font-extrabold leading-[1.2] tracking-tight text-white">{title}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">{description}</p>
            <p className="mt-6 text-sm text-slate-500">위즈더플래닝 · {date}</p>
          </div>
        </section>

        <article className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 [&>h2]:mt-12 [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-gray-900 [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>p]:mt-4 [&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-gray-700 [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:pl-1 [&>ol]:mt-4 [&>ol]:list-decimal [&>ol]:space-y-3 [&>ol]:pl-5 [&_a]:font-semibold [&_a]:text-emerald-700 [&_a]:underline-offset-4 hover:[&_a]:underline">
          {children}
        </article>

        <section className="container mx-auto max-w-3xl px-4 pb-14 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-6 py-10 text-center md:px-10">
            <p className="text-xl font-extrabold text-white md:text-2xl">제안 요청서를 보내 주세요</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              평가 항목과 제출 기한이 있으면 그 형식에 맞춰 회신합니다. 이 글의 12개 항목을 정리한 체크
              문서도 회사 메일로 보내드립니다.
            </p>
            <Link href="/business/contact" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#00e5a0] px-6 py-3 text-sm font-bold text-[#070b14] hover:bg-[#3cf0bb]">
              제안 요청 보내기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {related.length > 0 && (
          <section className="container mx-auto max-w-5xl px-4 pb-20 md:px-6">
            <h2 className="mb-5 text-lg font-extrabold tracking-tight text-gray-900">이어서 읽기</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((a) => (
                <Link key={a.href} href={a.href} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
                  <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
                    <img src={a.cover} alt="" width={1200} height={675} loading="lazy" className="h-full w-full object-cover" />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-emerald-600">{a.kicker}</span>
                    <span className="mt-1.5 text-base font-bold leading-snug text-gray-900 group-hover:text-emerald-700">{a.title}</span>
                    <span className="mt-auto pt-3 text-xs text-gray-400">{a.date}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
