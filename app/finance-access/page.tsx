"use client"

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function FinanceAccessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  return (
    <div className={`min-h-screen ${passionOne.variable}`}>
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
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center self-end"
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
                      setActiveLink(item.name)
                      setMobileMenuOpen(false)
                    }}
                    className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 ${
                      item.name === "Get Involved"
                        ? "bg-[#FFCC00] text-black rounded-full border-2 border-black"
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
      </nav>

      {/* Finance Access Header */}
      <div className="bg-black text-white py-8 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center bg-[#FFCC00] text-black px-6 py-2 rounded-full font-passion-one text-xl mb-6"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 rotate-180"
            >
              <path d="M10 17V7L15 12L10 17Z" fill="currentColor" />
            </svg>
            Back
          </Link>

          <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">Finance Access</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zF241MC5Iv-QW2LVlyszC-2560x1707.jpg-945AHWFQvhDi0qXhed02wUmaVyrRfj.jpeg"
            alt="Black man on phone"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-12 px-4 md:px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-12 leading-relaxed text-center">
              Black cooperatives face significant challenges in securing funding, primarily due to systemic bias in
              lending practices that often overlook their potential. This bias is compounded by their exclusion from
              various investment opportunities that are readily available to other groups. Additionally, restrictive
              financial regulations further hinder their ability to access the capital they need to thrive. As a result,
              these cooperatives are not only struggling to find the necessary resources to grow but are also fighting
              against a landscape that is often unwelcoming and inequitable.
            </p>

            {/* Our Solution Section */}
            <div className="mb-16">
              <div className="flex justify-center mb-12">
                <div className="bg-[#FFCC00] px-8 py-4">
                  <h2 className="text-center font-passion-one text-4xl text-black">• Our solution</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Fairer Financial Rules */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <span className="text-3xl font-passion-one">£</span>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Fairer Financial Rules</h3>
                  <p className="text-sm">
                    Work with policymakers to remove unfair financial restrictions on Black cooperatives.
                  </p>
                </div>

                {/* Better Funding Options */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Better Funding Options</h3>
                  <p className="text-sm">Push for government-backed loans and cooperative-friendly lending policies.</p>
                </div>

                {/* Knowledge & Support */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Knowledge & Support</h3>
                  <p className="text-sm">Provide resources on funding, grants, and alternative finance models.</p>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="mb-16">
              <h2 className="font-passion-one text-3xl mb-6 text-[#FFCC00]">The Impact of Financial Exclusion</h2>
              <p className="mb-4">
                Financial exclusion has profound effects on Black cooperatives and the communities they serve. Without
                adequate funding, these organizations struggle to:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Scale their operations to meet community needs</li>
                <li>Invest in necessary infrastructure and technology</li>
                <li>Compete effectively in the marketplace</li>
                <li>Create sustainable employment opportunities</li>
                <li>Build long-term financial resilience</li>
              </ul>

              <h2 className="font-passion-one text-3xl mb-6 text-[#FFCC00]">Our Approach to Change</h2>
              <p className="mb-4">
                At Black Co-op CIC, we're taking a multi-faceted approach to address these financial barriers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Advocacy & Policy Work</h3>
                  <p className="text-sm">
                    We're engaging with policymakers, financial institutions, and regulatory bodies to advocate for
                    changes that remove structural barriers to finance for Black cooperatives.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Financial Education</h3>
                  <p className="text-sm">
                    We provide workshops, resources, and mentoring to help Black cooperatives navigate complex financial
                    landscapes and develop strong funding applications.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Alternative Finance Models</h3>
                  <p className="text-sm">
                    We're exploring and promoting innovative funding mechanisms such as community investment,
                    peer-to-peer lending, and solidarity finance that can bypass traditional barriers.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Strategic Partnerships</h3>
                  <p className="text-sm">
                    We're building relationships with ethical investors, community development financial institutions,
                    and supportive organizations to create new funding pathways.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link
                href="/get-involved"
                className="bg-[#FFCC00] text-black px-8 py-3 rounded-full font-passion-one text-2xl inline-flex items-center gap-2"
              >
                Join our movement
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17V7L15 12L10 17Z" fill="black" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section className="relative">
        <Image src="/images/footer-bg.png" alt="Footer background" fill className="object-cover" />
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

                {/* Bottom section with copyright and languages */}
                <div className="border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-xs text-white">© 2023 — COPYRIGHT</p>
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

