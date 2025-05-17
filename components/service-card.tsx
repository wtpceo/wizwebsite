"use client"

import { Camera, Users, FileText, Smartphone, Printer, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Camera":
        return <Camera className={`h-10 w-10 ${getColorClass("text")}`} />
      case "Users":
        return <Users className={`h-10 w-10 ${getColorClass("text")}`} />
      case "FileText":
        return <FileText className={`h-10 w-10 ${getColorClass("text")}`} />
      case "Smartphone":
        return <Smartphone className={`h-10 w-10 ${getColorClass("text")}`} />
      case "Printer":
        return <Printer className={`h-10 w-10 ${getColorClass("text")}`} />
      case "BarChart":
        return <BarChart className={`h-10 w-10 ${getColorClass("text")}`} />
      default:
        return <FileText className={`h-10 w-10 ${getColorClass("text")}`} />
    }
  }

  const getColorClass = (type: string): string => {
    switch (color) {
      case "purple":
        return type === "text" ? "text-purple-600" : type === "bg" ? "bg-purple-50" : "border-purple-200"
      case "blue":
        return type === "text" ? "text-blue-600" : type === "bg" ? "bg-blue-50" : "border-blue-200"
      case "teal":
        return type === "text" ? "text-teal-600" : type === "bg" ? "bg-teal-50" : "border-teal-200"
      case "pink":
        return type === "text" ? "text-pink-600" : type === "bg" ? "bg-pink-50" : "border-pink-200"
      case "amber":
        return type === "text" ? "text-amber-600" : type === "bg" ? "bg-amber-50" : "border-amber-200"
      case "indigo":
        return type === "text" ? "text-indigo-600" : type === "bg" ? "bg-indigo-50" : "border-indigo-200"
      default:
        return type === "text" ? "text-blue-600" : type === "bg" ? "bg-blue-50" : "border-blue-200"
    }
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        className={`group transition-all hover:shadow-lg hover:shadow-${color}-200/50 ${getColorClass("border")} h-full`}
      >
        <CardHeader className="p-6">
          <motion.div
            className={`mb-3 rounded-full ${getColorClass("bg")} w-16 h-16 flex items-center justify-center`}
            whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            {getIcon()}
          </motion.div>
          <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <CardDescription className="text-base text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
