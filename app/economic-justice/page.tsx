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

export default function EconomicJusticePage() {
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

      {/* Hero Section */}
      <div className="bg-white py-16 lg:py-24" suppressHydrationWarning>
        <div className="max-w-[1162px] mx-auto px-4" suppressHydrationWarning>
          <div className="flex flex-col-reverse lg:flex-row relative" suppressHydrationWarning>
            {/* Image for mobile/tablet */}
            <div className="block lg:hidden w-full mb-8" suppressHydrationWarning>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/economic-justice-hero.png"
                  alt="Economic justice illustration"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[70%] bg-black p-8 lg:p-12 text-white relative z-10" suppressHydrationWarning>
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">Economic Justice</h1>
              <p className="text-lg max-w-2xl">
                We're committed to breaking down systemic barriers and advocating for policies that promote economic justice
                and equal opportunities for Black entrepreneurs in London.
              </p>
            </div>

            {/* Desktop image - absolute positioned */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[50%] h-full z-0" suppressHydrationWarning>
              <div className="relative w-full h-full">
                <Image
                  src="/images/economic-justice-hero.png"
                  alt="Economic justice illustration"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Justice Header */}
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

          <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">
            Tackling Structural Barriers to Economic Justice
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2019ii-YeuS23hDiVouNiWYfOkoWXOx3L29xa.png"
            alt="Black professional in business attire"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-12 px-4 md:px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-12 leading-relaxed text-center">
              Black communities face systemic obstacles that limit their ability to build wealth and own businesses.
              From racial bias in lending to exclusion from property ownership and policy decisions, these barriers make
              economic justice difficult to achieve.
            </p>

            {/* Our Solution Section */}
            <div className="mb-16">
              <div className="flex justify-center mb-12">
                <div className="bg-[#FFCC00] px-8 py-4">
                  <h2 className="text-center font-passion-one text-4xl text-black">• Our solution</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Removing Legal & Financial Hurdles */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Removing Legal & Financial Hurdles</h3>
                  <p className="text-sm">
                    Push for policy changes that eliminate unfair restrictions on Black-led cooperatives.
                  </p>
                </div>

                {/* Expanding Access to Funding */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <span className="text-3xl font-passion-one">£</span>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Expanding Access to Funding</h3>
                  <p className="text-sm">
                    Advocate for cooperative-friendly lending, government-backed funding, and fairer financial
                    regulations.
                  </p>
                </div>

                {/* Securing Land & Business Spaces */}
                <div className="bg-black p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="font-passion-one text-2xl mb-4">Securing Land & Business Spaces</h3>
                  <p className="text-sm">
                    Fight for affordable commercial spaces, fair lease agreements, and cooperative ownership
                    opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="mb-16">
              <h2 className="font-passion-one text-3xl mb-6 text-[#FFCC00]">The Impact of Structural Barriers</h2>
              <p className="mb-4">
                Structural barriers to economic justice have profound effects on Black communities:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Limited access to capital for starting and growing businesses</li>
                <li>Difficulty securing affordable commercial spaces in viable locations</li>
                <li>Exclusion from networks and opportunities that facilitate business success</li>
                <li>Regulatory frameworks that disadvantage cooperative and community-based models</li>
                <li>Persistent wealth gaps that limit intergenerational economic mobility</li>
              </ul>

              <h2 className="font-passion-one text-3xl mb-6 text-[#FFCC00]">Our Approach to Change</h2>
              <p className="mb-4">
                At Black Co-op CIC, we're taking a comprehensive approach to address these structural barriers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Policy Advocacy</h3>
                  <p className="text-sm">
                    We work with policymakers to reform regulations that create unnecessary barriers for Black-led
                    cooperatives and to develop new policies that support cooperative development in Black communities.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Financial Innovation</h3>
                  <p className="text-sm">
                    We're developing alternative funding models, including community investment funds, peer-to-peer
                    lending networks, and partnerships with ethical financial institutions.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Community Land Trusts</h3>
                  <p className="text-sm">
                    We're supporting the development of community land trusts that can acquire and hold land for the
                    benefit of Black cooperatives, ensuring long-term affordability and community control.
                  </p>
                </div>
                <div className="bg-black/50 p-6">
                  <h3 className="font-passion-one text-xl mb-3">Education & Capacity Building</h3>
                  <p className="text-sm">
                    We provide training and resources to help Black entrepreneurs navigate complex regulatory systems,
                    access funding opportunities, and develop successful cooperative businesses.
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

      {/* Content Sections */}
      <div className="bg-white py-16" suppressHydrationWarning>
        <div className="max-w-[1162px] mx-auto px-4" suppressHydrationWarning>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" suppressHydrationWarning>
            {/* Policy Cards */}
            {[
              {
                title: "Removing Legal & Financial Hurdles",
                description:
                  "Push for policy changes that eliminate unfair restrictions on Black-led cooperatives.",
              },
              {
                title: "Expanding Access to Funding",
                description:
                  "Advocate for cooperative-friendly lending, government-backed funding, and fairer financial regulations.",
              },
              {
                title: "Securing Land & Business Spaces",
                description:
                  "Fight for affordable commercial spaces, fair lease agreements, and cooperative ownership opportunities.",
              },
            ].map((initiative, index) => (
              <div key={index} className="bg-black p-6 text-white" suppressHydrationWarning>
                <h3 className="font-passion-one text-2xl mb-4">{initiative.title}</h3>
                <p className="text-sm mb-6">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Contribution Section */}
      <section className="bg-black py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-passion-one text-white text-4xl mb-12">
            Our vision is to:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[400px]">
              <Image
                src="/images/tackling-barriers.png"
                alt="Tackling Structural Barriers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 flex flex-col">
                <h3 className="font-passion-one text-[#FFCC00] text-4xl sm:text-5xl mb-4">
                  Tackling Structural Barriers to Economic Justice
                </h3>
                <p className="text-white text-base sm:text-lg mt-4">
                  Addressing systemic barriers that prevent Black communities from building wealth and achieving economic
                  equity.
                </p>
                <div className="mt-auto pb-4 sm:pb-6 md:pb-8 lg:pb-0">
                  <Link
                    href="/economic-justice"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-2 rounded-full font-passion-one text-xl inline-flex items-center gap-2 transition-colors"
                  >
                    Learn more
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17V7L15 12L10 17Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[400px]">
              <Image
                src="/images/building-power.png"
                alt="Building Collective Economic Power"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 flex flex-col">
                <h3 className="font-passion-one text-[#FFCC00] text-4xl sm:text-5xl mb-4">
                  Building Collective Economic Power
                </h3>
                <p className="text-white text-base sm:text-lg mt-4">
                  Creating sustainable opportunities through cooperative ownership and mutual support within Black
                  communities.
                </p>
                <div className="mt-auto pb-4 sm:pb-6 md:pb-8 lg:pb-0">
                  <Link
                    href="/economic-power"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-2 rounded-full font-passion-one text-xl inline-flex items-center gap-2 transition-colors"
                  >
                    Learn more
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17V7L15 12L10 17Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="text-xs text-white"> 2023 — COPYRIGHT</p>
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
