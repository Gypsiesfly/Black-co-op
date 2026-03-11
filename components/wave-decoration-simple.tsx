import Image from "next/image"

interface WaveDecorationSimpleProps {
  className?: string
}

export function WaveDecorationSimple({ className }: WaveDecorationSimpleProps) {
  return (
    <div className={className}>
      <Image src="/images/wave-decoration-3.png" alt="" width={100} height={30} className="w-auto h-auto" />
    </div>
  )
}

