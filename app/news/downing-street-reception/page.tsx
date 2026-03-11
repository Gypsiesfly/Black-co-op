import Image from 'next/image';
import Link from 'next/link';
// Simple SVG Icons
const GroupIcon = () => (
  <svg className="w-6 h-6 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-6 h-6 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1v-5h3.33l.23 1.2.3 1.5h4.28l-.3-1.5.23-1.2H19v5c0 .55-.45 1-1 1z"/>
  </svg>
);

export default function DowningStreetReception() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/news" className="text-[#FFCC00] hover:underline inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>
      </div>

      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-passion-one text-black mb-6">
            When Co-ops Come Knocking: What the Downing Street Reception Means for Black-Led Co-operatives
          </h1>
          <div className="flex items-center text-gray-600 text-sm mb-8">
            <span>23 June 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
          <div className="relative w-full h-96 md:h-[500px] overflow-hidden mb-12">
            <Image
              src="/images/handshake.jpg"
              alt="A handshake symbolizing business partnership"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm">Business partnership</p>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-lg">
            On the 23rd of June, co-operatives and mutuals got a rare nod from the heart of government.
          </p>
          
          <p>
            Leaders from across the UK co-operative movement were invited to a reception at 10 Downing Street to talk business—not the usual kind, but people-powered, community-rooted business. The kind that puts shared ownership, mutual benefit and long-term thinking before short-term profits.
          </p>
          
          <p>
            We weren't in the room (this time), but we were watching.
          </p>
          
          <p>
            Why? Because what's happening in those rooms—what's finally being recognised at the highest level—is what Black Co-op CIC has been shouting about from the rooftops for years: communities, especially Black communities, need ownership, not just access. Whether it's homes, land, businesses, or the right to shape what happens in our neighbourhoods, we need to move from being users and renters to being decision-makers and co-owners.
          </p>
          
          <p>
            This reception isn't just symbolic. It shows that co-operatives and mutuals are being taken seriously again. That's good news. But it's only half the story.
          </p>
          
          <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-[#FFCC00]">
            <h3 className="font-passion-one text-2xl text-black mb-4">Here's what we're thinking:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GroupIcon />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Representation matters.</h4>
                  <p className="text-gray-700">It's powerful to see mutuals in No.10—but we also need to ask who's representing us in those rooms. Are Black-led co-ops, CICs and mutuals visible? Are our issues on the agenda?</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <HandshakeIcon />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Policy needs to follow.</h4>
                  <p className="text-gray-700">A photo op doesn't change lives. We need real support for the co-operative economy: patient capital, access to land and property, better procurement policies, and training for the next generation of co-operative leaders.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BuildingIcon />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Let's not be the afterthought.</h4>
                  <p className="text-gray-700">Too often, the Black social economy is left to 'catch up' with movements it helped inspire. Black co-ops need to be at the centre of policy conversations—not added in at the end as a diversity tick-box.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-passion-one text-black mt-12 mb-4">So, what does this mean for Black Co-op CIC?</h2>
          
          <p>
            It means we push harder. It means we keep building our network of Black-led co-ops. We continue our work on land justice, on reclaiming spaces, and on shifting the narrative from charity to ownership.
          </p>
          
          <p>
            It also means we'll be knocking on doors (yes, even the ones on Downing Street) and asking:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>Where is the investment for Black-led co-ops?</li>
            <li>How are you supporting community wealth building in places that have been historically locked out of ownership?</li>
            <li>And most of all, who gets to decide what the future economy looks like?</li>
          </ul>
          
          <p>
            We'll keep doing the work from the ground up. But if the people in the suits are finally starting to listen, we've got plenty to say.
          </p>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="font-passion-one text-2xl">Black Co-op CIC</p>
            <p className="text-gray-700">Rooted in community. Fighting for ownership.</p>
          </div>
        </div>
      </article>
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-passion-one mb-6">Share this article</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.27 4.04h-14.5c-1.43 0-2.5 1.2-2.5 2.58v10.84c0 1.38 1.12 2.54 2.5 2.54h14.5c1.38 0 2.5-1.16 2.5-2.54V6.62c0-1.38-1.12-2.58-2.5-2.58zm-.14 15.63l-5.27-4.23-5.27 4.23-5.27-4.23V6.62l5.27 4.23 5.27-4.23 5.27 4.23v8.82z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
