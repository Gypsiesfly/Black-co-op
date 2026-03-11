import { Passion_One } from "next/font/google"
import Link from "next/link"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function BlackCooperativeEconomy() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/research" className="text-black hover:underline inline-flex items-center">
            ← Back to Research
          </Link>
        </div>
        
        <article className="prose lg:prose-xl mx-auto">
          <h1 className={`${passionOne.className} text-4xl md:text-5xl mb-4`}>
            The Black Cooperative Economy: Collective Courage
          </h1>
          
          <div className="text-gray-600 mb-8">
            <p>By Jessica Gordon Nembhard | 2023</p>
          </div>
          
          <div className="space-y-6">
            <p>
              This groundbreaking work explores the history and impact of Black cooperative economics, 
              highlighting the power of collective action and economic solidarity in Black communities. 
              Dr. Jessica Gordon Nembhard provides valuable insights into how cooperative models can be 
              leveraged for economic justice and community empowerment.
            </p>
            
            <h2 className={`${passionOne.className} text-2xl`}>Key Insights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Historical analysis of Black cooperative movements</li>
              <li>Case studies of successful Black cooperatives</li>
              <li>Strategies for building economic solidarity</li>
              <li>Policy recommendations for supporting cooperative development</li>
            </ul>
            
            <p>
              The book serves as both a historical record and a practical guide for those interested in 
              cooperative economics and community development within the African diaspora.
            </p>
            
            <h2 className={`${passionOne.className} text-2xl`}>Introduction</h2>
            <p>
              The Black Cooperative Economy: Collective Courage is a comprehensive study of the history and impact of Black cooperative economics in the United States. Dr. Jessica Gordon Nembhard, a leading expert in the field, provides a detailed analysis of the development of Black cooperatives from the early 20th century to the present day.
            </p>
            
            <h2 className={`${passionOne.className} text-2xl`}>The History of Black Cooperatives</h2>
            <p>
              The book begins by tracing the history of Black cooperatives, from the early 20th century to the present day. Dr. Nembhard highlights the key milestones and events that have shaped the development of Black cooperatives, including the establishment of the National Negro Business League in 1900 and the founding of the Cooperative League of the USA in 1916.
            </p>
            
            <h2 className={`${passionOne.className} text-2xl`}>Case Studies of Successful Black Cooperatives</h2>
            <p>
              The book also includes a series of case studies of successful Black cooperatives, including the Mondragon Cooperative Corporation in Spain and the Cooperative Home Care Associates in New York City. These case studies provide valuable insights into the strategies and practices that have enabled these cooperatives to thrive.
            </p>
            
            <h2 className={`${passionOne.className} text-2xl`}>Strategies for Building Economic Solidarity</h2>
            <p>
              Dr. Nembhard also provides a series of strategies for building economic solidarity in Black communities, including the development of cooperative businesses, the creation of community land trusts, and the establishment of community development financial institutions.
            </p>
            
            <h2 className={`${passionOne.className} text-2xl`}>Policy Recommendations for Supporting Cooperative Development</h2>
            <p>
              The book concludes with a series of policy recommendations for supporting cooperative development in Black communities, including the creation of a national cooperative development fund, the establishment of a cooperative development agency, and the provision of technical assistance and training for cooperative developers.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="https://strangematters.coop/the-black-cooperative-economy-jessica-gordon-nembhard-collective-courage/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Read the Original Article
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
