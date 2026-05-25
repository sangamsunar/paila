"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import secondPhoto from "@/public/pictures/one-pic.jpg";
import heroBanner from "@/public/pictures/hero-photo2.png";
import logo from "@/public/icons/paila_logo.png";
import star from "@/public/icons/star.png";
import rating from "@/public/icons/rating.png";
import map from "@/public/icons/map.png";
import mustang from "@/public/pictures/destinations/01_mustang.jpg";
import kori from "@/public/pictures/destinations/02_Kori.jpg";
import abc from "@/public/pictures/destinations/03_ABC.jpg";
import dhorpatan from "@/public/pictures/destinations/04_Dhorpatan.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
    image: mustang,
    tags: ["Culture", "Adventure"],
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
    tags: ["Nature", "Scenic"],
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
    image: abc,
    tags: ["Trekking", "Popular"],
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
    image: dhorpatan,
    tags: ["Wildlife", "Remote"],
    priceRange: "$$",
  },
];

const offerTabs = [
  { id: "private", label: "Private Tours" },
  { id: "scheduled", label: "Scheduled Tours" },
  { id: "transfers", label: "Transfers" },
  { id: "wheelchair", label: "Wheelchair Accessibility" },
];

const offerContent: Record<
  string,
  { heading: string; italic: string; description: string }
> = {
  private: {
    heading: "Tailored Private Tours",
    italic: "Perfect for those seeking a personal experience.",
    description:
      "Enjoy a fully customized itinerary designed just for you. Our private tours let you explore at your own pace with a dedicated guide and a comfortable vehicle.",
  },
  scheduled: {
    heading: "Scheduled Group Tours",
    italic: "Join fellow travelers on set departure dates.",
    description:
      "Our scheduled tours run on fixed dates throughout the year. A great way to meet like-minded adventurers while keeping costs manageable.",
  },
  transfers: {
    heading: "Airport & City Transfers",
    italic: "Comfortable, punctual, and stress-free.",
    description:
      "We handle all your transfer needs — airports, hotels, ports, and popular landmarks. Sit back and let us take care of the journey.",
  },
  wheelchair: {
    heading: "Wheelchair Accessible Tours",
    italic: "Everyone deserves to explore.",
    description:
      "We are committed to making Nepal accessible for all. Our wheelchair-friendly tours use adapted vehicles and carefully planned routes.",
  },
};

const benefits = [
  {
    icon: rating,
    title: "Comfortable Vehicles",
    description:
      "We offer late-model, air-conditioned vehicles equipped with all the amenities you need.",
  },
  {
    icon: star,
    title: "Experienced Guides",
    description:
      "Our guides are certified professionals who are passionate about sharing Nepal's heritage.",
  },
  {
    icon: map,
    title: "Wheelchair Accessibility",
    description:
      "Adapted tours and vehicles so every traveler can explore with confidence and comfort.",
  },
  {
    icon: rating,
    title: "Reserve Now & Pay Later",
    description:
      "Lock in your spot today and pay closer to your travel date. Flexible and easy.",
  },
];

const testimonials = [
  {
    name: "Mila",
    subtitle: "Armonia Tour Athens",
    rating: 5,
    text: "We have just had an amazing Paila tour. Our guide was fantastic — completing the day tour with complete 100% satisfaction and genuine passion about presenting Nepal's history.",
  },
  {
    name: "Philip",
    subtitle: "Armonia Tour Athens",
    rating: 4,
    text: "Our tour guide was absolutely fantastic. He was incredibly knowledgeable about Nepalese history, gave us fascinating facts and made the whole experience truly memorable.",
  },
  {
    name: "Sanjay Tamara",
    subtitle: "Tempel Tour Athens",
    rating: 5,
    text: "Best tour we have ever had! Our guide knew everything about the region and made us feel like we were travelling with a local friend. Will book again without hesitation.",
  },
  {
    name: "Philip",
    subtitle: "Armonia Tour Athens",
    rating: 3,
    text: "Our tour guide was absolutely fantastic. He was incredibly knowledgeable about Nepalese history, gave us fascinating facts and made the whole experience truly memorable.",
  },
  {
    name: "Sanjay Tamara",
    subtitle: "Tempel Tour Athens",
    rating: 5,
    text: "Best tour we have ever had! Our guide knew everything about the region and made us feel like we were travelling with a local friend. Will book again without hesitation.",
  },
  {
    name: "Philip",
    subtitle: "Armonia Tour Athens",
    rating: 5,
    text: "Our tour guide was absolutely fantastic. He was incredibly knowledgeable about Nepalese history, gave us fascinating facts and made the whole experience truly memorable.",
  },
  {
    name: "Sanjay Tamara",
    subtitle: "Tempel Tour Athens",
    rating: 5,
    text: "Best tour we have ever had! Our guide knew everything about the region and made us feel like we were travelling with a local friend. Will book again without hesitation.",
  },
];

