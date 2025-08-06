import Image from "next/image";
import Link from "next/link";

export default function BlackCoopSecuresFunding() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/news" className="text-[#FFCC00] hover:underline inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>
        </div>
        
        <article className="prose lg:prose-xl max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl font-passion-one mb-2">Black Co-op Secures Funding to Champion Policy Reform and Black Leadership in the Co-operative Sector</h1>
            <div className="flex items-center text-gray-600 text-sm mb-8">
              <span>6 August 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden mb-12">
              <Image
                src="/images/success.jpg"
                alt="Black Co-op Secures Funding"
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>
          <div className="text-gray-800 space-y-8 text-lg leading-relaxed">
          <p>We’re delighted to share that Black Co-op has been awarded new funding from Trust for London, marking a significant moment in our journey to shape a more inclusive, representative, and just co-operative economy. At a time when the UK Government is actively exploring how to double the size of the co-operative and mutuals sector, our work is set to ensure that Black communities are not only included in this growth but are driving it.</p>
          <p>This funding will support a bold and timely programme of work designed to tackle deep-rooted structural exclusion and elevate the voice, leadership, and innovation of Black-led co-operatives. Our approach is intentionally focused not on wholesale reform, but on the key pressure points where exclusion is most acutely reproduced: in national policy, in sector networks, and within the institutions that define how co-operatives are governed, supported and resourced.</p>
          <p>The need for this intervention is urgent. Black-owned businesses already make a vital and growing contribution to the UK economy. A 2021 report by the Federation of Small Businesses and the Centre for Research in Ethnic Minority Entrepreneurship (CRÈME) estimates that Black-led businesses contribute around £25 billion annually. More broadly, ethnic minority-led businesses contribute over £74 billion each year, employing nearly 3 million people and making up about one-sixth of all UK businesses. Yet despite these figures, Black-led co-ops remain largely invisible in policy discussions and sector strategy.</p>
          <p>With the UK Government’s commitment to a Call for Evidence on Co-operatives and Mutuals launched at a Downing Street reception in June 2025 now underway, we are stepping into a rare window of opportunity. Our work begins during a critical policy moment, allowing us and our partners to contribute insights, shape legal frameworks, and influence decisions as they are being made. Black Co-op is committed to ensuring that Black communities are not only represented in these processes but are actively shaping the national policy agenda from the outset.</p>
          <p>Over the next four years, we will deliver a range of strategic interventions. This includes producing a co-produced Black Co-operative Policy Playbook, convening key roundtables between policymakers and Black co-op leaders, establishing a national assembly of Black co-operative leaders, and launching a dedicated policy fellowship to embed lived experience and racial justice into cooperative governance. Alongside this, we will map the presence and needs of Black-led co-ops across the UK, strengthen peer learning networks, and connect Black cooperators into a more supportive ecosystem.</p>
          <p>This is about much more than research and advocacy. It’s about building power, voice and ownership within Black communities. Our aim is to unlock the potential of co-operative models to deliver genuine economic democracy enabling Black people to create decent work, build collective wealth, and have real influence over the systems that shape their lives.</p>
          <p>We are incredibly grateful to Trust for London for believing in this vision and for supporting us to take it forward at such a pivotal moment for the sector. Their commitment to addressing inequality in London and beyond continues to open space for systemic change.</p>
          <p>We are excited about what lies ahead and are keen to connect with others, whether you’re a policymaker, funder, co-operator, or simply someone passionate about equity and justice in the economy. This is a collective effort, and we look forward to working with those who share our belief in a co-operative future that includes us all.</p>
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
