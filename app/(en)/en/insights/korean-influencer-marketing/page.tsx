import type { Metadata } from "next"
import EnArticle from "@/components/en/EnArticle"
import { hreflangFor } from "@/lib/i18n/config"
import { share } from "@/lib/share-meta"

// 작가 세션 원고(2026-11-25, 27.자사브랜딩/20_글/원고/2026-11-25_EN2_korean-influencer-marketing.md). EN1(naver-seo-guide)로 링크
// 문장은 Gemini가 썼고(작가 세션, 총괄 사실 점검 끝) 글자 그대로 옮겼다. 표지는 SEO 컨설팅 글 표지와 같은 틀
const TITLE = "Korean Influencer Marketing: Agency Guide"
const DESC =
  "Running influencer marketing in Korea from abroad? Learn what to put in your brief, how Naver bloggers work, ad disclosure rules, usage rights, and costs."
const DATE = "2026-11-25"
const PATH = "/en/insights/korean-influencer-marketing"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/en-korean-influencer-marketing.jpg"

export const metadata: Metadata = share({
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: hreflangFor(PATH),
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    images: [COVER],
    type: "article",
    locale: "en_US",
  },
}, "en")

const FAQ = [
  { q: "How much does influencer marketing cost in Korea?", a: "There is no standard price list. Costs depend on the product and shipping, the number of participants, whether cash fees are paid alongside gifted products, the platform and format (Naver blog, Instagram, YouTube, or TikTok), content reuse rights, and management labor. For Naver blogs, the campaign type, post volume, and keyword competition determine the quote." },
  { q: "Do gifted products without cash payment require an ad disclosure in Korea?", a: "Yes. Under Korea Fair Trade Commission guidelines, a gifted product counts as economic compensation. Even when no manuscript or appearance fee is paid, the creator or blogger must clearly disclose the sponsorship where viewers or readers can easily notice it." },
  { q: "Can we use Korean influencer videos on our own website or Meta ads?", a: "Only if you secure those rights in advance. Creators retain the copyright and portrait rights to their content. To repurpose posts for Meta or Google ads, product detail pages, or your website, the media channels, scope, and duration must be written into the initial contract." },
  { q: "How long does it take to get a creator list from a Korean agency?", a: "Once WizThePlanning receives your brief outlining your product, target audience, timeline, and budget, we deliver a tailored creator candidate list within 3 business days at no cost." },
  { q: "Can we hire an agency in Korea just for influencer casting?", a: "Yes. You do not have to hand over your entire marketing campaign. You can work with WizThePlanning strictly for creator casting, or combine casting with Naver blog operations and paid ad amplification depending on what your team needs." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "en",
  image: `https://wiztheplanning.com${COVER}`,
  author: { "@type": "Organization", name: "WizThePlanning", url: "https://wiztheplanning.com/en" },
  publisher: { "@type": "Organization", name: "WizThePlanning", url: "https://wiztheplanning.com/en" },
  mainEntityOfPage: URL,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EnArticle
        href={PATH}
        kicker="KOREA MARKET GUIDE"
        title={TITLE}
        description={DESC}
        date="November 25, 2026"
        readingMinutes={7}
        ctaTitle="Ready to brief a Korean creator or blogger campaign?"
        ctaBody="Send us your product details, target audience, timeline, and budget in English. Our Seoul team will review your brief and send a tailored creator candidate list within 3 business days at no cost."
        ctaLabel="Contact us"
      >
        <p>{"To run influencer marketing in Korea from abroad, start by preparing a clear brief with your product, target audience, timeline, and budget. Before signing a contract with a korean influencer marketing agency, agree on candidate selection criteria, ad disclosure rules, content reuse rights, and the exact post-campaign records you will receive."}</p>
        <p>{"Managing a campaign in a language you do not read and a market where you have no local staff brings practical questions. This guide covers how Naver bloggers differ from social video creators, what shapes your costs, how Korean law treats gifted products, and what to ask an agency before you begin. If you are planning a broader launch, read our "}<a href="/en/korea-market-entry">{"Korea market entry marketing guide"}</a>{"."}</p>
        <h2>{"Two tracks for influencer marketing in Korea: Naver bloggers and social creators"}</h2>
        <p>{"We run campaigns in Korea across two distinct tracks depending on whether you want to capture search intent or build social awareness. You can run both together, or hire a local team strictly for casting without handing over your entire marketing operation."}</p>
        <h3>{"Korean blogger campaigns on Naver"}</h3>
        <p>{"Working with a korean blogger is primarily a search visibility play, broken down into two formats:"}</p>
        <ul className="list-disc pl-6">
          <li><strong>{"Blog experience groups:"}</strong>{" We confirm a recruitment notice with you, select bloggers suited to your industry and target keywords, coordinate schedules, and have them publish reviews based on actual product experience."}</li>
          <li><strong>{"Press-style blog groups:"}</strong>{" We provide key selling points and photo guidelines so bloggers can publish informative, article-style reviews."}</li>
        </ul>
        <p>{"For both formats, our team writes a manuscript guide detailing selling points and photo compositions. Recruitment notices and draft manuscripts are always reviewed and approved by your team before anything goes live. Blog posts are written around keywords people actually search on Naver, and the outcome is measured by where the post appears for those keywords. For more background on how search visibility works here, see our "}<a href="/en/insights/naver-seo-guide">{"Naver SEO guide"}</a>{"."}</p>
        <h3>{"YouTube, Instagram, and TikTok creators"}</h3>
        <p>{"Creator casting and product placement (PPL) focus on visual storytelling and audience engagement on YouTube, Instagram, and TikTok."}</p>
        <p>{"When you send us a brief, we deliver a free candidate list within 3 business days. Each profile includes why the creator fits your product, recent content engagement, past advertising history, and an estimated rate range. If you review the list and decide not to move forward, there is no charge."}</p>
        <p>{"To build this list, we do not just look at follower counts. We use our proprietary channel analysis solution to check real audience reactions, growth trends, engagement rates, upload frequency, and paid ad history. Every list is also reviewed by a division head with extensive experience in commercial model casting, who checks for past controversies, whether the creator meets posting deadlines, and whether their sponsored posts perform similarly to their organic content."}</p>
        <p>{"Once you confirm the cast, a dedicated 1:1 Account Executive handles pre-meetings, contracts, and shooting guides, then verifies guideline compliance and ad disclosures when posts go live. High-performing creator content can also be amplified later as paid Meta or Google ads."}</p>
        <h2>{"How a Korea influencer agency evaluates candidates and sets influencer marketing cost"}</h2>
        <p>{"When evaluating creators in a market you cannot read natively, vanity metrics are a common trap. Raw follower counts tell you very little about whether an audience actually listens to the creator."}</p>
        <h3>{"Vetting criteria beyond follower counts"}</h3>
        <p>{"A reliable korea influencer agency looks at recent post reactions rather than total followers. Key checks include whether the comments reflect genuine conversations, whether the product naturally fits the creator's usual content style, how past sponsored posts were received by their audience, and whether they maintain a consistent upload schedule."}</p>
        <h3>{"What drives influencer marketing cost"}</h3>
        <p>{"There is no fixed rate card for Korean creators or bloggers. Your total influencer marketing cost depends on several moving parts:"}</p>
        <ul className="list-disc pl-6">
          <li>{"The value of the product being sent and international or local shipping logistics."}</li>
          <li>{"The number of creators or bloggers involved, and whether a manuscript or appearance fee is paid on top of the product."}</li>
          <li>{"The channel and content format, such as a Naver blog article, Instagram feed post, Instagram Reel, or YouTube video."}</li>
          <li>{"The scope, media channels, and duration of secondary content usage rights."}</li>
          <li>{"The staffing required to research candidates, negotiate, manage schedules, and verify published posts."}</li>
          <li>{"For Naver blog campaigns specifically, pricing is determined by the campaign format, the number of posts, and the competitiveness of your target keywords."}</li>
        </ul>
        <h2>{"Ad disclosure rules and content reuse rights in Korea"}</h2>
        <p>{"Legal compliance and intellectual property rules in Korea apply equally to overseas brands. Both need to be sorted out before signing contracts."}</p>
        <h3>{"Mandatory ad disclosures"}</h3>
        <p>{"Under the Korea Fair Trade Commission's Guidelines on Endorsement and Testimonial Advertising ("}<a href="https://www.law.go.kr/행정규칙/추천ㆍ보증등에관한표시ㆍ광고심사지침" target="_blank" rel="noopener noreferrer">{"Korean original text"}</a>{"), any economic connection between a brand and a content creator must be disclosed where consumers can easily see it. Even if you send a free product with zero cash payment, the product itself counts as economic compensation and requires a clear ad or sponsorship label."}</p>
        <p>{"WizThePlanning places clear sponsorship or compensation disclosures on all experience group posts, press-style blog posts, and influencer content. We never produce disguised reviews that pretend to come from ordinary, uncompensated buyers."}</p>
        <h3>{"Secondary usage rights"}</h3>
        <p>{"In Korea, the copyright and portrait rights of a published post belong to the creator who made it, not the brand that paid for the campaign. If you want to reuse creator photos or videos on your brand website, product detail pages, or paid social ads, you must agree on the exact media channels, scope, and duration in the contract beforehand. When we handle casting, we build these usage terms directly into the creator agreement."}</p>
        <h2>{"What to put in your brief and ask a Korean influencer marketing agency"}</h2>
        <p>{"Whether you represent an overseas brand or an international agency managing a regional rollout, the process starts with a clear brief. If you are an agency managing a client's Korean budget, you can also review "}<a href="/en/agency-partners">{"how we work with overseas agencies"}</a>{"."}</p>
        <h3>{"Your initial brief"}</h3>
        <p>{"Send these four items to start the casting and quoting process:"}</p>
        <ul className="list-disc pl-6">
          <li><strong>{"Product details:"}</strong>{" What the product is, how it is used, its selling points, and whether samples can be shipped to Korea."}</li>
          <li><strong>{"Target audience:"}</strong>{" Who you want to reach in Korea and what problem the product solves for them."}</li>
          <li><strong>{"Timeline:"}</strong>{" Your target launch window or key promotional dates."}</li>
          <li><strong>{"Budget:"}</strong>{" Your working budget range and whether you want Naver blogs, social creators, or both."}</li>
        </ul>
        <h3>{"Questions to ask before signing"}</h3>
        <ul className="list-disc pl-6">
          <li>{"How do you check for fake engagement, and who vets the creators for past issues or missed deadlines?"}</li>
          <li>{"Will our team see recruitment notices, shooting guides, or blog drafts before they are published?"}</li>
          <li>{"How do you handle Korea Fair Trade Commission ad disclosures on gifted and paid posts?"}</li>
          <li>{"Are secondary usage rights for Meta ads, Google ads, or our product pages included in the creator contract?"}</li>
          <li>{"Exactly what data and visual proof will we receive when the campaign finishes?"}</li>
        </ul>
        <h2>{"What you receive when the campaign ends"}</h2>
        <p>{"We do not guarantee search rankings, view counts, or sales, and not every blog post will land in the exact same search position. What you should expect is clear, verifiable documentation of what was published and how it performed. You can read more about our reporting principles in "}<a href="/en/how-we-measure">{"how we measure campaigns"}</a>{"."}</p>
        <p>{"For Naver blog campaigns, we deliver the live URLs for every published post, along with screenshots showing where each post actually appears for its target keywords and whether it entered Naver's popular posts section. For YouTube, Instagram, and TikTok creator campaigns, we compile and report the performance metrics for each piece of content at the end of the campaign."}</p>
        <p>{"Founded in Seoul in 2016, WizThePlanning has worked with over 7,000 Korean advertisers. Our Seoul team handles all Korean-language casting, manuscript guides, and compliance checks on the ground, while communicating with your team in English over email and calls. We never disclose client names without permission."}</p>

        <h2>Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#0055FF]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </EnArticle>
    </>
  )
}
