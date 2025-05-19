"use client"

import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import StrategySection from "@/components/sections/StrategySection"
import PricingSection from "@/components/sections/PricingSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StrategySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
