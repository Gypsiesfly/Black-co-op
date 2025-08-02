'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <section className="relative">
      <Image src="/images/footer-bg.png" alt="Footer background" fill className="object-cover" />
      <div className="relative z-10 py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black rounded-2xl overflow-hidden">
            <div className="px-6 sm:px-12 py-8 sm:py-16">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-16">
                {/* Left side - Title and button */}
                <div className="mb-8 md:mb-0">
                  <h3 className="font-passion-one font-normal text-[40px] sm:text-[50px] md:text-[70px] leading-tight mb-4 sm:mb-6 text-white animate-title">
                    Want to know <br />
                    our <span className="text-[#FFCC00]">goals?</span>
                  </h3>
                  <Link
                    href="/our-goal"
                    className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-passion-one text-[20px] flex items-center justify-center gap-2 w-fit hover:bg-white/10 transition-colors animate-button"
                  >
                    Learn more
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/arrow-icon.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full invert"
                      />
                    </div>
                  </Link>
                </div>

                {/* Right side - Logo and social icons */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 sm:mb-6 flex flex-col items-center">
                    <div className="bg-[#FFCC00] p-2 sm:p-3 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] flex items-center justify-center mb-1">
                      <Image src="/images/site-icon.png" alt="BLACK CO-OP" width={40} height={40} />
                    </div>
                    <div className="text-[6px] text-white text-center leading-tight">
                      ADVANCING BLACK-LED
                      <br />
                      COOPERATIVE
                      <br />
                      OWNERSHIP IN LONDON
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <Link
                      href="#"
                      className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                      <Image src="/images/x-icon.svg" alt="X" width={20} height={20} />
                    </Link>
                    <Link
                      href="#"
                      className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                      <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                    </Link>
                    <Link
                      href="#"
                      className="bg-[#FFCC00] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                      <Image src="/images/email-icon.svg" alt="Email" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Supporters and Registration */}
              <div className="border-t border-white/50 pt-6 pb-4 mb-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-white text-sm font-medium mb-2">Our Supporters:</p>
                    <div className="bg-black p-3 rounded-lg">
                      <Image 
                        src="/images/Trust for London.png" 
                        alt="Trust for London" 
                        width={120} 
                        height={60}
                        className="object-contain h-12 w-auto"
                      />
                    </div>
                  </div>
                  <div className="text-white text-xs text-center md:text-right">
                    <p className="font-medium mb-1">Registration England:</p>
                    <p>BLACK CO-OP CIC</p>
                    <p>Company number 16347426</p>
                  </div>
                </div>
              </div>

              {/* Bottom section with copyright and languages */}
              <div className="border-t border-transparent pt-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs text-white">© 2023 — BLACK CO-OP CIC. ALL RIGHTS RESERVED</p>
                <div className="flex gap-4 text-xs text-white mt-2 md:mt-0">
                  <span>GER</span>
                  <span>SPA</span>
                  <span>SWE</span>
                  <span className="text-[#FFCC00]">ENG</span>
                  <span>RUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
