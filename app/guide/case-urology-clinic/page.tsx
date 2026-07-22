import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "ChatGPT에 아예 안 뜨던 비뇨기과 — 원인은 홈페이지 방화벽이었습니다 (6개월 GEO 사례)"
const DESC =
  "광고 규제가 많아 홈페이지와 콘텐츠가 특히 중요한 비뇨기과. 그런데 ChatGPT에서는 아예 검색되지 않았습니다. 원인은 콘텐츠가 아니라 제작사가 기본값으로 남겨둔 보안 방화벽이 AI 크롤러까지 막고 있던 것이었습니다. 차단 해제와 홈페이지 전면 개선 후 6개월, ChatGPT·구글·네이버 모두에 안정적으로 노출되기까지의 실제 사례입니다."
const DATE = "2026-07-17"
const URL = "https://wiztheplanning.com/guide/case-urology-clinic"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "비뇨기과 마케팅", "병원 GEO 사례", "AI 검색 최적화 사례", "ChatGPT 병원 추천",
    "크롤러 차단", "홈페이지 방화벽", "병원 홈페이지 개선", "의료 마케팅",
    "AI 검색 안 나올 때", "병원 콘텐츠 마케팅",
  ],
  alternates: { canonical: "/guide/case-urology-clinic" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle
        kicker="CASE STUDY"
        title={TITLE}
        description={DESC}
        date="2026년 7월 17일"
      >
        <p>
          수도권 한 지역에서 <strong>비뇨의학과</strong>를 운영하는 원장님의 사례입니다. 광고주 요청에
          따라 병원명과 정확한 지역은 공개하지 않습니다.
        </p>

        <h2>광고가 어려운 진료과일수록 홈페이지가 전부입니다</h2>
        <p>
          비뇨기과는 마케팅 조건이 까다로운 진료과입니다. 의료광고 규제로 표현이 자유롭지 않고,
          진료 특성상 <strong>환자가 지인에게 물어보기 어렵습니다.</strong> 입소문이 잘 돌지 않는다는
          뜻입니다. 그래서 환자는 대부분 <strong>혼자 검색해서</strong> 병원을 고릅니다.
        </p>
        <p>
          이런 업종은 결국 <strong>홈페이지와 글이 승부처</strong>입니다. 원장님도 그걸 알고 계셨고,
          그래서 더 답답한 상황이었습니다. <strong>ChatGPT에서는 병원이 아예 검색되지 않았기
          때문입니다.</strong>
        </p>

        <h2>원인은 콘텐츠가 아니라 개발단에 있었습니다</h2>
        <p>
          진단을 돌려보니 원인이 명확했습니다. 홈페이지에 걸려 있던{" "}
          <strong>보안 방화벽 설정이 AI 크롤러의 접근까지 막고 있었습니다.</strong> 제작사가 기본값으로
          설정해 두고 풀지 않은 상태였습니다.
        </p>
        <p>
          사람이 브라우저로 접속하면 홈페이지는 멀쩡하게 열립니다. 그래서 아무도 문제를 눈치채지
          못합니다. 하지만 AI 크롤러 입장에서는 <strong>그 홈페이지가 존재하지 않는 것과
          같았습니다.</strong> 읽을 수 없으니 인용할 수도, 추천할 수도 없었던 것입니다.
        </p>
        <Callout>
          원장님은 원인을 짐작조차 하실 수 없었습니다. 당연합니다. 이건 진료나 콘텐츠의 문제가 아니라
          <strong> 개발단에서만 확인하고 풀 수 있는 문제</strong>였기 때문입니다. 콘텐츠를 아무리 더
          만들어도 해결되지 않았을 상황이었습니다.
        </Callout>
        <p>
          실제로 이런 경우가 드물지 않습니다. 홈페이지를 만든 지 오래됐거나, 보안 설정을 강하게 잡아둔
          채 방치된 사이트에서 자주 발견됩니다. <strong>내 홈페이지가 AI에게 안 보이는 상태인지
          아닌지는, 확인해 보기 전에는 알 수 없습니다.</strong>
        </p>

        <h2>무엇을 했나</h2>
        <ol>
          <CheckItem>
            <strong>크롤러 차단을 해제했습니다</strong> — 보안은 유지하면서 검색엔진과 AI 크롤러는
            정상적으로 접근할 수 있도록 설정을 바로잡았습니다. 이것이 모든 작업의 출발점이었습니다.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지를 전면 개선했습니다 (약 2개월)</strong> — 오래된 홈페이지를 GEO 기준에 맞는
            구조로 다시 만들었습니다. 기계가 읽을 수 있는 스키마와 글 구조를 정비하고, 진료과목 정보를
            환자 눈높이에서 충분히 풀어 썼으며, <strong>FAQ 형태의 콘텐츠를 여러 편</strong>
            확보했습니다. AI는 질문과 답변이 명확한 콘텐츠를 특히 잘 인용합니다.
          </CheckItem>
          <CheckItem>
            <strong>흩어진 정보를 일치시켰습니다</strong> — 채널마다 어긋나 있던 병원 정보를 하나의
            기준으로 통일했습니다. 플랫폼 검수 절차가 있어 이 작업에는 생각보다 시간이 걸렸습니다.
          </CheckItem>
        </ol>
        <Callout>
          의료광고법 안에서 어디까지 쓸 수 있고 무엇을 피해야 하는지에 대한 구체적인 설계 방식은{" "}
          <strong>위즈더플래닝의 노하우라 공개하지 않습니다.</strong> 다만 이 사례를 포함해 모든 병원
          작업은 의료광고 기준을 반영해 진행합니다. 관련 원칙은{" "}
          <a href="/guide/medical-geo">병원·의원 GEO 가이드</a>에서 일반적인 수준으로 정리해 두었습니다.
        </Callout>

        <h2>6개월 뒤</h2>
        <p>
          작업을 시작하고 약 6개월이 지난 현재,{" "}
          <strong>ChatGPT·구글·네이버 모두에서 노출되고 있습니다.</strong> 아예 검색조차 되지 않던
          상태에서, 관련된 웬만한 질문에는 <strong>상위 3순위 안에 안정적으로 등장하는 상태</strong>로
          바뀌었습니다.
        </p>
        <p>
          지역과 진료과목이 겹치는 환자 질문에서 병원 이름이 반복적으로 언급된다는 것은, 광고를 켜고
          끄는 것과 성격이 다릅니다. <strong>한 번 쌓인 신뢰 데이터는 광고비를 멈춘다고 사라지지
          않습니다.</strong>
        </p>

        <h2>이 사례가 말해주는 것</h2>
        <ul>
          <CheckItem>
            <strong>홈페이지가 멀쩡해 보여도 AI에게는 안 보일 수 있습니다.</strong> 사람 눈에 잘 열리는
            것과 크롤러가 읽을 수 있는 것은 완전히 다른 문제입니다.
          </CheckItem>
          <CheckItem>
            <strong>콘텐츠를 더 만들기 전에 기술 상태부터 확인해야 합니다.</strong> 막혀 있는 상태에서
            글을 아무리 써도 AI는 읽지 못합니다. 순서가 틀리면 돈과 시간이 그대로 낭비됩니다.
          </CheckItem>
          <CheckItem>
            <strong>광고 규제가 많은 진료과일수록 GEO가 구조적으로 유리합니다.</strong> 광고로 밀어붙이기
            어렵고 입소문도 잘 안 도는 업종은, 검색과 AI 답변이 사실상 유일한 통로이기 때문입니다.
          </CheckItem>
          <CheckItem>
            <strong>시간이 걸립니다.</strong> 홈페이지 개선에만 약 2개월, 정보 일치에 플랫폼 검수 시간,
            안정적인 노출까지 6개월가량 걸렸습니다. 빠른 업종은 더 빠르지만, 상태가 나쁠수록 기초
            공사에 시간이 듭니다.
          </CheckItem>
        </ul>

        <h2>혹시 우리 홈페이지도?</h2>
        <p>
          이 사례에서 가장 무서운 부분은, <strong>원장님이 6개월 전까지 이 사실을 전혀 모르고
          계셨다는 점</strong>입니다. 홈페이지는 잘 열리고 있었으니까요.
        </p>
        <p>
          우리 홈페이지가 AI에게 읽히고 있는 상태인지, 채널별 정보가 어긋나 있지는 않은지는 확인해
          보면 바로 알 수 있습니다. 병원·의원은{" "}
          <a href="/medical-diagnosis">무료 AI 검색 진단</a>으로 현재 상태를 먼저 확인해 보세요. 이
          사례도 진단에서 시작했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
