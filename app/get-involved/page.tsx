"use client"

import type React from "react"
import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AOSInit from "./aos-init"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function GetInvolvedPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Get Involved")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <div className={`min-h-screen bg-white ${passionOne.variable}`} suppressHydrationWarning>
      {/* Add the AOS initialization component */}
      <AOSInit />

      {/* Hero Section */}
      <div className="bg-white py-16 lg:py-24" suppressHydrationWarning>
        <div className="max-w-[1162px] mx-auto px-4" suppressHydrationWarning>
          <div className="flex flex-col-reverse lg:flex-row relative" suppressHydrationWarning>
            {/* Image for mobile/tablet */}
            <div className="block lg:hidden w-full mb-8" suppressHydrationWarning>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/get-involved-meeting.png"
                  alt="Team meeting in a conference room"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[70%] bg-black p-8 lg:p-12 text-white relative z-10" suppressHydrationWarning>
              <h1 className="font-passion-one text-5xl md:text-6xl lg:text-7xl mb-6">Get Involved</h1>
              <p className="text-lg max-w-2xl mb-8">
                Join us in our mission to empower Black entrepreneurs and foster economic growth in our community. Whether you're
                an aspiring business owner, mentor, or supporter, there's a place for you here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4" suppressHydrationWarning>
                <Link
                  href="mailto:info@blackco-op.org"
                  className="bg-[#FFCC00] text-black px-8 py-3 font-passion-one text-xl w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
                  suppressHydrationWarning
                >
                  Send us a mail
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17V7L15 12L10 17Z" fill="black" />
                  </svg>
                </Link>

                <Link
                  href="https://wa.me/1234567890"
                  className="border border-white text-white px-8 py-3 font-passion-one text-xl w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
                  suppressHydrationWarning
                >
                  Send us a Whatsapp message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17V7L15 12L10 17Z" fill="white" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Desktop image - absolute positioned */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[50%] h-full z-0" suppressHydrationWarning>
              <div className="relative w-full h-full">
                <Image
                  src="/images/get-involved-meeting.png"
                  alt="Team meeting in a conference room"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-16 pt-24" suppressHydrationWarning>
        <div className="max-w-[1162px] mx-auto px-4" suppressHydrationWarning>
          <div className="relative" suppressHydrationWarning>
            {/* Image container - positioned at the top */}
            <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[85%] h-[400px] -translate-y-1/3 z-0" suppressHydrationWarning>
              <div className="relative w-full h-full">
                <Image
                  src="/images/contact-form-man.png"
                  alt="Professional in urban setting"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Contact form card */}
            <div className="w-[95%] mx-auto relative z-10" suppressHydrationWarning>
              <div className="bg-black p-8 lg:p-12 relative" suppressHydrationWarning>
                <h2 className="font-passion-one text-4xl text-white mb-4">Want to reach us?</h2>

                <p className="text-white text-sm mb-8" suppressHydrationWarning>
                  If you need more information, want to explore partnerships, or require support, please reach out to
                  us! We're eager to hear from you. Just fill out this form, and we'll respond as quickly as we can.
                </p>

                <div className="flex gap-4 mb-8" suppressHydrationWarning>
                  <Link
                    href="https://twitter.com/blackcoop"
                    className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center"
                    suppressHydrationWarning
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.0531 0H22.5998L14.8531 8.91333L23.9998 21H16.8131L11.2131 13.6733L4.7731 21H1.22643L9.5331 11.48L0.759766 0H8.1331L13.2198 6.72L19.0531 0ZM17.7931 18.8533H19.7531L7.05977 2.00667H4.9131L17.7931 18.8533Z"
                        fill="black"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="https://instagram.com/blackcoop"
                    className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center"
                    suppressHydrationWarning
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                        fill="black"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="mailto:info@blackcoop.org"
                    className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center"
                    suppressHydrationWarning
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white text-white px-4 py-3 placeholder-white"
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white text-white px-4 py-3 placeholder-white"
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white text-white px-4 py-3 placeholder-white"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-transparent border border-white text-white px-4 py-3 placeholder-white resize-none"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-[#FFCC00] text-black px-8 py-3 font-passion-one text-xl inline-flex items-center gap-2"
                  >
                    Send message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17V7L15 12L10 17Z" fill="black" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer is now handled by the global Footer component in the root layout */}
    </div>
  )
}
