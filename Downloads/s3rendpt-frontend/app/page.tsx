import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Edit } from "lucide-react"
import { FileUpload } from "@/components/file-upload"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 p-4 lg:p-6 flex flex-row lg:flex-col justify-between bg-[#FCFCFC] border-r">
        <div className="flex flex-row lg:flex-col w-full">
          {/* Logo and icons row */}
          <div className="flex items-center justify-between mb-0 lg:mb-12 flex-1 lg:flex-none">
            <Image 
              src="/img/logo.svg" 
              alt="S3renDPT Logo" 
              width={120} 
              height={30} 
              className="h-auto"
            />
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <Edit size={20} />
              </button>
            </div>
          </div>
          <Button className="ml-4 lg:ml-0 lg:mt-4 w-auto lg:w-full bg-amber-50 text-gray-800 hover:bg-amber-100 border border-amber-100">
            Start a new project
          </Button>
        </div>
        <Button className="hidden lg:block fixed bottom-6 w-[calc(16rem-3rem)] bg-red-500 hover:bg-red-600 text-white">
          Log out
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6">
        {/* Upload Section */}
        <section className="mb-8 lg:mb-12">
          <FileUpload />
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Feature 1 */}
            <div className="bg-amber-50 rounded-2xl p-4 lg:p-6">
              <div className="flex items-start mb-3 lg:mb-4">
                <Image
                  src="/img/feature-narration.png"
                  alt="AI Narration"
                  width={70}
                  height={70}
                  className="mr-3 w-[70px] lg:w-[90px]"
                />
                <h3 className="text-base lg:text-lg font-semibold">
                  Emotionally Expressive
                  <br />
                  AI Narration
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                The AI reader doesn't just read books—it expresses emotions based on the text. It can laugh at funny
                moments, sound excited during thrilling parts, and convey sadness in emotional scenes, making the
                reading experience more immersive.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-amber-50 rounded-2xl p-4 lg:p-6">
              <div className="flex items-start mb-3 lg:mb-4">
                <Image 
                  src="/img/feature-qa.png" 
                  alt="Q&A" 
                  width={70} 
                  height={70} 
                  className="mr-3 w-[70px] lg:w-[90px]" 
                />
                <h3 className="text-base lg:text-lg font-semibold">
                  Real-Time
                  <br />
                  Commentary & Q&A
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Users can ask questions about the book, and the AI provides insights, summaries, or explanations in real
                time. This feature enhances comprehension and engagement, making it useful for both casual readers and
                students.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-amber-50 rounded-2xl p-4 lg:p-6">
              <div className="flex items-start mb-3 lg:mb-4">
                <Image
                  src="/img/feature-interactive.png"
                  alt="Interactive Explanation"
                  width={70}
                  height={70}
                  className="mr-3 w-[70px] lg:w-[90px]"
                />
                <h3 className="text-base lg:text-lg font-semibold">
                  Interactive
                  <br />
                  Explanation & Definitions
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                When answering a question, the AI shows its thought process step by step, helping users learn and understand along. Additionally, users can highlight any word or phrase, prompting the AI to provide definitions, etymology, contextual explanation, or related context immediately.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
