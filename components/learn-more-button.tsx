import Image from "next/image"
import Link from "next/link"

interface LearnMoreButtonProps {
  href: string
}

export function LearnMoreButton({ href }: LearnMoreButtonProps) {
  return (
    <Link
      href={
        href === "#economic-justice"
          ? "/economic-justice"
          : href === "#economic-power"
            ? "/economic-power"
            : href === "#communities"
              ? "/communities"
              : href
      }
      className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-passion-one text-[20px] flex items-center justify-center gap-2 w-fit hover:bg-white/10 transition-colors"
    >
      Learn more
      <div className="relative w-6 h-6">
        <Image src="/images/arrow-icon.svg" alt="" width={24} height={24} className="w-full h-full invert" />
      </div>
    </Link>
  )
}

