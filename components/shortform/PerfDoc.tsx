import Link from "next/link"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, Crumb, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"

/**
 * /services/performance — 퍼포먼스 광고 상세. 2026-11-07 대표 선택: A안 「다크룸」(docs/시안-퍼포먼스-2026-11-07).
 * 한 가지 어두운 바닥 위에 '전시품'이 하나씩 켜진다: 주간 리포트 전표, 소재 A·B·C 보드, 받을 곳 점검표.
 * 남의 사례 대신 우리가 일하는 장면이 증거다. 광고주 상호 없음. 숫자는 펜션 릴스 24일 실측(2026.8.12 글)과 2016년뿐.
 * 스타일: sf-doc.css 의 .pd-* (perf dark). 머리줄은 :has(.pd) 로 어둡게.
 */

/** 흔한 광고 대행과 다른 자리 */
const VS: [string, string, string][] = [
  ["켜기 전", "받을 곳부터 확인", "받을 곳이 비어 있어도 집행부터"],
  ["소재", "자체 촬영팀이 찍고 다시 찍음", "광고주 몫 또는 외주 납품 대기"],
  ["성과가 안 나면", "받을 곳 정비 제안", "예산 증액 제안"],
  ["보고", "매체 화면 숫자 그대로, 예산 옮긴 이유까지", "집행 완료, 소재 몇 개"],
  ["계정", "고객사 명의, 저희는 관리자", "대행사 명의, 끝나면 기록도 끝"],
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
      <div className="pd">
        {/* ① 첫 화면: 왼쪽 촬영 현장 사진이 고정, 오른쪽 한 문장, 바닥을 가로지르는 이름 */}
        <section className="pd-hero" aria-label="퍼포먼스 광고 소개">
          <div className="pd-ph">
            <img src="/geo/media-crew.jpg" alt="촬영팀이 식당 주방에서 사장님을 촬영하는 모습" width={1200} height={900} />
          </div>
          <div className="pd-hr">
            <Crumb items={[{ name: "홈", href: "/" }, { name: s.n }]} />
            <p className="pd-sent">
              광고를 켜기 전에 받을 곳부터 봅니다. 소재는 저희 촬영팀이 찍고, 보고는 매체 화면 숫자 그대로입니다.
              <small>2016년부터 · 자체 촬영팀 · 계정은 고객사 명의</small>
            </p>
            <a className="pd-act" href="#contact">
              무료 광고 진단
            </a>
            <h1 className="pd-name" aria-label="퍼포먼스 광고">
              <span aria-hidden="true">
                퍼포먼스 <b>광고</b>
              </span>
            </h1>
          </div>
        </section>

        {/* ② 전시 1: 주간 리포트 전표 */}
        <section className="pd-ex rv" aria-labelledby="pd-h-report">
          <div className="dp-w pd-g">
            <div className="pd-slip" data-ui>
              <h4>
                <span>주간 리포트 · 메타 릴스 · 24일</span>
                <span>매체 화면 기준</span>
              </h4>
              <div className="pd-row">
                <span>광고비</span>
                <b>
                  131<small>만원</small>
                </b>
              </div>
              <div className="pd-row">
                <span>클릭</span>
                <b>
                  26,456<small>회</small>
                </b>
              </div>
              <div className="pd-row">
                <span>클릭당 비용</span>
                <b>
                  약 50<small>원</small>
                </b>
              </div>
              <div className="pd-row">
                <span>예약 기여</span>
                <b className="dim">광고 데이터로 셀 수 없었음</b>
              </div>
              <div className="pd-why">
                <em>다음 주 할 일</em>
                반응 좋은 세로 소재로 예산을 옮기고, 받을 곳(예약 페이지)을 먼저 손봅니다.
              </div>
            </div>
            <div className="pd-tx">
              <p className="pd-k">보고</p>
              <h2 id="pd-h-report">
                이행 내역이 아니라
                <br />
                매체 화면 숫자 그대로
              </h2>
              <p>
                지출, 클릭, 문의 수를 광고 관리자 화면에서 옮겨 적고, 예산을 왜 옮겼는지까지 적습니다. <b>셀 수 없었던 것도 같은 칸에 적습니다.</b> 그래서 다음 주 무엇을 고칠지가 리포트에서 바로 나옵니다.
              </p>
              <p className="pd-src">
                위 숫자는 강원도 계곡 펜션 릴스 광고 24일 실측입니다. <Link href="/guide/case-pension-direct-booking">그 기록 보기 →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ③ 전시 2: 소재 보드 */}
        <section className="pd-ex rv" aria-labelledby="pd-h-creative">
          <div className="dp-w pd-g pd-g-rv">
            <div className="pd-tx">
              <p className="pd-k">소재</p>
              <h2 id="pd-h-creative">
                반응이 떨어진 소재는
                <br />
                기다리지 않고 다시 찍습니다
              </h2>
              <p>
                여러 소재를 같이 돌리고 반응 좋은 쪽으로 예산을 옮깁니다. 떨어진 소재는 외주 일정을 기다리지 않고 <b>자체 촬영팀이 그 주에 새로 찍어</b> 바꿉니다. 반응 좋은 인플루언서 릴스는 2차 활용 계약을 맺어 광고로 다시 씁니다.
              </p>
            </div>
            <div className="pd-board" aria-label="소재 A·B·C 운영 상태">
              <figure>
                <img src="/geo/media-beauty.jpg" alt="소재 A, 뷰티 크리에이터 촬영 컷" width={800} height={1000} loading="lazy" />
                <figcaption>
                  A <i>운영 중</i>
                </figcaption>
              </figure>
              <figure className="off">
                <img src="/geo/media-fashion.jpg" alt="소재 B, 반응이 떨어져 교체 예정" width={800} height={1000} loading="lazy" />
                <div className="pd-re">반응 ↓ 재촬영</div>
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
        </section>

        {/* ④ 켜기 전에 하는 일: 부탁과 응답 */}
        <section className="pd-proc rv" aria-labelledby="pd-h-proc">
          <div className="dp-w">
            <h2 id="pd-h-proc">켜기 전에 하는 일</h2>
            <div className="pd-col">
              <div className="pd-x">
                <b>먼저, 브랜드 이름을 보내 주세요.</b>
                <div className="pd-call">
                  <em>받을 곳부터 봅니다.</em> 플레이스, 홈페이지, 지금 쓰는 소재가 고객을 받을 준비가 됐는지 적어 보내 드립니다. 계약 전이고 무료입니다.
                </div>
                <div className="pd-chk" data-ui aria-label="받을 곳 점검표 예시">
                  <div>
                    <b>네이버 플레이스</b>
                    <s className="ok">준비됨</s>
                  </div>
                  <div>
                    <b>홈페이지 문의 경로</b>
                    <s className="no">전화번호가 그림 속</s>
                  </div>
                  <div>
                    <b>지금 쓰는 소재</b>
                    <s>세로 소재 없음</s>
                  </div>
                </div>
              </div>
              <div className="pd-x">
                <b>그다음, 매체와 예산을 정합니다.</b>
                <div className="pd-call">
                  업종과 고객층에 맞는 매체만 고르고, <em>광고비·기간·소재를 확인받은 뒤</em> 켭니다. 계정은 고객사 명의로 만들고 저희는 관리자로만 들어갑니다.
                </div>
                <ul className="pd-chips" aria-label="고르는 매체">
                  {s.items.map(([n]) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="pd-x">
                <b>매주, 숫자 그대로 보고합니다.</b>
                <div className="pd-call">
                  지출·클릭·문의 수와 예산을 옮긴 이유. 위에 있는 전표가 그 형식이고, 주기는 견적서에 적습니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ 다른 자리: 다섯 줄 표 */}
        <section className="pd-vs rv" aria-labelledby="pd-h-vs">
          <div className="dp-w">
            <p className="pd-k">다른 자리</p>
            <h2 id="pd-h-vs">광고비 올리자는 말부터 하지 않는 대행</h2>
            <div className="pd-tbl" role="table" aria-label="위즈더플래닝과 흔한 광고 대행 비교">
              <div className="pd-th" role="row">
                <span role="columnheader">항목</span>
                <span role="columnheader" className="us">
                  위즈더플래닝
                </span>
                <span role="columnheader">흔한 광고 대행</span>
              </div>
              {VS.map(([k, a, b]) => (
                <div className="pd-tr" role="row" key={k}>
                  <span role="rowheader">{k}</span>
                  <span role="cell" className="us">
                    {a}
                  </span>
                  <span role="cell">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑥ FAQ */}
        <section className="pd-faq rv" aria-labelledby="pd-h-faq">
          <div className="dp-w pd-g">
            <h2 id="pd-h-faq">자주 묻는 질문</h2>
            <Faq items={d.faq} />
          </div>
        </section>

        {/* ⑦ 마무리: 한 문장과 밝은 버튼 하나 */}
        <section className="pd-cta rv" aria-label="문의 안내">
          <div className="dp-w">
            <p>지금 쓰는 소재와 플레이스·홈페이지를 보고 어느 매체부터 켤지 적어 보내 드리겠습니다.</p>
            <a href="#contact" className="pd-act">
              무료 광고 진단
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

      <ContactBlock title="퍼포먼스 광고, 무료 광고 진단부터" sub="받을 곳과 지금 소재를 먼저 보고, 어느 매체부터 켤지 적어 보내 드리겠습니다." initial={["perf"]} source="service_performance" />
    </DocShell>
  )
}
