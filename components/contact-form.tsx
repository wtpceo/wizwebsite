"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

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
    <>
      <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md mx-auto">
        <Input
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white/10 border-white/20 placeholder:text-white/70 text-white h-12"
        />
        <Input
          type="tel"
          name="phone"
          placeholder="연락처"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-white/10 border-white/20 placeholder:text-white/70 text-white h-12"
        />
        <Input
          name="storeName"
          placeholder="가게명"
          value={formData.storeName}
          onChange={handleChange}
          required
          className="bg-white/10 border-white/20 placeholder:text-white/70 text-white h-12"
        />
        <Textarea
          name="message"
          placeholder="문의사항 (선택사항)"
          value={formData.message}
          onChange={handleChange}
          className="bg-white/10 border-white/20 placeholder:text-white/70 text-white"
          rows={3}
        />
        <Button
          type="submit"
          className="w-full bg-white text-rose-600 hover:bg-white/90 font-medium h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? "제출 중..." : "무료 진단 신청하기"}
        </Button>
      </form>
      <Toaster />
    </>
  )
}
