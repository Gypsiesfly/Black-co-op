import Image from "next/image";
import Link from "next/link";
import { Briefcase, Clock, MapPin, Calendar } from "lucide-react";

export default function JoinOurTeam() {
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
            <h1 className="text-4xl font-passion-one mb-2">Join Our Team: Policy & Research Officer Position Now Open</h1>
            <div className="flex items-center text-gray-600 text-sm mb-8">
              <span>6 August 2025</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
            </div>
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden mb-12">
              <Image
                src="/images/job.jpg"
                alt="Join Our Team - Policy & Research Officer Position"
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>
          
          <div className="text-gray-800 space-y-8 text-lg leading-relaxed">
            <p>
              Black Co-op is excited to announce that we're recruiting for a Policy & Research Officer to join our growing team. This is a unique opportunity to contribute to our mission of building a more equitable economy through cooperative ownership and Black leadership.
            </p>
            
            <h2 className="text-2xl font-passion-one text-black mt-12 mb-6">About the Role</h2>
            <p>
              As our Policy & Research Officer, you'll play a key role in shaping national policy, conducting vital research, and strengthening the Black co-operative movement across the UK. This position is perfect for someone passionate about racial justice, economic empowerment, and alternative economic models.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Part-time</h4>
                    <p className="text-gray-600">21 hours/week</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">£22,400/year</h4>
                    <p className="text-gray-600">(plus NI and pension)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">London-based with flexible working</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Apply by</h4>
                    <p className="text-gray-600">5PM, Thursday 29 August 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/vacancies" 
                  className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center"
                >
                  Learn more and apply now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <h2 className="text-2xl font-passion-one text-black mt-12 mb-6">Why Join Us?</h2>
            <p>
              This is more than just a job—it's an opportunity to be at the forefront of building economic alternatives that center racial and economic justice. You'll be joining a passionate team committed to creating lasting change in our communities through cooperative ownership models.
            </p>
            
            <p>
              We're looking for someone with experience in research and policy, a strong commitment to racial justice, and a passion for community-led economic development. If this sounds like you, we'd love to hear from you!
            </p>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-passion-one text-black mb-4">How to Apply</h3>
              <p className="mb-4">For more details about the role and how to apply, please visit our vacancies page:</p>
              <a 
                href="/vacancies" 
                className="inline-block bg-[#FFCC00] text-black font-medium px-6 py-3 rounded-full hover:bg-[#e6b800] transition-colors"
              >
                View Full Job Description
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-passion-one mb-6">Share this opportunity</h3>
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
