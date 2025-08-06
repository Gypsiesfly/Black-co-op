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

export default function LandPropertyAccessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  return (
    <div className={`min-h-screen ${passionOne.variable}`}>
      {/* Top yellow bar */}
      <div className="hidden">
        Want to join the movement?{" "}
        <Link href="/get-involved" className="underline">
          Send us a message
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden">
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

      {/* Land & Property Access Header */}
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

          <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">Land & Property Access</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/land-property.png" alt="Land and property" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-12 px-4 md:px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-12 leading-relaxed text-center">
              Black-led cooperatives encounter a multitude of systemic barriers that significantly hinder their ability
              to secure land and business spaces. These challenges make it increasingly difficult for them to not only
              establish their ventures but also to sustain them over time. Factors such as gentrification, which often
              displaces long-standing communities, coupled with exorbitant commercial rents, create an environment where
              affordable property becomes a rare commodity. Additionally, restrictive leasing policies further
              exacerbate the situation, limiting access to spaces that could otherwise serve as thriving hubs for Black
              entrepreneurship. As a result, these cooperatives struggle to find suitable locations that align with
              their mission and vision, ultimately impacting their growth and success.
            </p>

            {/* Our Solution Section */}
            <div className="mb-16">
              <div className="flex justify-center mb-12">
                <div className="bg-[#FFCC00] px-8 py-4">
                  <h2 className="text-center font-passion-one text-4xl text-black">• Our solution</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Easier Access to Property */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7v10h4v-6h12v6h4V7L12 2zm0 3.5L14.5 7h-5L12 5.5z" fill="white" />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Easier Access to Property</h3>
                  <p className="text-sm">
                    Advocate for policies that make it easier for Black cooperatives to secure land and business spaces.
                  </p>
                </div>

                {/* Fairer Lease Agreements */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Fairer Lease Agreements</h3>
                  <p className="text-sm">Push for government-backed loans and cooperative-friendly lending policies.</p>
                </div>

                {/* More Affordable Business Spaces */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">More Affordable Business Spaces</h3>
                  <p className="text-sm">Provide resources on funding, grants, and alternative finance models.</p>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="mb-16">
              <h2 className="font-passion-one text-3xl mb-6 text-[#FFCC00]">The Impact of Property Barriers</h2>
              <p className="mb-4">
                The lack of access to affordable and suitable property has profound effects on Black cooperatives and
                the communities they serve:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Limited physical presence in communities they aim to serve</li>
                <li>Inability to establish permanent roots in neighborhoods</li>
                <li>Higher operational costs that reduce financial sustainability</li>
                <li>Reduced capacity to provide community services and spaces</li>
                <li>Vulnerability to displacement due to gentrification</li>
              </ul>

              <h2 className="font-passion-one text-3xl mb-6 text-[#FFCC00]">Our Approach to Change</h2>
              <p className="mb-4">
                At Black Co-op CIC, we're taking a multi-faceted approach to address these property barriers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Community Land Trusts</h3>
                  <p className="text-sm">
                    We're supporting the development of community land trusts that can acquire and hold land for the
                    benefit of Black cooperatives, ensuring long-term affordability and community control.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Shared Spaces Initiative</h3>
                  <p className="text-sm">
                    We're creating shared workspace models that allow multiple Black cooperatives to access quality
                    business spaces at affordable rates through collective leasing and management.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Policy Advocacy</h3>
                  <p className="text-sm">
                    We're working with local authorities to develop policies that prioritize community ownership and
                    create pathways for Black cooperatives to access public and underutilized properties.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Property Acquisition Fund</h3>
                  <p className="text-sm">
                    We're establishing a dedicated fund to help Black cooperatives purchase or lease property, providing
                    both financial support and technical assistance throughout the process.
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
      <section className="hidden">
        <Image src="/images/footer-bg.png" alt="Footer background" fill className="object-cover" />
        <div className="relative z-10">
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

