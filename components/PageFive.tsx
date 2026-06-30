"use client";

import { useState } from "react";
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
  const [visible, setVisible] = useState(6);

  return (
    <section className="relative overflow-hidden bg-[#120805] py-24">

      {/* GLOW */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-[#b87345]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6b331c]/20 blur-3xl" />

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            relative
            h-[70vh]
            overflow-hidden
            rounded-[40px]
            mb-12
          "
        >
          <Image
            src={gallery[0]}
            fill
            priority
            quality={80}
            sizes="100vw"
            alt=""
            className="
              object-cover
              transition
              duration-700
              hover:scale-[1.02]
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          " />
        </motion.div>

        {/* GALLERY */}
        <div className="
          columns-2
          md:columns-3
          lg:columns-4
          gap-5
          space-y-5
        ">
          {gallery
            .slice(1, visible)
            .map((img, i) => (
              <div
                key={i}
                className="
                  break-inside-avoid
                  relative
                  overflow-hidden
                  rounded-[28px]
                  bg-[#24120d]
                  shadow-xl
                  mb-5
                  group
                "
              >
                <Image
                  src={img}
                  width={600}
                  height={900}
                  loading="lazy"
                  quality={65}
                  sizes="
                    (max-width:768px) 50vw,
                    (max-width:1200px) 33vw,
                    25vw
                  "
                  alt=""
                  className="
                    w-full
                    h-auto
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  border
                  border-[#c9a27b]/20
                  rounded-[28px]
                " />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                " />
              </div>
            ))}
        </div>

        {/* LOAD MORE */}
        {visible < gallery.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() =>
                setVisible((prev) =>
                  Math.min(prev + 6, gallery.length)
                )
              }
              className="
                px-8
                py-4
                rounded-full
                bg-[#c9a27b]
                text-[#120805]
                font-medium
                shadow-lg
                hover:scale-105
                transition
              "
            >
              View More
            </button>
          </div>
        )}

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