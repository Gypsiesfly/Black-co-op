import Image from "next/image";
import Link from "next/link";

export default function CoopCongress2026() {
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
              Co-operate and we can change the world
            </h1>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Two days in Birmingham at Co-op Congress 2026: a movement taking stock, and the conversations that could carry it forward.
            </p>
            <div className="flex items-center text-gray-500 text-sm border-t border-b border-gray-200 py-3 mb-8">
              <span>Co-op Congress 2026</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>12 and 13 June 2026</span>
              <span className="mx-2">&nbsp;|&nbsp;</span>
              <span>The Eastside Rooms, Birmingham</span>
            </div>
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden mb-4">
              <Image
                src="/images/blog/congress-2026-hero.jpg"
                alt="Co-op Congress 2026 at The Eastside Rooms, Birmingham"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 italic">Co-op Congress 2026 at The Eastside Rooms, Birmingham.</p>
          </header>

          <div className="text-gray-800 space-y-6 text-lg leading-relaxed">
            <p>
              This year&rsquo;s Co-op Congress gathered cooperators, policymakers and community leaders from across the
              UK under a single theme, drawn from poet Tony Walsh&rsquo;s <em>This Beautiful Idea</em>: &ldquo;Co-operate
              and we can change the world.&rdquo; Black Co-op CIC was there for both days, and we left energised and
              better connected.
            </p>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#d34f33] text-base align-super mr-2 font-medium">01</span>
              Friday: a movement taking stock
            </h2>

            <p>
              Rose Marley, Chief Executive of Co-operatives UK, opened by reaffirming the movement&rsquo;s resilience and
              its relevance to today&rsquo;s challenges. Andrea Melville of The Co-operative Bank reflected on 150 years
              of ethical banking, bringing it to life through community owned ventures in the West Midlands, from Kings
              Heath Community Centre to Five Senses, a creative cooperative founded by artists from Hong Kong. Her message
              stayed with us: digital innovation matters, but human relationships and community values must stay at the
              heart of the sector.
            </p>

            <figure className="my-8">
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <Image
                  src="/images/blog/congress-2026-chi-publisher.jpg"
                  alt="Dr Christopher A. Johnson with the publisher of Co-op News"
                  fill
                  className="object-cover rounded"
                  style={{ objectPosition: '50% 0%' }}
                />
              </div>
              <figcaption className="text-sm text-gray-500 italic mt-2">
                Dr Christopher A. Johnson with the publisher of Co-op News.
              </figcaption>
            </figure>

            <p>
              A policy workshop set out the case plainly. Cooperatives are gaining ground, but influence has to become
              real change, touching on access to finance, regulation, and a decade of decline in cooperative development
              funding. There was encouraging news too, including major government commitments to community energy and to
              helping communities protect local assets. What struck us most was the visible, active presence of African,
              Caribbean and other minority delegates, many keen to work with Black Co-op CIC to forge practical alliances.
            </p>

            <figure className="my-8">
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <Image
                  src="/images/blog/congress-2026-chi-policy-team.jpg"
                  alt="Dr Christopher A. Johnson with Co-operatives UK's policy team"
                  fill
                  className="object-cover rounded"
                  style={{ objectPosition: '50% 0%' }}
                />
              </div>
              <figcaption className="text-sm text-gray-500 italic mt-2">
                Dr Christopher A. Johnson, Black Co-op CIC&rsquo;s Head of Research and Policy (left), with
                Co-operatives UK&rsquo;s policy team.
              </figcaption>
            </figure>

            <h2 className="font-passion-one text-3xl mt-10 mb-2">
              <span className="text-[#d34f33] text-base align-super mr-2 font-medium">02</span>
              Saturday: conversations that count
            </h2>

            <p>
              Chi met with Denise Scott-McDonald, President of Co-op&rsquo;s National Members&rsquo; Council, in a warm
              exchange about our work and our recent research report, and how we might work together with Co-op. As a
              Black led cooperative, it meant a great deal to Chi to see a Black woman in such a senior leadership role.
            </p>

            <figure className="my-8">
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <Image
                  src="/images/blog/congress-2026-chi-denise.jpg"
                  alt="Chi with Denise Scott-McDonald, President of Co-op's National Members' Council"
                  fill
                  className="object-cover rounded"
                  style={{ objectPosition: '50% 0%' }}
                />
              </div>
              <figcaption className="text-sm text-gray-500 italic mt-2">
                Chi with Denise Scott-McDonald, President of Co-op&rsquo;s National Members&rsquo; Council.
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <figure>
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="/images/blog/congress-2026-chi-louis.jpg"
                    alt="Chi with Louis Burnay, Co-operatives UK"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 italic mt-2">
                  Chi with Louis Burnay, Co-operatives UK.
                </figcaption>
              </figure>
              <figure>
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="/images/blog/congress-2026-chi-rose.jpg"
                    alt="Chi with Rose Marley, Chief Executive of Co-operatives UK"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 italic mt-2">
                  Chi with Rose Marley, Chief Executive of Co-operatives UK.
                </figcaption>
              </figure>
            </div>

            <p>
              It was good to speak with Louis Burnay of Co-operatives UK about the work we are doing, and to congratulate
              him on the success of the National Youth Summit, held the same day, as well as Congress itself. We were
              heartened that he had shared our research report with Rose Marley and the leadership team, and that Rose
              spoke highly of it. She was already well aware of our work, and was keen for us to meet her team in
              Manchester to share more about what we do. We were especially excited, too, by his suggestion of forming a
              steering DEI committee with Black Co-op CIC at the helm.
            </p>

            <figure className="my-8 max-w-sm mx-auto">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/blog/congress-2026-chi-oli.jpg"
                  alt="Chi with Oli Dury, East of England Co-op"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <figcaption className="text-sm text-gray-500 italic mt-2 text-center">
                Chi with Oli Dury, East of England Co-op.
              </figcaption>
            </figure>

            <blockquote className="border-l-4 border-[#0f5132] pl-6 my-10 text-[#0f5132] font-semibold text-2xl leading-snug">
              Our research points to a pattern of presence without participation: Black people are present in cooperative
              spaces, but rarely reach membership and ownership.
            </blockquote>

            <p>
              A properly steered, well resourced approach to inclusion, guided by those with lived experience of the
              barriers, would move equity from the edges of the movement into the heart of its governance and ownership.
              Congress showed there is real willingness to do that work. The conversations we began in Birmingham are
              exactly the relationships we want to build on. This is the start of a dialogue, not the end of one.
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
