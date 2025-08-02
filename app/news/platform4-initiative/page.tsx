import Image from "next/image";
import Link from "next/link";

export default function Platform4Initiative() {
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
            <h1 className="text-4xl font-passion-one mb-2">A New Pipeline, But For Whom?</h1>
            <h2 className="text-xl text-gray-700 mb-6">Government launches Platform4 to deliver 40,000 homes on surplus railway.</h2>
            <div className="flex justify-between items-center">
              <time dateTime="2025-07-31" className="text-gray-600">July 31, 2025</time>
              <a 
                href="https://propertyindustryeye.com/government-launches-platform4-to-deliver-40000-homes-on-surplus-railway-land/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:underline"
              >
                Source: Property Industry Eye
              </a>
            </div>
          </header>
          
          <div className="relative w-full h-96 mb-12">
            <Image
              src="/images/pipeline.jpg"
              alt="Pipeline development"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="text-gray-800 space-y-8 text-lg leading-relaxed">
            <p className="text-xl leading-9">
            The UK government recently launched Platform4, a new initiative aiming to deliver up to 40,000 new homes by unlocking disused and surplus railway land. Backed by the Department for Transport, Network Rail, and the Department for Levelling Up, Housing and Communities, the platform seeks to attract developers, investors, and local councils to transform redundant rail land into housing.

            </p>
            
            <p className="text-xl leading-9">
              At Black Co-operative CIC, our mission is to tackle structural inequalities in land, housing, and asset ownership by building the foundations of a thriving Black-led co-operative economy. So when government initiatives like this emerge, we ask: who benefits? And how can we make sure Black communities are not left behind again?
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold mt-12 mb-6">A New Pipeline, But For Whom?</h2>
              <p>
                Surplus railway land often sits in or near urban centres—areas where Black communities have long histories, but are increasingly being priced out or pushed aside by regeneration schemes that promise "opportunity" but deliver displacement.
              </p>
              
              <p>
                Platform4 represents a significant release of public land into the development pipeline. But history tells us that unless community-led organisations are in the room early and resourced to stay there, the benefits of these developments rarely reach those facing the sharpest end of the housing crisis.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mt-12 mb-6">What This Means for Our Work</h2>
              <p>
                This is an urgent moment for the Black Co-operative CIC and others in the land justice movement. The question is not just how many homes are being built, but who controls the land, who owns the homes, and who defines what "affordable" means.
              </p>
              
              <p>
                As a Black-led organisation committed to co-operative housing, asset ownership, and economic self-determination, we believe:
              </p>
              
              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li className="pl-2">
                  <span className="font-semibold">Surplus public land should be treated as a public good.</span> That means ringfencing land for community-led and co-operative housing projects—not just selling to the highest bidder.
                </li>
                <li className="pl-2">
                  <span className="font-semibold">Black communities must have a seat at the table—</span>and the capacity to act. Initiatives like Platform4 should include mechanisms that enable community developers and Black-led housing co-ops to access land directly.
                </li>
                <li className="pl-2">
                  <span className="font-semibold">Land justice is racial justice.</span> Without deliberate intervention, the inequality embedded in land markets will continue to reproduce itself—no matter how many new homes get built.
                </li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mt-12 mb-6">What Should Happen Next</h2>
              <p>We call on Network Rail, the Department for Transport, and the Platform4 delivery team to:</p>
              
              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li className="pl-2">
                  Establish a <span className="font-semibold">Community Land Allocation Track</span> within Platform4, enabling not-for-profit, co-operative and Black-led housing groups to acquire sites.
                </li>
                <li className="pl-2">
                  Provide <span className="font-semibold">technical support and early access to information</span> for grassroots groups to engage with the process on equal footing.
                </li>
                <li className="pl-2">
                  Embed <span className="font-semibold">racial equity and land justice principles</span> into the framework, ensuring that communities who have historically been excluded are prioritised.
                </li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mt-12 mb-6">Let's Not Miss This Moment</h2>
              <p>
                If public land is a once-in-a-generation opportunity, let's use it to right historic wrongs, not repeat them. Black Co-operative CIC stands ready to work with partners across the housing and community sectors to push for a more just, inclusive and co-operative approach to land and housing.
              </p>
              
              <p className="font-bold text-xl mt-8">We'll be watching closely—and we'll be organising.</p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                <em>Want to learn more about our work or partner with us on land and housing justice? </em>
                <Link href="/contact" className="text-[#FFCC00] hover:underline">Get in touch</Link>
                <em> or follow us on </em>
                <a href="https://twitter.com" className="text-[#FFCC00] hover:underline">Twitter/X</a>
                <em> and </em>
                <a href="https://linkedin.com" className="text-[#FFCC00] hover:underline">LinkedIn</a>.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
