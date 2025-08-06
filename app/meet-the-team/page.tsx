"use client"

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { setupScrollAnimations } from "@/utils/scrollAnimation"
import { TeamCarousel } from "@/components/team-carousel"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

// Team member data
const founders = [
  {
    name: "Ken",
    role: "Entrepreneur",
    description: "A visionary entrepreneur with extensive experience in launching and scaling businesses. Ken is passionate about creating sustainable economic opportunities for Black communities through cooperative models.",
    imageSrc: "/images/team-members/avatar.png"
  },
  {
    name: "Eyinnaya",
    role: "Research & Campaigns Expert",
    description: "With a PhD in Built Environment, Eyinnaya brings a wealth of expertise in research, campaigns, and advocacy. His work focuses on dismantling systemic barriers and promoting equitable urban development.",
    imageSrc: "/images/team-members/avatar.png"
  },
  {
    name: "Sophia",
    role: "Professor & Policy Expert",
    description: "A distinguished professor and policy expert with years of experience in cooperative development. Having previously owned a successful cooperative, Sophia offers invaluable insights into policy frameworks and sustainable cooperative models.",
    imageSrc: "/images/team-members/avatar.png"
  },
  {
    name: "Chino",
    role: "Pharmacist & Community Health Advocate",
    description: "A dedicated pharmacist aiming to establish a chain of pharmacies within Black communities. Chino's vision is to improve health access and promote cooperative ownership within the healthcare sector.",
    imageSrc: "/images/team-members/avatar.png"
  },
  {
    name: "Dr. Christopher Adrian Johnson",
    role: "Journalist, Editor & Business Management Consultant",
    description: "An award-winning journalist, editor, and business management consultant with over 40 years of experience. He holds an MBA in Marketing Management and a Doctorate in Business Management.",
    imageSrc: "/images/team-members/avatar.png"
  }
]

export default function MeetTheTeamPage() {
  useEffect(() => {
    setupScrollAnimations()
  }, [])

  return (
    <div className={`min-h-screen ${passionOne.variable}`}>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 animate-hero">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Text Content - Will be on top for mobile/tablet */}
            <div className="w-full lg:w-1/2 lg:ml-22 order-1 lg:order-1 animate-text-content">
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6 animate-title">
                Meet the team
                <br />
                behind
                <br />
                the movement
              </h1>
              <p className="text-base md:text-lg max-w-xl animate-text">
                These are the visionary founders and dedicated members who played a crucial role in shaping and
                contributing to the movement, each bringing their unique skills and perspectives to the table. Their
                collective efforts have not only propelled the initiative forward but have also fostered a vibrant
                community that thrives on collaboration and innovation.
              </p>
            </div>

            {/* Image - Will be below text for mobile/tablet */}
            <div className="w-full lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0 animate-image">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/team-meeting-illustration.png"
                  alt="Team meeting around a yellow-lit table"
                  fill
                  className="object-contain animate-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 animate-founders">
        <div className="container mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-[#FFCC00] px-8 py-4 animate-title">
              <h2 className="font-passion-one text-4xl">• Founders</h2>
            </div>
          </div>

          <TeamCarousel teamMembers={founders} />
        </div>
      </section>

    </div>
  )
}
