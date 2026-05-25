import Image from "next/image";
import Logo from "@/public/icons/paila_logo.png";
export default function footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-12 bg-[#E2DFCE] py-4">
      <div className="flex flex-col justify-center items-center gap-y-4 py-8">
        <div className="flex justify-center items-center">
          <Image
            src="/icons/paila_logo.png"
            width={60}
            height={60}
            alt="get in touch icon"
          />
          <p>GET IN TOUCH</p>
        </div>
        <p className="text-4xl">Have a question or need assistance?</p>

        <p className="">Have a question or need assistance?</p>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-x-14">
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src={Logo}
            alt="thigns"
            height={50}
            width={50}
            className="bg-green-900 rounded-full"
          />
          <p className="text-2xl">Write Us</p>
          <p className="font-thin">Reach out to us by emailUs</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src={Logo}
            alt="thigns"
            height={50}
            width={50}
            className="bg-green-900 rounded-full"
          />
          <p className="text-2xl">Fill Out Form</p>
          <p className="font-thin">Submit your request online</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src={Logo}
            alt="thigns"
            height={50}
            width={50}
            className="bg-green-900 rounded-full"
          />
          <p className="text-2xl">Call Us</p>
          <p className="font-thin">Mon-Fri from 8am to 5pm</p>
        </div>
      </div>

      <div className="flex gap-x-9 justify-around items-center">
        <p className="font-bold">hello@paila.com</p>
        <button className="px-5 py-3 rounded-3xl bg-green-800 text-amber-50">
          Leave Request
        </button>
        <p className="font-bold">+9779702269971</p>
      </div>

      <div className="flex flex-col bg-green-800 w-7xl px-6 justify-between items-center gap-y-16 rounded-4xl py-10">
        <div className="flex justify-center items-center text-3xl text-[#B0A317]">
          <Image src={Logo} alt="logo" width={50} />
          Tour Agents you can reply on!
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-3 text-amber-50 gap-5 w-full">
            <p className="opacity-50">EXPLORE</p>
            <p className="opacity-50">COMPANY</p>
            <p className="opacity-50">CONTACT</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Athens</p>
            <p>Our Tours</p>
            <p>Contact</p>
            <p>hello@paila.com</p>
            <p>Transfers</p>
            <p>Privacy Policy</p>
            <p>+9779702123641</p>
            <p>Accessibility</p>
          </div>
        </div>

        <p className="opacity-50 text-amber-50">
          © 2025 Piala. All rights reserved.
        </p>
      </div>
    </div>
  );
}
