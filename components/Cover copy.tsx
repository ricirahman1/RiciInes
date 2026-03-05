"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Allura, Poppins, Caveat } from "next/font/google";

/* =======================
   FONTS
======================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

const TITLE_TEXT = "Rici & Ines";

/* =======================
   ANIMATION CONFIG
======================= */
const bgVariant: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const contentVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.25,
    },
  },
};

const itemVariant: Variants = {
  
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const titleLetter: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

/* =======================
   COMPONENT
======================= */
export default function Cover({ onOpenAction }: { onOpenAction: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        variants={bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src="/bg-cvr.jpeg"
          alt="Wedding Cover"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
      </motion.div>


      {/* CONTENT */}
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >

        {/* TITLE */}
        <motion.h1
          variants={titleContainer}
          className={`
            ${titleFont.className}
            flex items-end justify-center
            -rotate-6
            text-white
            leading-none
            text-[clamp(4rem,10vw,9rem)]
            drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]
          `}
        >
          {TITLE_TEXT.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={titleLetter}
              className={char === "&" ? "text-rose-300 mx-3" : ""}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* HASHTAG */}
        <motion.p
          variants={itemVariant}
          className={`${caveat.className} mt-4 text-white/90 text-lg md:text-2xl`}
        >
          #RICIwithhappINESs
        </motion.p>

        {/* KEPADA YTH */}
        <motion.p
          variants={itemVariant}
          className={`${caveat.className} mt-16 md:mt-24 text-white/90 text-lg md:text-2xl`}
        >
          kepada Yth <br />
          Bapak/Ibu/Saudara/i
        </motion.p>

 

      </motion.div>
    </section>
  );
}