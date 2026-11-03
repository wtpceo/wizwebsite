import Link from "next/link"
import { AD_SERVICES } from "@/lib/ad-services"
import s from "./home.module.css"

// 다루는 광고: 큰 글자 '광고' + 펼침 막대 7개. name="ads"로 한 번에 하나만 열린다
export default function HomeAds() {
  return (
    <section className={s.sec} id="ads" aria-labelledby="h-ads">
      <div className={s.ads}>
        <div className={s.colWord}>
          <h2 className={`${s.giant} ${s.rise}`} id="h-ads" data-reveal="">
            광고
          </h2>
          <p className={s.rise} data-reveal="">
            하나만 맡기셔도 됩니다. 여러 개를 같이 맡기면 담당 부서끼리 한 계획으로 움직입니다. 대행료는 월 300만 원부터, 최소 3개월입니다.
          </p>
        </div>
        <div className={s.bars}>
          {AD_SERVICES.map((ad, i) => (
            <details key={ad.href} name="ads" open={i === 0}>
              <summary>
                <span>{ad.title}</span>
                <span aria-hidden="true">+</span>
              </summary>
              <div className={s.barIn}>
                <p>{ad.desc}</p>
                <Link href={ad.href} aria-label={`${ad.label} 자세히 보기`}>
                  자세히 보기
                </Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
