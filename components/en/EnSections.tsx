import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { EN_INSIGHTS, fmtEnDate } from "@/lib/en/insights"

// 영문 랜딩 페이지들이 함께 쓰는 블록. 페이지마다 같은 모양을 반복해 쓰지 않도록 모았다.

export function EnHero({ kicker, title, lead, children }: { kicker: string; title: string; lead: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
      <div className="geo-grid-bg absolute inset-0 opacity-60" />
      <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">{kicker.toUpperCase()}</p>
        <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.15] tracking-tight text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{lead}</p>
        {children}
      </div>
    </section>
  )
}

export function EnCtaButtons({ primary, secondary }: { primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link href={primary.href} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#00e5a0] px-6 py-3 text-sm font-bold text-[#070b14] hover:bg-[#3cf0bb]">
        {primary.label} <ArrowRight className="h-4 w-4" />
      </Link>
      {secondary && (
        <Link href={secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-white/50">
          {secondary.label}
        </Link>
      )}
    </div>
  )
}

export function EnSection({ kicker, title, lead, children, tone = "white" }: { kicker?: string; title: string; lead?: string; children: React.ReactNode; tone?: "white" | "gray" }) {
  return (
    <section className={`py-16 md:py-20 ${tone === "gray" ? "bg-[#f9fafb]" : "bg-white"}`}>
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        {kicker && <p className="text-xs font-bold tracking-[0.2em] text-emerald-600">{kicker.toUpperCase()}</p>}
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{title}</h2>
        {lead && <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">{lead}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export function EnCard({ title, children, href, linkLabel }: { title: string; children: React.ReactNode; href?: string; linkLabel?: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-bold leading-snug text-gray-900">{title}</h3>
      <div className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{children}</div>
      {href && (
        <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:underline">
          {linkLabel ?? "Read more"} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  )
}

export function EnSteps({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
          <span className="text-sm font-extrabold text-[#00b57f]">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-base font-bold text-gray-900">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
        </li>
      ))}
    </ol>
  )
}

export function EnFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((f, i) => (
        <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
          <h3 className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
            <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
            <span>{f.q}</span>
          </h3>
          <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
        </div>
      ))}
    </div>
  )
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }
}

export function EnInsightCards({ limit, exclude }: { limit?: number; exclude?: string }) {
  const list = EN_INSIGHTS.filter((a) => a.href !== exclude).slice(0, limit)
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((a) => (
        <Link key={a.href} href={a.href} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
          <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
            <img src={a.cover} alt="" width={1200} height={675} loading="lazy" className="h-full w-full object-cover" />
          </span>
          <span className="flex flex-1 flex-col p-5">
            <span className="text-[11px] font-bold tracking-[0.15em] text-emerald-600">{a.kicker.toUpperCase()}</span>
            <span className="mt-1.5 text-base font-bold leading-snug text-gray-900 group-hover:text-emerald-700">{a.title}</span>
            <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">{a.desc}</span>
            <span className="mt-auto pt-4 text-xs text-gray-400">{fmtEnDate(a.date)}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}

export function EnBottomCta({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-6 py-12 text-center md:px-12">
          <p className="text-2xl font-extrabold text-white md:text-3xl">{title}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">{lead}</p>
          <Link href="/en/contact" className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#00e5a0] px-6 py-3 text-sm font-bold text-[#070b14] hover:bg-[#3cf0bb]">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
