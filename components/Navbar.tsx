'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  activePath?: string;
}

export function Navbar({ activePath }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Set active link based on path
  useEffect(() => {
    if (activePath) {
      if (activePath === '/') setActiveLink('Home');
      else if (activePath.startsWith('/our-goal')) setActiveLink('Our goal');
      else if (activePath.startsWith('/meet-the-team') || activePath.startsWith('/vacancies')) {
        setActiveLink('Meet the team');
        setShowMobileSubmenu(true);
      }
      else if (activePath.startsWith('/research')) setActiveLink('Research');
      else if (activePath.startsWith('/news')) setActiveLink('News');
      else if (activePath.startsWith('/get-involved')) setActiveLink('Get Involved');
    }
  }, [activePath]);

  // Set mounted state after component mounts (client-side only)
  useEffect(() => {
    setMounted(true);
    // Auto-close mobile menu on route change
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setShowMobileSubmenu(false);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-black py-3 px-4 md:px-8 flex items-center justify-between relative">
        <div className="flex items-center">
          <Image 
            src="/images/black-co-op-logo.png" 
            alt="BLACK CO-OP" 
            width={120} 
            height={30} 
            className="h-8 w-auto"
            priority
          />
        </div>
      </div>
    );
  }

  // Helper function to determine if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return activePath === '/';
    }
    return activePath?.startsWith(path);
  };

  return (
    <div className="font-passion-one">
      {/* Top yellow bar */}
      <div className="bg-[#FFCC00] py-1 px-4 text-xs text-black text-left font-sans">
        Want to join the movement?{" "}
        <Link 
          href="/get-involved" 
          className="underline font-sans" 
          onClick={() => setActiveLink('Get Involved')}
        >
          Send us a message
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-black py-3 px-4 md:px-8 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/" onClick={() => setActiveLink('Home')}>
            <Image 
              src="/images/black-co-op-logo.png" 
              alt="BLACK CO-OP" 
              width={120} 
              height={30} 
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative">
            {activeLink === 'Home' && (
              <Image
                src="/images/hyperlink.png"
                alt=""
                width={100}
                height={50}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <Link 
              href="/" 
              className={`font-passion-one text-[32px] relative z-10 block px-4 py-1 text-white`}
              onClick={() => setActiveLink('Home')}
            >
              Home
            </Link>
          </div>
          
          <div className="relative">
            {activeLink === 'Our goal' && (
              <Image
                src="/images/hyperlink.png"
                alt=""
                width={100}
                height={50}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <Link 
              href="/our-goal" 
              className={`font-passion-one text-[32px] relative z-10 block px-4 py-1 text-white`}
              onClick={() => setActiveLink('Our goal')}
            >
              Our goal
            </Link>
          </div>
          
          <div className="relative group">
            {false && (
              <Image
                src="/images/hyperlink-team.png"
                alt=""
                width={180}
                height={50}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <div className="flex items-center">
              <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
              <Link 
                href="/meet-the-team" 
                className={`font-passion-one text-[32px] relative z-10 block pr-2 py-1 ${activeLink==='Meet the team' ? 'text-[#FFCC00]' : 'text-white'}`}
                onClick={() => setActiveLink('Meet the team')}
              >
                Meet the team
              </Link>
              <ChevronDown className="h-5 w-5 text-white group-hover:rotate-180 transition-transform duration-200" />
            </div>
            
            {/* Desktop Dropdown */}
            <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link 
                href="/meet-the-team" 
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 font-passion-one text-xl ${activePath === '/meet-the-team' ? 'text-[#FFCC00] font-bold' : ''}`}
                onClick={() => setActiveLink('Meet the team')}
              >
                The team
              </Link>
              <Link 
                href="/vacancies" 
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 font-passion-one text-xl ${activePath === '/vacancies' ? 'text-[#FFCC00] font-bold' : ''}`}
                onClick={() => setActiveLink('Meet the team')}
              >
                Vacancies
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {activeLink === 'Research' && (
              <Image
                src="/images/hyperlink.png"
                alt=""
                width={100}
                height={50}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <Link 
              href="/research" 
              className={`font-passion-one text-[32px] relative z-10 block px-4 py-1 text-white`}
              onClick={() => setActiveLink('Research')}
            >
              Research
            </Link>
          </div>
          
          <div className="relative">
            {activeLink === 'News' && (
              <Image
                src="/images/hyperlink.png"
                alt=""
                width={100}
                height={50}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <Link 
              href="/news" 
              className={`font-passion-one text-[32px] relative z-10 block px-4 py-1 text-white`}
              onClick={() => setActiveLink('News')}
            >
              News
            </Link>
          </div>
          
          <div className="relative">
            {activeLink === 'Get Involved' && (
              <Image
                src="/images/hyperlink.png"
                alt=""
                width={80}
                height={40}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: '80%', height: 'auto' }}
              />
            )}
            <Link
              href="/get-involved"
              className="font-passion-one text-[32px] relative z-10 block px-4 py-1 bg-[#FFCC00] border-2 border-black text-black rounded-[45px] hover:bg-yellow-400 transition-colors"
              onClick={() => setActiveLink('Get Involved')}
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FFCC00] w-12 h-12 flex items-center justify-center self-end"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex flex-col gap-6 mt-8 flex-grow">
              {/* Home */}
              <div className="relative w-fit mx-auto">
                {activeLink === 'Home' && (
                  <Image
                    src="/images/hyperlink.png"
                    alt=""
                    width={100}
                    height={50}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
                <Link
                  href="/"
                  onClick={() => {
                    setActiveLink('Home');
                    setMobileMenuOpen(false);
                  }}
                  className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full text-white` }
                >
                  Home
                </Link>
              </div>

              {/* Our Goal */}
              <div className="relative w-fit mx-auto">
                {activeLink === 'Our goal' && (
                  <Image
                    src="/images/hyperlink.png"
                    alt=""
                    width={100}
                    height={50}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
                <Link
                  href="/our-goal"
                  onClick={() => {
                    setActiveLink('Our goal');
                    setMobileMenuOpen(false);
                  }}
                  className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full text-white` }
                >
                  Our goal
                </Link>
              </div>

              {/* Meet the Team with Collapsible Submenu */}
              <div className="flex flex-col items-center">
                <div className="relative w-fit mx-auto">
                  {false && (
                    <Image
                      src="/images/hyperlink-team.png"
                      alt=""
                      width={180}
                      height={50}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink('Meet the team');
                      setShowMobileSubmenu(!showMobileSubmenu);
                    }}
                    className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full ${activeLink==='Meet the team' ? 'text-[#FFCC00]' : 'text-white'} flex items-center`}
                  >
                    <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                    Meet the team
                    <ChevronDown 
                      className={`ml-1 h-5 w-5 transition-transform duration-200 ${showMobileSubmenu ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                </div>
                
                {showMobileSubmenu && (
                  <div className="pl-6 py-1 mt-1 space-y-2">
                    <Link
                      href="/meet-the-team"
                      onClick={() => {
                        setActiveLink('Meet the team');
                        setMobileMenuOpen(false);
                      }}
                      className="block text-white font-passion-one text-[24px] sm:text-[28px] py-1 hover:bg-gray-800 px-4 rounded"
                    >
                      The team
                    </Link>
                    <Link
                      href="/vacancies"
                      onClick={() => {
                        setActiveLink('Meet the team');
                        setMobileMenuOpen(false);
                      }}
                      className="block text-white font-passion-one text-[24px] sm:text-[28px] py-1 hover:bg-gray-800 px-4 rounded"
                    >
                      Vacancies
                    </Link>
                  </div>
                )}
              </div>

              {/* Research */}
              <div className="relative w-fit mx-auto">
                {activeLink === 'Research' && (
                  <Image
                    src="/images/hyperlink.png"
                    alt=""
                    width={100}
                    height={50}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
                <Link
                  href="/research"
                  onClick={() => {
                    setActiveLink('Research');
                    setMobileMenuOpen(false);
                  }}
                  className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full text-white` }
                >
                  Research
                </Link>
              </div>

              {/* News */}
              <div className="relative w-fit mx-auto">
                {activeLink === 'News' && (
                  <Image
                    src="/images/hyperlink.png"
                    alt=""
                    width={100}
                    height={50}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
                <Link
                  href="/news"
                  onClick={() => {
                    setActiveLink('News');
                    setMobileMenuOpen(false);
                  }}
                  className={`font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full text-white` }
                >
                  News
                </Link>
              </div>

              {/* Get Involved */}
              <div className="relative w-fit mx-auto mt-4">
                {activeLink === 'Get Involved' && (
                  <Image
                    src="/images/hyperlink.png"
                    alt=""
                    width={80}
                    height={40}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: '80%', height: 'auto' }}
                  />
                )}
                <Link
                  href="/get-involved"
                  onClick={() => {
                    setActiveLink('Get Involved');
                    setMobileMenuOpen(false);
                  }}
                  className="font-passion-one text-[28px] sm:text-[32px] relative z-10 block px-4 py-1 rounded-full bg-[#FFCC00] text-black"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            {/* Mobile menu footer */}
            <div className="mt-auto pt-6 border-t border-white/20">
              <div className="flex justify-center gap-4 mb-4">
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <Image src="/images/x-icon.svg" alt="X (Twitter)" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-[#FFCC00] w-10 h-10 flex items-center justify-center">
                  <Image src="/images/email-icon.svg" alt="Email" width={20} height={20} />
                </Link>
              </div>
              <p className="text-center text-white/50 text-sm">
                © {new Date().getFullYear()} BLACK CO-OP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
