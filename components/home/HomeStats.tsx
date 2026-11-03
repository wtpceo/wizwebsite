import s from "./home.module.css"

// 10년 동안 쌓은 것: 큰 사진 한 장 + 숫자 타일 둘(원고 §06)
export default function HomeStats() {
  return (
    <section className={s.sec} aria-labelledby="h-stats">
      <h2 className={`${s.head} ${s.rise}`} id="h-stats" data-reveal="">
        10년 동안 쌓은 것
      </h2>
      <div className={s.stats}>
        <figure className={`${s.ph} ${s.shutter}`} data-reveal="">
          {/* 생성 이미지. 실제 촬영본이 오면 바꾼다 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/home/gen_hero.jpg"
            alt="촬영 현장 장면(생성 이미지, 실제 촬영본으로 바꿀 자리)"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className={s.tiles}>
          <div className={s.rise} data-reveal="">
            <strong className={s.num}>2016</strong>
            <span>년부터 광고 대행</span>
          </div>
          <div className={s.rise} data-reveal="">
            <strong className={s.num}>7,000여 곳</strong>
            <span>함께한 광고주</span>
          </div>
        </div>
      </div>
      {/* 사무실 안내. 2518·2519 큰 숫자 판 대신 이 한 줄로(대표 지시 2026-11-03) */}
      <p className={`${s.office} ${s.rise}`} data-reveal="">
        사무실은 금천구 디지털로 178 퍼블릭가산 A동 2518·2519호입니다. 미팅 오시면 담당 부서를 바로 만나실 수 있습니다.
      </p>
    </section>
  )
}
