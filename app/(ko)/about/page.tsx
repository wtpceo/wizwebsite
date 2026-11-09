import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, CONTACT, TEAMS } from "@/components/shortform/content"

/** 한 캠페인이 흐르는 순서(11-07 대표 논리). 번호·제목·한 줄·링크 */
const CHAIN: [string, string, string, string | null][] = [
  ["01", "캠페인 기획", "지금 인지도와 고객이 빠져나가는 구간을 찾습니다.", "/diagnosis"],
  ["02", "인플루언서 섭외", "브랜드에 맞는 유튜버와 인플루언서를 먼저 찾아냅니다.", "/services/influencer"],
  ["03", "촬영·제작", "저희 촬영팀이 소재를 만들고 성과를 보며 다시 찍습니다.", "/services/content"],
  ["04", "퍼포먼스 광고", "같은 광고 도구라도 소재와 랜딩을 바꿔 성과를 냅니다.", "/services/performance"],
  ["05", "랜딩 구축", "사람과 AI가 모두 잘 읽는 웹사이트와 플레이스를 만듭니다.", "/services/homepage"],
  ["06", "2차·3차 확장", "반응이 확인된 콘텐츠를 광고 소재와 후기 출처로 다시 씁니다.", "/services/viral"],
  ["07", "SEO·GEO", "AI가 브랜드를 추천하는지 realGEO로 매주 측정합니다.", "/services/search"],
]

/** 회사소개 전용 문제·비교 문구(11-09 제미나이 재작성). 홈이 쓰는 content.ts의 PROBLEMS·COMPARE는 그대로 둔다 */
const PROBLEMS: [string, string][] = [["자기 매체만 보는 시각", "광고 회사는 광고만, 바이럴 업체는 블로그만 봅니다. 외주를 주다 보니 브랜드 전체를 그리는 사람이 없습니다."], ["건수만 채우고 끝나는 보고", "약속한 수량만 채우고 끝냅니다. 실제 문의나 매출이 얼마나 올랐는지는 아무도 책임지지 않습니다."], ["영업 따로 실행 따로", "계약할 때 만난 사람과 진짜 일하는 사람이 다릅니다. 처음 기획했던 의도는 일을 하면서 흐지부지 사라집니다."], ["무턱대고 쓰는 광고비", "웹사이트가 설득력이 없는데 광고비부터 씁니다. 고객이 어디서 나가는지 모르면 돈을 부어도 성과가 없습니다."]]
const COMPARE: [string, string, string][] = [["관리 범위", "맡은 매체 하나만", "노출부터 검색과 웹사이트 문의까지"], ["출발점", "정해진 상품 제안", "고객이 빠져나가는 곳부터 진단"], ["실행 주체", "매체마다 외주와 하청", "6개 부서가 안에서 직접 실행"], ["소통 창구", "계약 따로 실행 따로", "전담 AE 한 사람이 끝까지 책임"], ["보고 기준", "약속한 건수를 채웠는가", "실제 문의와 매출이 올랐는가"], ["보고 방식", "메일이나 서면으로 전달", "전담 AE가 직접 찾아가서 보고"]]

/** 회사 개요 오른쪽 사실 목록(11-09 대표 「우측 글도 디자인해서, 함축해서」). [큰 글자, 한 줄, 풀이] 원문 기업 개요의 사실만 */
const FACTS: [string, string, string][] = [
  ["2016", "로컬 매장·병의원에서 출발", "2016년 설립 후 식음료·교육·뷰티·의료·기업 브랜드로 넓혔습니다."],
  ["7,000+", "누적 7,000여 곳의 캠페인", "업종과 규모가 다른 브랜드의 캠페인을 직접 맡아 왔습니다."],
  ["8 · 6", "8가지 일, 6개 인하우스 부서", "섭외·광고·GEO·촬영·바이럴·글로벌·웹사이트·오프라인을 외주 없이 합니다."],
  ["1:1", "전담 AE 한 사람이 창구", "처음 상담부터 주간 리포트까지 같은 사람이 맡습니다."],
]

/** 부서가 일하는 장면. 이미지 생성 모델로 만든 연출 사진이라 실존 인물·고객사가 아니다 */
const PHOTOS: [string, string, string][] = [
  ["/geo/media-crew.jpg", "촬영팀 · 현장 촬영", "촬영팀이 식당 주방에서 사장님을 촬영하는 모습"],
  ["/geo/media-editor.jpg", "촬영팀 · 편집", "편집자가 영상을 편집하는 작업실"],
  ["/geo/media-unbox.jpg", "섭외팀 · 크리에이터 콘텐츠", "두 크리에이터가 제품을 개봉하며 촬영하는 모습"],
  ["/geo/media-ai.jpg", "GEO팀 · AI 답변 확인", "카페에서 AI 답변을 보는 휴대폰 화면"],
]
import { Icon } from "@/components/shortform/icons"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import { ABOUT_PAGE } from "@/components/shortform/details"
import { Chars, vars } from "@/components/shortform/parts"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 회사소개(2026-11-04 리뉴얼, 11-09 대표 「디자인 통일감」: /team·업종 페이지와 같은 틀로).
// 순서: 첫 화면 → 기업 개요·여덟 가지 일 → 한 캠페인의 순서 → 나눠 맡길 때의 한계(남색) → 구조 비교 → 여섯 부서 → 자체 솔루션 → 회사 정보 → 질문 → 문의
const d = ABOUT_PAGE

