import Image from 'next/image';
import Link from 'next/link';

export default function KenyanConnectionPage() {
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
        
        <article className="prose max-w-none prose-lg">
          <header className="mb-12">
            <h1 className="font-passion-one text-4xl md:text-5xl text-black mb-4">
              Kenyan Connection: Building Bridges Across Continents
            </h1>
            <p className="text-gray-600">Published on September 29, 2025</p>
          </header>
          
          <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Kenyan Connection.jpg"
              alt="Dr Christopher A. Johnson and Clive Asande in discussion"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Last week, our new Head of Policy Research, Dr Christopher A. Johnson, met with Clive Asande, 
              Business Development Manager of Strathmore University Business School (SBS), Nairobi, Kenya. 
              The discussions included Fair Trade, co-operatives, and research gaps in the performance of 
              small and medium-sized enterprises (SMEs). The exchange was insightful and laid the groundwork 
              for future collaboration.
            </p>
            
            <p>
              This exciting development marks a significant step in our mission to forge international 
              partnerships that strengthen the Black co-operative movement globally. The potential 
              collaboration with Strathmore University Business School opens doors to shared research, 
              knowledge exchange, and cross-cultural learning opportunities.
            </p>
            
            <p>
              Stay tuned for more updates as this partnership develops and brings new opportunities 
              for our community and beyond.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
