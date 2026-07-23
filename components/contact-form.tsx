"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// 유입 경로 — AI 검색 유입 비중을 실제 데이터로 쌓기 위한 항목
const SOURCE_OPTIONS = [
  "ChatGPT·퍼플렉시티 등 AI 추천",
  "구글 검색",
  "네이버 검색",
  "지인 소개",
  "인스타그램·블로그",
  "기타",
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    storeName: "",
    source: "",
    message: "",
  })
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertContent, setAlertContent] = useState({
    title: "",
    description: "",
    isSuccess: true
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // API 라우트 호출하여 이메일 전송
      console.log('폼 데이터 전송 시작:', formData); // 디버깅용
      
      // 절대 경로 사용
      const apiUrl = window.location.origin + '/api/contact';
      console.log('API 요청 URL:', apiUrl);
      
      // 유입 경로는 API 스키마 변경 없이 문의내용 끝에 덧붙여 전달
      const payload = {
        ...formData,
        message: `${formData.message}\n\n─────\n유입 경로: ${formData.source || "미응답"}`,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      // 응답 객체 로깅
      console.log('API 응답 상태:', response.status, response.statusText);
      
      // 응답 타입 확인
      const contentType = response.headers.get('content-type');
      console.log('응답 Content-Type:', contentType);
      
      let result;
      try {
        if (contentType && contentType.includes('application/json')) {
          result = await response.json();
          console.log('API 응답 데이터:', result);
        } else {
          // JSON이 아닌 경우 텍스트로 읽기
          const textResult = await response.text();
          console.error('응답이 JSON이 아님 (첫 100자):', textResult.substring(0, 100));
          throw new Error('서버가 JSON이 아닌 응답을 반환했습니다');
        }
      } catch (jsonError) {
        console.error('응답 처리 오류:', jsonError);
        throw new Error('서버 응답을 처리하는 데 실패했습니다');
      }
      
      if (!response.ok) {
        throw new Error(result?.error || result?.details || '서버 오류가 발생했습니다');
      }

      // 성공 메시지 표시
      setIsSubmitting(false)
      toast({
        title: "상담 신청이 완료되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다.",
      })
      
      // 알림창 표시 (성공)
      setAlertContent({
        title: "상담 신청이 완료되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다. 감사합니다.",
        isSuccess: true
      })
      setAlertOpen(true)
      
      // 폼 초기화
      setFormData({ name: "", phone: "", email: "", storeName: "", source: "", message: "" })
    } catch (error) {
      console.error('문의 제출 오류:', error); // 오류 로깅
      setIsSubmitting(false)
      toast({
        title: "오류가 발생했습니다",
        description: error instanceof Error ? error.message : "다시 시도해주세요.",
        variant: "destructive",
      })
      
      // 알림창 표시 (실패)
      setAlertContent({
        title: "문의 접수 중 오류가 발생했습니다",
        description: "죄송합니다. 전화 (1670-0704)로 문의해 주시면 빠르게 답변 드리겠습니다.",
        isSuccess: false
      })
      setAlertOpen(true)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
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
              className="h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
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
              className="h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
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
              className="h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="source" className="text-sm font-medium text-gray-700">
              저희를 어떻게 알게 되셨나요? <span className="text-gray-400">(선택)</span>
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="">선택</option>
              {SOURCE_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
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
              className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#00e5a0] text-[#070b14] font-bold shadow-lg shadow-[#00e5a0]/25 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/35"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-[#070b14] border-t-transparent rounded-full animate-spin" />
                <span>제출 중...</span>
              </div>
            ) : (
              "무료 상담 신청하기"
            )}
          </Button>
        </form>
        <Toaster />
      </motion.div>
      
      {/* 결과 알림 다이얼로그 */}
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className={alertContent.isSuccess ? "text-emerald-600" : "text-red-600"}>
              {alertContent.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {alertContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              className={alertContent.isSuccess ?
                "bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb]" :
                "bg-[#070b14] text-white font-bold hover:bg-[#101b2e]"
              }
              onClick={() => setAlertOpen(false)}
            >
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
