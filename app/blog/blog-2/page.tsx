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

export default function BlogPost2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Blog")

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
          <Link href="/get-involved" className="text-white font-medium font-passion-one text-[32px]">
            Get Involved
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
              href="/blog"
              className="text-white font-medium px-4 py-1 text-white font-passion-one text-[32px] relative z-10"
            >
              Blog
            </Link>
          </div>
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
                { name: "Blog", href: "/blog" },
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

      {/* Blog Post Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-black mb-8 font-passion-one hover:text-[#FFCC00] transition-colors"
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
            Back to all articles
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">April 22, 2023</p>
            <h1 className="font-passion-one text-4xl md:text-5xl lg:text-6xl mb-6">
              Community Wealth Building: A Path Forward
            </h1>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <span>By Srae Edwards</span>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative w-full h-[300px] md:h-[500px] mb-8">
            <Image
              src="/images/blog/blog-2-header.png"
              alt="Community wealth building workshop"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=500&width=1000"
              }}
            />
          </div>

          {/* Article content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p>
                Community Wealth Building has emerged as a powerful approach to economic development that focuses on
                building collaborative, inclusive, and locally-controlled economies. This model offers a compelling
                alternative to traditional economic development strategies that often fail to address systemic
                inequalities and leave marginalized communities behind.
              </p>

              <h2>What is Community Wealth Building?</h2>
              <p>
                Community Wealth Building is an economic development approach that promotes democratic ownership and
                control of the economy. It aims to ensure that wealth is broadly shared among community members rather
                than extracted by distant shareholders or concentrated in the hands of a few. At its core, this approach
                seeks to create an economy that works for everyone by building community assets, supporting local
                businesses, and fostering democratic ownership structures.
              </p>

              <p>
                The cooperative model is central to Community Wealth Building, as it embodies principles of democratic
                governance, shared ownership, and equitable distribution of benefits. Cooperatives allow community
                members to pool resources, share risks, and collectively address local needs while building wealth that
                remains within the community.
              </p>

              <h2>Key Principles of Community Wealth Building</h2>
              <p>Several core principles guide the Community Wealth Building approach:</p>

              <ol>
                <li>
                  <strong>Plural ownership of the economy:</strong> Promoting diverse forms of ownership including
                  cooperatives, community enterprises, and employee-owned businesses.
                </li>
                <li>
                  <strong>Making financial power work for local places:</strong> Ensuring that investments and financial
                  decisions benefit local communities rather than extracting wealth.
                </li>
                <li>
                  <strong>Fair employment and just labor markets:</strong> Creating quality jobs with fair wages and
                  working conditions.
                </li>
                <li>
                  <strong>Progressive procurement:</strong> Using purchasing power to support local businesses and
                  social enterprises.
                </li>
                <li>
                  <strong>Socially productive use of land and property:</strong> Ensuring that land and buildings are
                  used to generate community wealth rather than speculative gain.
                </li>
              </ol>

              <h2>Community Wealth Building in Practice</h2>
              <p>
                Across the UK, communities are implementing wealth building strategies with promising results. In
                Preston, the "Preston Model" has gained recognition for its approach to redirecting procurement spending
                toward local businesses and cooperatives. This has led to millions of pounds being retained in the local
                economy, creating jobs and supporting local enterprises.
              </p>

              <p>
                In London, community land trusts are providing affordable housing by taking land off the speculative
                market and placing it under community ownership. These initiatives ensure that housing remains
                affordable in perpetuity while giving residents a democratic say in how their neighborhoods develop.
              </p>

              <h2>Challenges and Opportunities for Black Communities</h2>
              <p>
                For Black communities in the UK, Community Wealth Building offers particularly significant opportunities
                to address historical economic exclusion. By creating cooperative businesses, community-owned assets,
                and local financial institutions, Black communities can build wealth that remains under local control
                and benefits local residents.
              </p>

              <p>
                However, implementing these strategies requires overcoming significant barriers, including limited
                access to capital, restrictive policies, and a lack of technical support. Black-led cooperatives often
                face additional challenges due to systemic racism and discrimination in lending practices, property
                access, and business development resources.
              </p>

              <h2>The Path Forward</h2>
              <p>
                To realize the full potential of Community Wealth Building for Black communities, we need a
                multi-faceted approach that includes:
              </p>

              <ul>
                <li>
                  Developing dedicated funding streams and investment vehicles for Black-led cooperatives and community
                  enterprises
                </li>
                <li>
                  Providing technical assistance and capacity building to support the development of cooperative
                  businesses
                </li>
                <li>
                  Advocating for policy changes that remove barriers to cooperative development and community ownership
                </li>
                <li>
                  Building networks and alliances between Black-led cooperatives to share resources, knowledge, and
                  market opportunities
                </li>
                <li>
                  Creating educational programs that build awareness of cooperative models and develop the skills needed
                  for democratic governance
                </li>
              </ul>

              <p>
                At Black Co-op CIC, we're committed to advancing these strategies through our work with Black
                communities across London. We believe that by building collective economic power, we can create a more
                just and equitable economy that works for everyone.
              </p>

              <p>
                Community Wealth Building isn't just an economic strategy—it's a vision for a different kind of economy
                based on principles of democracy, equity, and sustainability. By embracing this approach, we can create
                pathways to prosperity that address historical injustices and build a more inclusive economic future.
              </p>
            </div>

            {/* Share buttons */}
            <div className="mt-12 border-t pt-6">
              <p className="font-passion-one text-xl mb-4">Share this article</p>
              <div className="flex gap-3">
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.0531 0H22.5998L14.8531 8.91333L23.9998 21H16.8131L11.2131 13.6733L4.7731 21H1.22643L9.5331 11.48L0.759766 0H8.1331L13.2198 6.72L19.0531 0ZM17.7931 18.8533H19.7531L7.05977 2.00667H4.9131L17.7931 18.8533Z"
                      fill="black"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      fill="black"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
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

