"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HelpCircle, ChevronRight } from "lucide-react"
import { GENERAL_FAQ } from "@/lib/general-faq-data"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

export default function GeneralFaq() {
  return (
    <section id="general-faq" className="w-full bg-[#f6f8f7] py-24 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            사장님들이 자주 묻는 질문
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            AI 검색 진단을 신청하기 전에 궁금해하시는 내용을 정리했습니다.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {GENERAL_FAQ.map((item, i) => (
            <motion.article
              key={item.question}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-emerald-500/40"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-xl bg-emerald-50 p-2 text-emerald-600">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-600 md:text-base">
            더 궁금한 점이 있으신가요? 무료 진단을 신청하시면 담당 마케터가 직접 답해 드립니다.
          </p>
          <Link href="#apply" className="mt-6 inline-block">
            <Button
              size="lg"
              className="gap-1 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb]"
            >
              무료 AI 검색 진단 신청
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
