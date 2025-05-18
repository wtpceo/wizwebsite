"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    storeName: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 실제 폼 제출 로직 (여기서는 예시로 타임아웃 사용)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "상담 신청이 완료되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다.",
      })
      setFormData({ name: "", phone: "", storeName: "", message: "" })
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            이름
          </label>
          <Input
            id="name"
            name="name"
            placeholder="홍길동"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            연락처
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="010-0000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
            className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="storeName" className="text-sm font-medium text-gray-700">
            가게명
          </label>
          <Input
            id="storeName"
            name="storeName"
            placeholder="가게 이름을 입력해주세요"
            value={formData.storeName}
            onChange={handleChange}
            required
            className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            문의사항
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="문의하실 내용을 자유롭게 작성해주세요"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>제출 중...</span>
            </div>
          ) : (
            "무료 상담 신청하기"
          )}
        </Button>
      </form>
      <Toaster />
    </motion.div>
  )
}
