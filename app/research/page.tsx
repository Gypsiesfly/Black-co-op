'use client'

import Image from "next/image"
import { useEffect } from "react"
import { setupScrollAnimations } from "@/utils/scrollAnimation"
import Link from "next/link"

export default function ResearchPage() {
  useEffect(() => {
    setupScrollAnimations()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-1/2">
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">
                Research & Insights
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-lg">
                These are the various publications from our esteemed members, showcasing their remarkable research, innovative ideas, and contributions to the field. Each publication reflects the dedication and expertise of our community, providing valuable insights and knowledge.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/dan-dimmock-3mt71MKGjQ0-unsplash.jpg"
                  alt="Research and insights on cooperative economics"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-passion-one text-4xl md:text-5xl text-center mb-12">Publications</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Publication Item */}
            <div>
              <h3 className="font-passion-one text-2xl mb-2">The Black Cooperative Economy: Collective Courage</h3>
              <p className="text-gray-600 mb-4">By Jessica Gordon Nembhard | 2023</p>
              <p className="mb-4">
                A groundbreaking exploration of the history and impact of Black cooperative economics, 
                highlighting the power of collective action and economic solidarity in Black communities. 
                This work provides valuable insights into how cooperative models can be leveraged for 
                economic justice and community empowerment.
              </p>
              <Link href="/publications/black-cooperative-economy" className="text-black font-medium hover:underline">
                Read Full Publication →
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-black text-white font-passion-one text-xl px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
