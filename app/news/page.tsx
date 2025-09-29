'use client'

import { Passion_One } from "next/font/google"
import Image from "next/image"
import { useEffect } from "react"
import { setupScrollAnimations } from "@/utils/scrollAnimation"
import Link from "next/link"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function NewsPage() {
  useEffect(() => {
    setupScrollAnimations()
  }, [])

  return (
    <div className={`min-h-screen bg-white ${passionOne.variable}`}>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-1/2">
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">
                News & Updates
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-lg">
                Stay informed with the latest news, announcements, and updates from Black Co-op CIC.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/news.jpg"
                  alt="News and updates"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* A New Chapter for Mutual Power */}
            <div className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/New Chapter 1.jpg"
                  alt="Co-operative economy report highlights"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">September 29, 2025</span>
                </div>
                <h2 className="text-2xl font-passion-one mb-3">A New Chapter for Mutual Power</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Reflections from Black Co-op on the 2025 Co-operative Economy Report and what it means for the future of collective ownership.
                </p>
                <Link 
                  href="/news/a-new-chapter-for-mutual-power" 
                  className="inline-block bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition-colors rounded"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>

            {/* Kenyan Connection */}
            <div className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/Kenyan Connection.jpg"
                  alt="Dr Christopher A. Johnson and Clive Asande in discussion"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">September 29, 2025</span>
                </div>
                <h2 className="text-2xl font-passion-one mb-3">Kenyan Connection: Building Bridges Across Continents</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Dr Christopher A. Johnson meets with Clive Asande, Business Development Manager of Strathmore University Business School, to discuss Fair Trade, co-operatives, and research collaboration.
                </p>
                <Link 
                  href="/news/kenyan-connection-building-bridges-across-continents" 
                  className="inline-block bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition-colors rounded"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>

            {/* Black Co-op Secures Funding */}
            <div className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/success.jpg"
                  alt="Black Co-op Secures Funding"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">August 6, 2025</span>
                </div>
                <h2 className="text-2xl font-passion-one mb-3">Black Co-op Secures Funding to Champion Policy Reform and Black Leadership in the Co-operative Sector</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Black Co-op has been awarded new funding from Trust for London to drive policy reform and Black leadership in the co-operative sector.
                </p>
                <Link 
                  href="/blog/black-co-op-secures-funding" 
                  className="inline-block bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition-colors rounded"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>

            {/* Platform4 Initiative */}
            <div className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/pipeline.jpg"
                  alt="Pipeline development"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">July 31, 2025</span>
                  <a 
                    href="https://propertyindustryeye.com/government-launches-platform4-to-deliver-40000-homes-on-surplus-railway-land/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:underline"
                  >
                    Source: Property Industry Eye
                  </a>
                </div>
                <h2 className="text-2xl font-passion-one mb-3">A New Pipeline, But For Whom?</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  The UK government recently launched Platform4, a new initiative aiming to deliver up to 40,000 new homes by unlocking disused and surplus railway land...
                </p>
                <Link 
                  href="/news/platform4-initiative" 
                  className="inline-block bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition-colors rounded"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>

            {/* When Co-ops Come Knocking */}
            <div className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/handshake.jpg"
                  alt="Business partnership"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">June 23, 2025</span>
                </div>
                <h2 className="text-2xl font-passion-one mb-3">When Co-ops Come Knocking</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Leaders from across the UK co-operative movement were invited to a reception at 10 Downing Street to talk people-powered, community-rooted business...
                </p>
                <Link 
                  href="/news/downing-street-reception" 
                  className="inline-block bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition-colors rounded"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
