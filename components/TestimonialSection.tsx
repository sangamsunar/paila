import React from "react";
import Image from "next/image";
import Icon from "@/public/icons/paila_logo.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function TestimonialSection({
  reviews,
}: {
  reviews: Record<string, string>[];
}) {
  // const reviews = [
  //   {
  //     id: 1,
  //     star: 5,
  //     description:
  //       "We loved our trip! Visiting Mycenae was a lifelong dream of my 74yr old father and booking this day trip was completely fulfilling. Our guide Alex was wonderful. He was flexible with timing and the activities included. He gave us great information about the history.. For lunch he even took us on a side trip to a different town to make sure we could get authentic gyros and not something from the tourist section of Athens.",
  //     name: "Alicia",
  //     destination: "Langtang",
  //   },
  //   {
  //     id: 2,
  //     star: 4,
  //     description:
  //       "My tour guide, Marinos, was fantastic! He was very kind, helpful and informative and wanted me to see the very best of Athens which I believe that we did!! I would highly recommend Marinos for anyone who has mobility issues as he will respect your limitations but also make sure that you can see everything that you are able to see!",
  //     name: "Sherry",
  //     destination: "Kori",
  //   },
  //   {
  //     id: 3,
  //     star: 4,
  //     description:
  //       "My tour guide, Marinos, was fantastic! He was very kind, helpful and informative and wanted me to see the very best of Athens which I believe that we did!! I would highly recommend Marinos for anyone who has mobility issues as he will respect your limitations but also make sure that you can see everything that you are able to see!",
  //     name: "Sherry",
  //     destination: "Kori",
  //   },
  //   {
  //     id: 4,
  //     star: 5,
  //     description:
  //       "We loved our trip! Visiting Mycenae was a lifelong dream of my 74yr old father and booking this day trip was completely fulfilling. Our guide Alex was wonderful. He was flexible with timing and the activities included. He gave us great information about the history.. For lunch he even took us on a side trip to a different town to make sure we could get authentic gyros and not something from the tourist section of Athens.",
  //     name: "Alicia",
  //     destination: "Langtang",
  //   },
  //   {
  //     id: 5,
  //     star: 4,
  //     description:
  //       "My tour guide, Marinos, was fantastic! He was very kind, helpful and informative and wanted me to see the very best of Athens which I believe that we did!! I would highly recommend Marinos for anyone who has mobility issues as he will respect your limitations but also make sure that you can see everything that you are able to see!",
  //     name: "Sherry",
  //     destination: "Kori",
  //   },
  //   {
  //     id: 6,
  //     star: 4,
  //     description:
  //       "My tour guide, Marinos, was fantastic! He was very kind, helpful and informative and wanted me to see the very best of Athens which I believe that we did!! I would highly recommend Marinos for anyone who has mobility issues as he will respect your limitations but also make sure that you can see everything that you are able to see!",
  //     name: "Sherry",
  //     destination: "Kori",
  //   },
  // ];

  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const AUTOPLAY_DELAY = 3000;

  const startAutoplay = React.useCallback(() => {
    if (!api) return;

    stopAutoplay();

    intervalRef.current = setInterval(() => {
      if (!api) return;

      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // loop back
      }
    }, AUTOPLAY_DELAY);
  }, [api]);

  const stopAutoplay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!api) return;

    startAutoplay();

    // Pause on user interaction
    api.on("pointerDown", stopAutoplay);
    api.on("select", startAutoplay);

    return () => {
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <div className="w-screen h-screen">
      {/* reivew */}
      <div className="flex">
        <Image src={Icon} height={40} alt="icons" />
        <p>REVIEWS</p>
      </div>
      <h1>What our clients says about us</h1>
      <div className="flex gap-4 justify-between">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem>
                <div
                  className="bg-[#E2DFCE] flex flex-row justify-around items-center h-80 rounded-lg"
                  key={review.id}
                >
                  <div className="flex-1 flex flex-col">
                    <p>{review.description}</p>
                    <p className="font-bold">{review.name}</p>
                    <p>{review.destination}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialSection;
