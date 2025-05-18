"use client"

import { useInView } from "@/app/hooks/useInView"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
} 