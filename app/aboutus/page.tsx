import React from "react";
import Image from "next/image";
import bannerImage from "@/public/pictures/hero-photo2.png";
import carImage from "@/public/pictures/one-pic.jpg";
import logo from "@/public/icons/paila_logo.png";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="bg-[#F0EDE0] min-h-screen">
      {/* ── Page Title ── */}
      <section className="px-10 md:px-20 pt-12 pb-6">
        <h1 className="text-5xl font-extrabold text-green-900 tracking-tight">
          ABOUT COMPANY
        </h1>
      </section>

      {/* ── Full-width Banner ── */}
      <section className="px-10 md:px-20">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src={bannerImage}
            alt="About us banner"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="px-10 md:px-20 py-14 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <p className="text-2xl font-bold text-green-900 leading-snug max-w-md">
            Paila Excursions was created with a clear purpose: to make every
            journey comfortable, seamless, and memorable.
          </p>
        </div>
        <div className="flex-1 flex items-start pt-1">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            With many years of experience in the tourism industry, our team is
            driven by a passion for hospitality and a deep love for Nepal's
            landscapes and culture.
          </p>
        </div>
      </section>

      {/* ── 2×2 Content Grid ── */}
      <section className="px-10 md:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

          {/* Cell 1 — What we do */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold underline underline-offset-4 text-green-900">
              What we do?
            </span>
            <p className="text-2xl font-bold text-green-900 leading-snug">
              We provide premium transportation with a personal touch.
            </p>
          </div>

          {/* Cell 2 — Our Vehicles */}
          <div className="flex gap-6">
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-xs font-semibold underline underline-offset-4 text-green-900">
                Our Vehicles
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our fleet includes luxury vehicles like the Mercedes Vito
                9-seater — perfect for private tours and small groups. For
                larger groups, our spacious MAN TG 3180 minibus delivers the
                same level of comfort and convenience.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To make your trip even easier, we offer reliable transfers to
                and from airports and ports. Need accommodations? We can handle
                that too, so you can relax and focus on enjoying every moment
                of your travel.
              </p>
            </div>
            <div className="relative w-44 h-40 rounded-xl overflow-hidden shrink-0 self-start mt-5">
              <Image
                src={carImage}
                alt="Our vehicle"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cell 3 — Accessibility */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold underline underline-offset-4 text-green-900">
              Accessibility
            </span>
            <p className="text-2xl font-bold text-green-900 leading-snug">
              At Paila, inclusivity is at the heart of what we do. We believe
              travel should be effortless and enjoyable for everyone.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              That's why we offer wheelchair-friendly vehicles, ensuring that
              no traveler misses the opportunity to experience the beauty of
              Nepal. Your comfort and ease are always our priority.
            </p>
          </div>

          {/* Cell 4 — Our Team */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold underline underline-offset-4 text-green-900">
              Our Team
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our drivers aren't just there to get you from one place to
              another — they're professionals who prioritize your safety and
              comfort.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beyond their expertise on the road, they are passionate guides
              with a deep knowledge of Nepal's history and culture. Whether
              sharing local stories or helping you uncover hidden gems, they
              ensure every journey is as enriching as it is secure.
            </p>
            <Link
              href="/ourtours"
              className="text-sm font-bold text-green-900 underline underline-offset-4 mt-1 w-fit"
            >
              EXPLORE TOURS ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#E8E4D4] py-24 px-10 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={18} />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            WHY PAILA?
          </span>
        </div>
        <p className="text-4xl font-bold text-green-900 max-w-xl leading-snug">
          We make every trip a harmonious blend of comfort and discovery. Start
          your adventure with Paila — contact us now!
        </p>
        <Link
          href="/contact"
          className="text-sm font-bold text-green-900 underline underline-offset-4 mt-2"
        >
          CONTACT US ↗
        </Link>
      </section>
    </div>
  );
}
