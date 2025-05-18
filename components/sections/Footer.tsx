"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-b from-purple-50 to-blue-50/50 border-purple-100">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-700 md:text-left">
          © 2024 위즈더플래닝. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["이용약관", "개인정보처리방침", "회사소개"].map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`text-sm ${
                index === 0
                  ? "text-purple-600 hover:text-purple-800"
                  : index === 1
                    ? "text-blue-600 hover:text-blue-800"
                    : "text-teal-600 hover:text-teal-800"
              } transition-colors hover:underline`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
} 