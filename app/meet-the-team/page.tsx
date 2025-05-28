"use client"

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
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
  }
]

export default function MeetTheTeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Meet the team")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      setupScrollAnimations()
    }
  }, [isLoaded])

  return (
    <div className={`min-h-screen ${passionOne.variable}`}>
      {/* Top yellow bar */}
      <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left animate-bar">
        Want to join the movement?{" "}
        <Link href="/get-involved" className="underline">
          Send us a message
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-black py-3 px-4 md:px-8 flex items-center justify-between relative animate-nav">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/black-co-op-logo.png"
              alt="BLACK CO-OP"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-white font-medium font-passion-one text-[32px] animate-link">
            Home
          </Link>
          <Link href="/our-goal" className="text-white font-medium font-passion-one text-[32px] animate-link">
            Our goal
          </Link>
          <div className="relative">
            <Image
              src="/images/hyperlink-team.png"
              alt=""
              width={180}
              height={50}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
              style={{ width: "100%", height: "auto" }}
            />
            <Link
              href="/meet-the-team"
              className="text-white font-medium px-4 py-1 text-white font-passion-one text-[32px] relative z-10 animate-link"
            >
              Meet the team
            </Link>
          </div>
          <Link href="/research" className="text-white font-medium font-passion-one text-[32px] animate-link">
            Research
          </Link>
          <Link
            href="/get-involved"
            className="font-medium px-4 py-1 rounded-full bg-[#FFCC00] border-2 border-black text-black font-passion-one text-[32px] animate-link"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center animate-button"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } animate-mobile-menu`}
        >
          <div className="p-6 flex flex-col gap-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center self-end animate-button"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex flex-col gap-6 mt-8">
              {[
                { name: "Home", href: "/" },
                { name: "Our goal", href: "/our-goal" },
                { name: "Meet the team", href: "/meet-the-team" },
                { name: "Research", href: "/research" },
                { name: "Get Involved", href: "/get-involved" },
              ].map((item) => (
                <div key={item.name} className="relative w-fit mx-auto animate-mobile-link">
                  {activeLink === item.name && (
                    <Image
                      src={item.name === "Meet the team" ? "/images/hyperlink-team.png" : "/images/hyperlink.png"}
                      alt=""
                      width={item.name === "Meet the team" ? 180 : 100}
                      height={50}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveLink(item.name)
                      setMobileMenuOpen(false)
                    }}
                    className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 ${
                      item.name === "Get Involved"
                        ? "bg-[#FFCC00] text-black rounded-full border-2 border-black"
                        : "text-white"
                    } animate-link`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <section className="relative animate-footer">
        <Image src="/images/footer-bg.png" alt="Footer background" fill className="object-cover" />
        <div className="relative z-10 py-8 sm:py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="px-6 sm:px-12 py-8 sm:py-16">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-16">
                  {/* Left side - Title and button */}
                  <div className="mb-8 md:mb-0 animate-footer-left">
                    <h3 className="font-passion-one font-normal text-[40px] sm:text-[50px] md:text-[70px] leading-tight mb-4 sm:mb-6 text-white animate-title">
                      Want to know <br />
                      our <span className="text-[#FFCC00]">goals?</span>
                    </h3>
                    <Link
                      href="#"
                      className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-passion-one text-[20px] flex items-center justify-center gap-2 w-fit hover:bg-white/10 transition-colors animate-button"
                    >
                      Learn more
                      <div className="relative w-6 h-6">
                        <Image
                          src="/images/arrow-icon.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="w-full h-full invert"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Right side - Logo and social icons */}
                  <div className="flex flex-col items-center animate-footer-right">
                    <div className="mb-4 sm:mb-6 flex flex-col items-center">
                      <div className="bg-[#FFCC00] p-2 sm:p-3 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] flex items-center justify-center mb-1">
                        <Image src="/images/site-icon.png" alt="BLACK CO-OP" width={40} height={40} />
                      </div>
                      <div className="text-[6px] text-white text-center leading-tight animate-text">
                        ADVANCING BLACK-LED
                        <br />
                        COOPERATIVE
                        <br />
                        OWNERSHIP IN LONDON
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-3">
                      <Link
                        href="#"
                        className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-button"
                      >
                        <Image src="/images/x-icon.svg" alt="X" width={20} height={20} />
                      </Link>
                      <Link
                        href="#"
                        className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-button"
                      >
                        <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                      </Link>
                      <Link
                        href="#"
                        className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-button"
                      >
                        <Image src="/images/email-icon.svg" alt="Email" width={20} height={20} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom section with copyright and languages */}
                <div className="border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center animate-footer-bottom">
                  <p className="text-xs text-white animate-text"> 2023 — COPYRIGHT</p>
                  <div className="flex gap-4 text-xs text-white mt-2 md:mt-0">
                    <span>GER</span>
                    <span>SPA</span>
                    <span>SWE</span>
                    <span className="text-[#FFCC00]">ENG</span>
                    <span>RUS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
