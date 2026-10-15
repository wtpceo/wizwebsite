import type { Metadata } from "next"
import "@/styles/rebrand.css"
import SiteHeader from "@/components/rebrand/SiteHeader"
import { SiteFooter } from "@/components/rebrand/HomeSections"
import { PLATFORMS } from "@/lib/rebrand-data"

// 관계사 (주)위플이 운영하는 플랫폼 소개. 위즈더플래닝과 다른 법인이므로 숫자와 계약을 섞지 않는다
const TITLE = "관계사 플랫폼: 위플과 스토어레이더"
const DESC =
  "관계사 (주)위플이 운영하는 두 서비스입니다. 위플은 소상공인 마케팅 콘텐츠 자동화 서비스이고 스토어레이더는 프랜차이즈 매장 관리 서비스입니다. 위즈더플래닝과는 다른 법인이 운영합니다."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/family" },
  openGraph: { title: TITLE, description: DESC, url: "https://wiztheplanning.com/family", type: "website" },
}

export default function FamilyPage() {
  return (
    <div className="rb">
      <SiteHeader />
      <main>
        <section className="rb-page-hero">
          <div className="rb-wrap">
            <p className="rb-name">관계사 플랫폼</p>
            <h1>대행으로 배운 일을 소프트웨어로 만들었습니다</h1>
            <p className="rb-lead">
              매장마다 같은 일을 사람이 반복하던 부분을 서비스로 옮겼습니다. 두 서비스는 관계사 (주)위플이 운영합니다.
              위즈더플래닝과 다른 법인이고 결제와 계약도 (주)위플과 따로 합니다.
            </p>
          </div>
        </section>

        {PLATFORMS.map((p) => (
          <section className="rb-platform" key={p.name} id={p.name === "위플" ? "wipple" : "storeradar"}>
            <div className="rb-wrap rb-platform-grid">
              <div>
                <h2>{p.name}</h2>
                <p className="rb-small">{p.kind} · 운영 (주)위플</p>
                <p className="rb-lead">{p.desc}</p>
                {p.url ? (
                  <p style={{ marginTop: 24 }}>
                    <a className="rb-link" href={`https://${p.url}`} target="_blank" rel="noopener noreferrer">
                      {p.url}에서 자세히 보기
                    </a>
                  </p>
                ) : null}
              </div>
              <div>
                <dl className="rb-brand-stats">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <dt>{s.value}</dt>
                      <dd>{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="rb-brand-list" style={{ marginTop: 28 }}>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="rb-small" style={{ marginTop: 16 }}>
                  {p.note}
                </p>
              </div>
            </div>
          </section>
        ))}

        <section className="rb-platform">
          <div className="rb-wrap">
            <p className="rb-small">
              위즈더플래닝의 대행 문의는 <a className="rb-link" href="/#contact">홈 아래쪽</a>에서, 위플 서비스 문의는
              wizpp.com에서 받습니다.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
