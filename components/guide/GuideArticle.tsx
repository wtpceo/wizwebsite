import Link from "next/link"
import { DocShell, Crumb } from "@/components/shortform/DocParts"
import { BIZ_CTA } from "@/components/shortform/SiteChrome"
import { Icon } from "@/components/shortform/icons"
import RelatedArticles from "@/components/guide/RelatedArticles"

type GuideCta = {
  title: string
  body: string
  href: string
  label: string
  /** 버튼 아래 작은 링크 (예: 매장 글에서 병원·의원만 병원 진단으로 보낼 때) */
  sub?: { href: string; label: string }
}

// 하단 박스. 2026-11-03 대표 결정으로 타깃을 기업 전용으로 바꿨다(소상공인은 받지 않고, 병원은 기업으로 본다).
// 글 본문은 검색 자산이라 그대로 두고, 하단 박스만 기업·병원 문의로 바꾼다. 문구: 작가 원고 2026-11-03_가이드_진단상자_교체문구
// 제목은 어느 폭에서나 쉼표 뒤에서 줄을 끊는다(아래 CtaTitle). 휴대폰에서도 2줄에 들도록 작가가 뒷부분을 줄였다
export const BUSINESS_CTA: GuideCta = {
  title: "광고 예산이 있는 기업이라면, 검색 결과부터 확인해 보세요",
  body: "네이버·구글 검색과 AI 답변에 브랜드가 어떻게 나오는지 같이 보고, 담당자님과 목표부터 정하겠습니다.",
  href: "/business/contact",
  label: "제안 요청 보내기",
}
const DEFAULT_CTA = BUSINESS_CTA

// 병원 주제 글. 병원 무료 진단은 계속 둔다(2026-11-03 대표 결정). 버튼은 병원 진단(/medical-diagnosis)으로 보낸다
export const MEDICAL_CTA: GuideCta = {
  title: "광고 예산이 있는 병원이라면, 검색 결과부터 확인해 보세요",
  body: "진료과 검색어로 네이버와 AI 답변에 병원이 어떻게 소개되는지 같이 보고, 원장님·실장님과 목표부터 정하겠습니다.",
  href: "/medical-diagnosis",
  label: "병원 무료 AI 검색 진단 신청",
}

// 예전 자영업 글용 상자. 이제 기업 상자와 같다(가져다 쓰는 글이 있어 이름만 남긴다)
export const SMALL_BIZ_CTA = BUSINESS_CTA

function CtaTitle({ text }: { text: string }) {
  const at = text.indexOf(", ")
  if (at < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, at + 1)}
      <br /> {text.slice(at + 2)}
    </>
  )
}

// 가이드 아티클 공용 레이아웃 (서버 컴포넌트 — 정적 렌더링이라 크롤러/AI가 그대로 읽음)
export default function GuideArticle({
  kicker = "GUIDE",
  title,
  description,
  date,
  href,
  cta = DEFAULT_CTA,
  afterArticle,
  children,
}: {
  kicker?: string
  title: string
  description: string
  date: string
  /** 이 글의 경로 — "이어서 읽기" 추천에 사용 */
  href?: string
  /** 하단 박스 문구와 행선지. 병원 글은 MEDICAL_CTA. null이면 박스를 뺀다(본문 아래에 신청서를 직접 둔 글) */
  cta?: GuideCta | null
  /** 본문 바로 아래, 이어서 읽기 위에 넣을 블록 (예: 글 안의 진단 신청서) */
  afterArticle?: React.ReactNode
  children: React.ReactNode
}) {
  // 2026-11-05 사장님 「인사이트도 새 디자인으로」 — 껍데기(머리글·첫 칸·글 아래 상자·바닥글)만 회사 홈 새 디자인으로. 본문·주소·구조화 데이터는 그대로
  return (
    <DocShell cta={cta ? { href: cta.href, label: cta.label } : BIZ_CTA}>
      <section className="dp-hero gd-hero" aria-label="글 머리">
        <div className="dp-w gd-hero-in">
          <Crumb items={[{ name: "홈", href: "/" }, { name: "마케팅 칼럼", href: "/guide" }]} />
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

      {/* 본문. 링크가 일반 글자처럼 보이지 않게 색과 밑줄을 준다. 버튼처럼 class를 직접 준 링크는 건드리지 않는다 */}
      <article className="gd-body container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 [&>h2]:mt-12 [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-[#0F1B2D] [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0F1B2D] [&>p]:mt-4 [&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-[#34405A] [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:pl-1 [&>ol]:mt-4 [&>ol]:space-y-3 [&>ol]:pl-1 [&_a:not([class])]:font-semibold [&_a:not([class])]:text-[#0055FF] [&_a:not([class])]:underline [&_a:not([class])]:underline-offset-4">
        {children}
      </article>

      {afterArticle}

      {/* 이어서 읽기 — 관련 글로 회독 유도 + 내부 링크 강화 */}
      {href && <RelatedArticles currentHref={href} />}

      {/* 글 아래 상자 — 행선지는 11-03 결정 그대로(기업 → 제안 요청, 병원 → 병원 진단) */}
      {cta && (
        <section className="gd-cta" id="contact" aria-label="문의">
          <div className="dp-w gd-cta-in">
            <div>
              <h2>
                <CtaTitle text={cta.title} />
              </h2>
              <p>{cta.body}</p>
            </div>
            <div className="gd-cta-b">
              <Link className="p1" href={cta.href}>
                {cta.label} <Icon k="arrow" />
              </Link>
              {cta.sub && (
                <Link className="p2" href={cta.sub.href}>
                  {cta.sub.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </DocShell>
  )
}

// 본문 안에서 쓰는 체크/포인트 리스트 아이템
export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-base leading-relaxed text-[#34405A]">
      <span className="mt-2 h-2 w-2 shrink-0 bg-[#0055FF]" />
      <span>{children}</span>
    </li>
  )
}

// 강조 콜아웃 박스
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 border-l-4 border-[#0055FF] bg-[#F3F7FB] px-5 py-4 text-base leading-relaxed text-[#1F2937]">
      {children}
    </div>
  )
}
