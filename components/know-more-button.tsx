import Link from 'next/link'

interface KnowMoreButtonProps {
  href: string
}

export function KnowMoreButton({ href }: KnowMoreButtonProps) {
  return (
    <Link
      href={href}
      className="bg-[#FFCC00] text-black px-8 py-3 rounded-[45px] font-passion-one text-2xl flex items-center gap-3 hover:bg-[#e6b800] transition-colors whitespace-nowrap"
    >
      Know more
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 4L16 12L8 20" />
      </svg>
    </Link>
  )
}
