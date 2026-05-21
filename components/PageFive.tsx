"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Allura, Cormorant_Garamond } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const gallery = [
  
  { src: "/bg2.jpeg" },
  { src: "/bg1.jpeg" },
  { src: "/bg3.jpeg" },
  { src: "/bg4.jpeg" },
  { src: "/bg5.jpeg" },
  { src: "/bg7.jpeg" },
  { src: "/bg10.jpeg" },
  { src: "/g1.jpeg" },
  
  { src: "/g9.jpg" },
  { src: "/g14.jpeg" },
  { src: "/g24.jpg" },
  { src: "/g25.jpg" },
  { src: "/g26.jpg" },
 
];

export default function PageFive() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ee] py-24 px-5">

      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#e7ddd2]/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#ddd4ca]/40 blur-3xl" />
      </div>

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.16] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      {/* TOP TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center"
      >
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.45em]
            text-[#8b8177]
            mb-3
          "
        >
          Wedding Gallery
        </p>

        <h1
          className={`
            ${allura.className}
            text-[58px]
            md:text-[74px]
            text-[#2e2a27]
            leading-none
          `}
        >
          Portrait Of Us
        </h1>

        <div className="mt-5 flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-[#c8beb4]" />
          <div className="h-2 w-2 rotate-45 border border-[#d50a84]" />
          <div className="h-[1px] w-16 bg-[#c8beb4]" />
        </div>
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          z-8
          mx-auto
          max-w-[1050px]
          border
          border-[#e4d8cb]
          bg-white/90
          backdrop-blur-sm
          p-4
          md:p-4
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
        "
      >

        {/* INNER BORDER */}
        <div className="border border-[#db0c70] p-5 md:p-7">

          {/* HEADER */}
          <div className="mb-2 flex items-center justify-between">

            <div>
              <p className="text-[10px] tracking-[0.35em] text-[#504a44] uppercase">
                The Groom
              </p>

              <h2
                className={`
                  ${cormorant.className}
                  text-[28px]
                  md:text-[34px]
                  tracking-[0.18em]
                  text-[#2d2926]
                `}
              >
                RICI
              </h2>
            </div>

            <div
              className={`
                ${allura.className}
                text-[54px]
                md:text-[68px]
                text-[#ec0876]
              `}
            >
              &
            </div>

            <div className="text-right">
              <p className="text-[10px] tracking-[0.35em] text-[#4d4742] uppercase">
                The Bride
              </p>

              <h2
                className={`
                  ${cormorant.className}
                  text-[28px]
                  md:text-[34px]
                  tracking-[0.18em]
                  text-[#2d2926]
                `}
              >
                INES
              </h2>
            </div>

          </div>

          {/* PROFESSIONAL MASONRY */}
<div
  className="
    columns-2
    md:columns-3
    gap-3
    space-y-3
  "
>
  {gallery.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: i * 0.04,
      }}
      viewport={{ once: true }}
      className="
        group
        relative
        overflow-hidden
        bg-[#f4f1ec]
        break-inside-avoid
      "
    >

      {/* IMAGE */}
      <Image
        src={item.src}
        alt="Wedding Gallery"
        width={1000}
        height={1500}
        className="
          w-full
          h-auto
          object-contain
          transition-transform
          duration-[1800ms]
          ease-out
          group-hover:scale-[1.03]
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/10
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-700
          group-hover:opacity-100
        "
      />

      {/* FRAME */}
      <div
        className="
          absolute
          inset-[10px]
          border
          border-white/50
          opacity-0
          transition
          duration-700
          group-hover:opacity-100
        "
      />
    </motion.div>
  ))}
</div>

          {/* FOOTER */}
          <div className="pt-14 text-center">

           

            <h2
              className={`
                ${cormorant.className}
                text-[36px]
                md:text-[46px]
                tracking-[0.2em]
                text-[#2d2926]
                leading-none
              `}
            >
              WEDDING DAY
            </h2>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-[1px] w-10 bg-[#cfc4b8]" />
              <div className="h-2 w-2 rounded-full bg-[#c2b2a1]" />
              <div className="h-[1px] w-10 bg-[#cfc4b8]" />
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#5f5852]">
                Sunday, 31 May 2026
              </p>

              <p className="text-[11px] tracking-[0.25em] text-[#8b8177] uppercase">
                Padang, Indonesia
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}