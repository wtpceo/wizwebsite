import Link from "next/link"
import { relatedBizArticles } from "@/lib/business-articles"
import { DocShell, Crumb } from "@/components/shortform/DocParts"
import { Icon } from "@/components/shortform/icons"
import { BIZ_CTA } from "@/components/shortform/SiteChrome"

/** 기업 경로 신청 버튼 — 머리글·아래 바도 제안 요청으로(무료 상담 신청 ✕ · CLAUDE.md 기업 경로 정책) */
export { BIZ_CTA }

export { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 본문 중간 행동 유도 문단. 글 하단 박스까지 내려가지 않고 떠나는 담당자를 위해 글마다 한 곳에 둔다.
// 문구 안에 /contact 링크를 직접 넣는다(자영업 경로 링크 금지).
export function BizContactNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mt-8 border-l-4 border-[#2A93C2] bg-[#F3F7FB] px-5 py-4 text-base leading-[1.85] text-[#1F2937]">
      {children}
    </aside>
  )
}

// 기업 경로 글 레이아웃. 본문 스타일 규칙은 가이드 글과 같게 두되,
// CTA는 무료 진단이 아니라 제안 요청(/contact)으로만 보낸다.
export default function BizArticle({
  href,
  kicker,
  title,
  description,
  date,
  ctaTitle,
  ctaBody,
  children,
}: {
  href: string
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
  // 2026-11-05 사장님 「인사이트도 새 디자인으로」 — 껍데기만 회사 홈 새 디자인으로. 본문·주소·구조화 데이터는 그대로
  return (
    <DocShell cta={BIZ_CTA}>
      <section className="dp-hero gd-hero t-k" aria-label="글 머리">
        <div className="dp-w gd-hero-in">
          <Crumb items={[{ name: "기업 마케팅", href: "/business" }, { name: "인사이트", href: "/business/insights" }]} />
          <p className="dp-no">{kicker}</p>
          <h1>{title}</h1>
          <p className="dp-lead">{description}</p>
        </div>
      </section>
      <p className="dp-meta">
        <span className="dp-w" style={{ display: "block" }}>
          글 <b>위즈더플래닝 마케팅팀</b> · {date}
        </span>
      </p>

      <article className="gd-body container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 [&>h2]:mt-12 [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-[#0F1B2D] [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0F1B2D] [&>p]:mt-4 [&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-[#34405A] [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:pl-1 [&>ol]:mt-4 [&>ol]:list-decimal [&>ol]:space-y-3 [&>ol]:pl-5 [&_a]:font-semibold [&_a]:text-[#1E6C9F] [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </article>

      {related.length > 0 && (
        <section aria-label="이어서 읽기" className="container mx-auto max-w-3xl px-4 pb-4 md:px-6">
          <div className="border-t border-[#E3EAF2] pt-10">
            <h2 className="mb-5 flex items-center gap-3 text-lg font-extrabold tracking-tight text-[#0F1B2D]">
              <span className="h-5 w-1 bg-[#2A93C2]" />
              이어서 읽기
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((a) => (
                <Link key={a.href} href={a.href} className="group flex flex-col overflow-hidden rounded-lg border border-[#E3EAF2] bg-[#F3F7FB] transition-colors hover:border-[#2A93C2]">
                  <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
                    <img src={a.cover} alt="" width={1200} height={675} loading="lazy" className="h-full w-full object-cover" />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-bold text-[#1E6C9F]">{a.kicker}</span>
                    <span className="mt-1.5 text-base font-bold leading-snug text-[#0F1B2D] group-hover:text-[#1E6C9F]">{a.title}</span>
                    <span className="mt-auto pt-3 text-xs text-[#4B5565]">{a.date}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="gd-cta" id="contact" aria-label="제안 요청">
        <div className="dp-w gd-cta-in">
          <div>
            <h2>{ctaTitle}</h2>
            <p>{ctaBody}</p>
          </div>
          <div className="gd-cta-b">
            <Link className="p1" href="/contact">
              제안 요청 보내기 <Icon k="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </DocShell>
  )
}
