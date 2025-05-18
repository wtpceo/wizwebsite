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
      className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-purple-50 via-white to-blue-50"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-4" variants={fadeIn}>
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 border-purple-200"
              variant="outline"
            >
              문의하기
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
              <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
            </h2>
            <p className="max-w-[800px] mx-auto text-gray-700 md:text-xl">
              <span className="hidden md:inline">위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
              <span className="block md:hidden">위즈더플래닝의 전문가가<br />귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="space-y-6" variants={fadeIn}>
              {[
                { icon: <Phone className="h-6 w-6 text-purple-600" />, title: "전화 문의", content: "1670-0704" },
                {
                  icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
                  title: "카카오톡 문의",
                  content: "@위즈더플래닝",
                },
                {
                  icon: <Mail className="h-6 w-6 text-purple-600" />,
                  title: "이메일 문의",
                  content: "wiz@wiztheplanning.com",
                },
              ].map((item, index) => (
                <motion.div key={index} className="flex items-center gap-4" variants={fadeIn}>
                  <div
                    className={`rounded-full ${
                      index === 0 ? "bg-purple-100" : index === 1 ? "bg-blue-100" : "bg-purple-100"
                    } p-3`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-lg">{item.title}</p>
                    <p
                      className={`${
                        index === 0 ? "text-purple-600" : index === 1 ? "text-blue-600" : "text-purple-600"
                      } text-lg`}
                    >
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} className="pt-4">
              <Button
                size="lg"
                className="gap-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 text-lg px-8 py-6"
              >
                카카오톡 상담 바로가기
                <ChevronRight className="h-5 w-5" />
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
            <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 