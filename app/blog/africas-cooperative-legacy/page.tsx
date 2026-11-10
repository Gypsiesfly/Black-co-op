import Image from "next/image";
import Link from "next/link";

export default function AfricasCooperativeLegacy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-[#FFCC00] hover:underline inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <header className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#b57f08] mb-4">
              Black Co-op CIC &middot; News
            </p>
            <h1 className="font-passion-one text-4xl md:text-5xl mb-4 leading-tight">
              Africa&rsquo;s Co-operative Legacy: from collective tradition to modern entrepreneurship
            </h1>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Join Black Co-op CIC and the University of East London on Tuesday 17 November for an evening exploring how African and migrant communities have shaped British enterprise and the co-operative movement &mdash; and what comes next.
            </p>
            <div className="flex flex-wrap items-center text-gray-500 text-sm border-t border-b border-gray-200 py-3 mb-8">
              <span>Tuesday 17 November 2026</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>5:30pm</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>UEL Stratford Campus, Room US1.01</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>Free &mdash; registration required</span>
            </div>
            <div className="w-full overflow-hidden mb-4">
              <Image
                src="/images/blog/africas-cooperative-legacy-hero.jpg"
                alt="Event flyer: Africa's Co-operative Legacy, Tuesday 17 November 2026, UEL Stratford Campus"
                width={909}
                height={1287}
                className="w-full h-auto rounded shadow-md"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 italic">
              Africa&rsquo;s Co-operative Legacy &mdash; Black Co-op &times; University of East London.
            </p>
          </header>

          <div className="text-gray-800 space-y-6 text-lg leading-relaxed">
            <p>
              From traditional African savings circles and collective trading to Black British businesses, housing
              co-operatives and community ownership campaigns, co-operation has long helped communities create
              opportunities and build wealth together. On Tuesday 17 November, Black Co-op CIC is partnering with the
              University of East London&rsquo;s Royal Docks School of Business and Law to bring that story &mdash; and
              its future &mdash; to the stage.
            </p>

            <p>
              With the UK Government committed to doubling the size of the co-operative sector, this is a timely
              conversation. What could that growth mean for Black businesses, for local high streets, and for
              communities seeking greater ownership of their economic future? We&rsquo;ll be connecting the lessons of
              the past with the opportunities ahead.
            </p>

            <div className="bg-[#161512] text-white rounded-md p-6 md:p-7 my-9 grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5 text-[15px] leading-normal">
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#e3a81c] font-semibold mb-1">
                  When
                </span>
                Tuesday 17 November 2026
                <br />
                5:30pm
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#e3a81c] font-semibold mb-1">
                  Where
                </span>
                University of East London, Stratford Campus
                <br />
                Room US1.01 (USS Campus)
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#e3a81c] font-semibold mb-1">
                  Cost
                </span>
                Free &mdash; registration required
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#e3a81c] font-semibold mb-1">
                  Book
                </span>
                <a
                  href="https://www.eventbrite.com/e/africas-legacy-of-collective-enterprise-tickets-2004244606571?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#e3a81c] text-[#161512] font-bold no-underline px-6 py-3 rounded mt-1.5 hover:bg-[#f0b82e] transition-colors"
                >
                  Register on Eventbrite
                </a>
              </div>
            </div>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#b57f08] text-base align-super mr-2 font-medium">01</span>
              Our speakers
            </h2>

            <p>
              We&rsquo;re delighted to be joined by diaspora leaders, entrepreneurs and co-operative practitioners from
              across policy, business, academia and the arts.
            </p>

            <ul className="list-none p-0 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <li className="border-t-2 border-[#e3a81c] pt-2.5 text-[15.5px] leading-snug">
                <strong className="block text-[17px] text-gray-900">Ugo Ikokwu</strong>
                <span className="text-[#6b6457]">
                  Grants Manager, Trust for London; Lead, Racial and Economic Justice Fund
                </span>
              </li>
              <li className="border-t-2 border-[#e3a81c] pt-2.5 text-[15.5px] leading-snug">
                <strong className="block text-[17px] text-gray-900">Dr Nero Ughwujabo</strong>
                <span className="text-[#6b6457]">
                  Founder, Pinecone Strategy; former Special Adviser to Theresa May
                </span>
              </li>
              <li className="border-t-2 border-[#e3a81c] pt-2.5 text-[15.5px] leading-snug">
                <strong className="block text-[17px] text-gray-900">Philip Ross</strong>
                <span className="text-[#6b6457]">Vice Chair, Labour Business</span>
              </li>
              <li className="border-t-2 border-[#e3a81c] pt-2.5 text-[15.5px] leading-snug">
                <strong className="block text-[17px] text-gray-900">Professor Shampa Roy-Mukherjee</strong>
                <span className="text-[#6b6457]">Economist and Academic, University of East London</span>
              </li>
              <li className="border-t-2 border-[#e3a81c] pt-2.5 text-[15.5px] leading-snug">
                <strong className="block text-[17px] text-gray-900">Denise Scott-McDonald</strong>
                <span className="text-[#6b6457]">President, Co-op Group National Members&rsquo; Council</span>
              </li>
              <li className="border-t-2 border-[#e3a81c] pt-2.5 text-[15.5px] leading-snug">
                <strong className="block text-[17px] text-gray-900">Bola Agbaje</strong>
                <span className="text-[#6b6457]">Award-winning Playwright and Screenwriter</span>
              </li>
            </ul>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#b57f08] text-base align-super mr-2 font-medium">02</span>
              What we&rsquo;ll explore
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#fbf1d6] rounded-md p-4">
                <b className="block text-xs tracking-wider uppercase text-[#b57f08] mb-2">Collective traditions</b>
                <p className="m-0 text-[15px] leading-normal text-gray-800">
                  What African savings circles, trading networks and mutual support can teach us about entrepreneurship
                  today.
                </p>
              </div>
              <div className="bg-[#fbf1d6] rounded-md p-4">
                <b className="block text-xs tracking-wider uppercase text-[#b57f08] mb-2">Black British enterprise</b>
                <p className="m-0 text-[15px] leading-normal text-gray-800">
                  How Black and migrant businesses have shaped local high streets, housing co-operatives and community
                  ownership campaigns.
                </p>
              </div>
              <div className="bg-[#fbf1d6] rounded-md p-4">
                <b className="block text-xs tracking-wider uppercase text-[#b57f08] mb-2">The opportunity ahead</b>
                <p className="m-0 text-[15px] leading-normal text-gray-800">
                  What doubling the UK co-operative sector could mean for Black businesses and communities seeking
                  greater ownership of their economic future.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#e3a81c] pl-6 my-10 text-[#b57f08] font-semibold text-2xl leading-snug">
              Celebrating our collective heritage. Building our shared economic future.
            </blockquote>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#b57f08] text-base align-super mr-2 font-medium">03</span>
              Join us
            </h2>

            <p>
              The event is free and open to all, but places are limited and registration is required.{" "}
              <a
                href="https://www.eventbrite.com/e/africas-legacy-of-collective-enterprise-tickets-2004244606571?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b57f08] underline hover:opacity-80"
              >
                Book your free place on Eventbrite
              </a>
              , or search &ldquo;Africa&rsquo;s Legacy of Collective Enterprise&rdquo; on Eventbrite. For any
              enquiries, email{" "}
              <a href="mailto:info@blackco-op.com" className="text-[#b57f08] underline hover:opacity-80">
                info@blackco-op.com
              </a>
              .
            </p>

            <p>We look forward to seeing you in Stratford on 17 November.</p>

            <p className="font-semibold text-[#b57f08] mt-10 pt-6 border-t border-gray-200">
              Black Co-op CIC
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-passion-one mb-6">Share this article</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#FFCC00] transition-colors">
                <span className="sr-only">Share on Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FFCC00] transition-colors">
                <span className="sr-only">Share on LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FFCC00] transition-colors">
                <span className="sr-only">Share on Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
