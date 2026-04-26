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
      <section className="flex justify-center items-center">
        <div className="flex gap-6 hover:bg-amber-200">
          <p className="cursor-pointer">All Tours</p>
          <p className="cursor-pointer">Wheelchair Accessible</p>
        </div>

        <div className="flex">
          {destinations.map((destination) => {
            return (
              <div key={destination.id}>
                <Image
                  src={destination.image}
                  alt={destination.description}
                  height={140}
                  width={210}
                />
              </div>
            );
          })}
        </div>
        {/* work in progress */}
      </section>

      {/* footer */}
      <section className="flex flex-col justify-center items-center gap-y-12 bg-[#E2DFCE]">
        <div className="flex justify-center items-center">
          <Image
            src="/icons/paila_logo.png"
            width={60}
            height={60}
            alt="get in touch icon"
          />
          <p>GET IN TOUCH</p>
        </div>

        <p>Have a question or need assistance?</p>
        <p>We're here to help in the way most </p>

        <div className="bg-green-800 w-6xl">
          <h1>hi there</h1>
        </div>
      </section>
    </div>
  );
}
