"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ContactSection({ sectionClassName = "", variant = "default" }: { sectionClassName?: string; variant?: "default" | "redOrange" }) {
  const styleMap = {
    default: {
      iconBg: "bg-[#00e5a0]/15 text-[#00e5a0]",
      text: "text-[#00e5a0]",
      button: "bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] shadow-[#00e5a0]/20 hover:shadow-[#00e5a0]/30",
    },
    redOrange: {
      iconBg: "bg-orange-500/15 text-orange-400",
      text: "text-orange-400",
      button: "bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-orange-500/20 hover:shadow-orange-500/30",
    },
  }
  const style = styleMap[variant]
  return (
    <section
      id="contact"
      className={`w-full py-16 md:py-24 lg:py-28 bg-[#070b14] relative overflow-hidden ${sectionClassName}`}
    >
      <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
      <div className="absolute -top-32 left-1/2 h-[400px] w-[640px] -translate-x-1/2 rounded-full bg-[#00e5a0]/[0.06] blur-3xl"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-4" variants={fadeIn}>
            <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
              CONTACT
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-white">
              <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
              <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
            </h2>
            <p className="max-w-[800px] mx-auto text-slate-400 md:text-xl">
              <span className="hidden md:inline">AI 검색 진단부터 실행까지, 전문 마케터가 직접 제안해드립니다.</span>
              <span className="block md:hidden">AI 검색 진단부터 실행까지,<br />전문 마케터가 직접 제안해드립니다.</span>
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="space-y-8" variants={fadeIn}>
              {[
                { icon: <Phone className="h-6 w-6" />, title: "전화 문의", content: "1670-0704" },
                {
                  icon: <MessageCircle className="h-6 w-6" />,
                  title: "카카오톡 문의",
                  content: "@위즈더플래닝마케팅",
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "이메일 문의",
                  content: "wiz@wiztheplanning.com",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-[#00e5a0]/30 hover:bg-white/[0.07]"
                  variants={fadeIn}
                >
                  <div className={`rounded-full ${style.iconBg} p-3`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">{item.title}</p>
                    <p className={`${style.text} text-lg`}>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} className="pt-4">
              <Button
                size="lg"
                className={`w-full ${style.button} transition-all duration-300 hover:shadow-xl text-lg px-8 py-6`}
                onClick={() => window.open("http://pf.kakao.com/_QUTxcb", "_blank")}
              >
                카카오톡 상담 바로가기
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 