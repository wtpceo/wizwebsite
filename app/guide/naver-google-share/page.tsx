import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 48자
const TITLE = "구글 네이버 검색 점유율: 28%부터 65%까지, 왜 출처마다 다른가"
const DESC =
  "2026년 8월, 구글 앱이 국내 MAU에서 처음으로 네이버를 넘어섰습니다. 그런데 같은 시기 다른 조사에서는 네이버가 64%로 압도합니다. 네이버 점유율이 출처에 따라 28%부터 65%까지 벌어지는 이유를 측정 기준별로 정리하고, 매장을 운영하는 분이 실제로 봐야 할 지표가 무엇인지 저희 실측과 함께 적었습니다."
const DATE = "2026-08-21"
const URL = "https://wiztheplanning.com/guide/naver-google-share"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "구글 네이버 검색 점유율", "네이버 구글 MAU", "국내 검색엔진 점유율",
    "검색 점유율 2026", "네이버 AI 브리핑", "AI 검색 점유율",
  ],
  alternates: { canonical: "/guide/naver-google-share" },
  openGraph: { images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "구글이 네이버를 제친 게 맞나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "무엇을 셌느냐에 따라 답이 갈립니다. 앱 월간 이용자 수(MAU)에서는 2026년 7월 구글이 처음으로 네이버를 앞섰습니다. 하지만 같은 자료에서 일간 이용자 수와 체류 시간은 네이버가 크게 앞섰고, 국내 패널 기준 검색 점유율 조사에서는 네이버가 60%대를 유지합니다. 한 문장으로 정리되는 상황이 아닙니다.",
      },
    },
    {
      "@type": "Question",
      name: "왜 조사마다 점유율 숫자가 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "측정 대상이 다르기 때문입니다. 앱 MAU는 한 달에 한 번만 앱을 열어도 집계되고, 구글 앱은 안드로이드 단말에 기본 탑재돼 있습니다. StatCounter류는 자사 태그가 심긴 웹사이트로 들어온 유입의 출처를 셉니다. 국내 패널 조사는 표본 집단의 실제 검색 행동을 봅니다. 세 가지는 서로 다른 질문에 대한 답이라 숫자가 같을 수 없습니다.",
      },
    },
    {
      "@type": "Question",
      name: "매장을 운영하는 사람은 어느 숫자를 봐야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "전국 점유율은 참고 자료일 뿐입니다. 실제로 봐야 할 것은 우리 업종의 손님이 어디서 우리를 찾는지입니다. 지역 밀착 업종이라면 네이버 플레이스와 AI 브리핑의 비중이 여전히 크고, 비교·조사가 필요한 업종이라면 구글과 ChatGPT의 비중이 큽니다. 전국 평균이 아니라 우리 유입 경로를 직접 재는 것이 맞습니다.",
      },
    },
    {
      "@type": "Question",
      name: "네이버와 구글 중 한 곳만 하면 안 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "지금은 어렵습니다. 네이버는 robots.txt로 글로벌 AI 크롤러의 접근을 막고 있어서, 네이버 블로그에 쌓은 글은 ChatGPT나 퍼플렉시티가 읽지 못합니다. 반대로 네이버 AI 브리핑은 네이버 색인만 참고합니다. 저희 페이지도 네이버 AI 브리핑 1위였는데 ChatGPT에는 나오지 않았습니다. 두 경로는 서로를 대신하지 못합니다.",
      },
    },
  ],
}

