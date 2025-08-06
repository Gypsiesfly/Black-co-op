'use client'

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import AnimatedProgressBar from "@/components/animated-progress-bar"
import { WaveDecoration } from "@/components/wave-decoration"
import { KnowMoreButton } from "@/components/know-more-button"
import { AnimatedCard } from "@/components/animated-card"
import { WaveDecorationSimple } from "@/components/wave-decoration-simple"
import { LearnMoreButton } from "@/components/learn-more-button"
import { useState, useEffect } from "react"

interface MainContentProps {
  activeSubmenu?: string;
}

export default function MainContent({ activeSubmenu }: MainContentProps) {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(activeSubmenu === 'vacancies')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left">
          Want to join the movement?{" "}
          <Link href="/get-involved" className="underline">
            Send us a message
          </Link>
        </div>
        <nav className="bg-black py-3 px-4 md:px-8 flex items-center justify-between relative">
          <div className="flex items-center">
            <Image src="/images/black-co-op-logo.png" alt="BLACK CO-OP" width={120} height={30} className="h-8 w-auto" />
          </div>
        </nav>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Top yellow bar */}
      <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left">
        Want to join the movement?{" "}
        <Link href="/get-involved" className="underline">
          Send us a message
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-black py-3 px-4 md:px-8 flex items-center justify-between relative">
        <div className="flex items-center">
          <Image src="/images/black-co-op-logo.png" alt="BLACK CO-OP" width={120} height={30} className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative">
            <Image
              src="/images/hyperlink.png"
              alt=""
              width={100}
              height={50}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
              style={{ width: "100%", height: "auto" }}
            />
            <Link
              href="#"
              className="text-white font-medium px-4 py-1 text-white font-passion-one text-[32px] relative z-10"
            >
              Home
            </Link>
          </div>
          <Link href="/our-goal" className="text-white font-medium font-passion-one text-[32px]">
            Our goal
          </Link>
          <div className="relative">
            <div className="group inline-block">
              <Link 
                href="/meet-the-team" 
                className={`font-medium font-passion-one text-[32px] flex items-center relative ${activeSubmenu === 'vacancies' ? 'text-[#FFCC00]' : 'text-white'}`}
              >
                <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                Meet the team
                <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                <Link 
                  href="/vacancies" 
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 font-passion-one ${activeSubmenu === 'vacancies' ? 'text-[#FFCC00] font-bold' : 'text-gray-700'}`}
                >
                  Vacancies
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/get-involved"
            className="font-medium px-4 py-1 rounded-full bg-[#FFCC00] border-2 border-black text-black font-passion-one text-[32px]"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center"
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
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col space-y-6">
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <Image src="/images/black-co-op-logo.png" alt="BLACK CO-OP" width={120} height={30} className="h-8 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded">
                Home
              </Link>
              <Link href="/our-goal" className="text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded">
                Our goal
              </Link>
              <div className="flex flex-col">
                <button 
                  onClick={() => setShowMobileSubmenu(!showMobileSubmenu)}
                  className="text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded flex items-center justify-between w-full text-left"
                >
                  <span>
                    Meet the team 
                    <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 inline-flex items-center justify-center">1</span>
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-200 ${showMobileSubmenu ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                {showMobileSubmenu && (
                  <div className="pl-6 py-1 space-y-2">
                    <Link 
                      href="/meet-the-team" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded"
                    >
                      The team
                    </Link>
                    <Link 
                      href="/vacancies" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded"
                    >
                      Vacancies
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/research" className="text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded">
                Research
              </Link>
              <Link href="/news" className="text-white font-passion-one text-xl py-2 hover:bg-gray-800 px-4 rounded">
                News
              </Link>
              <Link
                href="/get-involved"
                className="font-passion-one text-xl bg-[#FFCC00] text-black px-6 py-3 rounded-full text-center mt-4 hover:bg-yellow-400 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Rest of your page content */}
    </div>
  )
}
