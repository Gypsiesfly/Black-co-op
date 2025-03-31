"use client"

import { useEffect } from "react"

export default function AOSInit() {
  useEffect(() => {
    // Import AOS only on the client side
    const loadAOS = async () => {
      try {
        const AOS = (await import("aos")).default
        const aosCSS = await import("aos/dist/aos.css")

        // Initialize AOS
        AOS.init({
          duration: 800,
          easing: "ease-out",
          once: false,
          offset: 100,
        })
      } catch (error) {
        console.error("Failed to load AOS:", error)
      }
    }

    loadAOS()
  }, [])

  return null
}

