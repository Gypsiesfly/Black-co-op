'use client'

import { Passion_One } from "next/font/google"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function NewsPage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("News")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`min-h-screen ${passionOne.variable}`}>
        <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left">
          Want to join the movement?{" "}
          <Link href="/get-involved" className="underline">
            Send us a message
          </Link>
        </div>
        <nav className="bg-black py-3 px-4 md:px-8 flex items-center justify-between relative">
          <div className="flex items-center">
            <Image 
              src="/images/black-co-op-logo.png" 
              alt="BLACK CO-OP" 
              width={120} 
              height={30} 
              className="h-8 w-auto"
              priority
            />
          </div>
        </nav>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-white ${passionOne.variable}`}>
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
          <Link href="/" className="text-white font-medium font-passion-one text-[32px]">
            Home
          </Link>
          <Link href="/our-goal" className="text-white font-medium font-passion-one text-[32px]">
            Our goal
          </Link>
          <Link href="/meet-the-team" className="text-white font-medium font-passion-one text-[32px]">
            Meet the team
          </Link>
          <Link href="/research" className="text-white font-medium font-passion-one text-[32px]">
            Research
          </Link>
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
              href="/news"
              className="text-white font-medium px-4 py-1 text-white font-passion-one text-[32px] relative z-10"
            >
              News
            </Link>
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
      </nav>

      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side with text */}
            <div className="md:w-1/2 px-4 md:px-8 py-8 md:py-32 pb-24 md:pb-56">
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white">
                News & Updates
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-lg mb-8 md:mb-0">
                Stay informed with the latest news, announcements, and updates from Black Co-op CIC.
              </p>
            </div>

            {/* Right side with image */}
            <div className="md:w-1/2 relative pb-8 md:pb-0">
              <div className="relative md:absolute right-0 top-0 md:top-12 md:right-8 md:top-16 w-full md:w-auto pb-8 md:pb-16">
                <div className="relative w-full md:w-[492px] h-[250px] md:h-[400px]">
                  <Image
                    src="/images/news.jpg"
                    alt="News and updates"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* News Card */}
          <div className="mb-16 bg-white shadow-md overflow-hidden border border-gray-200">
            <div className="relative h-64 w-full">
              <Image
                src="/images/pipeline.jpg"
                alt="Pipeline development"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">July 31, 2025</span>
                <a 
                  href="https://propertyindustryeye.com/government-launches-platform4-to-deliver-40000-homes-on-surplus-railway-land/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:underline"
                >
                  Source: Property Industry Eye
                </a>
              </div>
              <h1 className="text-3xl font-passion-one mb-4">A New Pipeline, But For Whom?</h1>
              <p className="text-lg text-gray-700 mb-6 line-clamp-3">
                The UK government recently launched Platform4, a new initiative aiming to deliver up to 40,000 new homes by unlocking disused and surplus railway land...
              </p>
              <a 
                href="/news/platform4-initiative" 
                className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/black-co-op-logo.png"
                alt="BLACK CO-OP"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-8 flex-grow">
            {[
              { name: "Home", href: "/" },
              { name: "Our Goal", href: "/our-goal" },
              { name: "Meet the Team", href: "/meet-the-team" },
              { name: "Research", href: "/research" },
              { name: "News", href: "/news" },
              { name: "Get Involved", href: "/get-involved" },
            ].map((item) => (
              <div key={item.name} className="relative w-fit mx-auto">
                {activeLink === item.name && (
                  <Image
                    src="/images/hyperlink.png"
                    alt=""
                    width={100}
                    height={50}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full ${
                    item.name === "Get Involved"
                      ? "bg-[#FFCC00] text-black"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black text-white">
        <div className="absolute inset-0">
          <Image src="/images/footer-bg.png" alt="Footer background" fill className="object-cover" />
        </div>
        <div className="relative z-10 py-8 sm:py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="px-6 sm:px-12 py-8 sm:py-16">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-16">
                  {/* Left side - Title and button */}
                  <div className="mb-8 md:mb-0">
                    <h3 className="font-passion-one font-normal text-[40px] sm:text-[50px] md:text-[70px] leading-tight mb-4 sm:mb-6 text-white">
                      Want to know <br />
                      our <span className="text-[#FFCC00]">goals?</span>
                    </h3>
                    <Link
                      href="/our-goal"
                      className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-passion-one text-[20px] flex items-center justify-center gap-2 w-fit hover:bg-white/10 transition-colors"
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
                  <div className="flex flex-col items-center">
                    <div className="mb-4 sm:mb-6 flex flex-col items-center">
                      <div className="bg-[#FFCC00] p-2 sm:p-3 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] flex items-center justify-center mb-1">
                        <Image src="/images/site-icon.png" alt="BLACK CO-OP" width={40} height={40} />
                      </div>
                      <div className="text-[6px] text-white text-center leading-tight">
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
                        className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                      >
                        <Image src="/images/x-icon.svg" alt="X" width={20} height={20} />
                      </Link>
                      <Link
                        href="#"
                        className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                      >
                        <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                      </Link>
                      <Link
                        href="#"
                        className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                      >
                        <Image src="/images/email-icon.svg" alt="Email" width={20} height={20} />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                  <p>© {new Date().getFullYear()} Black Co-op CIC. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
