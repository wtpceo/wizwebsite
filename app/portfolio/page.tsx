import fs from "fs"
import path from "path"
import PortfolioPageClient from "@/components/PortfolioPageClient"

export default function PortfolioPage() {
  const portfolioDir = path.join(process.cwd(), "public/portfolio")
  const files = fs.readdirSync(portfolioDir)
  const images = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))

  return <PortfolioPageClient images={images} />
} 