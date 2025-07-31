'use client'

import { Passion_One } from "next/font/google"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { setupScrollAnimations } from "@/utils/scrollAnimation"

const AnimatedProgressBar = dynamic(() => import('@/components/animated-progress-bar'), { 
  ssr: false,
  loading: () => <div className="h-4 bg-gray-200"></div>
})

const WaveDecoration = dynamic(() => import('@/components/wave-decoration').then(mod => mod.WaveDecoration), { 
  ssr: false,
  loading: () => <div className="w-16 h-8"></div>
})

const KnowMoreButton = dynamic(() => import('@/components/know-more-button').then(mod => mod.KnowMoreButton), { 
  ssr: false,
  loading: () => <div className="h-10 w-32 bg-[#FFCC00]"></div>
})

const AnimatedCard = dynamic(() => import('@/components/animated-card').then(mod => mod.AnimatedCard), { 
  ssr: false,
  loading: () => <div className="h-[360px] bg-gray-100"></div>
})

const LearnMoreButton = dynamic(() => import('@/components/learn-more-button').then(mod => mod.LearnMoreButton), { 
  ssr: false,
  loading: () => <div className="h-10 w-32 bg-[#FFCC00]"></div>
})

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [componentsLoaded, setComponentsLoaded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for components to load
    Promise.all([
      AnimatedProgressBar,
      WaveDecoration,
      KnowMoreButton,
      AnimatedCard,
      LearnMoreButton
    ].map(component => {
      return component.preload?.()
    })).then(() => {
      setIsLoaded(true);
    }).catch((error) => {
      console.error('Error loading components:', error);
      setIsLoaded(true); // Still set loaded to ensure animations work
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Initialize animations after components are loaded
      setupScrollAnimations();
    }
  }, [isLoaded]);

  useEffect(() => {
    // Use requestAnimationFrame to ensure we're in a browser environment
    requestAnimationFrame(() => {
      setMounted(true)
      // Remove any extension-added attributes from the root div
      const root = document.getElementById('root')
      if (root) {
        const attrs = root.attributes
        for (let i = attrs.length - 1; i >= 0; i--) {
          const attr = attrs[i]
          if (attr.name.startsWith('bis_') || attr.name.startsWith('data-grammarly') || attr.name.startsWith('data-extension')) {
            root.removeAttribute(attr.name)
          }
        }
      }
      // Ensure all dynamic components are loaded
      Promise.all([
        import('@/components/animated-progress-bar'),
        import('@/components/wave-decoration').then(mod => mod.WaveDecoration),
        import('@/components/know-more-button').then(mod => mod.KnowMoreButton),
        import('@/components/animated-card').then(mod => mod.AnimatedCard),
        import('@/components/learn-more-button').then(mod => mod.LearnMoreButton)
      ]).then(() => {
        setComponentsLoaded(true)
      }).catch((error) => {
        console.error('Error loading components:', error)
      })
    })
  }, [])

  // Return a minimal loading state that matches the server-side render
  if (!mounted || !componentsLoaded) {
    return (
      <div className={`min-h-screen ${passionOne.variable}`} suppressHydrationWarning>
        <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left" suppressHydrationWarning>
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
    <div className={`min-h-screen ${passionOne.variable}`} suppressHydrationWarning>
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
          <Link href="/meet-the-team" className="text-white font-medium font-passion-one text-[32px]">
            Meet the team
          </Link>
          <Link href="/research" className="text-white font-medium font-passion-one text-[32px]">
            Research
          </Link>
          <Link href="/news" className="text-white font-medium font-passion-one text-[32px]">
            News
          </Link>
          <Link
            href="/get-involved"
            className="font-medium px-4 py-1 bg-[#FFCC00] border-2 border-black text-black font-passion-one text-[32px] rounded-[45px]"
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
          <div className="p-6 flex flex-col h-full">
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

            <div className="flex flex-col gap-6 mt-8 flex-grow">
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

            {/* Mobile menu footer */}
            <div className="mt-auto pt-6 border-t border-white/20">
              <div className="flex justify-center gap-4 mb-4">
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <Image src="/images/x-icon.svg" alt="X" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <Image src="/images/email-icon.svg" alt="Email" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[100vh] sm:min-h-[90vh] md:min-h-[120vh] hero-section" suppressHydrationWarning>
        <Image 
          src="/images/hero-section.png" 
          alt="Black community members" 
          fill 
          className="object-cover animate-image"
          sizes="100vw"
          priority 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4" suppressHydrationWarning>
          <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-5xl mx-auto" suppressHydrationWarning>
            <h1 className="font-passion-one font-normal text-[45px] xs:text-[65px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[150px] leading-[0.9] tracking-tight animate-title">
              <div className="md:hidden space-y-1" suppressHydrationWarning>
                <div>Advancing</div>
                <div>Black-Led</div>
                <div>Cooperative</div>
                <div>Ownership</div>
                <div>in London</div>
              </div>
              <div className="hidden md:block space-y-2" suppressHydrationWarning>
                <div>Advancing Black-Led</div>
                <div>Cooperative</div>
                <div>Ownership in London</div>
              </div>
            </h1>
            <div className="mt-6 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex justify-center" suppressHydrationWarning>
              <button className="bg-[#FFCC00] text-black px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-4 font-passion-one font-normal text-[20px] xs:text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] flex items-center justify-center gap-2 hover:bg-[#e6b800] transition-colors rounded-[45px] animate-button">
                Keep scrolling
                <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Did You Know Section */}
      <section className="pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center font-passion-one font-normal text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-8 animate-title">DID YOU KNOW?</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <Image
              src="/images/team-photo.png"
              alt="Diverse group of professionals"
              width={600}
              height={400}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
              <Image
                src="/images/sketch-icon.png"
                alt="Decorative sketch"
                width={100}
                height={100}
                className="w-16 sm:w-20 md:w-24 h-auto"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-passion-one font-normal text-xl xs:text-2xl sm:text-3xl mb-4 animate-text">
              Cooperatives empower communities through shared ownership and democratic decision-making.
            </h3>
            <p className="text-base sm:text-lg mb-12 sm:mb-16 animate-text">
              The cooperative model has been a powerful tool for economic empowerment worldwide, helping communities build wealth and resilience through collective ownership. By working together, members can achieve more than they could individually.
            </p>

            <div className="mb-4">
              <AnimatedProgressBar percentage={100} leftLabel="Community Power" rightLabel="Collective Success" />
            </div>
          </div>
        </div>
      </section>

      {/* UK Democratic Economy Section */}
      <section className="pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="font-passion-one font-normal text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-8">
              UK DEMOCRATIC ECONOMY
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <p>
                There are 9,342 – up from 9,313 – independent businesses operating across the UK's democratic economy. 
                They are co-operatives. They are building societies. They are mutual insurers. They are NHS 
                Foundation Trusts. They can also be employee-owned.
              </p>
              <p>
                The combined annual income of democratic businesses is £165.7 billion, up from £161.5 billion in 2023. 
                The democratic economy employs more than 1.3 million. Because of how they operate, democratic 
                businesses aim to provide better work; work that is more rewarding, empowering, wellbeing-enhancing 
                livelihoods.
              </p>
              <p>
                There are more than 68.8 million memberships within the democratic economy, up 2.9% on 2023 figures 
                (66.8 million). It is a number that is only just short of the number of people living in the UK. 
                Membership is more than a loyalty card. It gives joint ownership and control to the people most 
                invested in a business' long-term success.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-auto">
              <Image
                src="/images/United Kingdom.svg"
                alt="United Kingdom Map"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Systemic Issues Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 sm:mb-8">
          <Image
            src="/images/wave-decoration.png"
            alt="Wave decoration left"
            width={100}
            height={48}
            className="w-16 sm:w-20 md:w-24 h-auto hidden sm:block"
          />
          <h2 className="text-center font-passion-one text-[50px] leading-tight max-w-4xl px-4 animate-title">
            Welcome to Black Co-op CIC, A community-driven cooperative building Black economic empowerment, one step at a time.
          </h2>
          <Image
            src="/images/wave-decoration-right.png"
            alt="Wave decoration right"
            width={100}
            height={48}
            className="w-16 sm:w-20 md:w-24 h-auto hidden sm:block"
          />
        </div>

        <p className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base px-4 animate-text">
          At Black Co-op CIC, we are pioneering a movement to establish and grow Black-led cooperative ownership in London. In a city known for its diversity, there are currently no Black-led cooperatives—a gap we are committed to filling. Our aim is to create thriving, resilient communities built on principles of collective ownership, economic equity, and mutual empowerment.
          <br />
          We champion a model where economic power and resources are owned, controlled, and shared by the people they serve. Through our work, we are laying the groundwork for a network of Black-led cooperatives that drive meaningful change across sectors such as housing, enterprise, community services, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {/* Finance Access Card */}
          <AnimatedCard index={0}>
            <div className="relative h-[420px] sm:h-[450px] md:h-[480px] overflow-hidden animate-card">
              <div className="absolute inset-0">
                <Image 
                  src="/images/finance-access.png" 
                  alt="Finance Access" 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                />
              </div>
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFCC00] animate-blink"></div>
                </div>
                <h3 className="font-passion-one text-white text-4xl sm:text-3xl md:text-4xl mb-4">
                  Finance
                  <br />
                  Access
                </h3>
                <p className="text-white text-sm sm:text-base mt-auto mb-4">
                  Black cooperatives struggle to secure funding due to bias in lending, exclusion from investment
                  opportunities, and restrictive financial regulations.
                </p>
                <div className="mt-auto">
                  <KnowMoreButton href="/finance-access" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Land & Property Access Card */}
          <AnimatedCard index={1}>
            <div className="relative h-[420px] sm:h-[450px] md:h-[480px] overflow-hidden animate-card">
              <div className="absolute inset-0">
                <Image 
                  src="/images/land-property.png" 
                  alt="Land & Property Access" 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                />
              </div>
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFCC00] animate-blink"></div>
                </div>
                <h3 className="font-passion-one text-white text-4xl sm:text-3xl md:text-4xl mb-4">
                  Land &
                  <br />
                  Property
                  <br />
                  Access
                </h3>
                <p className="text-white text-sm sm:text-base mt-auto mb-4">
                  Gentrification and displacement hinder community asset ownership.
                </p>
                <div className="mt-auto">
                  <KnowMoreButton href="/land-property-access" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Legal & Governance Frameworks Card */}
          <AnimatedCard index={2}>
            <div className="relative h-[420px] sm:h-[450px] md:h-[480px] overflow-hidden animate-card">
              <div className="absolute inset-0">
                <Image 
                  src="/images/legal-governance.png" 
                  alt="Legal & Governance" 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                />
              </div>
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFCC00] animate-blink"></div>
                </div>
                <h3 className="font-passion-one text-white text-4xl sm:text-3xl md:text-4xl mb-4">
                  Legal &
                  <br />
                  Governance
                  <br />
                  Frameworks
                </h3>
                <p className="text-white text-sm sm:text-base mt-auto mb-4">
                  Regulations hinder Black-led cooperatives' formation and governance.
                </p>
                <div className="mt-auto">
                  <KnowMoreButton href="/legal-governance-frameworks" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Lack of Representation Card */}
          <AnimatedCard index={3}>
            <div className="relative h-[420px] sm:h-[450px] md:h-[480px] overflow-hidden animate-card">
              <div className="absolute inset-0">
                <Image 
                  src="/images/representation.png" 
                  alt="Representation" 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                />
              </div>
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFCC00] animate-blink"></div>
                </div>
                <h3 className="font-passion-one text-white text-4xl sm:text-3xl md:text-4xl mb-4">
                  Lack of
                  <br />
                  Representation
                </h3>
                <p className="text-white text-sm sm:text-base mt-auto mb-4">
                  Current cooperative leadership structures do not reflect community diversity.
                </p>
                <div className="mt-auto">
                  <KnowMoreButton href="/representation" />
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center font-passion-one text-[36px] xs:text-[40px] sm:text-[54px] mb-4 animate-title">Who we are</h2>
        <div className="flex justify-center mb-6">
          <Image
            src="/images/wave-decoration-3.png"
            alt="Wave decoration"
            width={200}
            height={48}
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
        </div>

        <p className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 text-sm sm:text-base px-4 animate-text">
          Black Co-op CIC is a Black-led cooperative dedicated to creating sustainable opportunities for our
          communities. We believe in the power of collective ownership, economic justice, and mutual support. By working
          together, we can build lasting wealth and resilience within London's Black communities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-4">
          {[
            {
              src: "/images/team-image-1.jpeg",
              alt: "Team members collaborating around a table"
            },
            {
              src: "/images/team-image-2.jpeg",
              alt: "Business professionals team portrait"
            },
            {
              src: "/images/team-image-3.jpeg",
              alt: "Community members gathered outdoors"
            },
            {
              src: "/images/team-image-4.jpeg",
              alt: "Group hiking through forest"
            }
          ].map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Project Contribution Section */}
      <section className="bg-black text-white py-24 sm:py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="font-passion-one text-5xl sm:text-6xl md:text-7xl mb-16 sm:mb-20 text-center animate-title">
            Our vision is to:
          </h2>
          
          {/* Image Cards */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* First Card */}
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] w-full animate-card">
              <Image
                src="/images/FoxNakai-6080.jpg"
                alt="Tackling Structural Barriers"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-passion-one text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-2xl leading-tight mb-4 sm:mb-6 animate-title">
                  Tackle Structural Barriers to Economic Justice
                </h3>
                <div className="mt-2 sm:mt-4 pb-4 sm:pb-6 md:pb-8 lg:pb-0">
                  <Link href="/economic-justice" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-[45px] font-passion-one text-xl flex items-center gap-2 w-fit hover:bg-white/10 transition-colors animate-button">
                    Learn more
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17V7L15 12L10 17Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] w-full animate-card">
              <Image
                src="/images/img20210825_13292981.jpg"
                alt="Building Collective Power"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 md:p-10 flex flex-col justify-center items-end text-right">
                <h3 className="font-passion-one text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-2xl leading-tight mb-4 sm:mb-6 animate-title">
                  Build Collective Economic Power
                </h3>
                <div className="mt-2 sm:mt-4 pb-4 sm:pb-6 md:pb-8 lg:pb-0">
                  <Link href="/economic-power" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-[45px] font-passion-one text-xl flex items-center gap-2 w-fit hover:bg-white/10 transition-colors animate-button">
                    Learn more
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17V7L15 12L10 17Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] w-full animate-card">
              <Image
                src="/images/communities.png"
                alt="Shifting Power to Communities"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/50 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-passion-one text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-2xl leading-tight mb-4 sm:mb-6 animate-title">
                  Shift Power to Communities
                </h3>
                <div className="mt-2 sm:mt-4 pb-4 sm:pb-6 md:pb-8 lg:pb-0">
                  <Link href="/communities" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-[45px] font-passion-one text-xl flex items-center gap-2 w-fit hover:bg-white/10 transition-colors animate-button">
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
                    <h3 className="font-passion-one font-normal text-[40px] sm:text-[50px] md:text-[70px] leading-tight mb-4 sm:mb-6 text-white animate-title">
                      Want to know <br />
                      our <span className="text-[#FFCC00]">goals?</span>
                    </h3>
                    <Link
                      href="/our-goal"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
