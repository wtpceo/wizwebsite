import Link from "next/link"
import {
  ChevronRight, Search, Globe2, MessageCircle, Wrench, Layers,
  Sparkles, CheckCircle2, ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LangSwitcher from "@/components/i18n/LangSwitcher"
import LocaleContactForm from "@/components/i18n/LocaleContactForm"
import SetHtmlLang from "@/components/i18n/SetHtmlLang"
import type { LandingContent } from "@/lib/i18n/content"
import { getLocale, type Locale } from "@/lib/i18n/config"

const KAKAO_URL = "http://pf.kakao.com/_QUTxcb"
const SOLUTION_ICONS = [Sparkles, Wrench, Layers, MessageCircle]

// 외국어 로케일 랜딩 (서버 컴포넌트 — 정적 렌더링이라 크롤러/AI가 그대로 읽음)
export default function LocaleLanding({
  locale,
  t,
}: {
  locale: Exclude<Locale, "ko">
  t: LandingContent
}) {
  const htmlLang = getLocale(locale).htmlLang
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* SSR <html lang="ko"> 를 클라이언트에서 로케일에 맞게 교정 */}
      <SetHtmlLang lang={htmlLang} />

      {/* 헤더 */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <Link href={`/${locale}`} className="shrink-0 text-lg font-extrabold text-white">
            WizThePlanning<span className="text-[#00e5a0]">.</span>
          </Link>

          {/* 페이지 내 섹션 네비게이션 (데스크톱) */}
          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {t.menu.map((m) => (
              <Link
                key={m.href}
                href={m.href.startsWith("#") ? m.href : m.href}
                className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-[#00e5a0]"
              >
                {m.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <LangSwitcher current={locale} />
            <Link href="#contact" className="hidden sm:block">
              <Button size="sm" className="bg-[#00e5a0] font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                {t.nav.contact}
              </Button>
            </Link>
          </div>
        </div>

        {/* 모바일: 섹션 네비게이션 (가로 스크롤 칩) */}
        <nav className="flex gap-2 overflow-x-auto border-t border-white/5 px-4 py-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {t.menu.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {m.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        {/* 히어로 */}
        <section className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="absolute -left-32 top-0 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.08] blur-3xl" />
          <div className="container relative mx-auto max-w-4xl px-4 text-center md:px-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">{t.hero.badge}</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance break-words text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.2] tracking-tight text-white">
              {t.hero.title}
              <br />
              <span className="text-[#00e5a0]">{t.hero.highlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-slate-300">
              {t.hero.sub}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/site-check">
                <Button size="lg" className="gap-1.5 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                  <Search className="h-5 w-5" />
                  {t.hero.ctaPrimary}
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="gap-1.5 border-white/20 bg-transparent px-8 py-6 text-base font-bold text-white hover:bg-white/10">
                  {t.hero.ctaSecondary}
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">{t.hero.trust}</p>
          </div>
        </section>

        {/* 문제 */}
        <section id="problem" className="container mx-auto max-w-4xl scroll-mt-28 px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{t.problem.heading}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">{t.problem.body}</p>
          <div className="mt-8 space-y-3">
            {t.problem.points.map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#f9fafb] p-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                <p className="text-base leading-relaxed text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 해결 */}
        <section id="services" className="scroll-mt-28 bg-[#070b14] py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">{t.solution.heading}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{t.solution.body}</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {t.solution.items.map((it, i) => {
                const Icon = SOLUTION_ICONS[i] ?? Sparkles
                return (
                  <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00e5a0]/10">
                      <Icon className="h-5 w-5 text-[#00e5a0]" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-white">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{it.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 왜 홈페이지가 중요한가 */}
        <section id="why" className="container mx-auto max-w-4xl scroll-mt-28 px-4 py-16 md:px-6 md:py-24">
          <div className="flex items-center gap-2 text-[#00b37e]">
            <Globe2 className="h-5 w-5" />
            <span className="text-sm font-bold tracking-wide">GEO</span>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{t.why.heading}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">{t.why.body}</p>
          <div className="mt-8 space-y-3">
            {t.why.points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00b37e]" />
                <p className="text-base leading-relaxed text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 서비스 + 신뢰 */}
        <section id="about" className="scroll-mt-28 bg-[#f9fafb] py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{t.services.heading}</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {t.services.list.map((s) => (
                <span key={s} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#0b1220] to-[#101b2e] px-8 py-10 md:px-10">
              <h3 className="text-xl font-extrabold text-white md:text-2xl">{t.proof.heading}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">{t.proof.body}</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {t.proof.stats.map((st) => (
                  <div key={st.label} className="text-center">
                    <div className="text-2xl font-extrabold text-[#00e5a0] md:text-4xl">{st.value}</div>
                    <div className="mt-1 text-xs text-slate-400 md:text-sm">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — 외국인 사장님이 문의 전 궁금해하는 것 (FAQPage 구조화 데이터로 AI 인용에도 유리) */}
        <section id="faq" className="container mx-auto max-w-3xl scroll-mt-28 px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{t.faq.heading}</h2>
          <div className="mt-8 space-y-3">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-bold text-gray-900">
                  {f.q}
                  <span className="shrink-0 text-[#00b37e] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 문의 */}
        <section id="contact" className="container mx-auto max-w-2xl scroll-mt-28 px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{t.contact.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-gray-600">{t.contact.body}</p>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
            <LocaleContactForm locale={locale} t={t.contact} />
            <div className="mt-4 flex items-center justify-center">
              <Link
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00b37e] hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                {t.contact.kakao}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-white/10 bg-[#05080f] py-10 text-sm text-slate-400">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
          <p className="font-bold text-white">{t.footer.company}</p>
          <LangSwitcher current={locale} />
          <p className="text-xs text-slate-500">© 2016–2026 WizThePlanning. {t.footer.rights}.</p>
        </div>
      </footer>
    </div>
  )
}
