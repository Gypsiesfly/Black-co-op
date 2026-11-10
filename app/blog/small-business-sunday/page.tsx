import Image from "next/image";
import Link from "next/link";

export default function SmallBusinessSunday() {
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
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0f5132] mb-4">
              Black Co-op CIC &middot; Field Notes
            </p>
            <h1 className="font-passion-one text-4xl md:text-5xl mb-4 leading-tight">
              Small business, good growth in every postcode
            </h1>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Black Co-op CIC joined Labour Business for Small Business Sunday at Labour Party Conference in Liverpool, where the Business Secretary set out his pitch to be the champion of small firms in Cabinet.
            </p>
            <div className="flex flex-wrap items-center text-gray-500 text-sm border-t border-b border-gray-200 py-3 mb-8">
              <span>Labour Business</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>Small Business Sunday</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>Sunday 27 September 2026</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>Maldron Hotel, Liverpool</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>Labour Party Conference</span>
            </div>
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden mb-4">
              <Image
                src="/images/blog/small-business-sunday-hero.jpg"
                alt="Speaker at the podium beside the Workday banner at Small Business Sunday"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 italic">
              Small Business Sunday at the Maldron Hotel, Liverpool, Labour Business&rsquo;s opening event of conference week, in partnership with Workday.
            </p>
          </header>

          <div className="text-gray-800 space-y-6 text-lg leading-relaxed">
            <p>
              As Labour Party Conference opened in Liverpool, Chi represented Black Co-op CIC at Small Business Sunday,
              the flagship event of Labour Business, the organisation that has acted as the business community&rsquo;s
              voice within the Labour Party since 1972. In a packed room, with delegates standing at the back, the agenda
              was simple: what do small businesses need from Government to survive and grow?
            </p>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#d34f33] text-base align-super mr-2 font-medium">01</span>
              The Business Secretary&rsquo;s pitch
            </h2>

            <p>
              Jonathan Reynolds, Secretary of State for Business, Innovation, Science and Trade, and a Labour and
              Co-operative MP, gave the keynote. He pledged to be the champion of small businesses and SMEs around the
              Cabinet table, and tied conference&rsquo;s theme of &ldquo;good growth in every postcode&rdquo; directly to
              the health of local firms: thriving town centres and high streets, he argued, depend on thriving small
              businesses. He steered clear of speculation about the forthcoming Budget, acknowledging the tight fiscal
              environment.
            </p>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#d34f33] text-base align-super mr-2 font-medium">02</span>
              What small businesses asked for
            </h2>

            <p>
              Labour Business ran a live consultation with the room, and the sticky-note feedback clustered around
              familiar pressures: red tape and regulation, taxation and business rates. Tina McKenzie, interim National
              Chair of the Federation of Small Businesses, summarised the findings. The &pound;90,000 VAT registration
              threshold came up as a &ldquo;cliff edge&rdquo; that discourages firms from growing, with a call for tapered
              rates instead. Lord Leong, Minister for Small Business and Enterprise, closed the event by pointing to the
              Small Business Protections Bill, including a 60-day payment cap and mandatory interest on late payments.
              The event was chaired by Emily Wallace, with Philip Ross, Vice Chair of Labour Business, framing the
              organisation&rsquo;s role as a bridge between the party and business.
            </p>

            <blockquote className="border-l-4 border-[#0f5132] pl-6 my-10 text-[#0f5132] font-semibold text-2xl leading-snug">
              If growth is to reach every postcode, it has to reach Black-owned businesses and community-owned
              enterprises too.
            </blockquote>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#d34f33] text-base align-super mr-2 font-medium">03</span>
              Why it matters for Black Co-op CIC
            </h2>

            <p>
              Every pressure raised in that room, from the VAT cliff edge and late payments to business rates and access
              to finance, falls hardest on the Black-owned and migrant-led businesses we work with, many of which operate
              informally or at the margins of the formal co-operative economy. With the Government committed to doubling
              the size of the co-operative sector, and a Labour Co-op MP at the Business Department, there is a real
              opening to make sure that growth is inclusive by design rather than by afterthought.
            </p>

            <p>
              The conversations continue. On <strong>Tuesday 17 November</strong>, Philip Ross joins our panel at{" "}
              <em>Africa&rsquo;s Co-operative Legacy</em>, our free event with the University of East London exploring
              how African and migrant communities have shaped British enterprise and the co-operative movement, and what
              doubling the sector could mean for Black businesses.{" "}
              <a
                href="https://www.eventbrite.com/e/africas-legacy-of-collective-enterprise-tickets-2004244606571?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f5132] underline hover:opacity-80"
              >
                Register free on Eventbrite
              </a>
              .
            </p>

            <p className="font-semibold text-[#0f5132] mt-10 pt-6 border-t border-gray-200">
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
