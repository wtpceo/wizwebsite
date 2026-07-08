"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  business: string
  content: string
  rating: number
  color?: string
}

export default function TestimonialCard({ name, business, content, rating }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="h-full rounded-2xl border-gray-200 bg-white transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]">
        <CardHeader className="pb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "text-emerald-500 fill-emerald-500" : "text-gray-200"}`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-base text-gray-700">{content}</p>
        </CardContent>
        <CardFooter>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-sm text-emerald-600">{business}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