const faqs = [
  "What types of transport do you offer for the tours?",
  "Are the tours accessible for people with special needs?",
  "Can I customize my tour?",
  "How to book a tour?",
  "Did there be a guide during the tour?",
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("private");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-[#F5F2E8]">
      {/* ── Hero ── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pictures/hero-photo.png')" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 gap-6">
          <p
            className="font-bold text-5xl tracking-wide text-amber-400"
            style={{ wordSpacing: "1rem" }}
          >
            STORY IN EVERY
          </p>
          <p className="font-extrabold text-[clamp(80px,15vw,200px)] tracking-wide stroke-text leading-none">
            PAILA
          </p>
          <button className="border-2 border-amber-500 px-8 py-3 text-amber-50 font-bold rounded-3xl bg-green-800 hover:bg-green-700">
            EXPLORE DESTINATION
          </button>
        </div>
      </section>

      {/* ── About ── */}
      <section className="flex w-full min-h-screen justify-between items-center px-16 gap-12 py-20">
        <div className="flex-1 max-w-xl">
          <div className="flex gap-4">
            <Image
              src={secondPhoto}
              alt="about"
              width={120}
              className="rounded-xl object-cover shrink-0 self-start"
            />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={20} />
                <span className="text-sm font-semibold tracking-widest text-muted-foreground">
                  About Us
                </span>
              </div>
              <h2 className="text-2xl font-bold leading-snug">
                The Highest Level of Comfort, Convenience and Service
              </h2>
              <p className="text-sm text-muted-foreground">
                At Paila Excursions, we combine premium transport services with
                an authentic travel experience — crafted for you, tailored
                around everything you need.
              </p>
              <a href="/aboutus" className="font-bold underline text-sm">
                MORE ABOUT US →
              </a>
            </div>
          </div>

          <p className="mt-8 font-semibold text-base">Why Choose Us?</p>
          <div className="flex gap-8 mt-4">
            <div>
              <h3 className="font-bold text-sm">Professional Team</h3>
              <div className="flex items-start gap-3 mt-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our team is made up of passionate, highly-trained travel
                  professionals.
                </p>
                <Image
                  src={rating}
                  alt="icon"
                  height={32}
                  width={32}
                  className="shrink-0"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm">Flexibility</h3>
              <div className="flex items-start gap-3 mt-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Historic landmarks, hotels, airports — we take you where you
                  need to go.
                </p>
                <Image
                  src={map}
                  alt="icon"
                  height={32}
                  width={32}
                  className="shrink-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src={secondPhoto}
            alt="about large"
            width={380}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="px-16 py-20 bg-[#EDEADE]">
        <div className="flex items-center gap-2 mb-2">
          <Image src={logo} alt="logo" width={18} />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            SERVICES
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-8">What We Offer?</h2>

        <div className="flex gap-10">
          {/* Tab list */}
          <div className="flex flex-col gap-3 shrink-0 w-52">
            {offerTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-5 py-3 rounded-xl font-medium text-sm transition ${
                  activeTab === tab.id
                    ? "bg-green-800 text-white"
                    : "bg-white/60 text-gray-700 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex gap-8 flex-1 items-center">
            <div className="relative w-80 h-52 rounded-2xl overflow-hidden shrink-0">
              <Image
                src={secondPhoto}
                alt="offer"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="flex items-center gap-2">
                <Image src={logo} alt="logo" width={16} />
                <span className="text-xs text-muted-foreground tracking-widest">
                  OUR SERVICES
                </span>
              </div>
              <h3 className="text-xl font-bold">
                {offerContent[activeTab].heading}
              </h3>
              <p className="text-sm italic text-muted-foreground">
                {offerContent[activeTab].italic}
              </p>
              <p className="text-sm text-muted-foreground">
                {offerContent[activeTab].description}
              </p>
              <a href="/ourtours" className="text-sm font-bold underline mt-1">
                EXPLORE TOURS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial Banner ── */}
      <section className="py-20 px-16 text-center bg-[#F5F2E8]">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image src={logo} alt="logo" width={18} />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            REVIEWS
          </span>
        </div>
        <p className="text-3xl font-bold max-w-2xl mx-auto leading-snug">
          From the ancient wonders to the stunning landscapes of Nepal, enjoy
          every step of your journey with Paila Excursions!
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="text-sm text-muted-foreground">
            4000+ clients trust us
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={18} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations Carousel ── */}
      <section className="py-16 px-16 bg-[#EDEADE]">
        <div className="flex items-center gap-2 mb-2">
          <Image src={logo} alt="logo" width={18} />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            DESTINATIONSg
          </span>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Explore our popular destinations!
          </h2>
          <div className="flex items-center gap-2">
            <a href="/ourtours" className="text-sm font-semibold underline">
              VIEW ALL TOURS
            </a>
            <Image src={logo} alt="logo" width={32} />
          </div>
        </div>

        <div className="relative w-full px-12">
          {mounted ? (
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {destinations.map((dest) => (
                  <CarouselItem
                    key={dest.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <DestinationCard
                      title={dest.title}
                      description={dest.description}
                      duration={dest.duration}
                      location={dest.location}
                      image={dest.image}
                      tags={dest.tags}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          ) : (
            <div className="h-96 flex items-center justify-center text-muted-foreground text-sm">
              Loading destinations...
            </div>
          )}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="px-16 py-20 flex gap-16 items-start bg-[#F5F2E8]">
        <div className="max-w-xs shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <Image src={logo} alt="logo" width={18} />
            <span className="text-xs font-semibold tracking-widest text-muted-foreground">
              WHY US
            </span>
          </div>
          <h2 className="text-2xl font-bold leading-snug mb-4">
            The Benefits of Traveling with Paila
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            We go beyond transport — we deliver memorable, comfortable, and
            fully-supported travel experiences across Nepal.
          </p>
          <a href="/aboutus" className="text-sm font-bold underline">
            MORE ABOUT US →
          </a>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/70 rounded-2xl p-5 ring-1 ring-foreground/5"
            >
              <div className="bg-green-900/10 rounded-xl p-2 shrink-0">
                <Image src={b.icon} alt={b.title} width={28} height={28} />
              </div>
              <div>
                <h3 className="font-bold text-sm">{b.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-width Banner ── */}
      <section className="relative h-72 w-full overflow-hidden">
        <Image
          src={heroBanner}
          alt="banner"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3 z-10">
          <p className="text-3xl font-bold text-center max-w-lg leading-snug">
            Explore Nepal with comfort.
            <br />
            Explore Nepal with us.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-16 py-20 bg-[#EDEADE]">
        <div className="flex items-center gap-2 mb-2">
          <Image src={logo} alt="logo" width={18} />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            TESTIMONIALS
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">What our clients say</h2>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={16} />
            ))}
          </div>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/3">
                <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 ring-1 ring-foreground/5 h-full">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <Image key={j} src={star} alt="star" width={14} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.text}
                  </p>
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.subtitle}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* ── FAQ ── */}
      <section className="px-16 py-20 bg-[#F5F2E8]">
        <div className="flex items-center gap-2 mb-2">
          <Image src={logo} alt="logo" width={18} />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            FAQ
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-3 max-w-2xl">
          {faqs.map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl ring-1 ring-foreground/5 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-sm font-medium text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{q}</span>
                <span className="text-lg leading-none text-muted-foreground">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-sm text-muted-foreground">
                  Our team is happy to assist you with this. Please contact us
                  at hello@paila.com or call +977 970 226 9971 for more details.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
