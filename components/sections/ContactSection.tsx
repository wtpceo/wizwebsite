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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-4" variants={fadeIn}>
            <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm text-white shadow-lg shadow-purple-500/20">
              문의하기
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500">
              <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
              <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
            </h2>
            <p className="max-w-[800px] mx-auto text-gray-600 md:text-xl">
              <span className="hidden md:inline">위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
              <span className="block md:hidden">위즈더플래닝의 전문가가<br />귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
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
                  content: "@위즈더플래닝",
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "이메일 문의",
                  content: "wiz@wiztheplanning.com",
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-6 rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl" 
                  variants={fadeIn}
                >
                  <div className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-white shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">{item.title}</p>
                    <p className="text-purple-600 text-lg">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} className="pt-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 text-lg px-8 py-6"
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
            <div className="w-full max-w-md mx-auto bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 