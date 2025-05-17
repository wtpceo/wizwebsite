"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">위즈더플래닝</h3>
            <p className="text-gray-400 text-sm">
              배달앱 운영의 새로운 패러다임을 제시합니다.
              <br />
              전문가와 함께 성장하세요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              {[
                { name: "배달앱 운영", href: "/delivery-service" },
                { name: "마케팅 전략", href: "/marketing-strategy" },
                { name: "브랜딩", href: "/branding" },
                { name: "웹사이트 제작", href: "/web-development" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              {[
                { name: "회사 소개", href: "/about" },
                { name: "포트폴리오", href: "/portfolio" },
                { name: "블로그", href: "/blog" },
                { name: "채용", href: "/careers" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">문의</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">서울특별시 강남구 테헤란로 123</li>
              <li className="text-gray-400 text-sm">대표전화: 02-1234-5678</li>
              <li className="text-gray-400 text-sm">이메일: contact@wiztheplanning.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 위즈더플래닝. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["이용약관", "개인정보처리방침", "사이트맵"].map((item) => (
                <Link key={item} href="#" className="text-gray-400 hover:text-white text-sm">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 