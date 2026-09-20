import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 46자
const TITLE = "장사 안될 때 광고비부터 늘리면 안 되는 이유: 먼저 셀 숫자 3가지"
const DESC =
  "장사가 안될 때 가장 빠른 대응은 광고비를 올리는 것입니다. 그런데 손님이 가게를 찾는 경로가 바뀐 상태라면 돈만 더 듭니다. 광고를 늘리기 전에 30분이면 확인할 수 있는 숫자 3가지와, 광고를 늘려도 문의가 안 느는 세 가지 경우를 실제 사례로 정리했습니다."
const DATE = "2026-09-19"
const URL = "https://wiztheplanning.com/guide/slow-business-checks"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "장사 안될때", "매출 떨어질때", "가게 손님이 없어요", "자영업 마케팅",
    "네이버 광고 효과 없음", "가게 홍보 방법", "플레이스 순위 떨어짐",
  ],
  alternates: { canonical: "/guide/slow-business-checks" },
  openGraph: {
    images: ["/covers/slow-business-checks.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
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

const FAQ = [
  {
    q: "장사가 안될 때 광고를 늘리면 안 되나요?",
    a: "늘리는 것 자체가 잘못은 아닙니다. 다만 광고는 이미 우리를 찾고 있는 사람을 더 빨리 데려오는 도구입니다. 손님이 검색하는 자리에 우리 가게 정보가 아예 없거나, 채널마다 정보가 다르거나, 들어와도 연락할 방법이 잘 안 보이는 상태라면 광고비를 올려도 그 구멍으로 새어 나갑니다. 노출, 유입, 연락 세 숫자를 먼저 보고 어디서 끊기는지 확인한 다음에 올리는 것이 순서입니다.",
  },
  {
    q: "손님이 줄었는지 어떻게 숫자로 확인하나요?",
    a: "세 군데만 보면 됩니다. 첫째 네이버 스마트플레이스 통계에서 우리 가게가 검색에 몇 번 노출됐고 몇 명이 눌러 봤는지, 둘째 홈페이지가 있다면 방문 수와 유입 경로, 셋째 가게 대표번호로 온 통화 수입니다. 통화는 대부분 기록이 남지 않아 비어 있는 칸인데, 한 달만 손으로 세어 봐도 노출이 문제인지 연락이 문제인지 갈립니다.",
  },
  {
    q: "네이버 블로그만 열심히 하면 되지 않나요?",
    a: "네이버 안에서는 유효하지만 그 바깥에서는 보이지 않습니다. 네이버는 robots.txt에 GPTBot, OAI-SearchBot, ClaudeBot 같은 AI 크롤러를 적어 두고 접근을 막고 있습니다. 블로그에만 쌓은 글은 ChatGPT나 퍼플렉시티가 읽지 못합니다. 네이버 검색과 네이버 AI 브리핑에는 블로그가, 그 바깥 AI에는 우리 도메인의 홈페이지가 필요합니다.",
  },
  {
    q: "블로그 글이 자꾸 누락되는데 저품질에 걸린 건가요?",
    a: "꼭 그렇지는 않습니다. 저희가 맡은 광고주 한 곳은 5~6회 연속 누락됐는데, 블로그 자체가 아니라 블로그 체급보다 큰 키워드를 같은 형태로 오래 반복해 공략한 것이 원인이었습니다. 키워드를 완전히 뺀 정보성 글을 한 편 올려 보면 블로그 문제인지 글 문제인지 갈립니다. 누락 없이 노출되면 블로그는 정상입니다.",
  },
  {
    q: "자영업 마케팅, 무엇부터 다시 잡아야 하나요?",
    a: "채널을 늘리기 전에 정보부터 맞추는 순서를 권합니다. 첫째 영업시간과 전화번호, 주소를 플레이스·홈페이지·지도에서 같게 맞추고, 둘째 대표 사진과 가격을 최신으로 바꾸고, 셋째 손님이 쓸 말로 검색해 우리 가게가 몇 번째에 있는지 확인합니다. 여기까지는 비용이 들지 않습니다. 광고는 그다음입니다.",
  },
  {
    q: "순위를 보장한다는 업체에 맡기면 되나요?",
    a: "보장을 약속하는 방식은 대개 인위적인 트래픽이나 리뷰를 만드는 작업이라 적발되면 노출이 더 나빠질 수 있습니다. 검색 결과와 AI 답변은 같은 질문에도 매번 달라져서 보장 자체가 구조적으로 어렵습니다. 보장을 적은 견적서라면 무엇을 근거로 보장하는지, 미달하면 어떻게 정산하는지를 계약서에 적어 달라고 요구하는 편이 안전합니다.",
  },
  {
    q: "돈을 들이지 않고 오늘 할 수 있는 일은 무엇인가요?",
    a: "네 가지입니다. 첫째 영업시간, 휴무일, 전화번호, 주소를 플레이스와 홈페이지, 지도 서비스에서 똑같이 맞추는 것. 둘째 대표 사진과 메뉴, 가격을 최신으로 바꾸는 것. 셋째 최근 리뷰에 답글을 다는 것. 넷째 ChatGPT와 네이버 AI에 손님이 쓸 법한 질문을 그대로 넣어 우리 가게가 나오는지 확인하는 것입니다. 전부 비용이 0원이고, 광고를 늘리기 전에 새는 곳을 막는 일입니다.",
  },
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

const NUM_ROWS: [string, string, string][] = [
  ["① 노출", "검색과 지도에서 우리 가게가 보이는 횟수", "네이버 스마트플레이스 통계"],
  ["② 유입", "그걸 눌러서 들어와 본 사람 수", "플레이스 조회수, 홈페이지 방문 수"],
  ["③ 연락", "전화, 예약, 문의로 이어진 수", "대표번호 통화 기록, 예약 건수"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/slow-business-checks"
        kicker="마케팅 고민 진단 · 로컬 매장"
        title={TITLE}
        description={DESC}
        date="2026년 9월 19일"
      >
        <p>
          <strong>장사가 안될 때 광고비를 올리기 전에, 노출·유입·연락 세 숫자를 먼저 세야
          합니다.</strong> 광고는 이미 우리를 찾는 사람을 빨리 데려오는 도구입니다. 손님이 가게를 찾는
          경로 자체가 바뀌었다면, 광고비를 올려도 같은 구멍으로 샙니다. 세 숫자는 30분이면 확인됩니다.
        </p>

        <h2>&ldquo;장사 안될 때&rdquo;를 검색하면 나오는 것들</h2>
        <p>
          2026년 9월 17일에 저희가 직접 검색해 봤습니다. 네이버 1페이지는 카페 글, 유튜브, 연예 뉴스로
          채워져 있었고 AI 브리핑이 참고한 출처도 블로그 한 곳뿐이었습니다. 자동완성에는 &lsquo;장사
          안될때 소금 방법&rsquo;, &lsquo;장사 안될때 액땜 방법&rsquo; 같은 말이 같이 떴습니다.
        </p>
        <p>
          그만큼 급한 마음으로 치는 검색어인데, 정작 무엇부터 확인하라는 글은 잘 없습니다. 그래서 이
          글은 위로 대신 셀 수 있는 것부터 씁니다.
        </p>

        <h2>매출 떨어질 때, 광고비를 올리기 전에 셀 숫자 3가지</h2>
        <p>
          매출은 결과라서 원인을 알려주지 않습니다. 중간을 끊어서 세면 어디가 막혔는지 보입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">숫자</th>
                <th className="px-4 py-3 font-bold text-gray-900">무엇인가</th>
                <th className="px-4 py-3 font-bold text-gray-900">어디서 보나</th>
              </tr>
            </thead>
            <tbody>
              {NUM_ROWS.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>노출이 줄었다면: 플레이스 순위를 손님 말로 검색해 보세요</h3>
        <p>
          사장님이 아는 상호로 검색하면 당연히 나옵니다. 손님은 상호를 모릅니다. &lsquo;동네 이름 +
          업종&rsquo;, &lsquo;근처 + 업종&rsquo;처럼 손님이 칠 법한 말로 검색해서 우리 가게가 몇 번째에
          있는지 보세요. 플레이스에서 빠지기 쉬운 항목은{" "}
          <a href="/guide/naver-place-checklist">네이버 플레이스 상위 노출 체크리스트 10가지</a>에
          정리했습니다.
        </p>

        <h3>유입이 줄었다면: 눌러 볼 이유가 있는지 보세요</h3>
        <p>
          노출은 그대로인데 조회가 줄었다면 목록에서 우리가 선택받지 못하고 있다는 뜻입니다. 대표 사진,
          최근 리뷰, 가격 표기처럼 손님이 목록에서 비교하는 것들이 최신인지 확인하세요.
        </p>

        <h3>연락이 줄었다면: 전화 기록을 한 달만 세어 보세요</h3>
        <p>
          로컬 매장에서 가장 자주 비어 있는 칸입니다. 노출과 조회는 멀쩡한데 전화가 줄었다면 가격,
          영업시간, 주차 같은 정보가 부족하거나 잘못 적혀 있을 수 있습니다. 광고를 늘려도 이 구멍은
          그대로입니다.
        </p>

        <h2>2026년에 하나 더 생긴 확인: AI가 우리 가게를 아는가</h2>
        <p>
          손님이 검색창 대신 ChatGPT나 네이버 AI에 &ldquo;○○동에 괜찮은 곳 추천해줘&rdquo;라고 묻기
          시작했습니다. 이건 순위가 아니라 이름이 불리느냐 마느냐의 문제라서, 직접 물어보는 것 말고는
          확인할 방법이 없습니다. 손님이 쓸 법한 질문을 그대로 넣어 보세요.
        </p>
        <p>
          여기서 많은 사장님이 놀라십니다. 네이버 블로그를 몇 년째 하고 있는데 ChatGPT는 가게를 전혀
          모르는 경우가 많기 때문입니다. 이유는 간단합니다. 네이버가 robots.txt에 AI 크롤러 이름을 적어
          접근을 막고 있어서, 블로그에 쌓은 글을 ChatGPT가 읽지 못합니다. 실측 내용은{" "}
          <a href="/guide/naver-blocks-ai-crawlers">네이버가 ChatGPT·구글 AI의 접근을 막았습니다</a>에
          정리했습니다.
        </p>
        <Callout>
          반대로 열린 웹에 자기 자리를 만들면 결과가 따라옵니다. 네이버 플레이스와 카페 홍보에만
          집중하다 성장이 멈췄던 신도시 출장세차 광고주는, 작업을 시작하고 <strong>약 2개월 뒤 구글 AI
          개요에 노출</strong>되기 시작했습니다. 전체 과정은{" "}
          <a href="/guide/case-mobile-carwash">출장세차 사례</a>에 적어 두었습니다.
        </Callout>

        <h2>네이버 광고 효과가 없다고 느껴지는 세 가지 경우</h2>
        <h3>1. 손님의 검색 방식이 바뀐 경우</h3>
        <p>
          예전에는 검색 결과 목록을 비교했다면, 지금은 AI에게 묻고 답 하나를 받는 사람이 늘고
          있습니다. 목록에 없는 게 아니라 목록 자체를 덜 보는 것이라, 광고 순위를 올려도 같은 자리에서
          경쟁하게 됩니다. 이 변화는{" "}
          <a href="/guide/why-ads-stop-working">네이버 광고비는 오르는데 문의는 그대로일 때</a>에서 더
          자세히 다뤘습니다.
        </p>

        <h3>2. 채널마다 정보가 다른 경우</h3>
        <p>
          홈페이지, 플레이스, 지도 서비스의 영업시간이나 휴무일이 서로 다르면 손님은 헛걸음하고, AI는
          어느 쪽을 인용할지 판단하지 못합니다. 광고로 데려온 손님까지 다른 정보를 보고 돌아섭니다.
          돈이 들지 않으면서 효과가 확실한 작업이라 가장 먼저 합니다.
        </p>

        <h3>3. 수수료 구조 때문에 남는 게 없는 경우</h3>
        <p>
          매출은 그대로인데 남는 돈이 줄었다면 플랫폼 수수료를 봐야 합니다. 네이버 펜션 실시간예약은
          매출연동수수료가 부가세를 포함해 <strong>10.45%</strong>입니다. 연 6,700만원어치를 팔면
          수수료로만 약 700만원이 나갑니다. 저희가 맡은 수도권 근교 펜션은 자체 예약 사이트를 만들고
          <strong> 8일간 광고비 18만 563원</strong>으로 랜딩 조회 2,890건(조회당 62원)을 만들었습니다.
          계산 과정은 <a href="/guide/case-pension-direct-booking">펜션 예약 수수료 사례</a>에
          있습니다.
        </p>

        <h2>가게 홍보 방법, 돈 안 드는 것부터 하는 순서</h2>
        <ul>
          <CheckItem>
            <strong>정보 통일.</strong> 영업시간, 휴무일, 전화번호, 주소를 플레이스·홈페이지·지도에서
            똑같이 맞춥니다.
          </CheckItem>
          <CheckItem>
            <strong>대표 사진과 가격 갱신.</strong> 손님이 목록에서 비교하는 것부터 최신으로 바꿉니다.
          </CheckItem>
          <CheckItem>
            <strong>최근 리뷰 답글.</strong> 답글은 손님에게 읽히고, 가게가 살아 있다는 신호로도
            남습니다.
          </CheckItem>
          <CheckItem>
            <strong>AI에게 직접 물어보기.</strong> 손님 말로 질문해 우리 가게가 나오는지 확인합니다.
            병원이라면 <a href="/guide/check-hospital-ai-visibility">5분 확인법</a>의 순서를 그대로 쓰면
            됩니다.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지가 읽히는지 점검.</strong> 주소만 넣으면{" "}
            <a href="/site-check">무료 사이트 진단</a>으로 검색엔진과 AI가 읽을 수 있는 상태인지
            확인됩니다.
          </CheckItem>
          <CheckItem>
            <strong>그다음에 광고.</strong> 구멍을 막은 뒤에 올리는 광고비가 같은 돈으로 더 많은 문의를
            만듭니다.
          </CheckItem>
        </ul>

        <h2>조심할 것</h2>
        <p>
          마음이 급할 때 &ldquo;순위 보장&rdquo;, &ldquo;한 달 안에 1위&rdquo; 같은 제안을 받기
          쉽습니다. 인위적으로 트래픽이나 리뷰를 만드는 방식은 적발 시 노출이 더 나빠질 수 있습니다.
          블로그가 누락된다고 해서 무조건 저품질인 것도 아닙니다. 저희 광고주 사례에서는 블로그 체급보다
          큰 키워드를 오래 반복한 것이 원인이었고, 키워드를 뺀 정보성 글 한 편으로 원인이 갈렸습니다.
          과정은 <a href="/guide/case-blog-omission">블로그 누락 사례</a>에 있습니다.
        </p>

        <h2>자주 묻는 질문</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </GuideArticle>
    </>
  )
}
