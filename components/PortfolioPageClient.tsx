"use client"

import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function PortfolioPageClient({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 bg-gradient-to-b from-purple-50 via-white to-blue-50">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-8">포트폴리오</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, idx) => (
                <div key={img} className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/portfolio/${img}`}
                      alt={`포트폴리오 이미지 ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 