import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { brownStd, ebGaramond } from "./fonts"
import { ErrorBoundary } from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "S3renDPT - AI Document Reader",
  description: "AI-powered document reading platform with emotionally expressive narration",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={brownStd.className + ' ' + ebGaramond.className + ' font-brown'} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false} 
          disableTransitionOnChange
        >
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}