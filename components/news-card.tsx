import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
  isComingSoon?: boolean;
}

export function NewsCard({ title, description, date, imageUrl, link, isComingSoon = false }: NewsCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-[#FFCC00] text-black font-passion-one text-2xl px-4 py-2 rounded">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="font-passion-one text-2xl mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        {!isComingSoon && (
          <Link 
            href={link}
            className="text-[#FFCC00] font-medium hover:underline mt-auto inline-flex items-center"
          >
            Read more
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
