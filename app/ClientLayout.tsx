'use client';

import { useEffect } from 'react';
import { Providers } from './providers';
import FontInitializer from '@/components/FontInitializer';

// Suppress hydration warnings for this component
const suppressHydrationWarning = true;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This effect will run only on the client side
  useEffect(() => {
    // Remove any extension-added attributes that might cause hydration mismatch
    document.documentElement.removeAttribute('data-new-gr-c-s-check-loaded');
    document.documentElement.removeAttribute('data-gr-ext-installed');
  }, []);

  return (
    <html lang="en" className="font-passion-one" suppressHydrationWarning={suppressHydrationWarning}>
      <head>
        <FontInitializer />
      </head>
      <body 
        className="min-h-screen flex flex-col"
        suppressHydrationWarning={suppressHydrationWarning}
      >
        <div className="flex-grow">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
