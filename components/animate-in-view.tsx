"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

type AnimationVariant = "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scale"

interface AnimateInViewProps {
  children: ReactNode
  animation?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  fadeIn: { opacity: 1, y: 0 },
  slideUp: { opacity: 1, y: 0 },
  slideRight: { opacity: 1, x: 0 },
  slideLeft: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
}

const getInitialState = (animation: AnimationVariant) => {
  switch (animation) {
    case "fadeIn": return { opacity: 0, y: 0 }
    case "slideUp": return { opacity: 0, y: 50 }
    case "slideRight": return { opacity: 0, x: -50 }
    case "slideLeft": return { opacity: 0, x: 50 }
    case "scale": return { opacity: 0, scale: 0.8 }
    default: return { opacity: 0, y: 20 }
  }
}

export function AnimateInView({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
}: AnimateInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial={getInitialState(animation)}
      animate={isInView ? animation : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStagger({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
}: Omit<AnimateInViewProps, "animation"> & { staggerDelay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
  duration = 0.5,
}: { children: ReactNode; className?: string; duration?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 