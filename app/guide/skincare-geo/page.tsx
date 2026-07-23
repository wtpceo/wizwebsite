import type { Metadata } from "next"
import Link from "next/link"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "피부·에스테틱 AI 검색 최적화(GEO) 가이드 — 홈페이지가 인용을 가른다"
const DESC =
  "피부관리샵·에스테틱은 AI 검색에서 '홈페이지 인용' 의존도가 특히 큰 업종입니다. AI가 읽을 수 있는 홈페이지를 중심으로, 네이버 리뷰·인스타까지 어떻게 준비해야 ChatGPT·네이버 AI·구글이 우리 샵을 추천하는지 정리했습니다."
const DATE = "2026-07-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/skincare-geo" },
  openGraph: {
    images: ["/thumbnail.png"], title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/skincare-geo", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/skincare-geo",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle href="/guide/skincare-geo" kicker="SKINCARE GEO" title={TITLE} description={DESC} date="2026년 7월 9일">
        <p>
          결론부터 말씀드리겠습니다. 피부관리샵·에스테틱은 <strong>AI 검색에서 "홈페이지"가 승부처</strong>인
          업종입니다. 같은 GEO(생성형 검색 최적화)라도 업종마다 AI가 근거로 삼는 출처가 다른데, 에스테틱은
          <strong> 자체 홈페이지가 1차 인용 소스</strong>가 되는 경향이 뚜렷합니다. 그래서 "AI가 읽을 수 있는
          홈페이지"를 갖췄는지가 이 업종 GEO의 8할을 결정합니다.
        </p>

        <h2>왜 에스테틱은 특히 홈페이지가 중요한가요?</h2>
        <p>
          이유는 AI 엔진들의 구조에 있습니다. ChatGPT·구글 같은 외부 AI는 <strong>네이버 플레이스나 블로그를
          가져가지 못합니다</strong>(네이버가 외부 AI 크롤러의 접근을 막고 있기 때문입니다). 그래서 이들은
          네이버 밖의 소스 — 업체 홈페이지, 디렉토리, 유튜브 등에 의존할 수밖에 없습니다.
        </p>
        <p>
          이때 업종마다 "무엇에 기대는지"가 갈립니다. 병원은 의료 디렉토리와 홈페이지를, 미용실은 홈페이지가
          부실한 경우가 많아 유튜브·SNS를 참고합니다. 반면 <strong>피부샵·에스테틱은 자체 홈페이지를 인용하는
          비중이 특히 큽니다.</strong> 즉 우리가 직접 설계하고 통제할 수 있는 홈페이지가, 이 업종에서는 곧바로
          AI 인용으로 이어지는 <strong>가장 강력한 레버</strong>라는 뜻입니다.
        </p>
        <Callout>
          한 문장으로: <strong>리뷰·플레이스는 플랫폼이 통제하지만, 홈페이지는 우리가 100% 통제할 수 있는
          유일한 인용 표면입니다.</strong> 에스테틱은 그 표면에 가장 크게 의존하는 업종이고요. 여기가 GEO의
          기초공사입니다.
        </Callout>

        <h2>AI가 못 읽는 홈페이지의 함정 — 예쁜데 인용은 0</h2>
        <p>
          가장 흔한 실패가 여기서 나옵니다. 디자인은 근사한데 <strong>AI가 한 글자도 못 읽는 홈페이지</strong>가
          현실에 정말 많습니다. 대표적인 두 가지 함정입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>글자를 이미지로 박은 사이트</strong> — 시술 설명·가격을 예쁜 이미지 안에 텍스트로 넣어두면,
            사람 눈엔 보여도 AI 크롤러는 그 텍스트를 인식하지 못합니다. 인용 후보에서 탈락합니다.
          </CheckItem>
          <CheckItem>
            <strong>JS로만 그려지는 SPA</strong> — 화면은 잘 뜨지만 초기 HTML이 비어 있어, AI가 접속했을 때
            빈 페이지로 보입니다. 예쁜 노코드/앱형 사이트가 이 경우가 많습니다.
          </CheckItem>
        </ul>
        <Callout>
          <strong>1분 자가 진단법:</strong> 우리 홈페이지에서 마우스 <strong>우클릭 → "페이지 소스 보기"</strong>를
          눌러 보세요. 거기에 <strong>시술 설명·가격 같은 본문 텍스트가 글자로 보이면 OK</strong>입니다. 반대로
          텍스트는 안 보이고 코드 껍데기만 있다면, AI는 우리 샵을 "읽을 수 없는 사이트"로 판단합니다.
        </Callout>
        <p>
          그래서 홈페이지는 <strong>서버에서 완성된 HTML을 내려주는 방식(SSR/SSG)</strong>으로 만들고, 시술
          설명·가격·FAQ 같은 핵심 콘텐츠는 <strong>실제 텍스트로</strong> 배치해야 합니다. 새로 제작하거나
          개편할 때 제작사에 "본문이 view-source에 텍스트로 보이게 해달라"고 못 박는 것만으로도 절반은 해결됩니다.
        </p>

        <h2>그럼 홈페이지를 어떻게 구성해야 하나요?</h2>
        <p>
          AI는 "질문에 바로 답하는 명확한 문단"을 인용합니다. 이 원리에 맞춰 아래 요소를 갖추면 인용 확률이
          올라갑니다.
        </p>
        <ul>
          <CheckItem>
            <strong>시술별 개별 페이지</strong> — 여드름 관리, 리프팅, 모공, 미백을 한 페이지에 다 욱여넣지
            마세요. "한 페이지 = 하나의 시술"로 나눠야 AI가 주제를 정확히 파악합니다.
          </CheckItem>
          <CheckItem>
            <strong>질문형 제목 + 결론 먼저</strong> — "여드름 관리 몇 회 받아야 하나요?" 같은 실제 고객
            질문을 소제목으로 쓰고, 바로 아래 2~3문장으로 핵심 답을 먼저 적습니다. 장황한 인사말은 뒤로.
          </CheckItem>
          <CheckItem>
            <strong>가격 정보 공개</strong> — AI는 가격 정보가 있는 페이지를 유용한 소스로 판단합니다. 대략적인
            가격대라도 텍스트로 적어두는 편이 "가격은 전화 문의"보다 인용에 유리합니다.
          </CheckItem>
          <CheckItem>
            <strong>FAQ 섹션 + FAQ 스키마</strong> — 자주 묻는 질문 5~10개를 질문·답 형태로 정리하고, 구조화
            데이터(FAQPage 스키마)로 한 번 더 명시하면 AI가 가장 즐겨 인용하는 형태가 됩니다.
          </CheckItem>
          <CheckItem>
            <strong>기본정보(NAP) 일관성</strong> — 상호·주소·전화·영업시간을 홈페이지·네이버·인스타에서
            똑같이 맞추세요. 표기가 흔들리면 AI가 같은 샵으로 묶지 못해 오정보를 안내합니다.
          </CheckItem>
        </ul>

        <h2>네이버 축도 놓치면 안 됩니다 — 리뷰와 인스타</h2>
        <p>
          홈페이지가 외부 AI(ChatGPT·구글) 축이라면, 국내 고객이 실제로 많이 쓰는 <strong>네이버 AI는
          플레이스 리뷰와 후기</strong>를 근거로 답합니다. 두 축을 함께 관리해야 반쪽이 안 됩니다.
        </p>
        <ul>
          <CheckItem>
            <strong>플레이스 정보 완비</strong> — 영업시간·주차·시술 메뉴·대표사진·찾아오는 길 등 네이버가
            주는 칸을 빠짐없이 채웁니다. 빈 칸은 감점으로 보세요.
          </CheckItem>
          <CheckItem>
            <strong>리뷰의 양 + 최신성</strong> — 리뷰가 충분히 쌓이고, 최근에도 꾸준히 달리는 샵이 더 자주
            인용됩니다. 한 번에 몰아치기보다 꾸준한 흐름이 중요합니다.
          </CheckItem>
          <CheckItem>
            <strong>인스타그램 시각 콘텐츠</strong> — 에스테틱은 시각이 강한 업종입니다. 인스타를 꾸준히
            운영하고 홈페이지와 서로 연결(프로필·링크)해 두면 신뢰 신호가 됩니다.
          </CheckItem>
        </ul>

        <Callout>
          <strong>⚠️ 표현은 "효과 보장"이 아니라 "정보 제공·경험"으로.</strong> 에스테틱은 의료기관이 아니지만,
          "100% 개선", "완벽한 피부", "부작용 없는" 같은 효과 과장은 표시광고법·과장광고 리스크가 있습니다.
          리뷰나 소개 문구도 "무조건 좋아진다"가 아니라 <strong>관리 과정·경험·시술 정보</strong>를 전달하는
          톤으로 안내하세요. 이렇게 하는 편이 법적으로도 안전하고, AI에게도 "신뢰할 만한 정보 소스"로 읽힙니다.
        </Callout>

        <p>
          참고로 <strong>피부"과" 같은 의료기관</strong>은 이야기가 다릅니다. 의료광고법(치료경험담·전후사진
          제한 등)이 적용되어 GEO 레버 자체를 보정해야 하므로, 의료 피부과라면{" "}
          <Link href="/guide/medical-geo" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
            병원·의원 GEO 가이드
          </Link>
          를 참고하세요. 이 글은 <strong>비의료 에스테틱·피부관리샵</strong> 기준입니다.
        </p>

        <h2>정리 — 무엇부터 하면 되나요?</h2>
        <p>
          순서로 정리하면 이렇습니다. 에스테틱은 홈페이지가 핵심이니 거기서 시작하는 것이 효율적입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>1순위 — 홈페이지 점검</strong>: view-source로 본문 텍스트가 보이는지 확인. 안 보이면
            텍스트 기반 HTML로 개편.
          </CheckItem>
          <CheckItem>
            <strong>2순위 — 콘텐츠 구조화</strong>: 시술별 개별 페이지 + 질문형 정보 콘텐츠 + 가격 + FAQ 스키마.
          </CheckItem>
          <CheckItem>
            <strong>3순위 — 네이버·인스타</strong>: 플레이스 완비 + 자연스러운 리뷰의 양·최신성 + 인스타 연결.
          </CheckItem>
          <CheckItem>
            <strong>상시 — 표현 관리</strong>: 효과 보장 대신 정보·경험 톤, 기본정보(NAP) 일관성 유지.
          </CheckItem>
        </ul>

        <Callout>
          우리 샵이 지금 ChatGPT·네이버 AI·구글에서 각각 어떻게 나오는지, 홈페이지가 AI에게 제대로 읽히는
          상태인지 궁금하시다면 — 위즈더플래닝의 <strong>무료 AI 검색 진단</strong>으로 엔진별 노출 현황과
          홈페이지 인용 준비 상태를 함께 확인해 보세요.
        </Callout>
      </GuideArticle>
    </>
  )
}
