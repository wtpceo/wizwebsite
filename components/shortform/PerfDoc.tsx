import Link from "next/link"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, Crumb, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import PerfBar from "./PerfBar"

/**
 * /services/performance — 퍼포먼스 광고 상세. 2026-11-07 대표: 색 체계 「먹과 신호」(docs/디자인시스템-색-2026-11-07.md) 방향으로 다시 설계.
 * 종이 바닥으로 시작하고, 증거(전표·소재 보드)와 마무리는 먹 바닥. 빨강은 화면당 한 번: 주행동 버튼, 움직인 숫자, 제목의 한 어절, 표의 한 줄.
 * 남의 사례 대신 우리가 일하는 장면이 증거. 광고주 상호 없음. 숫자는 펜션 릴스 24일 실측(2026.8.12 글)과 2016년뿐.
 * 스타일: sf-doc.css 의 .pk-* (paper & ink).
 */

/** 촬영 현장 사진 띠 — 노하우 띠와 같은 실사풍 생성 사진 8장 */
const STRIP: [string, string][] = [
  ["/geo/media-crew.jpg", "촬영팀이 식당 주방에서 사장님을 촬영하는 모습"],
  ["/geo/media-editor.jpg", "편집자가 영상을 편집하는 작업실"],
  ["/geo/media-beauty.jpg", "뷰티 크리에이터가 링라이트 앞에서 제품을 소개하는 모습"],
  ["/geo/media-unbox.jpg", "두 크리에이터가 제품을 개봉하며 촬영하는 모습"],
  ["/geo/media-food.jpg", "푸드 유튜버가 카페 디저트를 촬영하는 모습"],
  ["/geo/media-fitness.jpg", "피트니스 크리에이터가 운동 팁을 촬영하는 모습"],
  ["/geo/media-fashion.jpg", "패션 크리에이터가 거울 앞에서 코디 영상을 찍는 모습"],
  ["/geo/media-ai.jpg", "카페에서 AI 답변을 보는 휴대폰 화면"],
]

/** 하나의 설계 사슬 [이름, 한 줄, 우리가 직접 하는 칸인가] */
const CHAIN: [string, string, boolean][] = [
  ["소재", "자체 촬영팀이 찍고 편집", true],
  ["광고", "메타·구글이 타겟팅·최적화", false],
  ["받을 곳", "플레이스·홈페이지에서 문의·구매로", true],
  ["2차·3차 활용", "PPL 콘텐츠를 광고와 후기로 다시", true],
  ["바깥 언급", "후기·영상·기사가 쌓임", true],
  ["AI 답변", "ChatGPT·네이버 AI 브리핑에 언급", true],
]

/** 툴이 하는 일 / 사람이 하는 일 */
const TOOL = ["타겟 고르기", "입찰과 노출 자리", "예산 자동 배분", "소재 조합 테스트"]
const HUMAN = ["무슨 소재를 넣을지", "클릭 뒤에 어디로 보낼지", "문의·구매가 새는 곳 막기", "숫자를 읽고 그 주에 고치기"]

/** 2차·3차 활용 사슬 */
const REUSE: [string, string, string][] = [
  ["1차 · PPL 콘텐츠", "유튜버·인플루언서가 브랜드를 다루는 영상과 글", "/services/influencer"],
  ["2차 · 광고 소재", "반응 좋은 콘텐츠를 2차 활용 계약으로 메타·구글 광고에 다시 씁니다", ""],
  ["3차 · 바깥 출처", "영상과 후기가 검색과 AI 답변이 끌어오는 근거가 됩니다", "/services/search"],
]

