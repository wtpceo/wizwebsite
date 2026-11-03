import s from "./home.module.css"

// 성과를 같이 만듭니다: 큰 문장 타일 + 2518·2519 + 촬영 사진 + 10년 동안 배운 것(원고 §01 본문)
export default function HomeIntro() {
  return (
    <section className={`${s.board} ${s.intro}`} aria-labelledby="slogan">
      <div className={s.tA}>
        <h2 id="slogan" className={s.rise} data-reveal="">
          성과를
          <br />
          같이 만듭니다
        </h2>
      </div>
      <div className={s.tB}>
        <strong className={`${s.num} ${s.rise}`} data-reveal="">
          2518
          <br />
          2519
        </strong>
        <span className={s.rise} data-reveal="">
          부서들이 나란히 앉은 두 방의 번호입니다. 금천구 디지털로 178, 같은 층.
        </span>
      </div>
      <figure className={`${s.tC} ${s.shutter}`} data-reveal="">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/home/strip-3.jpg" alt="위즈더플래닝 촬영팀이 찍은 음식 숏폼 장면" loading="lazy" decoding="async" />
      </figure>
      <div className={s.tText}>
        <p className={s.rise} data-reveal="">
          2016년부터 수많은 캠페인을 돌리면서 알게 된 게 있습니다. 반짝 잘 나온 광고 하나보다, 잘 만든 소재를 여러 번
          고쳐 쓰고 다른 매체로 옮겨 쓴 브랜드가 오래 갑니다. 그래서 저희는 첫 캠페인부터 다음 캠페인까지 같이
          계획합니다.
        </p>
      </div>
    </section>
  )
}
