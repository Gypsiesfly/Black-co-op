"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  index: number
  className?: string
}

export function AnimatedCard({ children, index, className }: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once we've seen it, no need to observe anymore
          if (cardRef.current) {
            observer.unobserve(cardRef.current)
          }
        }
      },
      {
        // Element is considered visible when 10% of it is in viewport
        threshold: 0.1,
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "opacity-0 translate-y-16 transition-all duration-700",
        isVisible && "opacity-100 translate-y-0",
        className,
      )}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {children}
    </div>
  )
}

