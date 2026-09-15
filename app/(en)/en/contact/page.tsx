import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import EnHeader from "@/components/en/EnHeader"
import EnFooter from "@/components/en/EnFooter"
import EnContactForm from "@/components/en/EnContactForm"
import { EN_BASE, EN_ORG } from "@/lib/en/site"

const PATH = "/en/contact"
const TITLE = "Contact WizThePlanning"
const DESC = "Contact WizThePlanning, a Seoul-based marketing agency, about Korea market entry, agency partnerships or marketing for your business in Korea. We reply by email in English."

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Korea Marketing Agency` },
  description: DESC,
  alternates: { canonical: PATH, languages: { en: `${EN_BASE}${PATH}` } },
  openGraph: { title: TITLE, description: DESC, url: `${EN_BASE}${PATH}`, images: ["/og-image.jpg"], type: "website", locale: "en_US" },
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: TITLE,
  url: `${EN_BASE}${PATH}`,
  inLanguage: "en",
  about: { "@id": `${EN_BASE}/en#organization` },
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <EnHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">CONTACT</p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-white">Talk to our team in Seoul</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              Tell us what you are planning in Korea. We read every message and reply by email in English.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-5 md:px-6">
            <div className="md:col-span-2">
              <h2 className="text-xl font-extrabold text-gray-900">What helps us reply faster</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                <li><strong className="text-gray-900">Your product or service</strong> and who it is for in Korea.</li>
                <li><strong className="text-gray-900">What exists already</strong>: Korean website, Naver accounts, past campaigns.</li>
                <li><strong className="text-gray-900">Timeline</strong>: launch date or when you want to start.</li>
                <li><strong className="text-gray-900">For agencies</strong>: the client&apos;s category and what they asked for.</li>
              </ul>
              <div className="mt-8 space-y-3 text-sm text-gray-700">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-600" /><a href={`mailto:${EN_ORG.email}`} className="font-semibold hover:underline">{EN_ORG.email}</a></p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-600" />{EN_ORG.phoneKorea} (from Korea, Korean-language line)</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" />{EN_ORG.city}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-[#f9fafb] p-5 md:col-span-3 md:p-8">
              <EnContactForm />
            </div>
          </div>
        </section>
      </main>
      <EnFooter />
    </div>
  )
}
