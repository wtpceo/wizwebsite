import fs from "fs"
import path from "path"
import Image from "next/image"

export default function PortfolioPage() {
  // public/portfolio 폴더의 파일 목록 읽기
  const portfolioDir = path.join(process.cwd(), "public/portfolio")
  const files = fs.readdirSync(portfolioDir)
  const images = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
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
  )
} 