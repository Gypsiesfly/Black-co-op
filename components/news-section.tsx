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
        {/* Africa's Co-operative Legacy — most recent */}
        <NewsCard
          title="Africa’s Co-operative Legacy: from collective tradition to modern entrepreneurship"
          description="Join Black Co-op CIC and the University of East London on Tuesday 17 November for an evening exploring how African and migrant communities have shaped British enterprise and the co-operative movement — and what comes next."
          date="November 17, 2026"
          imageUrl="/images/blog/africas-cooperative-legacy-hero.jpg"
          link="/blog/africas-cooperative-legacy"
          imageClassName="object-top"
        />

        {/* Small Business Sunday */}
        <NewsCard
          title="Small business, good growth in every postcode"
          description="Black Co-op CIC joined Labour Business for Small Business Sunday at Labour Party Conference in Liverpool, where the Business Secretary set out his pitch to be the champion of small firms in Cabinet."
          date="September 27, 2026"
          imageUrl="/images/blog/small-business-sunday-hero.jpg"
          link="/blog/small-business-sunday"
        />

        {/* Co-op Congress 2026 */}
        <NewsCard
          title="Co-operate and we can change the world"
          description="Two days in Birmingham at Co-op Congress 2026: a movement taking stock, and the conversations that could carry it forward."
          date="June 13, 2026"
          imageUrl="/images/blog/congress-2026-hero.jpg"
          link="/blog/co-op-congress-2026"
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
