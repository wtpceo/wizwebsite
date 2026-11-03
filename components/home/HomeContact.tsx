import s from "./home.module.css"
import HomeContactForm from "./HomeContactForm"

// 문의: 작업 사진이 천천히 흐르는 띠 + 상담 폼. 띠는 같은 목록을 두 벌 이어 붙여 -50%까지 흘린다.
// 첫 벌은 바로 받고 둘째 벌은 lazy. 움직임 줄이기 설정이면 CSS에서 멈춘다
const PICS = ["strip-1", "hp01-pc", "strip-2", "hp03-pc", "strip-3", "hp05-pc", "strip-4", "hp06-pc", "strip-5", "hp11-pc", "hp13-pc", "hp15-pc"]
// 숏폼 사진은 3:4, 홈페이지 캡처는 3:2와 1:1을 번갈아(프로토타입 규칙)
const shapeFor = (file: string, i: number) => (file.startsWith("strip") ? s.w34 : i % 2 === 0 ? s.w32 : s.w11)

export default function HomeContact() {
  const reel = [...PICS, ...PICS]
  return (
    <section className={s.contact} id="contact" aria-labelledby="h-contact">
      <div className={s.marquee} aria-hidden="true">
        {reel.map((file, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={`/home/${file}.jpg`}
            alt=""
            className={shapeFor(file, i)}
            loading={i < PICS.length ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
      <div className={s.inner}>
        <h2 id="h-contact" className={s.rise} data-reveal="">
          광고 상담 받기
        </h2>
        <HomeContactForm />
      </div>
    </section>
  )
}
