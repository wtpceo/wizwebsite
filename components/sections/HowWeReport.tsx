// 문의 직전에 "무엇을 어떻게 받는지"를 보여주는 구간.
// 상담 신청 폼 위에 두어 '연락하면 영업 전화 오겠지'를 '리포트를 받겠구나'로 바꾼다.
import { Search, Radar, FileText, Wrench } from "lucide-react"

const STEPS = [
  {
    icon: Search,
    step: "1",
    title: "질문 세트를 먼저 만듭니다",
    body: "손님이 실제로 던질 법한 질문을 업종·지역 기준으로 뽑습니다. “OO동 OO 잘하는 곳 추천해줘”처럼 실제 말투 그대로입니다. 여기가 틀리면 뒤 측정이 전부 무의미해집니다.",
  },
  {
    icon: Radar,
    step: "2",
    title: "세 엔진에 반복해서 물어봅니다",
    body: "ChatGPT·제미나이·네이버 AI 브리핑에 같은 질문을 반복 측정하고, 답변에 우리가 나왔는지와 출처로 무엇이 달렸는지까지 기록합니다. 자체 개발한 관제 시스템으로 돌립니다.",
  },
  {
    icon: FileText,
    step: "3",
    title: "주 1회 리포트를 드립니다",
    body: "같은 기준으로 계속 재기 때문에 지난주 대비 무엇이 올라갔고 무엇이 그대로인지를 숫자로 보여드립니다. 좋아진 것만 보내지 않습니다.",
  },
  {
    icon: Wrench,
    step: "4",
    title: "우선순위대로 고칩니다",
    body: "측정에서 드러난 순서대로 홈페이지 구조·콘텐츠·플레이스를 손봅니다. 무엇을 왜 고쳤는지는 다음 리포트에 그대로 남습니다.",
  },
]

const REPORT_ITEMS = [
  "AI 엔진별 인용 점유율과 지난주 대비 증감",
  "우리 대신 추천된 경쟁사",
  "AI가 잘못 안내하는 오정보 목록",
  "채널 간 정보 불일치(비대칭) 점검",
  "이번 주에 실행한 작업과 다음 주 우선순위",
]

export default function HowWeReport() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-bold tracking-wider text-emerald-600">HOW WE WORK</p>
        <h2 className="mt-2 text-2xl font-extrabold leading-snug text-gray-900 md:text-3xl">
          문의하시면 이렇게 진행됩니다
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
          AI 검색은 순위표가 없어서 &ldquo;잘되고 있다&rdquo;는 말로 넘어가기 쉽습니다. 저희는 같은
          기준으로 계속 측정하고, 그 숫자를 <strong className="text-gray-900">주 1회</strong> 그대로
          보여드립니다.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                    {s.step}
                  </span>
                  <Icon className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">주간 리포트에 담기는 것</h3>
            <ul className="mt-4 space-y-2.5">
              {REPORT_ITEMS.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <h3 className="text-base font-extrabold text-gray-900">측정 도구는 직접 만들었습니다</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              엑셀에 손으로 적는 방식으로는 매주 같은 기준을 유지할 수 없어서, AI 답변을 반복 측정하고
              인용 출처를 기록하는 <strong className="text-gray-900">GEO 관제 시스템을 자체 개발해</strong>{" "}
              사내에서 씁니다.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              외부에 판매하지 않습니다. 광고주께는 시스템 계정이 아니라{" "}
              <strong className="text-gray-700">정리된 리포트와 해석</strong>을 드립니다. 도구를 배우실
              필요가 없습니다.
            </p>
          </div>
        </div>

        {/* 증거 — 말로만 하지 않고 실제 발행본을 보여준다 */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h3 className="text-lg font-extrabold text-gray-900">
            저희 회사 것도 똑같이 만듭니다
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            아래는 <strong className="text-gray-900">위즈더플래닝이 저희 자신에게 발행한 실제 주간
            보고서</strong>입니다(2026년 8월 3주차). 광고주께 드리는 것과 같은 양식이고, 숫자도 손대지
            않았습니다. <strong className="text-gray-900">AI 검색을 통한 방문은 3명</strong>이었습니다.
            작다고 빼지 않습니다. 그래야 다음 주에 늘었는지 줄었는지를 말할 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <img
              src="/report/weekly-report-1.jpg"
              alt="위즈더플래닝 AI 검색 노출 주간 보고서 1면: 멘션 노출률 20%, 출처 인용률 22%, 엔진별 상세와 AI 실제 답변"
              className="w-full rounded-xl border border-gray-200"
              loading="lazy"
            />
            <img
              src="/report/weekly-report-2.jpg"
              alt="위즈더플래닝 AI 검색 노출 주간 보고서 2면: 구글 검색 순위 변화, 사이트 진단 점수, 이번 주 작업과 다음 주 계획"
              className="w-full rounded-xl border border-gray-200"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            질문 50개를 세 엔진에 던져 측정한 결과입니다. 업종·지역에 따라 질문 세트와 항목은 달라집니다.
          </p>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-500">
          AI 답변은 같은 질문에도 매번 달라집니다. 그래서 한 번 잘 나온 화면을 캡처해 보내는 대신,
          반복 측정한 값의 변화를 보여드립니다. 측정 방법은{" "}
          <a href="/guide/measure-ai-traffic" className="font-semibold text-emerald-700 underline">
            AI 검색 유입 측정: 4단계로 나눠 세기
          </a>
          에 공개해 두었습니다.
        </p>
      </div>
    </section>
  )
}
