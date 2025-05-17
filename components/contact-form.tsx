"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현에서는 여기에 폼 제출 로직 추가

    // 성공 메시지 표시 (데모용)
    setTimeout(() => {
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      })
      setIsSubmitting(false)
      // 폼 리셋 로직 추가
    }, 1000)
  }

  const formFields = [
    { id: "name", label: "이름 *", type: "text", placeholder: "이름을 입력하세요", required: true },
    { id: "business", label: "업체명 *", type: "text", placeholder: "업체명을 입력하세요", required: true },
    { id: "phone", label: "연락처 *", type: "text", placeholder: "연락 가능한 번호를 입력하세요", required: true },
    { id: "email", label: "이메일", type: "email", placeholder: "이메일을 입력하세요", required: false },
  ]

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full space-y-4 rounded-lg border border-gray-100 p-6 bg-white shadow-lg shadow-purple-100/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {formFields.map((field, index) => (
        <motion.div
          key={field.id}
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Label htmlFor={field.id} className="text-gray-800">
            {field.label}
          </Label>
          <Input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className={`border-gray-200 focus:border-${index % 3 === 0 ? "purple" : index % 3 === 1 ? "blue" : "teal"}-400 focus:ring-${index % 3 === 0 ? "purple" : index % 3 === 1 ? "blue" : "teal"}-400`}
          />
        </motion.div>
      ))}

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Label htmlFor="service" className="text-gray-800">
          관심 서비스 *
        </Label>
        <Select>
          <SelectTrigger id="service" className="border-gray-200 focus:ring-purple-400">
            <SelectValue placeholder="관심 있는 서비스를 선택하세요" />
          </SelectTrigger>
          <SelectContent className="border-gray-100">
            <SelectItem value="photo">전문 사진 촬영</SelectItem>
            <SelectItem value="experience">체험단 운영</SelectItem>
            <SelectItem value="content">콘텐츠 제작</SelectItem>
            <SelectItem value="delivery">배달앱 관리</SelectItem>
            <SelectItem value="print">인쇄물 제작</SelectItem>
            <SelectItem value="ad">네이버 마케팅</SelectItem>
            <SelectItem value="all-package">통합 패키지</SelectItem>
            <SelectItem value="homepage">홈페이지 제작</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Label htmlFor="message" className="text-gray-800">
          문의 내용
        </Label>
        <Textarea
          id="message"
          placeholder="문의 내용을 입력하세요"
          rows={4}
          className="border-gray-200 focus:border-purple-400 focus:ring-purple-400"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "제출 중..." : "문의하기"}
        </Button>
      </motion.div>
    </motion.form>
  )
}
