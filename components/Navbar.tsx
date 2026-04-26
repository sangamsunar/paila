import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/paila_logo.png";

export default function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 bg-amber-400 text-green-700">
      {/* Left: Logo */}
      
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="Paila logo" width={100} height={50} />
      </Link>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/ourtours" className="hover:underline">
          Our Tours
        </Link>
        <Link href="/aboutus" className="hover:underline">
          About Us
        </Link>
      </div>

      {/* Right: Button */}
      <div>
        <button className="bg-green-800 text-amber-50 px-5 py-2 rounded-full hover:bg-green-900 transition">
          BOOK A TOUR
        </button>
      </div>
    </nav>
  );
}
