"use client"

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { setupScrollAnimations } from "@/utils/scrollAnimation"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function OurGoalPage() {
  useEffect(() => {
    setupScrollAnimations()
  }, [])

  return (
    <div className={`min-h-screen ${passionOne.variable}`}>

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

    </div>
  )
}
