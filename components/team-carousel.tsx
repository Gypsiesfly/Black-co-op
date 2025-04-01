"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TeamMemberCard } from "./team-member-card"

interface TeamMember {
  name: string
  role: string
  description: string
  imageSrc: string
  twitterUrl?: string
  instagramUrl?: string
}

interface TeamCarouselProps {
  teamMembers: TeamMember[]
}

export function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const nextSlide = () => {
    setDirection('right')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  // Create a looped array of team members for continuous scrolling
  const displayMembers = [...teamMembers, ...teamMembers.slice(0, 3)]

  return (
    <div className="relative">
      {/* Carousel content */}
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out gap-2`}
          style={{
            width: `${displayMembers.length * 320}px`,
            transform: `translateX(-${(currentIndex * 320)}px)`,
          }}
        >
          {displayMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex-shrink-0"
              style={{ width: '320px' }}
            >
              <div className="flex justify-center items-center p-2">
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  imageSrc={member.imageSrc}
                  twitterUrl={member.twitterUrl}
                  instagramUrl={member.instagramUrl}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FFCC00] p-2 z-10"
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 19L8 12L15 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFCC00] p-2 z-10"
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5L16 12L9 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
