import type { Metadata } from 'next'
import { Passion_One } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import ScrollToTop from '@/components/scroll-to-top'
import { Footer } from '@/components/footer'

const passionOne = Passion_One({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-passion-one',
})

const harmonyOs = localFont({
  src: [
    {
      path: '../public/fonts/HarmonyOS_Sans_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HarmonyOS_Sans_Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/HarmonyOS_Sans_Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-harmony-os'
})

export const metadata: Metadata = {
  title: 'Black Co-op CIC',
  description: 'Black Co-op CIC is a Black-led cooperative dedicated to creating sustainable opportunities for our communities.',
  icons: {
    icon: '/images/site-icon.png',
    shortcut: '/images/site-icon.png',
    apple: '/images/site-icon.png',
  },
  other: {
    'material-icons': 'https://fonts.googleapis.com/icon?family=Material+Icons',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${passionOne.variable} ${harmonyOs.variable}`} suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body className={`${harmonyOs.variable} font-sans antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
