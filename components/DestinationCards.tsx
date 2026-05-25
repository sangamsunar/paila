import Image, { StaticImageData } from "next/image";
import logo from "@/public/icons/paila_logo.png";

interface DestinationCardProps {
  title: string;
  description: string;
  duration: string;
  location: string;
  image: StaticImageData | string;
  tags: string[];
}

export default function DestinationCard({
  title,
  description,
  duration,
  image,
  tags,
}: DestinationCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white ring-1 ring-foreground/10 h-full">
      <div className="relative w-full h-55 shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/90 text-xs font-medium px-2 py-0.5 rounded-full text-green-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center gap-1.5">
          <Image src={logo} alt="logo" width={16} height={16} />
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>

        <h3 className="text-base font-bold leading-snug">{title}</h3>

        <p className="text-sm text-muted-foreground flex-1">{description}</p>

        <div className="flex gap-2 mt-3">
          <button className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm font-medium hover:bg-gray-50">
            More Info
          </button>
          <button className="flex-1 bg-green-800 text-white rounded-xl px-3 py-2 text-sm font-medium hover:bg-green-700">
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
