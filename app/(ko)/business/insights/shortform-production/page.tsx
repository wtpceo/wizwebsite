import type { Metadata } from "next"
import BizArticle from "@/components/business/BizArticle"
import { share } from "@/lib/share-meta"

// 작가 세션 원고(2026-11-13, 27.자사브랜딩/20_글/원고/2026-11-13_숏폼제작_산출물과견적서.md). 문장은 Gemini가 썼고 글자 그대로 옮겼다.
// 대표 11/13: 홈페이지 글로 '숏폼 제작'. 네이버 08편(숏폼 대행 비용 기준)과 같은 주제를 축을 바꿔 올린다. 네이버 08편이 먼저 나간 뒤 배포한다.
// 주 키워드: 숏폼 제작. 연관 검색어: 쇼츠 제작, 숏폼 대행, 릴스 제작, 숏폼 제작 업체, 숏폼 제작 비용
// 표지는 유튜버 섭외 글과 같은 틀(30_디자인/작업/2026-11-13_숏폼제작글). 제목: 접미사 포함 34자
const TITLE = "숏폼 제작 산출물 목록과 비용 견적서 보는 법"
const DESC =
  "숏폼 제작 하루 촬영으로 받는 세로 편집본, 광고 하이라이트, 채널별 사진과 자막 목록부터 장면 구성안 기획, 견적서 항목 분리, 월간 리포트 확인 기준까지 기업 담당자용 실무 기준을 정리했습니다."
const DATE = "2026-11-17"
const PATH = "/business/insights/shortform-production"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/business-shortform-production.jpg"

