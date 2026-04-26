import React from "react";
import Image from "next/image";
import HeroPhoto from "@/public/pictures/hero-photo2.png";
import secondPhoto from "@/public/pictures/one-pic.jpg";
import logo from "@/public/icons/paila_logo.png";
import star from "@/public/icons/star.png";
import rating from "@/public/icons/rating.png";
import map from "@/public/icons/map.png";
import mustang from "@/public/pictures/destinations/01_mustang.jpg";
import kori from "@/public/pictures/destinations/02_Kori.jpg";
import abc from "@/public/pictures/destinations/03_ABC.jpg";
import dhorpatan from "@/public/pictures/destinations/04_Dhorpatan.jpg";

import TestomonoialSection from "@/components/TestomonoialSection";
const HeroSection = () => {
  const destinations = [
    {
      id: 1,
      title: "Mustang: Forbidden Kingdom",
      description:
        "Explore the ancient Tibetan culture, caves, and desert landscapes of Upper Mustang.",
      duration: "5-7 days",
      accessible: false,
      location: "Mustang, Nepal",
      image: mustang,
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
      image: kori,
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
      image: abc,
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
      image: dhorpatan,
      tags: ["Wildlife", "Adventure", "Remote"],
      priceRange: "$$",
    },
    // {
    //   id: 5,
    //   title: "Ghandruk Village",
    //   description:
    //     "A traditional Gurung village offering cultural experience and mountain views.",
    //   duration: "1-2 days",
    //   accessible: true,
    //   location: "Ghandruk, Nepal",
    //   image: "ghandruk.jpg",
    //   tags: ["Culture", "Easy Trek", "Village"],
    //   priceRange: "$",
    // },
    // {
    //   id: 6,
    //   title: "Poon Hill Sunrise Trek",
    //   description:
    //     "Famous for breathtaking sunrise views over Annapurna and Dhaulagiri ranges.",
    //   duration: "2-3 days",
    //   accessible: true,
    //   location: "Poon Hill, Nepal",
    //   image: "poonhill.jpg",
    //   tags: ["Sunrise", "Short Trek", "Popular"],
    //   priceRange: "$$",
    // },
  ];
  return (
    <div>
      <section className="w-screen h-screen">
        <div className="relative h-screen">
          <Image
            src={HeroPhoto}
            alt="amazing landscape of nepal"
            loading="eager"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <div className="flex flex-col justify-center items-center text-center">
            <p
              className="font-bold text-6xl tracking-widest text-amber-400"
              style={{ wordSpacing: "2rem" }}
            >
              STORY IN EVERY
            </p>
            <p className="font-extrabold text-[200px] tracking-[42] stroke-text">
              PAILA
            </p>
          </div>
          <button className="border-3 border-amber-500 px-6 py-4  text-amber-50 font-bold rounded-3xl bg-green-800">
            EXPLORE DESTINATION
          </button>
        </div>
      </section>

      <section className="flex w-screen h-screen justify-between items-center">
        <div>
          <div className="flex">
            <Image src={secondPhoto} alt="photo" width={120} />
            <div className="flex flex-col justify-around">
              <div className="flex">
                <Image src={star} alt="star" width={28} />
                <div>About Us</div>
              </div>
              <h2>The Highest Level of Convenience and Service</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ad
                iure consectetur similique, in omnis architecto asperiores.
                Ducimus nesciunt officia, tenetur fuga vitae quidem sit neque
                nisi, ex perspiciatis laborum.
              </p>
              <a href="https://youtube.com">MORE ABOUT US</a>
            </div>
          </div>
          <p>Why Choose Us ?</p>
          <div className="flex gap-x-7">
            <div className="flex justify-center items-center">
              <div>
                <h2>Flexibility</h2>
                <div className="flex justify-center items-center gap-x-3">
                  <p>
                    Historic landmarks, hotels, airports/ports - we take you
                    where you need to go.
                  </p>

                  <Image src={rating} alt="icons" height={38} />
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <h2>Flexibility</h2>
                <div className="flex justify-center, items-center gap-x-3">
                  <p>
                    Historic landmarks, hotels, airports/ports - we take you
                    where you need to go.
                  </p>
                  <Image src={map} alt="icons" height={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={secondPhoto} alt="photo" width={300} />
        </div>
      </section>

      <section className="">
        <div className="flex">
          <Image src={logo} alt="fire" width={20} />
          <p>MUST-SEE</p>
        </div>

        <div className="flex justify-between px-3">
          <div className="flex gap-x-8 justify-center items-center">
            <h1>Explore our popular destinations!</h1>
            <div className="flex justify-center items-center">
              <a>VIEW ALL TOURS</a>
              <Image src={logo} alt="fire" width={60} />
            </div>
          </div>

          <div className="flex gap-x-3">
            <button className="p-3 rounded-full border w-4 h-4 flex items-center justify-center">
              &lt;
            </button>
            <button className="p-3 rounded-full border w-4 h-4 flex items-center justify-center">
              &gt;
            </button>
          </div>
        </div>
        <div className="flex">
          {destinations.map((destination) => {
            return (
              <div
                className="flex flex-col gap-y-3 py-6 px-3 items-start justify-between"
                key={destination.id}
              >
                <div className="relative w-full h-160">
                  <Image
                    src={destination.image}
                    alt={destination.description}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex">
                  <Image src={logo} alt="logo" height={25} width={25} />
                  <p>{destination.duration}</p>
                </div>
                <p>{destination.title}</p>
                <p>{destination.description}</p>

                {/* buttons */}
                <div className="flex gap-x-3">
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
      </section>

      <TestomonoialSection />
    </div>
  );
};

export default HeroSection;
