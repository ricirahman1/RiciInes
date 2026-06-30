"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Allura,
  Poppins,
  Cormorant_Garamond,
} from "next/font/google";
import { MapPin } from "lucide-react";
import { House } from "lucide-react";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function NgunduhMantu() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/foto/bg-s4.jpeg"
        alt=""
        fill
        priority
        className="
          object-cover
          brightness-[0.25]
          scale-110
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#120805]/75" />

      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-[#2a1710]/20
        via-[#120805]/50
        to-[#120805]
      " />

      {/* Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-96
        h-96
        rounded-full
        bg-[#b87345]/10
        blur-3xl
      " />

      <div className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        rounded-full
        bg-[#8a4b2b]/10
        blur-3xl
      " />

      {/* Floral */}
      <Image
        src="/flowers/top-left.png"
        alt=""
        width={260}
        height={260}
        className="
          absolute
          top-0
          left-0
          opacity-68
          rotate-90
        "
      />

      <Image
        src="/flowers/bottom-right.png"
        alt=""
        width={260}
        height={260}
        className="
          absolute
          bottom-0
          right-0
          rotate-0
          opacity-65
        "
      />

      {/* Content */}
      <div className="
        relative
        z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-8
      ">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            max-w-lg
            text-center
          "
        >

          <div className="text-[#d9b18b] text-2xl mb-6">
            ❦
          </div>

          {/* Title */}
          <h1
            className={`
              ${allura.className}
              text-6xl
              md:text-8xl
              text-[#f5ebe2]
            `}
          >
            Save The Date
          </h1>

          <h2
            className={`
              ${serif.className}
              text-4xl
              md:text-5xl
              text-[#d9b18b]
              mt-6
            `}
          >
            Ngunduh Mantu
          </h2>

          {/* Text */}
          <p
            className={`
              ${poppins.className}
              text-[#d4c0af]
              leading-8
              mt-10
            `}
          >
            Dengan memohon rahmat dan
            ridho Allah SWT, kami
            mengundang Bapak/Ibu/
            Saudara/i untuk menghadiri
            acara Ngunduh Mantu.
          </p>

          <div className="my-12 text-[#d9b18b] text-xl">
            ✦
          </div>

          {/* Date */}
          <h3
            className={`
              ${serif.className}
              text-5xl
              text-[#f5ebe2]
            `}
          >
            Minggu
          </h3>

          <p
            className={`
              ${poppins.className}
              text-[#d9b18b]
              tracking-[0.3em]
              uppercase
              mt-3
            `}
          >
            05 JULI 2026
          </p>

          {/* Time */}
          <div className="mt-12">
            <p
              className={`
                ${serif.className}
                text-4xl
                text-[#f5ebe2]
              `}
            >
              14.00 WIB - Selesai
            </p>
          </div>

          {/* Venue */}
         

<div className="mt-12">
  <div className="flex justify-center">
    <div className="
      w-16 h-16
      rounded-full
      border border-[#c9a27b]/30
      bg-[#24120d]/40
      backdrop-blur-md
      flex items-center justify-center
      shadow-[0_0_30px_rgba(201,162,123,.15)]
    ">
      <House
        className="w-7 h-7 text-[#c9a27b]"
        strokeWidth={1.7}
      />
    </div>
  </div>

  <p
    className={`
      ${poppins.className}
      text-[#c7af99]
      text-sm
      mt-5
      leading-7
      text-center
    `}
  >
    Mangsang Permai Blok J No. 95, Kel. Mangsang,
    Kec. Sei Beduk, Kota Batam, Kepulauan Riau
  </p>
</div>

          {/* Maps */}
          <a
            href="https://maps.app.goo.gl/xZgKza8WqYNWLhpQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              mt-14
              px-8
              py-4
              rounded-full
              bg-[#d9b18b]
              text-[#120805]
              font-medium
              shadow-[0_10px_40px_rgba(217,177,139,.3)]
              hover:scale-105
              transition-all
            "
          >
            <MapPin size={18} />
            View Location
          </a>

          <div className="mt-14 text-[#d9b18b] text-2xl">
            ❦
          </div>

        </motion.div>
      </div>
    </section>
  );
}