"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  BarChart,
  Settings,
  Shield,
  Star,
  MessageSquare,
  ImageIcon,
  PieChart,
  Users,
  Calendar,
  Award,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/sections/ContactSection"

interface DeliveryServiceClientProps {}

export default function DeliveryServiceClient() {
  // ... 기존의 모든 상수와 함수들 ...

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* ... 기존의 모든 JSX ... */}
      </main>
      <Footer />
    </div>
  )
} 