const ROWS: [string, string, string, string][] = [
  ["조선일보 (아이지에이웍스 모바일인덱스)", "앱 MAU · 2026년 7월", "4,684만 명", "4,702만 명"],
  ["seonews (StatCounter 인용)", "웹 트래픽 · 2026년 7월", "40.87%", "49.52%"],
  ["한국데이터경제신문 (StatCounter 인용)", "웹 트래픽 · 2026년 3월", "43.96%", "46.81%"],
  ["Inblog", "2026년 집계", "48.6%", "42.9%"],
  ["준이아빠블로그 (인터넷트렌드 인용)", "국내 패널 · 2026년 상반기", "64.28%", "28.37%"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/naver-google-share"
        kicker="시장 데이터 · 자체 정리"
        title={TITLE}
        description={DESC}
        date="2026년 8월 21일"
      >
        {/* 결론 우선 — 상단 150자 이내 */}
        <p>
          <strong>네이버 점유율이 조사에 따라 28%부터 65%까지 벌어집니다.</strong> 어느 하나가 틀린 게
          아니라 <strong>무엇을 셌느냐가 서로 다릅니다.</strong> 그래서 &ldquo;누가 1등이냐&rdquo;는
          매장 운영에 쓸모가 없고, 봐야 할 건 <strong>우리 손님이 어디서 우리를 찾느냐</strong>입니다.
        </p>

        <h2>같은 시장, 다른 숫자</h2>
        <p>2026년 들어 나온 조사들을 한 표에 놓아 보겠습니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">출처</th>
                <th className="px-4 py-3 font-bold text-gray-900">무엇을 셌나</th>
                <th className="px-4 py-3 font-bold text-gray-900">네이버</th>
                <th className="px-4 py-3 font-bold text-gray-900">구글</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 text-gray-700">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-500">{r[1]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{r[2]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          2026년 8월 21일 기준으로 공개된 보도·자료를 저희가 모아 정리한 표입니다. 각 수치의 원 출처는
          표에 적힌 조사 기관이며, 일부는 언론·블로그를 통해 인용된 값입니다.
        </p>

        <h2>왜 이렇게 다른가: 세 가지 자를 쓰고 있습니다</h2>

        <h3>1. 앱 MAU: &ldquo;한 달에 한 번이라도 열었나&rdquo;</h3>
        <p>
          <a
            href="https://www.chosun.com/economy/tech_it/2026/08/13/PSQUGWHAHRBVDKEFWSDINDGDWA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            구글 앱이 국내 MAU에서 네이버를 처음 넘어섰다는 조선일보 보도
          </a>
          가 이 기준입니다. 아이지에이웍스 모바일인덱스 자료로, 구글 4,702만 명 대 네이버 4,684만 명이었습니다.
        </p>
        <p>
          다만 <strong>MAU는 한 달에 한 번만 앱을 열어도 집계</strong>됩니다. 그리고 구글 앱은 안드로이드
          단말에 기본으로 깔려 있습니다. 같은 보도가 짚은 다른 숫자를 보면 성격이 분명해집니다.
        </p>
        <ul>
          <CheckItem><strong>일간 이용자(DAU)</strong>: 네이버 2,600만~2,700만 대 구글 1,600만~1,700만</CheckItem>
          <CheckItem><strong>1인당 하루 사용 시간</strong>: 네이버 21~24분 대 구글 6분</CheckItem>
          <CheckItem><strong>하루 총 사용 시간</strong>: 네이버 900만~1,000만 시간 대 구글 160만~170만 시간</CheckItem>
        </ul>
        <p>
          <strong>월 단위로는 구글이 앞섰는데, 하루 단위로는 네이버가 서너 배 앞섭니다.</strong> 두 숫자
          모두 사실이고, 서로 다른 질문에 답하고 있을 뿐입니다.
        </p>

        <h3>2. 웹 트래픽: &ldquo;어느 검색에서 넘어왔나&rdquo;</h3>
        <p>
          StatCounter류는 <strong>자사 태그가 심긴 웹사이트에 들어온 방문자가 어디서 왔는지</strong>를
          셉니다. 그래서 태그를 단 사이트의 성격에 결과가 좌우됩니다. 국내에서 구글 쪽 수치가 높게
          잡히는 경향이 여기서 나옵니다.
        </p>

        <h3>3. 국내 패널: &ldquo;표본 집단이 실제로 어디서 검색했나&rdquo;</h3>
        <p>
          인터넷트렌드 같은 국내 조사는 표본의 실제 검색 행동을 봅니다. 이 기준에서는 네이버가 60%대를
          유지합니다. <strong>같은 달에도 웹 트래픽 기준과 30%포인트 이상 벌어집니다.</strong>
        </p>

        <Callout>
          <strong>어느 조사도 거짓말을 하고 있지 않습니다.</strong> &lsquo;검색 점유율&rsquo;이라는 한
          단어 아래 서로 다른 세 가지를 재고 있을 뿐입니다. 그래서 기사 제목만 보고 판단하면 매번 결론이
          뒤집힙니다. <strong>숫자를 볼 때 항상 &lsquo;무엇을 셌는지&rsquo;를 먼저 확인해야 합니다.</strong>
          같은 원리를 AI 노출 측정에 적용한 방법은{" "}
          <a href="/guide/measure-ai-traffic">AI 검색 유입 측정: 4단계로 나눠 세기</a>에 정리했습니다.
        </Callout>

        <h2>매장을 운영한다면 이 논쟁은 건너뛰어도 됩니다</h2>
        <p>
          전국 점유율이 몇 대 몇이든, <strong>사장님 가게를 찾는 손님의 경로는 업종과 지역으로 정해집니다.</strong>
        </p>
        <ul>
          <CheckItem>
            <strong>지역에서 바로 찾는 업종</strong>(음식점·미용·병의원·펜션): 네이버 플레이스와 AI
            브리핑의 비중이 여전히 큽니다
          </CheckItem>
          <CheckItem>
            <strong>비교하고 조사한 뒤 고르는 업종</strong>(시술·전문 서비스·B2B): 구글과 ChatGPT에서
            먼저 정보를 모으는 경우가 늘고 있습니다
          </CheckItem>
        </ul>
        <p>
          전국 평균이 아니라 <strong>우리 유입 경로를 직접 재는 것</strong>이 맞습니다. GA4에서 어느
          검색·AI에서 들어왔는지 확인하는 방법은 앞서 정리해 두었습니다.
        </p>

        <h2>다만 한 곳만 하면 안 되는 이유는 분명합니다</h2>
        <p>
          점유율 논쟁과 별개로, <strong>두 경로는 서로를 대신하지 못합니다.</strong> 이건 저희가 직접
          확인한 부분입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>네이버는 글로벌 AI 크롤러를 막고 있습니다.</strong> robots.txt에 명시돼 있어, 네이버
            블로그에 쌓은 글은 ChatGPT·퍼플렉시티가 읽지 못합니다(
            <a href="/guide/naver-blocks-ai-crawlers">실측 기록</a>)
          </CheckItem>
          <CheckItem>
            <strong>네이버 AI 브리핑은 네이버 색인만 봅니다.</strong> 홈페이지를 아무리 잘 만들어도
            네이버에 색인되지 않으면 브리핑에 인용되지 않습니다(
            <a href="/guide/naver-ai-briefing">브랜드 블로그로 1위 한 사례</a>)
          </CheckItem>
          <CheckItem>
            <strong>저희 페이지는 네이버 AI 브리핑 1위였는데 ChatGPT에는 나오지 않았습니다.</strong>{" "}
            같은 글, 같은 날인데 결과가 갈렸습니다(<a href="/guide/ranked-but-not-in-chatgpt">실험 기록</a>)
          </CheckItem>
        </ul>
        <p>
          <strong>&ldquo;구글이 이겼으니 네이버를 접자&rdquo;도, &ldquo;네이버가 아직 세니 구글은
          나중에&rdquo;도 둘 다 위험합니다.</strong> 지금은 두 경로가 각각 닫혀 있어서, 하나를 포기하면
          그쪽 손님이 통째로 사라집니다.
        </p>

        <h2>지금 할 것</h2>
        <ul>
          <CheckItem>
            <strong>기사 제목이 아니라 측정 기준을 봅니다.</strong> MAU인지, 웹 트래픽인지, 패널인지에
            따라 결론이 반대로 나옵니다
          </CheckItem>
          <CheckItem>
            <strong>전국 점유율 대신 우리 유입을 잽니다.</strong> GA4 트래픽 획득에서 네이버·구글·AI
            비중을 직접 확인합니다
          </CheckItem>
          <CheckItem>
            <strong>두 경로를 나눠서 관리합니다.</strong> 네이버는 플레이스·블로그, 글로벌 AI는 우리
            홈페이지가 자산입니다
          </CheckItem>
        </ul>
        <p>
          우리 홈페이지가 AI에게 어떻게 보이는지는{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 확인하실 수 있고, 전체 그림은{" "}
          <a href="/guide/geo">GEO 총정리</a>에 모아 두었습니다.
        </p>
      </GuideArticle>
    </>
  )
}
