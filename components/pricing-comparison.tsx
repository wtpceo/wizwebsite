"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function PricingComparison() {
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  // 블라인드 버튼 렌더링 함수
  const BlindButton = () => (
    <motion.button
      className="relative px-10 py-6 rounded-2xl bg-[#00e5a0] text-[#070b14] font-extrabold text-2xl shadow-2xl focus:outline-none hover:bg-[#3cf0bb] transition-colors"
      animate={{
        scale: [1, 1.06, 1],
        boxShadow: [
          "0 0 0px rgba(0,229,160,0)",
          "0 0 36px rgba(0,229,160,0.45)",
          "0 0 0px rgba(0,229,160,0)"
        ]
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }}
      type="button"
      style={{ minWidth: 260 }}
    >
      <span className="block">상상도 못할 가격</span>
      <span className="block text-base mt-2 font-bold text-[#070b14]/70 animate-pulse">궁금하면 클릭!</span>
    </motion.button>
  )

  // 가격 데이터
  const rows = [
    {
      service: "전문 사진 촬영",
      competitor: { price: "30만원", note: "(1회 촬영)" },
    },
    {
      service: "체험단 운영",
      competitor: { price: "15만원", note: "(월 모집)" },
    },
    {
      service: "콘텐츠 제작",
      competitor: { price: "2만원~5만원", note: "(1건)" },
    },
    {
      service: "배달앱 관리",
      competitor: { price: "15만원~30만원", note: "(월)" },
    },
    {
      service: "인쇄물 제작",
      competitor: { price: "5만원~", note: "(디자인만)" },
    },
    {
      service: "통합 패키지",
      competitor: { price: "80만원~90만원", note: "(월 비용)" },
    },
    {
      service: "전담 매니저",
      competitor: { price: "350만원", note: "(월 비용)" },
    },
  ]

  return (
    <div className="overflow-x-auto">
      <motion.div
        className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl min-w-[360px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ minWidth: 360 }}
      >
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow className="bg-[#f6f8f7] border-b border-gray-200 hover:bg-[#f6f8f7]">
              <TableHead className="w-[220px] text-lg text-gray-900 font-extrabold tracking-tight py-4 px-6 border-r border-gray-200">서비스</TableHead>
              <TableHead className="text-lg text-gray-500 font-bold py-4 px-6 border-r border-gray-200">재능마켓</TableHead>
              <TableHead className="text-lg font-extrabold py-4 px-6 bg-[#0b1220] text-white text-center">
                위즈더플래닝<span className="text-[#00e5a0]">.</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`transition hover:bg-emerald-50/40 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
              >
                <TableCell className="font-semibold text-gray-900 py-4 px-6 border-r border-gray-100">{row.service}</TableCell>
                <TableCell className="py-4 px-6 border-r border-gray-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-base text-gray-700">{row.competitor.price}</span>
                    {row.competitor.note && <span className="text-xs text-gray-500">{row.competitor.note}</span>}
                  </div>
                </TableCell>
                {i === 0 && (
                  <TableCell
                    className="py-4 px-6 text-center align-middle bg-[#0b1220]"
                    rowSpan={rows.length}
                    style={{ verticalAlign: "middle" }}
                  >
                    <div className="geo-grid-bg flex flex-col items-center justify-center h-full min-h-[400px] rounded-xl">
                      <BlindButton />
                    </div>
                  </TableCell>
                )}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
      <div className="block md:hidden text-sm text-emerald-600 font-semibold text-center mt-3">← 옆으로 밀어보세요</div>
    </div>
  )
}
