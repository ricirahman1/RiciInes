"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Allura,
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";
import {
  MapPin,
  Clock,
  CalendarDays,
} from "lucide-react";



const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});



export default function Page() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/BG-SVT.jpeg"
        alt=""
        fill
        priority
        className="
          object-cover
          scale-110
          brightness-[0.28]
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#120805]/70" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#2a1710]/20
          via-[#120805]/50
          to-[#120805]
        "
      />

      {/* Glow */}
      <div className="
        absolute
        -top-20
        -left-20
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#b87345]/10
        blur-3xl
      "/>

      <div className="
        absolute
        bottom-0
        right-0
        w-[400px]
        h-[400px]
        rounded-full
        bg-[#6b331c]/20
        blur-3xl
      "/>

      {/* Floral */}
      <Image
        src="/floral-gold.png"
        alt=""
        width={280}
        height={280}
        className="
          absolute
          top-0
          left-0
          opacity-30
          pointer-events-none
        "
      />

      <Image
        src="/floral-gold.png"
        alt=""
        width={280}
        height={280}
        className="
          absolute
          bottom-0
          right-0
          rotate-180
          opacity-30
          pointer-events-none
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
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            max-w-xl
            text-center
          "
        >

          {/* Ornament */}
          <div className="mb-8">
            <span className="text-[#d9b18b] text-2xl">
              ❦
            </span>
          </div>

          {/* Save the date */}
          <h1
            className={`
              ${allura.className}
              text-6xl
              md:text-8xl
              text-[#f4e3d2]
            `}
          >
            Save The Date
          </h1>

          <p
            className={`
              ${poppins.className}
              uppercase
              tracking-[0.5em]
              text-xs
              text-[#c8a27f]
              mt-4
            `}
          >
            Ngunduh Mantu
          </p>

          {/* Name */}
          <div className="my-12">

            <h2
              className={`
                ${cormorant.className}
                text-5xl
                md:text-7xl
                text-[#f5ebe2]
              `}
            >
              Rici
            </h2>

            <div className="text-[#d9b18b] text-2xl my-2">
              &
            </div>

            <h2
              className={`
                ${cormorant.className}
                text-5xl
                md:text-7xl
                text-[#f5ebe2]
              `}
            >
              Partner
            </h2>

          </div>

          {/* Date */}
          <div className="mb-12">

            <p
              className={`
                ${cormorant.className}
                text-4xl
                text-[#d9b18b]
                tracking-[0.15em]
              `}
            >
              05 • JULY • 2026
            </p>

          </div>

          

          {/* Event */}
          <div className="space-y-8">

            <div className="flex justify-center">
              <CalendarDays
                size={24}
                className="text-[#d9b18b]"
              />
            </div>

            <div>
              <h3
                className={`
                  ${cormorant.className}
                  text-4xl
                  text-[#f4e3d2]
                `}
              >
                Sunday
              </h3>

              <p
                className={`
                  ${poppins.className}
                  text-[#c8a27f]
                  mt-2
                `}
              >
                05 July 2026
              </p>
            </div>

            <div className="flex justify-center">
              <Clock
                size={22}
                className="text-[#d9b18b]"
              />
            </div>

            <div>
              <h3
                className={`
                  ${cormorant.className}
                  text-3xl
                  text-[#f4e3d2]
                `}
              >
                10.00 WIB
              </h3>
            </div>

            <div className="flex justify-center">
              <MapPin
                size={24}
                className="text-[#d9b18b]"
              />
            </div>

            <div>
              <h3
                className={`
                  ${cormorant.className}
                  text-3xl
                  text-[#f4e3d2]
                `}
              >
                Gedung Pramuka
              </h3>

              <p
                className={`
                  ${poppins.className}
                  text-[#c8a27f]
                  text-sm
                  leading-7
                  mt-3
                `}
              >
                Jl. Pramuka Raya No.10,
                Lolong Belanti,
                Padang Utara,
                Kota Padang,
                Sumatera Barat
              </p>
            </div>

            {/* Button */}
            <div className="pt-8">

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  border
                  border-[#d9b18b]
                  text-[#f4e3d2]
                  hover:bg-[#d9b18b]
                  hover:text-[#120805]
                  transition-all
                  duration-300
                "
              >
                <MapPin size={18} />
                View Maps
              </a>

            </div>

          </div>

          {/* Bottom Ornament */}
          <div className="mt-16">
            <span className="text-[#d9b18b] text-2xl">
              ❦
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}