"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Great_Vibes, Oregano } from "next/font/google";

/* =========================
   FONT
========================= */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

/* =========================
   COMPONENT
========================= */
export default function Cover() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f5ef]">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src="/g12.jpeg"
          alt="Wedding"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            brightness-[1.03]
            
          "
        />
      </motion.div>

      {/* SOFT LIGHT OVERLAY */}
      
      <div className="absolute inset-0 bg-black/15" />
      

      {/* BOTTOM BLUR DECOR */}
      <div
        className="
          absolute
          -bottom-24
          -right-20
          w-72
          h-72
          bg-[#d9cbb7]/40
          rounded-full
          blur-3xl
        "
      />

<div
  className="
    relative z-10
    flex flex-col
    items-end
    justify-center
    min-h-screen
    px-8 md:px-16
    text-right
  "
>

  {/* SMALL TITLE */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className={`
      ${cormorant.className}
      uppercase
      tracking-[0.45em]
      text-[#b67c25]
      text-lg md:text-base
      mb-6
      font-semibold
      self-start
    text-left
    `}
  >
    Wedding Invitation
  </motion.p>

  {/* MAIN TITLE */}
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="leading-[0.85]"
  >

    {/* RICI */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`
        ${oregano.className}
        text-white
        text-[82px]
        md:text-[118px]
        leading-none
        drop-shadow-[0_6px_25px_rgba(0,0,0,0.25)]
      `}
    >
      Rici
    </motion.h1>

    {/* & */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className={`
        ${cormorant.className}
        text-[#e59808]
        text-5xl
        md:text-3xl
        text-center
        mt-5
       
      `}
    >
      &
    </motion.p>

    {/* INES */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className={`
        ${oregano.className}
        text-white
        text-[82px]
        md:text-[118px]
        leading-none
        drop-shadow-[0_6px_25px_rgba(0,0,0,0.25)]
      `}
    >
      Ines
    </motion.h1>

  </motion.div>

 
  {/* HASHTAG */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
  className="
    mt-10
    self-start
    text-left
    pl-8
    pt-6
  "
>
  <div className="w-12 h-px bg-white/40 mb-3" />

  <p
    className={`
      ${cormorant.className}
      text-[#ae7827]
      text-2xl md:text-3xl
      tracking-wide
      font-semibold
    `}
  >
    #RICIwithhappINESs
  </p>

  <div className="w-12 h-px bg-white/40 mt-3" />
</motion.div>

</div>
    </section>
  );
}