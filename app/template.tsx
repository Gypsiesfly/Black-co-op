"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if this is the first visit to the site in this session
    const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore")

    if (!hasVisitedBefore) {
      // If first visit, show loader
      setLoading(true)

      // Set flag in sessionStorage
      sessionStorage.setItem("hasVisitedBefore", "true")

      // Hide loader after 2 seconds
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 font-passion-one">
        <div className="w-full max-w-xs px-4 text-center">
          {/* Logo */}
          <div className="mb-16 flex justify-center">
            <Image
              src="/images/black-co-op-logo.png"
              alt="BLACK CO-OP"
              width={180}
              height={45}
              className="h-auto w-auto"
            />
          </div>

          {/* Loading bar */}
          <div className="w-full bg-white h-1 rounded-none overflow-hidden">
            <div className="bg-[#FFCC00] h-full w-1/2 rounded-none animate-loading-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