export const metadata: Metadata = {
  title: d.title,
  description: d.desc,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${d.title} | 위즈더플래닝`,
    description: d.desc,
    url: "https://wiztheplanning.com/about",
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: d.title }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${d.title} | 위즈더플래닝`, description: d.desc, images: [`/og-home.jpg?v=${timestamp}`] },
}

export default function AboutPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "회사소개", path: "/about" },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${SITE}/about#page`, name: d.title, description: d.desc, about: { "@id": ORG_ID }, url: `${SITE}/about` },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  return (
    <DocShell>
      <div className="gx ix vx cx aw">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="위즈더플래닝 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall="about" />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="회사소개: 8가지 통합 마케팅, 한 곳에서 직접">
              <small className="ix-kw">회사소개</small> <Chars text={"8가지 통합 마케팅\n한 곳에서 직접"} mark="한 곳에서 직접" />
            </h1>
            <p className="vx-era">외주 없이 6개 부서가 직접, 1:1 전담 AE가 챙깁니다.</p>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
              </a>
              <a className="p2" href={CONTACT.telHref} data-tel>
                대표전화 {CONTACT.tel}
              </a>
            </div>
            <p className="vx-trust">
              2016년 설립 · 누적 7,000여 곳 · 인하우스 6개 부서 · <span className="nw">외주 없음</span>
            </p>
          </div>
          <a className="ix-cue" href="#overview" aria-label="기업 개요로 내려가기">
            <span>위즈더플래닝 일하는 방식</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 기업 개요 + 여덟 가지 일 */}
        <section className="dp-sec geo-sec rv aw-over" id="overview">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">{d.q1}</p>
                <h2>
                  하나의 메시지로{" "}
                  <br />
                  <span>여덟 가지 일을 직접 합니다</span>
                </h2>
              </div>
              <dl className="aw-facts" aria-label="위즈더플래닝 한눈에 보기">
                {FACTS.map(([k, t, x], i) => (
                  <div key={k} style={vars({ i })}>
                    <dt>{k}</dt>
                    <dd>
                      <b>{t}</b>
                      <span>{x}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="aw-svc" aria-label="위즈더플래닝이 하는 일 여덟 가지">
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  <Link href={`/services/${s.slug}`}>
                    <span className="ic" aria-hidden="true">
                      <Icon k={s.k} />
                    </span>
                    <b>{s.n}</b>
                    <small>{s.ln}</small>
                    <span className="go" aria-hidden="true">
                      <Icon k="arrow" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ③ 한 캠페인이 흐르는 순서 */}
        <section className="dp-sec geo-sec geo-sec-mist rv aw-chain" id="chain">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">일하는 순서</p>
                <h2>
                  기획에서 GEO까지{" "}
                  <br />
                  <span>캠페인이 흐르는 7단계</span>
                </h2>
              </div>
              <p className="geo-lead">각 단계를 누르면 저희가 무슨 일을 어떻게 하는지 자세히 보실 수 있습니다.</p>
            </div>
            <ol className="aw-chain-g" aria-label="한 캠페인이 흐르는 순서">
              {CHAIN.map(([no, t, x, href], i) => {
                const inner = (
                  <>
                    <em>{no}</em>
                    <b>{t}</b>
                    <span>{x}</span>
                  </>
                )
                return (
                  <li key={no} style={vars({ i })}>
                    {href ? <Link href={href}>{inner}</Link> : <div>{inner}</div>}
                  </li>
                )
              })}
            </ol>
            <p className="aw-note">GEO는 7단계 중 가장 마지막에 옵니다. 앞서 만든 콘텐츠와 출처가 탄탄해야 AI도 브랜드를 믿고 추천할 수 있습니다.</p>
          </div>
        </section>

        {/* ④ 나눠 맡길 때의 한계(남색) */}
        <section className="dp-sec geo-sec rv tw-ae aw-prob" id="one-team">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">나눠 맡길 때의 한계</p>
                <h2>
                  대행사를 나눠서 맡기면{" "}
                  <br />
                  <span>이런 문제가 생깁니다</span>
                </h2>
              </div>
              <p className="geo-lead">일을 여러 곳에 쪼개서 맡기면 브랜드 이야기가 흩어지고 돈과 시간만 낭비하기 쉽습니다.</p>
            </div>
            <ol className="aw-prob-g" style={vars({ n: PROBLEMS.length })}>
              {PROBLEMS.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <p>{x}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑤ 구조 비교 */}
        <section className="dp-sec geo-sec rv aw-cmp" id="compare">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">위즈더플래닝 방식</p>
                <h2>
                  운영하는 구조부터{" "}
                  <br />
                  <span>이렇게 다릅니다</span>
                </h2>
              </div>
              <p className="geo-lead">전담 AE 한 사람이 처음부터 끝까지 챙기니까 답답하게 같은 말을 반복하지 않으셔도 됩니다.</p>
            </div>
            <div className="aw-cmp-t" role="table" aria-label="채널별 대행과 위즈더플래닝 비교">
              <div className="aw-cmp-h" role="row">
                <span role="columnheader">구분</span>
                <span role="columnheader">채널별 대행</span>
                <span role="columnheader">위즈더플래닝</span>
              </div>
              {COMPARE.map(([k, a, b], i) => (
                <div className="aw-cmp-r" role="row" key={k} style={vars({ i })}>
                  <b role="rowheader">{k}</b>
                  <span role="cell" data-l="채널별 대행">
                    {a}
                  </span>
                  <strong role="cell" data-l="위즈더플래닝">
                    {b}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑥ 여섯 부서 */}
        <section className="dp-sec geo-sec geo-sec-mist rv aw-team" id="teams">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인하우스 부서</p>
                <h2>
                  외주 없이 직접 움직이는{" "}
                  <br />
                  <span>6개 전담 부서</span>
                </h2>
              </div>
              <p className="geo-lead">
                6개 부서가 남에게 넘기지 않고 직접 일합니다. 전체 일정은 전담 AE가 알아서 챙겨 드립니다.{" "}
                <Link href="/team" className="aw-more">
                  부서와 일하는 과정 살펴보기
                </Link>
              </p>
            </div>
            <ul className="aw-team-g">
              {TEAMS.map(([k, n, xs, en], i) => (
                <li key={k} style={vars({ i })}>
                  <span className="ic" aria-hidden="true">
                    <Icon k={k} />
                  </span>
                  <small>{en}</small>
                  <b>{n}</b>
                  <span className="jobs">{xs.join(" · ")}</span>
                </li>
              ))}
            </ul>
            {/* 부서가 일하는 장면(이미지 생성 모델로 만든 연출 사진, 실존 인물 아님) */}
            <ul className="aw-photos" aria-label="부서가 일하는 장면">
              {PHOTOS.map(([src, cap, alt], i) => (
                <li key={src} style={vars({ i })}>
                  <img src={src} alt={alt} loading="lazy" decoding="async" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ⑦ 자체 솔루션 */}
        <section className="dp-sec geo-sec rv aw-own" id="own">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">자체 솔루션</p>
                <h2>
                  직접 만들어서 쓰는{" "}
                  <br />
                  <span>솔루션과 인프라</span>
                </h2>
              </div>
              <p className="geo-lead">인플루언서를 찾고 성과를 잴 때 쓰는 도구도 저희가 직접 만들었습니다.</p>
            </div>
            <ol className="aw-own-g">
              {d.own.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <p>{x}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑧ 회사 정보·오시는 길 */}
        <section className="dp-sec geo-sec geo-sec-mist rv aw-loc" id="location">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">기업 정보</p>
                <h2>
                  회사 위치와{" "}
                  <br />
                  <span>오시는 길</span>
                </h2>
              </div>
              <p className="geo-lead">{d.where}</p>
            </div>
            <dl className="aw-info">
              <div className="w2">
                <dt>주소</dt>
                <dd>서울시 금천구 디지털로 178 퍼블릭가산 A동 2518호·2519호</dd>
              </div>
              {d.access ? (
                <div className="w2">
                  <dt>오시는 길</dt>
                  <dd>{d.access}</dd>
                </div>
              ) : null}
              <div>
                <dt>대표전화</dt>
                <dd>
                  <a href={CONTACT.telHref} data-tel>
                    {CONTACT.tel}
                  </a>
                </dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd>{CONTACT.email}</dd>
              </div>
              <div className="w2">
                <dt>운영 시간</dt>
                <dd>평일 10:00–18:00 · 점심시간 12:15–13:30 · 주말 및 공휴일 휴무</dd>
              </div>
              <div className="w2">
                <dt>대표</dt>
                <dd>정현우 · 사업자등록번호 668-81-00391</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ⑨ 자주 묻는 질문 */}
        <FaqBlock items={d.faq} />

        {/* ⑩ 문의 */}
        <ContactBlock
          title="상담은 무료입니다. 문의 남겨 주시면 전담 AE가 연락드릴게요."
          sub="전담 AE가 지금 상황을 먼저 살펴보고 연락드리겠습니다. 비용은 진단이 끝나면 제안서로 꼼꼼히 챙겨 드립니다."
          label="문의하기"
          source="about"
        />
      </div>
    </DocShell>
  )
}
