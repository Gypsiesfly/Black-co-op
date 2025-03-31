import { Passion_One } from "next/font/google"
import Image from "next/image"

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
})

export default function Loading() {
  return (
    <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 ${passionOne.variable}`}>
      <div className="w-full max-w-xs px-4 text-center">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <Image
            src="/images/black-co-op-logo.png"
            alt="BLACK CO-OP"
            width={180}
            height={45}
            className="h-auto w-auto"
          />
        </div>

        {/* Loading bar */}
        <div className="w-full bg-white h-1 rounded-none overflow-hidden">
          <div className="bg-[#FFCC00] h-full w-1/2 rounded-none animate-loading-progress"></div>
        </div>
      </div>
    </div>
  )
}

