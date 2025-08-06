'use client';

import { Passion_One } from 'next/font/google';
import localFont from 'next/font/local';
import { useEffect } from 'react';

// Initialize fonts
const passionOne = Passion_One({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-passion-one',
  display: 'swap',
});

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
    },
  ],
  variable: '--font-harmony-os',
  display: 'swap',
});

export default function FontInitializer() {
  useEffect(() => {
    // Add font variables to document element
    document.documentElement.classList.add(
      passionOne.variable,
      harmonyOs.variable
    );

    // Add global styles for font families
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --font-passion-one: ${passionOne.style.fontFamily};
        --font-harmony-os: ${harmonyOs.style.fontFamily};
      }
      body {
        font-family: var(--font-harmony-os), sans-serif;
      }
      h1, h2, h3, h4, h5, h6, .font-passion-one {
        font-family: var(--font-passion-one), var(--font-harmony-os), sans-serif;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.head.removeChild(style);
      document.documentElement.classList.remove(
        passionOne.variable,
        harmonyOs.variable
      );
    };
  }, []);

  return null;
}
