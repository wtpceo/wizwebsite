import Link from "next/link"
import { SERVICES, SOLUTIONS, CHAPTERS, CONTACT } from "./content"
import { Icon } from "./icons"

// 홈(숏폼형)과 새 쪽(서비스·업종별·전문 인력·회사소개)이 같이 쓰는 머리글·메뉴·바닥글·아래 바.
// home = 장 막대와 「NN / 46」이 붙고 컷 바탕색을 따라 글자색이 바뀐다. doc = 흰 바탕 고정 머리글.

export function SfHeader({ home = false }: { home?: boolean }) {
  return (
    <header className={`sfh${home ? "" : " sfh-doc"}`} id="sfh" data-tone={home ? "c" : "w"}>
      <Link className="sfh-logo" href="/" aria-label="위즈더플래닝 홈">
        <img src="/sf/img/wiz-symbol.png" alt="" width={733} height={460} />
        <b>WIZ THE PLANNING</b>
      </Link>
      <nav className="sfh-nav" aria-label="주 메뉴">
        <Link href="/about">회사소개</Link>
        <div className="sfh-dd">
          <Link href="/services/search">서비스</Link>
          <div className="sfh-ddp">
            {SERVICES.map((s) => (
              <Link key={s.k} href={`/services/${s.slug}`}>
                <Icon k={s.k} />
                {s.n}
              </Link>
            ))}
          </div>
        </div>
        <div className="sfh-dd">
          <Link href="/solutions/local">업종별 솔루션</Link>
          <div className="sfh-ddp">
            {SOLUTIONS.map((f) => (
              <Link key={f.slug} href={`/solutions/${f.slug}`}>
                {f.n}
                <small>{f.who}</small>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/team">전문 인력</Link>
        <Link href="/guide">인사이트</Link>
        <a href={home ? "#c44" : "/#c44"}>문의하기</a>
      </nav>
      <a className="sfh-cta" href={home ? "#c44" : "/#c44"}>
        무료 진단 신청
      </a>
      <button type="button" className="sfh-menu" id="sfhMenu" aria-expanded="false" aria-controls="sfm">
        <Icon k="menu" />
        <span className="sr">메뉴 열기</span>
      </button>
      {home ? (
        <>
          <nav className="sfp" id="sfp" aria-label="장 이동">
            {CHAPTERS.map((c, i) => (
              <a key={c.id} href={`#${c.id}`} data-chap={i} title={c.n}>
                <i />
                <span className="sr">{c.n}</span>
              </a>
            ))}
          </nav>
          <p className="sfc" aria-hidden="true">
            <b id="sfcNo">01</b> / 45 <span id="sfcCh">{CHAPTERS[0].n}</span>
          </p>
          {/* 자동 재생(11-05) — 홈이 숏폼처럼 저절로 넘어감 · 휠·터치·키를 쓰면 멈춤 · sf.js 가 보이게 함 */}
          <button type="button" className="sfa" id="sfa" hidden>
            <i aria-hidden="true" />
            <span>자동 재생</span>
          </button>
          <span className="sr" id="sfaLive" role="status" aria-live="polite" />
        </>
      ) : null}
    </header>
  )
}

export function SfMenu({ home = false }: { home?: boolean }) {
  return (
    <div className="sfm" id="sfm" hidden>
      <div className="sfm-in">
        <button type="button" className="sfm-x" id="sfmX" aria-label="메뉴 닫기">
          <Icon k="close" />
        </button>
        <p className="sfm-h">회사소개</p>
        <Link href="/about">위즈더플래닝 소개</Link>
        <Link href="/team">전문 인력 · 진행 과정</Link>
        <p className="sfm-h">서비스</p>
        <div className="sfm-g">
          {SERVICES.map((s) => (
            <Link key={s.k} href={`/services/${s.slug}`}>
              {s.n}
            </Link>
          ))}
        </div>
        <p className="sfm-h">업종별 솔루션</p>
        {SOLUTIONS.map((f) => (
          <Link key={f.slug} href={`/solutions/${f.slug}`}>
            {f.n}
          </Link>
        ))}
        <p className="sfm-h">인사이트 · 문의</p>
        <Link href="/guide">마케팅 칼럼</Link>
        <a href={home ? "#c44" : "/#c44"}>무료 마케팅 진단</a>
        <Link href="/business/contact">기업 제안 요청</Link>
      </div>
    </div>
  )
}

export function SfFooter() {
  return (
    <footer className="sff" id="sff">
      <div className="sff-in">
        <div className="sff-call">
          <p>대표전화 · {CONTACT.hours}</p>
          <a href={CONTACT.telHref} data-tel>
            {CONTACT.tel}
          </a>
        </div>
        <nav className="sff-nav" aria-label="전체 메뉴">
          <div>
            <p>회사소개</p>
            <Link href="/about">위즈더플래닝 소개</Link>
            <Link href="/team">전문 인력</Link>
            <Link href="/team#process">진행 과정</Link>
          </div>
          <div>
            <p>서비스</p>
            {SERVICES.map((s) => (
              <Link key={s.k} href={`/services/${s.slug}`}>
                {s.n}
              </Link>
            ))}
          </div>
          <div>
            <p>업종별 솔루션</p>
            {SOLUTIONS.map((f) => (
              <Link key={f.slug} href={`/solutions/${f.slug}`}>
                {f.n}
              </Link>
            ))}
          </div>
          <div>
            <p>인사이트</p>
            <Link href="/guide">마케팅 칼럼</Link>
            <Link href="/business/insights">기업 마케팅 인사이트</Link>
            <Link href="/theater">위즈 극장</Link>
            <Link href="/how-we-measure">측정 방식</Link>
          </div>
          <div>
            <p>문의하기</p>
            <a href="/#c44">무료 마케팅 진단</a>
            <Link href="/business/contact">기업 제안 요청</Link>
            <Link href="/medical-diagnosis">병원 무료 AI 검색 진단</Link>
          </div>
          <div>
            <p>Language</p>
            <Link href="/en">English</Link>
            <Link href="/zh">中文</Link>
            <Link href="/vi">Tiếng Việt</Link>
          </div>
        </nav>
        <div className="sff-biz">
          <p>
            <b>위즈더플래닝</b> · 대표 정현우 · 사업자등록번호 668-81-00391{" "}
            <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6688100391" target="_blank" rel="noopener noreferrer">
              사업자정보확인
            </a>
          </p>
          <p>서울시 금천구 디지털로 178 퍼블릭가산 A동 2518호·2519호 · {CONTACT.email} · 개인정보관리책임자 김민우</p>
          <p>평일 10:00–18:00 · 점심시간 12:15–13:30 · 주말 및 공휴일 휴무</p>
          <p className="sff-legal">
            <Link href="/terms">이용약관</Link>
            <Link href="/privacy">개인정보처리방침</Link>
            <span>© 2026 위즈더플래닝</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export function SfDock({ home = false }: { home?: boolean }) {
  return (
    <>
      <a className="sfs" id="sfs" href={home ? "#c44" : "#contact"}>
        문의 칸으로
        <Icon k="arrow" />
      </a>
      <nav className="sfb" aria-label="바로 연락">
        <a href={CONTACT.telHref} data-tel>
          <Icon k="phone" />
          전화
        </a>
        <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
          <Icon k="chat" />
          카카오톡
        </a>
        <a href={home ? "#c44" : "#contact"} className="sfb-p">
          무료 진단 신청
        </a>
      </nav>
    </>
  )
}
