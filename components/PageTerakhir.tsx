"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Allura,
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";

const titleFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function PageLast() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/g1.jpeg"
        alt=""
        fill
        priority
        className="
          object-cover
          brightness-[0.25]
          scale-105
        "
      />

      {/* MAHOGANY OVERLAY */}
      <div className="absolute inset-0 bg-[#120805]/75" />

      {/* GOLD GLOW */}
      <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#b87345]/10
        blur-3xl
      "/>

      <div className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#6b331c]/20
        blur-3xl
      "/>

      {/* FLORAL */}
      <Image
        src="/floral-gold.png"
        width={260}
        height={260}
        alt=""
        className="
          absolute
          top-0
          left-0
          opacity-20
        "
      />

      <Image
        src="/floral-gold.png"
        width={260}
        height={260}
        alt=""
        className="
          absolute
          bottom-0
          right-0
          rotate-180
          opacity-20
        "
      />

      {/* CONTENT */}
      <div className="
        relative
        z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      ">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            max-w-3xl
            w-full
          "
        >

          {/* FRAME */}
          <div
            className="
              relative
              rounded-[50px]
              bg-[#24120d]/50
              backdrop-blur-xl
              border
              border-[#c9a27b]/20
              px-10
              py-16
              text-center
              shadow-[0_30px_100px_rgba(0,0,0,.5)]
            "
          >

            {/* ORNAMENT */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-[#c9a27b]" />
                <span className="text-[#c9a27b] text-xl">
                  ❦
                </span>
                <div className="w-16 h-px bg-[#c9a27b]" />
              </div>
            </div>

            {/* TITLE */}
            <p
              className={`
                ${poppins.className}
                uppercase
                tracking-[0.45em]
                text-[#c9a27b]
                text-xs
              `}
            >
              Thank You
            </p>

            <h1
              className={`
                ${titleFont.className}
                text-[#f4e3d2]
                text-6xl
                md:text-8xl
                mt-4
                leading-none
              `}
            >
              See You
              <br />
              On Our Day
            </h1>

            {/* DIVIDER */}
            <div className="flex justify-center my-10">
              <div className="w-24 h-px bg-[#c9a27b]/40" />
            </div>

            {/* TEXT */}
            <p
              className={`
                ${serif.className}
                text-[#f4e3d2]/90
                text-lg
                md:text-xl
                leading-9
              `}
            >
              We are entering a beautiful new chapter
              of our lives and would be honored to
              celebrate this joyful moment with our
              beloved family and friends.
              <br /><br />
              Your presence and blessings will make
              our wedding day truly unforgettable.
            </p>

            {/* ORNAMENT */}
            <div className="flex justify-center my-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-[#c9a27b]" />
                <span className="text-[#c9a27b]">
                  ❦
                </span>
                <div className="w-16 h-px bg-[#c9a27b]" />
              </div>
            </div>

            {/* SIGNATURE */}
            <p
              className={`
                ${poppins.className}
                uppercase
                tracking-[0.45em]
                text-[#c9a27b]
                text-xs
              `}
            >
              WITH LOVE
            </p>

            <h2
              className={`
                ${serif.className}
                text-[#f4e3d2]
                text-4xl
                mt-4
              `}
            >
              Rici & Ines
            </h2>

            <p
              className={`
                ${serif.className}
                text-[#c9a27b]
                text-xl
                mt-6
              `}
            >
              #RICIwithhappINESs
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}