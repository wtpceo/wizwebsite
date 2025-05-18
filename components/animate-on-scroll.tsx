"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom-in"
  delay?: number
  className?: string
}

const animations = {
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
}

export function AnimateOnScroll({ children, animation = "fade-in", delay = 0, className }: AnimateOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={animations[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 