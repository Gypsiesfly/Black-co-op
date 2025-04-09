'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-8">A critical error occurred. Please try again.</p>
            <Button
              onClick={() => reset()}
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
