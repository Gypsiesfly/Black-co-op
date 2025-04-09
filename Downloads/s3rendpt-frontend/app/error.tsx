'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
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
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">{error.message || 'An unexpected error occurred.'}</p>
        <Button
          onClick={() => reset()}
          className="bg-amber-500 hover:bg-amber-600 text-white"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}
