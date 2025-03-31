'use client'

import { useEffect, useState } from "react"

interface AnimatedProgressBarProps {
  percentage: number
  leftLabel: string
  rightLabel: string
}

export default function AnimatedProgressBar({ percentage, leftLabel, rightLabel }: AnimatedProgressBarProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Start animation after mounting
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex mb-1 bg-black h-[52px]">
      <div
        className={`${
          isVisible ? "animate-grow-width" : "w-0"
        } bg-[#FFCC00] py-2 px-4 text-black font-medium flex items-center overflow-hidden`}
        style={{ width: `${percentage}%` }}
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
