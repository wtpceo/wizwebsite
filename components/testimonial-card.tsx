"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  business: string
  content: string
  rating: number
  color: string
}

export default function TestimonialCard({ name, business, content, rating, color }: TestimonialCardProps) {
  const getColorClass = (type: string): string => {
    switch (color) {
      case "purple":
        return type === "text"
          ? "text-purple-600"
          : type === "bg"
            ? "bg-purple-50"
            : type === "fill"
              ? "fill-purple-500"
              : "border-purple-200"
      case "blue":
        return type === "text"
          ? "text-blue-600"
          : type === "bg"
            ? "bg-blue-50"
            : type === "fill"
              ? "fill-blue-500"
              : "border-blue-200"
      case "teal":
        return type === "text"
          ? "text-teal-600"
          : type === "bg"
            ? "bg-teal-50"
            : type === "fill"
              ? "fill-teal-500"
              : "border-teal-200"
      case "pink":
        return type === "text"
          ? "text-pink-600"
          : type === "bg"
            ? "bg-pink-50"
            : type === "fill"
              ? "fill-pink-500"
              : "border-pink-200"
      case "amber":
        return type === "text"
          ? "text-amber-600"
          : type === "bg"
            ? "bg-amber-50"
            : type === "fill"
              ? "fill-amber-500"
              : "border-amber-200"
      case "indigo":
        return type === "text"
          ? "text-indigo-600"
          : type === "bg"
            ? "bg-indigo-50"
            : type === "fill"
              ? "fill-indigo-500"
              : "border-indigo-200"
      default:
        return type === "text"
          ? "text-blue-600"
          : type === "bg"
            ? "bg-blue-50"
            : type === "fill"
              ? "fill-blue-500"
              : "border-blue-200"
    }
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        className={`h-full ${getColorClass("border")} bg-gradient-to-b from-white to-${color}-50/30 hover:shadow-lg hover:shadow-${color}-200/50 transition-all duration-300`}
      >
        <CardHeader className="pb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? `${getColorClass("text")} ${getColorClass("fill")}` : "text-gray-200"}`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-base text-gray-700">{content}</p>
        </CardContent>
        <CardFooter>
          <div>
            <p className="font-medium text-gray-800">{name}</p>
            <p className={`text-sm ${getColorClass("text")}`}>{business}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
