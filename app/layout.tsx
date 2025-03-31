import type { Metadata } from 'next'
import { Passion_One } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

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
  title: 'BLACK CO-OP',
  description: 'Advancing Black-Led Cooperative Ownership in London',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${passionOne.variable} ${harmonyOs.variable}`} suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body className="font-harmony-os" suppressHydrationWarning>
        <div id="root" suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  )
}
