'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import ScrollToTop from '@/components/scroll-to-top';
import { Footer } from '@/components/footer';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Set mounted state after component mounts (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <ScrollToTop />
      {mounted && <Navbar activePath={pathname || '/'} />}
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
