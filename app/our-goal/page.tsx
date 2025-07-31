"use client"

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { setupScrollAnimations } from "@/utils/scrollAnimation"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function OurGoalPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Our goal")

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
      <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left animate-text">
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
          <Link href="/" className="text-white font-medium font-passion-one text-[32px] animate-text">
            Home
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
              href="/our-goal"
              className="text-white font-medium px-4 py-1 text-white font-passion-one text-[32px] relative z-10 animate-text"
            >
              Our goal
            </Link>
          </div>
          <Link href="/meet-the-team" className="text-white font-medium font-passion-one text-[32px] animate-text">
            Meet the team
          </Link>
          <Link href="/research" className="text-white font-medium font-passion-one text-[32px] animate-text">
            Research
          </Link>
          <Link href="/news" className="text-white font-medium font-passion-one text-[32px] animate-text">
            News
          </Link>
          <Link
            href="/get-involved"
            className="font-medium px-4 py-1 rounded-full bg-[#FFCC00] border-2 border-black text-black font-passion-one text-[32px] animate-text"
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
                      setActiveLink(item.name)
                      setMobileMenuOpen(false)
                    }}
                    className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 ${
                      item.name === "Get Involved"
                        ? "bg-[#FFCC00] text-black rounded-full border-2 border-black"
                        : "text-white"
                    } animate-text`}
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
      <div className="relative bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side with text */}
            <div className="md:w-1/2 px-4 md:px-8 py-8 md:py-32">
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white animate-title">
                Breaking Systemic Barriers & Influencing Policy for Economic Justice
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-lg mb-8 md:mb-0 animate-text">
                We aim to remove legal, financial, and structural obstacles that prevent Black communities from
                accessing cooperative ownership. Through research, advocacy, and policy reforms, we strive to ensure
                that Black entrepreneurs and cooperatives have equal opportunities to own businesses, land, and assets
                in the UK.
              </p>
            </div>

            {/* Right side with image */}
            <div className="md:w-1/2 relative pb-8 md:pb-0">
              <div className="relative md:absolute right-0 top-0 md:top-12 md:right-8 md:top-16 w-full md:w-auto">
                <div className="relative w-full md:w-[492px] h-[300px] md:h-[580px]">
                  <Image
                    src="/images/hero-discussion.jpeg"
                    alt="Black entrepreneurs in discussion"
                    fill
                    className="object-cover object-center animate-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra space to account for the overlapping image */}
      <div className="hidden md:block h-[80px]"></div>

      {/* History Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-passion-one text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 animate-title">
            History of the Black Cooperative Movement
          </h2>

          <div className="mb-16 relative">
            <div className="relative w-full max-w-[748px] h-[300px] md:h-[409px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gypcyonearth_Generate_an_image_of_a_crowd_of_black_people_wal_c9a64472-5ee9-41f7-b02e-1cf92aa894c4_1-2REP7PnVioW1gi2Bos8Dvc4E5sXETY.png"
                alt="Crowd of people walking together"
                fill
                className="object-cover animate-image"
              />
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
                <Image
                  src="/images/sketch-icon.png"
                  alt="Decorative sketch"
                  width={40}
                  height={40}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>

          <div className="text-sm sm:text-base leading-relaxed md:leading-[213%] text-center">
            <p className="animate-text">
              Black cooperatives have long served as a vital tool for fostering economic resilience and promoting
              self-sufficiency within communities. These organizations are deeply rooted in African traditions that
              emphasized communal support and collective well-being. The origins of early cooperatives can be traced
              back to mutual aid societies that were established among free Black communities, providing essential
              resources and support to their members. Following the abolition of slavery, Black-led cooperatives emerged
              as a powerful means to provide access to land, education, and business opportunities, effectively
              combating the systemic economic exclusion that many faced.
            </p>
            <br />
            <p className="animate-text">
              In the mid-20th century, the landscape of Black cooperatives expanded significantly, particularly with the
              arrival of Caribbean immigrants in the UK. These communities came together to form various types of
              cooperatives, including credit unions, housing cooperatives, and worker-owned businesses, all aimed at
              addressing the financial barriers that hindered their progress. Despite facing ongoing challenges such as
              restrictive funding, policy hurdles, and societal biases, the Black cooperative movement is currently
              experiencing a remarkable resurgence. This revitalization is not only driving economic empowerment but
              also fostering a renewed sense of collective ownership and community solidarity. Today, these cooperatives
              are at the forefront of efforts to create sustainable economic opportunities, ensuring that future
              generations can thrive in an equitable environment.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-[#FFCC00] px-8 py-4">
              <h2 className="text-center font-passion-one text-4xl animate-title">
                • What we do
              </h2>
            </div>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 animate-text">
            We focus on four key areas to create lasting change:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Enterprise & Entrepreneurship Card */}
            <div className="relative">
              <div className="relative w-[90%] h-[164px] mb-[-80px] mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2019-TCvYQ587BXzIqLFnqYYvEzxmfJP5yv.png"
                  alt="Enterprise & Entrepreneurship"
                  fill
                  className="object-cover animate-image"
                />
              </div>
              <div className="bg-black text-white p-6 pb-4 relative z-10 h-[250px] w-full md:w-[361px] max-w-full mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-3">
                    <Image src="/images/icon-enterprise.svg" alt="Enterprise icon" width={35} height={35} />
                  </div>
                  <h3 className="font-passion-one text-2xl md:text-[28px] lg:text-[35px] leading-tight animate-title">
                    Enterprise &<br />
                    Entrepreneurship
                  </h3>
                </div>
                <p className="text-sm animate-text">
                  Supporting Black-owned businesses with funding, mentorship, and practical resources.
                </p>
              </div>
            </div>

            {/* Skills & Training Card */}
            <div className="relative">
              <div className="relative w-[90%] h-[164px] mb-[-80px] mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2028-xw9lWZMZIEChPxFUcUdHEtW0Vkthjg.png"
                  alt="Skills & Training"
                  fill
                  className="object-cover animate-image"
                />
              </div>
              <div className="bg-black text-white p-6 pb-4 relative z-10 h-[250px] w-full md:w-[361px] max-w-full mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-3">
                    <Image src="/images/icon-skills.svg" alt="Skills icon" width={35} height={35} />
                  </div>
                  <h3 className="font-passion-one text-2xl md:text-[28px] lg:text-[35px] leading-tight animate-title">
                    Skills &<br />
                    Training
                  </h3>
                </div>
                <p className="text-sm animate-text">
                  Offering workshops, courses, and apprenticeships to develop skills and career pathways.
                </p>
              </div>
            </div>

            {/* Community Investment Card */}
            <div className="relative">
              <div className="relative w-[90%] h-[164px] mb-[-80px] mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2030-dHrTvJ7G5DRwg3dG2TPeF2hgmdkgqf.png"
                  alt="Community Investment"
                  fill
                  className="object-cover animate-image"
                />
              </div>
              <div className="bg-black text-white p-6 pb-4 relative z-10 h-[250px] w-full md:w-[361px] max-w-full mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-3">
                    <Image src="/images/icon-community.svg" alt="Community icon" width={35} height={35} />
                  </div>
                  <h3 className="font-passion-one text-2xl md:text-[28px] lg:text-[35px] leading-tight animate-title">
                    Community
                    <br />
                    Investment
                  </h3>
                </div>
                <p className="text-sm animate-text">
                  Reinvesting in local projects, housing, and creative initiatives that benefit our communities.
                </p>
              </div>
            </div>

            {/* Advocacy & Policy Change Card */}
            <div className="relative md:col-start-2 md:col-span-1">
              <div className="relative w-[90%] h-[164px] mb-[-80px] mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2032-yguH2DC0GwDtKN1YcAiX5V11WS3mzC.png"
                  alt="Advocacy & Policy Change"
                  fill
                  className="object-cover animate-image"
                />
              </div>
              <div className="bg-black text-white p-6 pb-4 relative z-10 h-[250px] w-full md:w-[361px] max-w-full mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-3">
                    <Image src="/images/icon-advocacy.svg" alt="Advocacy icon" width={35} height={35} />
                  </div>
                  <h3 className="font-passion-one text-2xl md:text-[28px] lg:text-[35px] leading-tight animate-title">
                    Advocacy &<br />
                    Policy Change
                  </h3>
                </div>
                <p className="text-sm animate-text">
                  Campaigning for policies that eliminate economic barriers and build more opportunities for Black
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-[#FFCC00] px-8 py-4">
              <h2 className="text-center font-passion-one text-4xl animate-title">
                • Why It Matters
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-center leading-relaxed mb-8 md:mb-0 animate-text">
              Systemic barriers have long limited Black communities' access to economic opportunities. We're here to
              change that—by creating spaces where our values, talents, and businesses thrive. Our cooperative model
              ensures that the wealth we generate stays within our communities, fostering long-term security and
              success. We also believe in the power of collective prosperity, ensuring that economic growth benefits the
              many, not just the few.
            </p>
          </div>
        </div>
      </section>

      {/* Want to join the movement Section */}
      <section className="py-24 sm:py-32 lg:py-36 px-4 md:px-4 lg:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="w-full h-[650px] sm:h-[700px] md:h-[750px] lg:h-[456px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2022-x0GU9rBDwNboMLQejt38QPI5hcNVBI.png"
                alt="Join the movement"
                fill
                className="object-cover animate-image"
                priority
              />
              <div className="absolute inset-0 bg-black/50">
                <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
                  <h2 className="font-passion-one text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFCC00] mb-6 sm:mb-8 animate-title">
                    Want to join the movement?
                  </h2>
                  <div className="max-w-3xl space-y-4 sm:space-y-6">
                    <p className="text-white text-base sm:text-lg animate-text">
                      Are you a Black or minority entrepreneur in the UK? Have you faced challenges with funding, property
                      access, or restrictive policies?
                    </p>
                    <p className="text-white text-base sm:text-lg mb-8 sm:mb-10 animate-text">
                      Black communities in the UK face significant barriers to wealth creation, from structural racism to
                      policy barriers. Our cooperative model is designed to address these issues, creating economic equity
                      and empowering Black entrepreneurs to build wealth.
                    </p>
                    <Link
                      href="/get-involved"
                      className="bg-transparent hover:bg-[#FFCC00] hover:text-black text-white border-2 border-white hover:border-transparent px-8 sm:px-10 py-3 sm:py-4 rounded-full font-passion-one text-xl sm:text-2xl flex items-center gap-2 w-fit hover:bg-white/10 transition-all duration-300 animate-button"
                    >
                      JOIN US
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17V7L15 12L10 17Z" fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
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
