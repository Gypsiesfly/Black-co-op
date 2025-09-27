'use client';

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Briefcase, MapPin, Calendar, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function VacanciesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white ${passionOne.variable}`}>
      <div className="pt-2 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-passion-one font-bold text-black mt-8 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're always looking for passionate individuals to join our mission.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-300 p-8 mb-12 rounded-r-lg">
            <h2 className="text-2xl font-passion-one text-black mb-6">No Current Vacancies</h2>
            <p className="mb-6 text-gray-800">
              We don't have any open positions at the moment, but we're always excited to hear from talented people who share our vision. Please check back later for future opportunities.
            </p>
            <p className="text-gray-800 mb-8">
              Black Co-op exists to strengthen and scale cooperative ownership in Black communities across the UK. We work to remove systemic barriers to participation, promote inclusive economic models, and influence policy that supports long-term community wealth building.
            </p>
            
            <div className="mt-8">
              <Link 
                href="/" 
                className="inline-flex items-center border-2 border-black px-6 py-3 rounded-full text-center font-medium hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
