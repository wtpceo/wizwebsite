import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"

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
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 via-white to-purple-50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="space-y-2" variants={fadeIn}>
              <Badge
                className="w-fit bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 hover:from-pink-200 hover:to-purple-200 border-pink-200"
                variant="outline"
              >
                문의하기
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl">
                <span className="hidden md:inline">위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                <span className="block md:hidden">위즈더플래닝의 전문가가<br />귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
              </p>
            </motion.div>
            <motion.div className="space-y-4" variants={staggerContainer}>
              {[
                { icon: <Phone className="h-5 w-5 text-pink-600" />, title: "전화 문의", content: "1670-0704" },
                {
                  icon: <MessageCircle className="h-5 w-5 text-purple-600" />,
                  title: "카카오톡 문의",
                  content: "@위즈더플래닝",
                },
                {
                  icon: <Mail className="h-5 w-5 text-blue-600" />,
                  title: "이메일 문의",
                  content: "wiz@wiztheplanning.com",
                },
              ].map((item, index) => (
                <motion.div key={index} className="flex items-center gap-2" variants={fadeIn}>
                  <div
                    className={`rounded-full ${
                      index === 0 ? "bg-pink-100" : index === 1 ? "bg-purple-100" : "bg-blue-100"
                    } p-2`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p
                      className={`${
                        index === 0 ? "text-pink-600" : index === 1 ? "text-purple-600" : "text-blue-600"
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 