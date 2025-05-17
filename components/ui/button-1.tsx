"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  width?: string
  height?: string
  disabled?: boolean
  className?: string
}

const GradientButton = ({
  children,
  onClick,
  width = "200px",
  height = "50px",
  disabled = false,
  className,
}: GradientButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden rounded-lg font-medium text-white transition-all duration-300",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </motion.button>
  )
}

export default GradientButton 