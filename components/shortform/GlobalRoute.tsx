// 11-11 대표 「글로벌 마케팅 페이지만 새로 한 컨셉으로 적용하자」(로컬 시안)
// 홈은 떠다니는 카드, 인플루언서는 휴대폰 원이라 여기는 겹치지 않게 '동선'으로 간다:
// 현지 앱 네 곳에서 본 브랜드가 점선 길을 따라 한국 지도 앱까지 이어지고, 파란 점 하나가 그 길을 계속 지나간다.
// 글자는 페이지 본문에 이미 있는 이름·문장만 쓴다(새 카피 없음). 움직임은 CSS 만 쓴다.

// [사진, 이름표, 붓칠 색, 글자 색]
const STOPS: [string, string, string, string][] = [
  ["/sf/ex/cosme.webp", "샤오홍슈", "#FF9D8A", "#0A1A33"],
  ["/sf/ex/m-reel.webp", "도우인", "#2A2D34", "#fff"],
  ["/sf/ex/fnb-dessert.webp", "인스타그램", "#FFC3D2", "#0A1A33"],
  ["/sf/ex/m-phone.webp", "LINE", "#FFE27A", "#0A1A33"],
  ["/sf/ex/myeong.webp", "한국 지도 앱", "#0055FF", "#fff"],
]

export default function GlobalRoute() {
  return (
    <div className="gw2-route" aria-hidden="true">
      <p className="gw2-route-cap">
        <span>발견은 현지 앱에서</span>
        <span>방문은 한국 지도 앱에서</span>
      </p>
      <div className="gw2-route-in">
        <svg className="gw2-line" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M40 190 C 180 60, 320 250, 500 150 S 820 60, 960 170" />
        </svg>
        <i className="gw2-dot" />
        {STOPS.map(([img, name, bg, ink], i) => (
          <figure key={name} className={`gw2-stop${i === STOPS.length - 1 ? " on" : ""}`} style={{ "--i": i, "--ub": bg, "--ui": ink } as React.CSSProperties}>
            <img src={img} alt="" width={480} height={640} decoding="async" />
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
