'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsCard } from './news-card';

export function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const scrollPosition = window.scrollY;
          element.style.setProperty('--scroll', '1');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section 
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
      style={{
        '--scroll': '0',
      } as React.CSSProperties}
    >
      <div className="relative pb-10 mb-12">
        <h2 className="text-center font-passion-one text-[36px] xs:text-[40px] sm:text-[54px] mb-4 animate-title">
          Latest News
        </h2>
        <div className="h-1 bg-gray-200 w-full overflow-hidden">
          <div 
            className="h-full bg-[#FFCC00] transition-all duration-1000 ease-out transform -translate-x-full"
            style={{
              width: '100%',
              animation: 'slideIn 1.5s forwards',
              animationPlayState: 'paused',
              animationDelay: 'calc(var(--scroll) * -1s)'
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* A New Chapter for Mutual Power */}
        <NewsCard
          title="A New Chapter for Mutual Power"
          description="Reflections from Black Co-op on the 2025 Co-operative Economy Report and what it means for the future of collective ownership."
          date="September 29, 2025"
          imageUrl="/images/New Chapter 1.jpg"
          link="/news/a-new-chapter-for-mutual-power"
        />
        
        {/* Kenyan Connection */}
        <NewsCard
          title="Kenyan Connection: Building Bridges Across Continents"
          description="Dr Christopher A. Johnson meets with Strathmore University Business School to discuss Fair Trade, co-operatives, and SME research collaboration."
          date="September 29, 2025"
          imageUrl="/images/Kenyan Connection.jpg"
          link="/news/kenyan-connection-building-bridges-across-continents"
        />
        
        {/* Black Co-op Secures Funding */}
        <NewsCard
          title="Black Co-op Secures Funding to Champion Policy Reform and Black Leadership in the Co-operative Sector"
          description="Black Co-op has been awarded new funding from Trust for London to drive policy reform and Black leadership in the co-operative sector."
          date="August 6, 2025"
          imageUrl="/images/success.jpg"
          link="/blog/black-co-op-secures-funding"
        />
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/news" 
          className="inline-block bg-[#FFCC00] text-black font-passion-one text-xl px-8 py-3 rounded-[45px] hover:bg-[#e6b800] transition-colors"
        >
          View All News
        </Link>
      </div>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