export default function PerfDoc() {
  const s = SERVICES.find((x) => x.k === "perf")!
  const d = DETAILS.perf
  const crumbs = [
    { name: "홈", path: "/" },
    { name: s.n, path: `/services/${s.slug}` },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/${s.slug}#service`,
        name: d.title,
        serviceType: s.n,
        description: d.desc,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/services/${s.slug}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${s.n} 세부 상품`,
          itemListElement: s.items.map(([n, t]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: t } })),
        },
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }

  return (
    <DocShell>
      <JsonLd data={ld} />
      <div className="pk px">
        {/* ① 첫 화면 (먹): 툴은 같아졌다, 차이는 소재와 설계. 오른쪽은 '하나의 설계' 사슬 */}
        <section className="px-hero" aria-label="퍼포먼스 광고 소개">
          <div className="dp-w">
            <Crumb items={[{ name: "홈", href: "/" }, { name: s.n }]} />
            <div className="px-hero-g">
              <div className="px-hero-t">
                <p className="pk-kw">퍼포먼스 광고 · 메타 · 구글·유튜브 · 네이버 · 카카오 · 당근</p>
                <h1>
                  광고 툴은 알아서
                  <br />
                  최적화합니다.
                  <br />
                  차이는 <u>소재와 설계</u>.
                </h1>
                <p className="px-lead">타겟팅과 입찰은 이제 메타·구글이 자동으로 합니다. 성과를 가르는 건 어떤 소재를 넣느냐, 클릭 뒤에 문의와 구매까지 어떻게 이어 두느냐입니다. 저희는 그 둘을 합니다.</p>
                <div className="pk-btns">
                  <a className="pk-b1" href="#contact">
                    무료로 소재·설계 점검받기
                  </a>
                  <a className="pk-b2 px-b2" href="#px-chain">
                    설계 한 장 보기
                  </a>
                </div>
                <p className="px-trust">자체 촬영팀 · 전담 AE · 계정은 고객사 명의 · 2016년부터</p>
              </div>
              <ol className="px-chain" id="px-chain" aria-label="하나의 설계">
                {CHAIN.map(([t, x, hot], i) => (
                  <li key={t} className={hot ? "hot" : undefined}>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{t}</b>
                    <span>{x}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ② 툴이 하는 일 / 사람이 하는 일 (종이) */}
        <section className="px-two rv" aria-labelledby="px-h-two">
          <div className="dp-w">
            <p className="pk-k">왜 소재와 설계인가</p>
            <h2 id="px-h-two">툴이 같아지면 남는 건 둘뿐입니다</h2>
            <div className="px-two-g">
              <div className="px-two-c">
                <h3>이제 툴이 합니다</h3>
                <ul>
                  {TOOL.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p>어느 대행사가 돌려도 여기서 나는 차이는 작습니다.</p>
              </div>
              <div className="px-two-c us">
                <h3>아직 사람이 합니다</h3>
                <ul>
                  {HUMAN.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p>여기서 성과가 갈립니다. 저희 일은 전부 이 칸에 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ③ 소재 (먹): 자체 촬영팀 */}
        <section className="pk-dark" aria-labelledby="px-h-content">
          <div className="dp-w">
            <div className="pk-ex pk-ex-rv rv">
              <div className="pk-tx">
                <p className="pk-k">소재</p>
                <h2 id="px-h-content">소재는 자체 촬영팀이 찍고, 떨어지면 다시 찍습니다</h2>
                <p>
                  소재 여러 개를 같이 돌리고 반응 좋은 쪽으로 예산을 옮깁니다. 떨어진 소재는 외주 납품을 기다리지 않고 <b>촬영팀이 그 주에 새로 찍어</b> 바꿉니다. 소재가 있어야 툴도 일합니다.
                </p>
              </div>
              <div className="pk-board" aria-label="소재 A·B·C 운영 상태">
                <figure>
                  <img src="/geo/media-beauty.jpg" alt="소재 A, 뷰티 크리에이터 촬영 컷" width={800} height={1000} loading="lazy" />
                  <figcaption>
                    A <i>운영 중</i>
                  </figcaption>
                </figure>
                <figure className="off">
                  <img src="/geo/media-fashion.jpg" alt="소재 B, 반응이 떨어져 교체 예정" width={800} height={1000} loading="lazy" />
                  <div className="pk-re">반응 ↓ 재촬영</div>
                  <figcaption>
                    B <i>교체</i>
                  </figcaption>
                </figure>
                <figure>
                  <img src="/geo/media-food.jpg" alt="소재 C, 푸드 촬영 컷" width={800} height={1000} loading="lazy" />
                  <figcaption>
                    C <i>예산 ↑</i>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="geo-media pk-strip" aria-label="촬영 현장">
              <div className="geo-media-track">
                {[...STRIP, ...STRIP].map(([src, alt], i) => (
                  <figure key={i} aria-hidden={i >= STRIP.length}>
                    <img src={src} alt={i < STRIP.length ? alt : ""} loading="lazy" width={800} height={600} />
                  </figure>
                ))}
              </div>
            </div>
            <p className="pk-strip-cap">자체 촬영팀이 찍은 장면들</p>
          </div>
        </section>

        {/* ④ 설계 (종이): 클릭 뒤를 설계한다 */}
        <section className="px-design rv" aria-labelledby="px-h-design">
          <div className="dp-w px-design-g">
            <div>
              <p className="pk-k">설계</p>
              <h2 id="px-h-design">클릭 뒤를 먼저 설계합니다</h2>
              <p className="pk-sub">광고를 켜기 전에 문의와 구매가 어디서 새는지 봅니다. 플레이스, 홈페이지, 지금 쓰는 소재를 점검해 적어 보내 드립니다. 계약 전이고 무료입니다.</p>
            </div>
            <div className="px-check px-check-l" data-ui aria-label="소재·설계 점검표 예시">
              <div className="px-check-h">
                <span>소재·설계 점검표</span>
                <span>예시 · 계약 전 무료</span>
              </div>
              <div className="px-check-r">
                <b>네이버 플레이스</b>
                <span>영업시간·전화 맞음</span>
                <i className="ok">통과</i>
              </div>
              <div className="px-check-r bad">
                <b>홈페이지 문의 경로</b>
                <span>전화번호가 그림 속, 눌러도 안 걸림</span>
                <i>새는 곳</i>
              </div>
              <div className="px-check-r bad">
                <b>지금 쓰는 소재</b>
                <span>세로 영상 없음, 가로 사진 1장</span>
                <i>새는 곳</i>
              </div>
              <div className="px-check-r">
                <b>광고 계정</b>
                <span>대행사 명의, 기록 없음</span>
                <i className="ok">이전</i>
              </div>
              <div className="px-check-f">
                <b>
                  새는 곳 <em>2</em>
                </b>
                <span>이 둘을 먼저 고친 뒤에 켭니다</span>
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ AE 체계 (먹): 빠른 보고와 실행 */}
        <section className="pk-dark" id="px-report" aria-labelledby="pk-h-report">
          <div className="dp-w">
            <div className="pk-ex rv">
              <div className="pk-slip" data-ui>
                <h4>
                  <span>주간 리포트 · 메타 릴스 · 24일</span>
                  <span>매체 화면 기준</span>
                </h4>
                <div className="pk-row">
                  <span>광고비</span>
                  <b>
                    131<small>만원</small>
                  </b>
                </div>
                <div className="pk-row">
                  <span>클릭</span>
                  <b>
                    26,456<small>회</small>
                  </b>
                </div>
                <div className="pk-row">
                  <span>클릭당 비용</span>
                  <b>
                    약 50<small>원</small>
                  </b>
                </div>
                <div className="pk-row">
                  <span>예약 기여</span>
                  <b className="dim">광고 데이터로 셀 수 없었음</b>
                </div>
                <div className="pk-why">
                  <em>다음 주 할 일</em>
                  반응 좋은 세로 소재로 예산을 옮기고, 예약 페이지부터 손봅니다.
                </div>
              </div>
              <div className="pk-tx">
                <p className="pk-k">AE 체계</p>
                <h2 id="pk-h-report">전담 AE가 보고하고, 그 주에 실행합니다</h2>
                <p>
                  계약한 사람이 끝까지 맡습니다. 지출·클릭·문의 수를 매체 화면 숫자 그대로 적고, 예산을 왜 옮겼는지까지 적어 <b>직접 찾아뵙고 설명합니다.</b> 셀 수 없었던 것도 같은 칸에 적습니다. 그래서 다음 주 무엇을 고칠지가 바로 정해집니다.
                </p>
                <p className="pk-src">
                  위 숫자는 강원도 계곡 펜션 릴스 광고 24일 실측입니다. <Link href="/guide/case-pension-direct-booking">그 기록 보기 →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ⑥ 2차·3차 활용 (종이): 한 번 찍은 콘텐츠를 세 번 쓴다 */}
        <section className="px-reuse rv" aria-labelledby="px-h-reuse">
          <div className="dp-w">
            <p className="pk-k">2차·3차 활용</p>
            <h2 id="px-h-reuse">한 번 만든 콘텐츠를 세 번 씁니다</h2>
            <p className="pk-sub px-sub-w">유튜버·인플루언서 PPL로 만든 콘텐츠를 2차 활용 계약으로 광고 소재로 다시 쓰고, 그 후기와 영상이 바깥 출처가 되어 검색과 AI 답변까지 이어집니다. 섭외, 광고, SEO·GEO를 한 팀이 하니까 가능한 설계입니다.</p>
            <ol className="px-reuse-l">
              {REUSE.map(([t, x, href]) => (
                <li key={t}>
                  <b>{t}</b>
                  <span>{x}</span>
                  {href ? <Link href={href}>자세히 →</Link> : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑦ FAQ (종이) */}
        <section className="pk-faq rv" aria-labelledby="pk-h-faq">
          <div className="dp-w pk-faq-g">
            <h2 id="pk-h-faq">바꾸기 전에 걱정되는 것</h2>
            <Faq items={d.faq} />
          </div>
        </section>

        {/* ⑧ 마무리 (먹) */}
        <section className="pk-dark pk-cta rv" aria-label="문의 안내">
          <div className="dp-w">
            <p>
              소재에서 광고, 받을 곳, 2차 활용, 바깥 언급, AI 답변까지.
              <br />
              지금 어디가 끊겨 있는지, 계약 전에 무료로 봐 드리겠습니다.
            </p>
            <a href="#contact" className="pk-b1">
              무료로 소재·설계 점검받기
            </a>
            <small>
              <a href="tel:16700704" data-tel>
                전화 문의 1670-0704
              </a>{" "}
              · 계약 전 무료
            </small>
          </div>
        </section>
      </div>

      <PerfBar />
      <ContactBlock title="퍼포먼스 광고, 소재·설계 점검부터" sub="브랜드 이름만 알려 주시면 지금 소재와 플레이스·홈페이지를 보고 어느 매체부터 켤지 적어 보내 드리겠습니다." initial={["perf"]} source="service_performance" />
    </DocShell>
  )
}
