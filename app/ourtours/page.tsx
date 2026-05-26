import Image from "next/image";
import DestinationCard from "@/components/DestinationCards";

const destinations = [
  {
    id: 1,
    title: "Mustang: Forbidden Kingdom",
    description:
      "Explore the ancient Tibetan culture, caves, and desert landscapes of Upper Mustang.",
    duration: "5-7 days",
    accessible: false,
    location: "Mustang, Nepal",
    image: "/pictures/destinations/01_mustang.jpg",
    tags: ["Culture", "Adventure", "Remote"],
    priceRange: "$$$",
  },
  {
    id: 2,
    title: "Kori: Hidden Himalayan Gem",
    description:
      "A peaceful trekking destination with stunning views of Machhapuchhre and Annapurna ranges.",
    duration: "2-3 days",
    accessible: false,
    location: "Pokhara, Nepal",
    image: "/pictures/destinations/02_Kori.jpg",
    tags: ["Nature", "Short Trek", "Scenic"],
    priceRange: "$$",
  },
  {
    id: 3,
    title: "Annapurna Base Camp Trek",
    description:
      "One of Nepal's most famous treks leading to the heart of the Annapurna massif.",
    duration: "7-10 days",
    accessible: false,
    location: "Annapurna Region, Nepal",
    image: "/pictures/destinations/03_ABC.jpg",
    tags: ["Trekking", "Mountain", "Popular"],
    priceRange: "$$$",
  },
  {
    id: 4,
    title: "Dhorpatan Hunting Reserve",
    description:
      "Nepal's only hunting reserve with unique wildlife and beautiful alpine landscapes.",
    duration: "4-6 days",
    accessible: false,
    location: "Baglung, Nepal",
    image: "/pictures/destinations/04_Dhorpatan.jpg",
    tags: ["Wildlife", "Adventure", "Remote"],
    priceRange: "$$",
  },
  {
    id: 5,
    title: "Ghandruk Village",
    description:
      "A traditional Gurung village offering cultural experience and mountain views.",
    duration: "1-2 days",
    accessible: true,
    location: "Ghandruk, Nepal",
    image: "/pictures/destinations/04_Dhorpatan.jpg",
    tags: ["Culture", "Easy Trek", "Village"],
    priceRange: "$",
  },
  {
    id: 6,
    title: "Poon Hill Sunrise Trek",
    description:
      "Famous for breathtaking sunrise views over Annapurna and Dhaulagiri ranges.",
    duration: "2-3 days",
    accessible: true,
    location: "Poon Hill, Nepal",
    image: "/pictures/destinations/04_Dhorpatan.jpg",
    tags: ["Sunrise", "Short Trek", "Popular"],
    priceRange: "$$",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col text-[#233E2D] pt-24 pb-16 px-4 sm:px-8 md:px-12 gap-y-10">

      {/* Banner */}
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">CHOOSE YOUR NEXT TOUR!</h1>
        <div className="relative h-48 sm:h-64 md:h-96 w-full">
          <Image
            src="/pictures/ourtour/banner-image.jpg"
            alt="banner"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Filter tabs */}
      <section className="flex flex-col gap-6">
        <div className="flex gap-4 border-b border-gray-200 pb-2 overflow-x-auto">
          <button className="text-sm font-semibold text-green-800 border-b-2 border-green-800 pb-1 whitespace-nowrap">
            All Tours
          </button>
          <button className="text-sm text-muted-foreground hover:text-green-800 whitespace-nowrap">
            Wheelchair Accessible
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              description={destination.description}
              duration={destination.duration}
              location={destination.location}
              image={destination.image}
              accessible={destination.accessible}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
