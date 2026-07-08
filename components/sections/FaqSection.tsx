"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/faq-data"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

export default function FaqSection() {
  return (
    <section id="faq" className="w-full bg-white py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            AI 검색 최적화(GEO)와 마케팅 서비스에 대해 사장님들이 가장 많이 묻는 질문들입니다.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-gray-200 bg-white px-6 transition-colors data-[state=open]:border-emerald-500/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold text-gray-900 hover:no-underline md:text-lg [&[data-state=open]>svg]:text-emerald-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600">
            더 궁금한 내용은{" "}
            <Link href="/guide" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
              마케팅 가이드
            </Link>
            에서 확인하거나,{" "}
            <Link href="#contact" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
              무료 상담
            </Link>
            으로 물어보세요.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
