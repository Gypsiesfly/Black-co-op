'use client';

import { Passion_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Briefcase, MapPin, Calendar, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function VacanciesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white ${passionOne.variable}`}>
      <div className="pt-2 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-passion-one font-bold text-black mt-8 mb-6">We&apos;re Hiring!</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join us in building a stronger, more equitable economy through cooperative ownership.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg">
            <h2 className="text-2xl font-passion-one text-black mb-4">We&apos;re Recruiting a Policy & Research Officer!</h2>
          <p className="mb-6 text-gray-800">
            Black Co-op is hiring! We're excited to announce that recruitment is now open for a Policy & Research Officer to join our team.
          </p>
          <p className="mb-6 text-gray-800">
            This is a pivotal opportunity to shape national policy, strengthen the Black co-operative movement, and help build a more equitable economy. If you have experience in research and policy, a commitment to racial justice, and a passion for inclusive economic models, we would love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-full mr-3">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold">Part-time</h4>
                <p className="text-sm text-gray-600">21 hours/week</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">£22,400/year</h4>
                <p className="text-sm text-gray-600">(plus NI and pension)</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-gray-600">London-based with flexible working</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold">Apply by</h4>
                <p className="text-sm text-gray-600">5PM, Thursday 29 August 2025</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="#how-to-apply" 
              className="bg-black text-white px-6 py-3 rounded-full text-center font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              Learn more and apply now
            </a>
            <Link 
              href="/" 
              className="border-2 border-black px-6 py-3 rounded-full text-center font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to home
            </Link>
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-3xl font-passion-one text-black mb-6">Policy & Research Officer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Organisation</h3>
              <p>Black Co-op</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p>London (with flexible working options)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contract</h3>
              <p>24 months (with possibility of extension)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p>21 hours per week</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Salary</h3>
              <p>£22,400 per annum (plus NI and pension contributions)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Application Deadline</h3>
              <p>Thursday 29th August 2025, 5:00 PM</p>
            </div>
          </div>

          <h3 className="text-2xl font-passion-one text-black mt-12 mb-4">About Us</h3>
          <p className="mb-4">
            Black Co-op exists to strengthen and scale cooperative ownership in Black communities across the UK. We work to remove systemic barriers to participation, promote inclusive economic models, and influence policy that supports long-term community wealth building.
          </p>
          <p className="mb-4">
            Moreover, there is stark realism that Black-owned businesses make a vital and growing contribution to the UK economy. According to a 2021 report by the Federation of Small Businesses and the Centre for Research in Ethnic Minority Entrepreneurship (CRÈME), Black-led businesses contribute an estimated £25 billion annually to the UK economy.
          </p>
          <p className="mb-4">
            More broadly, ethnic minority-led businesses contribute around £74 billion each year, employing nearly 3 million people and making up about one-sixth of all UK businesses.
          </p>
          <p className="mb-8">
            We begin this work at a pivotal moment during the UK Government's Call for Evidence on Co-operatives and Mutuals, launched in June 2025. This provides us and our partners a rare opportunity to shape policy as it is being formed. Black Co-op CIC will ensure that Black communities are not only represented but actively influencing this national policy agenda from the outset.
          </p>

          <h3 className="text-2xl font-passion-one text-black mt-12 mb-4">The Role</h3>
          <p className="mb-6">
            We're looking for a thoughtful and driven Policy & Research Officer to join our team. In this role, you'll lead on research and policy development, support participatory workshops, and help shape the evidence base that drives systemic change. You'll also contribute to our digital hub, publish findings, and collaborate with partners to amplify community-led solutions.
          </p>

          <h4 className="text-xl font-semibold mt-8 mb-4">Key Responsibilities</h4>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Conduct surveys, interviews, focus groups, and mapping workshops</li>
            <li>Analyse findings and translate them into accessible policy recommendations</li>
            <li>Support thematic reporting, reflective journals, and case studies</li>
            <li>Co-design and facilitate inclusive policy workshops</li>
            <li>Contribute to tools like the Co-operative Playbook and Inclusive Finance Toolkit</li>
            <li>Support stakeholder engagement and advocacy planning</li>
            <li>Write updates on cooperative developments for our website and digital hub</li>
            <li>Ensure research findings are engaging and publicly accessible</li>
            <li>Work closely with the Project Lead and other team members</li>
            <li>Engage with Black-led co-ops, community stakeholders, and sector allies</li>
          </ul>

          <h4 className="text-xl font-semibold mt-12 mb-4">Person Specification</h4>
          <h5 className="font-semibold mt-6 mb-3">Essential:</h5>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Experience in research and policy development</li>
            <li>Strong understanding of co-operative principles and models</li>
            <li>Excellent writing skills (academic, policy, and public-facing)</li>
            <li>Ability to make complex data accessible and compelling</li>
            <li>Experience producing digital content for websites or platforms</li>
            <li>Strong organisational and project management skills</li>
            <li>Commitment to racial justice and community empowerment</li>
          </ul>

          <h5 className="font-semibold mt-6 mb-3">Desirable:</h5>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Knowledge of Black economic history and UK co-operative movements</li>
            <li>Experience working with marginalised or underrepresented communities</li>
            <li>Familiarity with participatory research methods</li>
            <li>Experience with CMS tools or digital storytelling</li>
            <li>Background in community organising or mutual aid initiatives</li>
          </ul>

          <div id="how-to-apply" className="bg-gray-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-passion-one text-black mb-6">How to Apply</h3>
            <p className="mb-6">
              Submit your CV and a cover letter (max 2 pages) explaining your interest in the role and how your experience aligns with the person specification.
            </p>
            <div className="space-y-4">
              <p><span className="font-semibold">Email:</span> <a href="mailto:info@blackco-op.com" className="text-blue-600 hover:underline">info@blackco-op.com</a></p>
              <p><span className="font-semibold">Subject:</span> Policy & Research Officer Application</p>
              <p><span className="font-semibold">Deadline:</span> Thursday 29th August 2025, 5:00 PM</p>
            </div>
            <p className="mt-8 text-sm text-gray-600">
              We strongly encourage applications from people of Black African, Caribbean, and mixed heritage backgrounds, and those with lived experience of the communities we aim to serve.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
