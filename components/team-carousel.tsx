"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TeamMemberCard } from "./team-member-card"

interface TeamMember {
  name: string
  imageSrc: string
  twitterUrl?: string
  instagramUrl?: string
}

interface TeamCarouselProps {
  members: TeamMember[]
  autoSlideInterval?: number // Time in ms between slides
}

export function TeamCarousel({ members, autoSlideInterval = 3000 }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(5)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Determine how many cards to show based on container width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 768) {
        setVisibleCount(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth < 1280) {
        setVisibleCount(4)
      } else {
        setVisibleCount(5)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused || members.length <= visibleCount) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [currentIndex, visibleCount, isPaused, members.length, autoSlideInterval])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= members.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, members.length - visibleCount) : prev - 1))
  }

  // Get visible members with wrap-around
  const getVisibleMembers = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % members.length
      result.push(members[index])
    }
    return result
  }

  const visibleMembers = getVisibleMembers()

  return (
    <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#FFCC00] w-10 h-10 flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <div ref={containerRef} className="flex justify-center gap-4 overflow-hidden py-4 px-12">
        {visibleMembers.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="transition-all duration-500"
            style={{ transform: `translateX(0)` }}
          >
            <TeamMemberCard
              name={member.name}
              imageSrc={member.imageSrc}
              twitterUrl={member.twitterUrl}
              instagramUrl={member.instagramUrl}
            />
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#FFCC00] w-10 h-10 flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  )
}

