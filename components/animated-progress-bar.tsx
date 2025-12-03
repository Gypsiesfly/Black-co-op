'use client'

import { useEffect, useRef, useState } from "react"

interface AnimatedProgressBarProps {
  percentage: number
  leftLabel: string
  rightLabel: string
}

export default function AnimatedProgressBar({ percentage, leftLabel, rightLabel }: AnimatedProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(element)
          }
        })
      },
      { 
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '50px' // Start animation slightly before element comes into view
      }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [])

  return (
    <div ref={elementRef} className="flex mb-1 bg-black h-[52px]">
      <div
        className={`${
          isVisible ? "animate-grow-width" : "w-0"
        } bg-[#FFCC00] py-2 px-4 text-black font-medium flex items-center overflow-hidden`}
      >
        <span className="font-passion-one text-[25px] truncate">{leftLabel}</span>
        <span className="ml-auto">{percentage}%</span>
      </div>
      <div className="flex-grow bg-black py-2 px-4 text-white font-medium text-center font-passion-one text-[16px] flex items-center justify-center">
        {rightLabel}
      </div>
    </div>
  )
}
