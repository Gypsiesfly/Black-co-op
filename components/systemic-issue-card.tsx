import Image from "next/image"
import { KnowMoreButton } from "./know-more-button"

interface SystemicIssueCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export function SystemicIssueCard({ title, description, imageSrc, href }: SystemicIssueCardProps) {
  return (
    <div className="relative h-[360px] overflow-hidden group">
      {/* Yellow dot */}
      <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-[#FFCC00] z-10" />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        <h3 className="font-passion-one text-3xl mt-8">{title}</h3>
        <div className="space-y-4">
          <p className="text-sm">{description}</p>
          <KnowMoreButton href={title === "Finance Access" ? "/finance-access" : href} />
        </div>
      </div>
    </div>
  )
}

