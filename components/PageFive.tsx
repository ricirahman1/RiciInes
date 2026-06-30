"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Allura,
  Cormorant_Garamond,
} from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const gallery = [
  "/foto/G1.jpeg",
  "/foto/G2.jpeg",
  "/foto/G3.jpeg",
  "/foto/G4.jpeg",
  "/foto/G5.jpeg",
  "/foto/G6.jpeg",
  "/foto/G7.jpeg",
  "/foto/G8.jpeg",
  "/foto/G9.jpeg",
  "/foto/G10.jpeg",
  "/foto/G11.jpeg",
  "/foto/G12.jpeg",
  "/foto/G13.jpeg",
  "/foto/G14.jpeg",
  "/foto/G15.jpeg",
  "/foto/G16.jpeg",
  "/foto/G17.jpeg",
  "/foto/G18.jpeg",

  

];

export default function PageFive() {
  return (
    <section className="relative overflow-hidden bg-[#120805] py-24">

      {/* GLOW */}
      <div className="
        absolute
        -top-20
        -left-20
        w-[450px]
        h-[450px]
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
        width={280}
        height={280}
        alt=""
        className="
          absolute
          top-0
          left-0
          opacity-20
          pointer-events-none
        "
      />

      <Image
        src="/floral-gold.png"
        width={280}
        height={280}
        alt=""
        className="
          absolute
          bottom-0
          right-0
          rotate-180
          opacity-20
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-center mb-20"
        >
          <p className="
            uppercase
            tracking-[0.5em]
            text-xs
            text-[#c9a27b]
          ">
            Wedding Gallery
          </p>

          <h1
            className={`
              ${allura.className}
              text-7xl
              md:text-8xl
              text-[#f4e3d2]
              mt-4
            `}
          >
            Portrait Of Us
          </h1>

          <div className="mt-6 text-[#c9a27b] text-xl">
            ❦
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1 }}
          className="
            relative
            h-[75vh]
            overflow-hidden
            rounded-[40px]
            mb-8
          "
        >
          <Image
            src={gallery[0]}
            fill
            priority
            alt=""
            className="
              object-cover
              transition
              duration-[2500ms]
              hover:scale-105
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          "/>
        </motion.div>

        {/* EDITORIAL GRID */}
        <div className="
          grid
          md:grid-cols-12
          gap-5
        ">

          {gallery.slice(1).map((img, i) => {

            const large =
              i === 1 ||
              i === 4 ||
              i === 7;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity:0,
                  y:40,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                transition={{
                  duration:.8,
                  delay:i*.05,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[30px]
                  bg-[#24120d]
                  ${
                    large
                      ? "md:col-span-7"
                      : "md:col-span-5"
                  }
                `}
              >
                <Image
                  src={img}
                  width={1200}
                  height={1600}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-[2000ms]
                    hover:scale-110
                  "
                />

                <div className="
                  absolute
                  inset-0
                  border
                  border-[#c9a27b]/20
                  rounded-[30px]
                "/>

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  to-transparent
                "/>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-24">

          <div className="text-[#c9a27b] text-xl">
            ❦
          </div>

          <h2
            className={`
              ${cormorant.className}
              text-5xl
              text-[#f4e3d2]
              mt-8
            `}
          >
            WEDDING DAY
          </h2>

          <p className="
            mt-5
            uppercase
            tracking-[0.35em]
            text-[#c9a27b]
            text-xs
          ">
            Sunday • 05 July 2026
          </p>

        </div>
      </div>
    </section>
  );
}