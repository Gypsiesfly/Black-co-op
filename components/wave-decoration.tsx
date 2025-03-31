import Image from "next/image"

interface WaveDecorationProps {
  className?: string
  isRight?: boolean
}

export function WaveDecoration({ className, isRight = false }: WaveDecorationProps) {
  return (
    <div className={className}>
      <Image
        src={isRight ? "/images/wave-decoration-right.png" : "/images/wave-decoration.png"}
        alt=""
        width={100}
        height={50}
        className="w-auto h-auto"
      />
    </div>
  )
}

