import Image from 'next/image';
import Link from 'next/link';

export default function NewChapterForMutualPower() {
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
              A New Chapter for Mutual Power: Reflections from Black Co-op on the 2025 Co-operative Economy Report
            </h1>
            <p className="text-gray-600">Published on September 29, 2025</p>
          </header>
          
          <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/New Chapter 1.jpg"
              alt="Co-operative economy report highlights"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              When the 2025 Co-operative and Mutual Economy Report landed in our inboxes, it felt like more than just numbers — it was a validation of a belief we've held at Black Co-op: that collective ownership, democratic models, shared purpose, and community resilience are not idealistic luxuries but essential engines of sustainable change.
            </p>
            
            <p>
              Here's how the report resonated with us — and what we believe lies ahead.
            </p>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">1. Milestones that lift us all</h2>
            
            <p>
              The headline figures are extraordinary: the co-operative and mutual sector now generates £179.2 billion in income, serves 65.7 million memberships, and employs over 1.5 million people. These are not just statistics — they reflect real lives supported, community economies strengthened, and ownership models gaining traction.
            </p>
            
            <p>
              At Black Co-op, we see this as wind in our sails. It says: what we are building isn't niche or marginal — it's part of a broader movement gaining national momentum.
            </p>
            
            <div className="relative w-full h-96 my-12 rounded-lg overflow-hidden">
              <Image
                src="/images/New Chapter 2.jpg"
                alt="Co-operative sector growth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">2. Resilience and staying power</h2>
            
            <p>
              One of the standout insights is the survival rate: co-operatives are more than twice as likely to last five years than the average UK business — 82% vs 39%. This rings true for us. We've had challenging months, moments where doubts whisper, but we persist because our structure is built for the long haul — not just short-term returns.
            </p>
            
            <p>
              This also underlines the importance of investment in support systems, governance training, and infrastructural backing. If co-ops are to scale and sustain, they need not just passion and vision, but strong scaffolding.
            </p>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">3. Fair workplaces, shared leadership, narrowing gaps</h2>
            
            <p>
              The report gives rich evidence that co-operative models tend toward more equitable workplaces:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Co-ops are four times more likely to be Living Wage Employers.</li>
              <li>Within co-ops, the gender pay gap is narrower (7.5%) compared to the national average (12%)</li>
              <li>Nearly a quarter of the UK's top 100 co-ops are led by women — more than double FTSE 100 representation</li>
            </ul>
            
            <p>
              For Black Co-op, these aren't just welcome statistics — they are part of our non-negotiables. We believe that ownership must be matched with fairness, voice, and real upward mobility inside the organisation.
            </p>
            
            <div className="relative w-full h-96 my-12 rounded-lg overflow-hidden">
              <Image
                src="/images/New Chapter 3.jpg"
                alt="Community co-operative meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">4. Community roots: pubs, public assets, and place power</h2>
            
            <p>
              Another inspiring angle is the resurgence of community-owned pubs — up 51% over five years, with a 13% increase in the last year alone. These are local institutions, deeply woven into places, and their revival under democratic models shows what happens when community stewards take charge.
            </p>
            
            <p>
              We at Black Co-op dream of applying that same logic to cultural spaces, community centres, or local assets in Black and marginalised neighborhoods. What if community homes, bookshops, arts centres, health hubs were collectively owned, with decisions made by and for the people who live there?
            </p>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">5. Ambition, but not complacency — what still needs to happen</h2>
            
            <p>
              The report is powerful, but also a call to action. From our vantage point, these are areas we believe require urgent attention:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access to capital & finance:</strong> Many co-operatives struggle to access growth capital under favourable terms. We need bridging funds, guarantees, or co-op-friendly investment vehicles.</li>
              <li><strong>Policy & legislation:</strong> There is a need to modernise co-operative law, align it with international standards, and build frameworks that encourage democratic models in sectors such as housing, digital infrastructure, and public services.</li>
              <li><strong>Capacity building & support ecosystems:</strong> New co-ops often lack access to high quality legal, governance, and operational support. Strengthening regional co-op development agencies, incubators, peer networks is essential.</li>
              <li><strong>Representation & inclusion:</strong> We must ensure co-operative growth does not replicate existing inequalities. Black, brown, marginalized communities must be central actors — not token voices.</li>
            </ul>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">6. Black Co-op's commitments: how we rise from here</h2>
            
            <p>
              From where we stand, the report reinforces many of the choices we've already committed to — and offers inspiration for what comes next. In response, we pledge to:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Deepen democratic governance:</strong> we will expand participatory processes, ensuring our members (especially from underrepresented communities) have real decision-power.</li>
              <li><strong>Prioritise equitable outcomes:</strong> from pay structures to advancement paths, we will continually audit and refine to reduce disparities.</li>
              <li><strong>Forge alliances:</strong> to scale, we cannot go it alone. We will collaborate with co-op networks, anchor institutions, public bodies, and philanthropy to strengthen the broader democratic economy.</li>
              <li><strong>Experiment boldly:</strong> whether in new sectors (digital, green energy, cultural co-ops) or hybrid models, we will push boundaries and learn fast.</li>
            </ul>
            
            <h2 className="font-passion-one text-2xl mt-12 mb-6">In closing: a movement, not a moment</h2>
            
            <p>
              The 2025 Co-operative and Mutual Economy Report is more than a benchmark — it's a milestone in a long journey. It reminds us that co-operative models are no longer marginal experiments, but central to how the UK economy could evolve.
            </p>
            
            <p>
              For Black Co-op, our joy is in being part of that growth — contributing, shaping, challenging, raising the bar. We look forward to the futures we will build together: economies where more people truly belong, own, and share in the value we create.
            </p>
            
            <p className="text-xl font-medium mt-12">
              If you're reading this and share our belief — in community control, in fair enterprise, in democratic futures — join us. Let's co-create what comes next.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
