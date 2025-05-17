"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

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

  return (
    <motion.div
      className="rounded-xl border border-gray-200 overflow-x-auto bg-white/90 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{ minWidth: 360 }}
    >
      <Table className="min-w-[700px]">
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-teal-100 via-white to-amber-100 border-b-2 border-teal-200">
            <TableHead className="w-[220px] text-lg text-gray-900 font-bold tracking-tight py-4 px-6 border-r border-gray-200">서비스</TableHead>
            <TableHead className="text-lg text-gray-800 font-bold py-4 px-6 border-r border-gray-200">재능마켓</TableHead>
            <TableHead className="text-lg font-bold py-4 px-6 bg-gradient-to-r from-teal-200/40 to-amber-100/40 text-teal-900">위즈더플래닝</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              service: "전문 사진 촬영",
              competitor: { price: "30만원", note: "(1회 촬영)" },
              wiz: { price: "8만원~15만원", note: "전문 장비 및 보정 포함", highlight: true, available: true },
            },
            {
              service: "체험단 운영",
              competitor: { price: "15만원", note: "(월 모집)" },
              wiz: { price: "5만원~10만원", note: "모집부터 관리까지 올인원", highlight: true, available: true },
            },
            {
              service: "콘텐츠 제작",
              competitor: { price: "2만원~5만원", note: "(1건)" },
              wiz: { price: "3만원~8만원", note: "SEO 최적화 포함", highlight: true, available: true },
            },
            {
              service: "배달앱 관리",
              competitor: { price: "15만원~30만원", note: "(월)" },
              wiz: { price: "월 15만원~30만원", available: true },
            },
            {
              service: "인쇄물 제작",
              competitor: { price: "5만원~", note: "(디자인만)" },
              wiz: { price: "8만원~", note: "디자인+인쇄 일괄 제공", highlight: true, available: true },
            },
            {
              service: "통합 패키지",
              competitor: { price: "80만원~90만원", note: "(월 비용)" },
              wiz: { price: "월 30만원~", note: "모든 서비스 포함", available: true },
            },
            {
              service: "전담 매니저",
              competitor: { price: "350만원", note: "(월 비용)" },
              wiz: { available: true, note: "전담 매니저 배정" },
            },
          ].map((row, i) => (
            <motion.tr
              key={i}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`transition hover:bg-teal-50/40 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <TableCell className="font-semibold text-gray-900 py-4 px-6 border-r border-gray-100">{row.service}</TableCell>
              <TableCell className="py-4 px-6 border-r border-gray-100">
                {row.competitor.available === false ? (
                  <div className="flex items-center gap-2 text-gray-400">
                    <XCircle className="h-5 w-5 text-red-400" />
                    <span>제공 안함</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <span className="text-base text-gray-700">{row.competitor.price}</span>
                    {row.competitor.note && <span className="text-xs text-gray-500">{row.competitor.note}</span>}
                  </div>
                )}
              </TableCell>
              <TableCell className="py-4 px-6">
                {row.wiz.available === false ? (
                  <div className="flex items-center gap-2 text-gray-400">
                    <XCircle className="h-5 w-5 text-red-400" />
                    <span>제공 안함</span>
                  </div>
                ) : (
                  row.wiz.price || row.wiz.note ? (
                    <div className={`flex flex-col gap-1 ${row.wiz.highlight ? "bg-teal-100/60 rounded-lg px-2 py-1" : ""}`}>
                      {row.wiz.price && <span className={`text-base font-semibold ${row.wiz.highlight ? "text-teal-800" : "text-gray-800"}`}>{row.wiz.price}</span>}
                      {row.wiz.note && (
                        <span className={`text-xs ${row.wiz.highlight ? "text-teal-700" : "text-gray-600"}`}>{row.wiz.note}</span>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal-500" />
                      <span className="text-base text-gray-800 font-semibold">{row.wiz.note}</span>
                    </div>
                  )
                )}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  )
}
