import Image from "next/image";
import Logo from "@/public/icons/star.png";
export default function Page() {
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
        "One of Nepal’s most famous treks leading to the heart of the Annapurna massif.",
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
        "Nepal’s only hunting reserve with unique wildlife and beautiful alpine landscapes.",
      duration: "4-6 days",
      accessible: false,
      location: "Baglung, Baglungs",
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
  return (
    <div className="flex flex-col text-[#233E2D] md:py-32 md:px-12 px-6 md:gap-y-12">
      <section>
        <h1 className="text-5xl font-bold">CHOSE YOUR NEXT TOUR!</h1>
        <div className="h-120 relative">
          <Image
            src="/pictures/ourtour/banner-image.jpg"
            alt="image"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-28 g-amber-500">
        <div className="flex gap-6 hover:bg-amber-200">
          <p className="cursor-pointer">All Tours</p>
          <p className="cursor-pointer">Wheelchair Accessible</p>
        </div>

        {/* cards */}
        <div
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 
        "
        >
          {destinations.map((destination) => {
            return (
              <div
                className="flex flex-col rounded-2xl gap-y-3 py-6 px-3 items-start justify-between shadow-md bg-[#EEEBE0] w-[340px]"
                key={destination.id}
              >
                <div className="relative w-72 lg:w-80 h-40">
                  <Image
                    src={destination.image}
                    alt={destination.description}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex">
                  <Image src={Logo} alt="logo" height={25} width={25} />
                  <p>{destination.duration}</p>
                </div>
                <p>{destination.title}</p>
                <p>{destination.description}</p>

                {/* buttons */}
                <div className="flex justify-between items-center w-full">
                  <button className="border rounded-2xl w-32 h-12">
                    More Info
                  </button>
                  <button className="border rounded-2xl w-32 h-12 text-amber-50 bg-green-800">
                    Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* work in progress */}
      </section>
    </div>
  );
}
