// app/fonts.ts
import { EB_Garamond } from 'next/font/google'
import localFont from 'next/font/local'

// Load EB Garamond from Google Fonts
export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
})

// Load Brown STD locally
export const brownStd = localFont({
  src: [
    {
      path: './fonts/BrownStd-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/BrownStd-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BrownStd-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-brown',
  display: 'swap',
})