export const metadata: Metadata = share({
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { images: [COVER], title: TITLE, description: DESC, url: URL, type: "article" },
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `https://wiztheplanning.com${COVER}`,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const FAQ = [
  {
    "q": "숏폼 제작 비용은 어떤 기준으로 책정되나요?",
    "a": "정해진 단일 단가표는 없으며 촬영 일수, 제작 편수, 모델 기용 조건, 촬영 장소(로케이션)에 따라 산정됩니다. 위즈더플래닝에서는 고객사에 필요한 영상과 사진 산출물 범위를 먼저 들은 뒤 항목을 나눈 상세 견적서로 안내하고 있습니다."
  },
  {
    "q": "하루 촬영을 진행하면 영상과 사진이 몇 개나 나오나요?",
    "a": "촬영 당일 임의로 찍지 않고 사전 기획 단계에서 납품할 숏폼 편수, 사진 컷 수, 활용할 채널을 리스트로 먼저 확정합니다. 연출 난이도와 장소 이동 조건에 따라 하루 동안 무리 없이 담아낼 수 있는 수량을 사전에 협의하여 결정합니다."
  },
  {
    "q": "촬영한 원본 파일을 받아 내부에서 따로 써도 되나요?",
    "a": "최종 납품하는 완성 산출물은 고객사가 자체 채널에 자유롭게 활용할 수 있도록 전달합니다. 편집을 거치지 않은 촬영 원본 파일 제공 범위와 편집본 수정 횟수, 모델 초상권 사용 기간 같은 세부 조건은 추후 혼선이 없도록 계약서에 미리 명시합니다."
  },
  {
    "q": "계약할 때 일정 수준 이상의 영상 조회수를 약속해 주나요?",
    "a": "조회수나 팔로워 숫자를 보장하지 않으며 인위적인 트래픽 구매나 자동화 프로그램도 일절 쓰지 않습니다. 정식 게시 후 각 매체의 채널 인사이트 기준 조회·반응 지표를 월간 리포트에 투명하게 담아 보고하고 그 데이터를 다음 촬영 기획에 반영합니다."
  },
  {
    "q": "숏폼 제작 업체에 파일만 맡길지 운영까지 포함한 숏폼 대행을 맡길지 어떻게 정하나요?",
    "a": "사내에 매체별 일정을 챙겨 업로드하고 댓글이나 통계를 관리할 실무 여력이 있다면 기획·촬영·편집 산출물만 납품받는 방식이 맞습니다. 반대로 채널 게시와 URL 아카이브 관리, 월간 성과 리포트 정리, 광고 소재 연계까지 외부 전담 인력의 관리가 필요하다면 운영을 포함한 형태로 맡기시는 편이 업무 부담을 줄여 줍니다."
  }
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
      <BizArticle
        href={PATH}
        kicker="기업 마케팅 · 콘텐츠"
        title={TITLE}
        description={DESC}
        date="2026년 11월 13일"
        ctaTitle="우리 브랜드에 필요한 채널별 산출물 구성이 궁금하신가요?"
        ctaBody="활용할 매체와 필요한 영상·사진 산출물 범위를 남겨 주시면 전담 AE가 내용을 확인한 뒤 브랜드 상황에 맞춘 촬영 구성안 방향과 상세 견적서를 안내해 드립니다."
      >
        <p>
          <strong>{"숏폼 제작을 맡기면 하루 촬영으로 세로형 편집본, 광고용 하이라이트 영상, 지도·블로그·홈페이지용 사진, 자막 파일까지 채널별 산출물을 나누어 받을 수 있는데 무엇을 몇 개 받을지는 촬영 전에 장면 구성안에서 먼저 확정합니다."}</strong>
        </p>
        <p>{"브랜드 마케팅 담당자나 팀장이 외부 파트너와 일할 때 영상 편수만 세어 계약하면 정작 홈페이지 배너나 검색 광고에 쓸 사진과 파생 영상이 모자라 재촬영을 고민하게 됩니다. 카메라와 조명을 세팅해 현장을 한 번 열 때 우리 브랜드가 운영하는 매체 전체에 올릴 결과물을 어떻게 설계하느냐에 따라 예산 효율이 크게 달라집니다."}</p>
        <p>{"이 글에서는 하루 촬영으로 확보할 수 있는 파일 종류와 활용처, 산출물 기준으로 장면 구성안을 짜는 법, 견적서에서 편수와 부가 산출물을 떼어 보는 기준, 월간 리포트 지표를 다음 달 촬영 기획으로 연결하는 방법과 내부 품의 전 준비 사항을 차례대로 정리했습니다."}</p>
        <h2>{"숏폼 제작 한 번으로 받는 채널별 산출물 목록"}</h2>
        <p>{"외부에 촬영을 의뢰할 때 완성된 세로 영상 파일 하나만 납품받는다고 생각하기 쉽지만 기획 단계에서 활용 채널을 미리 정해 두면 하루 촬영으로 여러 매체에 규격을 맞춘 파일 묶음을 동시에 확보할 수 있습니다. 2016년부터 광고주 7,000여 곳과 협업하며 인하우스 촬영팀이 숏폼을 360편 넘게 만들어 온 위즈더플래닝에서는 전담 AE가 1:1로 붙어 촬영 전 산출물 리스트를 먼저 맞추고 최종 납품물은 고객사가 자체 채널에 바로 쓸 수 있도록 전달합니다."}</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-[13px] sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"파일 형식"}</th>
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"산출물 내용"}</th>
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"주요 활용 채널"}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-100 align-top">
                <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{"MP4"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"세로형(9:16) 숏폼 편집본"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"인스타그램 릴스, 유튜브 쇼츠, 틱톡"}</td>
              </tr>
              <tr className="border-t border-slate-100 align-top">
                <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{"MP4"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"광고용 하이라이트 편집 버전"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"퍼포먼스 광고 소재"}</td>
              </tr>
              <tr className="border-t border-slate-100 align-top">
                <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{"JPG"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"매장·공간 대표 보정 컷"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"네이버 플레이스, 지도 대표 사진"}</td>
              </tr>
              <tr className="border-t border-slate-100 align-top">
                <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{"JPG"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"상세 보정 컷과 설명 문구"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"브랜드 공식 블로그 콘텐츠"}</td>
              </tr>
              <tr className="border-t border-slate-100 align-top">
                <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{"JPG"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"고해상도 메인 비주얼 컷"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"공식 웹사이트 메인·상세 페이지"}</td>
              </tr>
              <tr className="border-t border-slate-100 align-top">
                <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{"SRT·이미지"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"영상별 자막 파일, 제목 후보안, 썸네일"}</td>
                <td className="px-3 py-2.5 text-gray-700 sm:px-4">{"각 영상 채널에 올릴 때 함께 적용"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{"표에 정리한 것처럼 영상과 사진, 텍스트 부속물을 한 번에 챙기면 매체마다 다른 부서나 작업자에게 따로 소스를 요청하는 번거로움이 줄어듭니다. 브랜드가 운영하는 전체 매체 흐름을 한눈에 묶어 관리하고 싶다면 "}<a href="/business/insights/imc-marketing">{"IMC 마케팅 전략 수립 5단계"}</a>{" 글에서 채널 간 역할 배분 기준을 함께 참고하실 수 있습니다."}</p>
        <h2>{"장면 구성안을 산출물 기준으로 짜는 법"}</h2>
        <p>{"원하는 결과물 파일을 빠짐없이 얻으려면 촬영 당일이 아니라 사전 기획 문서인 장면 구성안에서부터 찍을 장면마다 쓰일 곳을 꼬리표처럼 붙여 두어야 합니다. 숏폼 제작이 기획된 장면을 촬영하고 매체 규격에 맞는 영상·사진 파일로 완성해 내는 과정이라면 숏폼 대행은 그 산출물을 바탕으로 공식 계정에 정기 게시하고 월간 지표를 관리하는 운영 업무까지 포괄하는 개념이어서 처음 구성안을 짤 때 어디까지 반영할지 구분해 두면 실무 혼선이 없습니다."}</p>
        <p>{"장면 구성안을 산출물 기준으로 설계할 때는 현장 동선과 피사체를 촬영 목적별로 쪼개어 적습니다."}</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>{"제품 클로즈업 장면은 시선을 끄는 디테일이 살아 있어 퍼포먼스 광고 소재와 홈페이지 메인 비주얼로 배정합니다."}</li>
          <li>{"매장 안 자리와 전체 공간 구도는 방문객이 분위기를 가늠할 수 있도록 지도 대표 사진과 브랜드 블로그 본문 이미지로 씁니다."}</li>
          <li>{"직원이 제품을 직접 다루거나 시연하는 움직임은 세로형 호흡에 잘 맞아 릴스와 쇼츠 본편, 광고 소재의 전환 구간에 넣습니다."}</li>
          <li>{"대표 메뉴나 주력 상품 정면 컷은 지도 메뉴 사진과 홈페이지 제품 안내 페이지에 올릴 고해상도 스틸컷으로 따로 확보합니다."}</li>
        </ul>
        <p>{"업종 관련 법규상 사전 기획에서부터 배제해야 할 연출도 분명하게 짚어 두어야 합니다. 병·의원 콘텐츠의 경우 의료법 제56조를 준수해야 하므로 의료진 소개와 원내 시설, 의료 기기 안내 위주로 화면을 짜고 환자 모습이나 시술 과정, 전후 대조, 치료 경험담 같은 연출은 구성안 단계에서 원천 배제해 법적 문제를 예방합니다."}</p>
        <h2>{"숏폼 제작 비용, 견적서에서 편수와 산출물을 나눠 보는 기준"}</h2>
        <p>{"파트너사마다 견적서 양식이 달라 총액만 놓고 비교하기 어려울 때는 영상 편수 단가에 묶여 있는 세부 조건을 나눠 보아야 합니다. 숏폼 제작 비용은 촬영 일수, 제작 편수, 모델 기용, 촬영 장소(로케이션)에 따라 산정되는데 브랜드마다 필요한 산출물 범위를 먼저 전달하고 상세 견적서를 받아 아래 여섯 가지 항목이 어떻게 나뉘어 있는지 대조해 보는 방식이 정확합니다."}</p>
        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>{"촬영 일수와 로케이션 조건을 먼저 봅니다. 하루 촬영으로 끝나는지 이틀 이상 나뉘는지, 외부 장소 대관이나 지방 출장이 포함되는지에 따라 현장 투입 인력과 장비 운용 범위가 달라집니다."}</li>
          <li>{"납품받을 숏폼 편수와 사진 컷 수를 분리해 확인합니다. 촬영에 들어가기 전에 세로 영상이 몇 편 나오고 보정 사진은 몇 컷을 넘겨받는지, 각각 어느 채널에 쓸 것인지 리스트로 확정되어 있어야 추가 촬영 비용이 생기지 않습니다."}</li>
          <li>{"모델 기용과 초상권 사용 조건을 따져 봅니다. 외부 모델을 섭외한다면 출연료뿐 아니라 완성된 영상과 사진을 공식 채널 외에 퍼포먼스 광고 소재나 홈페이지에 써도 되는지, 사용 기간은 몇 개월인지 계약서에 적혀 있어야 합니다."}</li>
          <li>{"편집 범위에 부속 산출물이 들어 있는지 살핍니다. 단순 컷 편집을 넘어 매체별 규격과 호흡에 맞춘 자막·사운드 작업, 업로드할 때 바로 골라 쓸 제목 후보안과 썸네일 이미지 제작까지 포함된 금액인지 확인해야 담당자 손이 덜 갑니다."}</li>
          <li>{"원본 파일 제공 조건과 수정 횟수를 체크합니다. 납품 뒤 내부 디자이너가 2차 가공을 할 수 있도록 클린본이나 촬영 원본 파일을 넘겨주는지, 편집본 수정은 몇 회까지 어느 범위로 가능한지 계약서 문구로 남겨 두어야 분쟁이 없습니다."}</li>
          <li>{"채널 게시와 월간 리포트 작성 업무가 포함된 금액인지 구분합니다. 파일 납품에서 끝나는 계약인지, 매체별 업로드와 성과 보고서 정리까지 맡기는지에 따라 월 운영 공수가 달라지므로 내부 인력 상황에 맞춰 선택합니다."}</li>
        </ol>
        <p>{"여러 파트너사의 제안서를 나란히 놓고 내부 평가 기준을 세워야 하는 단계라면 "}<a href="/business/insights/agency-selection-criteria">{"광고대행사 선정 기준과 평가표"}</a>{" 문서를 활용해 항목별 배점을 매겨 보시기 바랍니다."}</p>
        <h2>{"쇼츠 제작·릴스 제작할 때 매체별로 다르게 챙길 편집 규격"}</h2>
        <p>{"같은 날 찍은 세로형(9:16) 원본이라도 쇼츠 제작 결과물과 릴스 제작 결과물은 화면 구성에 미묘한 차이를 두어야 시청 흐름이 끊기지 않습니다. 인스타그램 릴스, 유튜브 쇼츠, 틱톡은 모두 세로 꽉 찬 화면을 쓰지만 재생 화면 오른쪽과 아래쪽에 좋아요·댓글 버튼이나 계정 이름, 영상 설명 글이 덮이는 자리가 매체마다 다릅니다."}</p>
        <p>{"편집 단계에서 이 가려지는 영역을 고려하지 않고 자막을 일괄 배치하면 주요 설명 문구가 채널 버튼 뒤에 숨어 읽히지 않는 문제가 생깁니다. 위즈더플래닝이 맞춤 편집 단계에서 매체별 규격과 호흡에 맞춰 자막 위치와 사운드를 세밀하게 조정하고 단계마다 담당자 확인을 거쳐 넘어가는 이유도 각 플랫폼 화면 안에서 정보가 온전히 보이게 만들기 위해서입니다."}</p>
        <h2>{"월간 리포트에서 조회수 말고 볼 것과 다음 촬영 반영법"}</h2>
        <p>{"영상을 채널에 올린 뒤에는 단순 노출 숫자만 세고 끝내지 말고 다음 달 기획안을 고도화할 근거 데이터를 찾아야 합니다. 위즈더플래닝이 매월 전달하는 결과 리포트에는 한 달 동안 발행한 영상·게시물 URL 목록, 월간 발행 편수와 채널별 아카이브 현황, 채널 인사이트 기준의 콘텐츠별 조회·반응 지표가 정리되어 들어갑니다. 실제 실무에서 주고받는 문서 양식이 궁금하다면 "}<a href="/business/insights/weekly-report-sample">{"계약하면 받는 보고서 견본"}</a>{" 페이지에서 구성을 미리 살펴보실 수 있습니다."}</p>
        <p>{"이 지표를 다음 달 촬영과 마케팅 확장에 반영할 때는 제작 부서와 광고 운영 부서가 같이 움직여야 합니다. 위즈더플래닝에서는 퍼포먼스팀이 촬영 기획 회의에 직접 들어가 클릭과 문의를 유도할 전환 장면을 함께 짜고 공식 채널에서 시청자 반응이 검증된 영상을 골라 퍼포먼스 광고 소재로 투입합니다. 광고를 집행한 뒤에는 시청자가 어느 구간에서 화면을 넘기며 이탈하고 어느 장면에서 버튼을 클릭하는지 지표를 쪼개어 분석한 뒤 다음 촬영 구성안을 짤 때 반응이 좋았던 구도를 늘리는 식으로 반영합니다. 공식 계정에서 검증된 숏폼 구성을 외부 크리에이터 캠페인으로 넓히고자 할 때는 인플루언서 협업 콘텐츠로 확장하기도 하는데 외부 채널 협업 방식은 "}<a href="/business/insights/youtuber-casting">{"유튜버 섭외 비용과 경로"}</a>{" 글에서 자세히 다루고 있습니다."}</p>
        <h2>{"내부 품의와 제안 요청 전에 정리할 네 가지"}</h2>
        <p>{"경영진이나 상위 의사결정권자에게 예산을 품의하고 외부 업체에 정확한 견적을 요청하려면 문의 전에 내부 기준을 네 가지로 추려 두는 편이 빠릅니다."}</p>
        <p>{"첫째로 결과물을 배포할 목표 채널 목록을 정합니다. 인스타그램과 유튜브 외에 브랜드 블로그, 지도 플레이스, 자사몰 상세 페이지까지 이번 촬영 소스를 나눌 매체를 모두 적습니다. 둘째로 채널별로 필요한 산출물 개수를 가늠합니다. 한 달에 올릴 세로 영상 편수와 홈페이지·블로그에 교체할 사진 컷 수를 대략이라도 적어 두면 상담이 구체화됩니다."}</p>
        <p>{"셋째로 촬영 가능한 장소와 일정을 파악합니다. 사옥이나 오프라인 매장 중 어디를 쓸 수 있는지, 영업시간 전후로 촬영팀이 머물 수 있는 시간대는 언제인지 미리 확인해 둡니다. 넷째로 사내 확인 절차를 정리합니다. 장면 구성안 확정부터 현장 촬영, 맞춤 편집, 채널 게시로 이어지는 단계마다 실무 담당자 선에서 확인이 끝나는지 법무팀이나 임원 보고가 필요한지 공유해 두면 전체 일정 지연을 막을 수 있습니다. 기획부터 촬영, 편집, 게시까지의 세부 실무 범위는 위즈더플래닝의 "}<a href="/services/content">{"콘텐츠 제작 대행"}</a>{" 안내 페이지에서도 확인하실 수 있습니다."}</p>

        <h2>자주 묻는 질문</h2>
        <dl className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="px-5 py-5">
              <dt className="font-bold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </BizArticle>
    </>
  )
}
