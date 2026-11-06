import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import RelatedArticles from "@/components/guide/RelatedArticles"
import s from "@/components/guide/guide.module.css"

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
// 2026-11 리브랜딩: 흰 바탕·잉크 글자. 제목 위 작은 머리말(kicker)은 디자인 기준에서 빼기로 해서 화면에 그리지 않는다.
// kicker prop은 글 파일을 고치지 않으려고 계속 받는다. 스타일은 guide.module.css
export default function GuideArticle({
  title,
  description,
  date,
  href,
  cta = DEFAULT_CTA,
  afterArticle,
  children,
}: {
  /** 화면에는 그리지 않는다(디자인 기준: 제목 위 머리말 금지). 글 파일 호환용 */
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
            <Link href="/guide" className={s.textLink}>
              가이드 목록
            </Link>
          </div>
          <div className={s.col}>
            <p className={s.lead}>{description}</p>

            {/* 본문. 링크는 잉크 + 밑줄. 글 파일 안 Tailwind 장식(테두리·둥근 모서리·민트 글자)은 .prose가 덮어쓴다 */}
            <article className={s.prose}>{children}</article>

            {afterArticle && <div className={s.after}>{afterArticle}</div>}
          </div>
        </div>

        {/* 이어서 읽기 — 관련 글로 회독 유도 + 내부 링크 강화 */}
        {href && <RelatedArticles currentHref={href} />}

        {cta && (
          <section className={s.cta} aria-label="문의">
            <h2 className={s.ctaTitle}>
              <CtaTitle text={cta.title} />
            </h2>
            <p className={s.ctaBody}>{cta.body}</p>
            <Link href={cta.href} className={`${s.btn} ${s.ctaBtn}`}>
              {cta.label}
            </Link>
            {cta.sub && (
              <p className={s.ctaSub}>
                <Link href={cta.sub.href}>{cta.sub.label}</Link>
              </p>
            )}
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

// 본문 안에서 쓰는 체크/포인트 리스트 아이템
export function CheckItem({ children }: { children: React.ReactNode }) {
  return <li className={s.check}>{children}</li>
}

// 강조 콜아웃 박스
export function Callout({ children }: { children: React.ReactNode }) {
  return <div className={s.callout}>{children}</div>
}
