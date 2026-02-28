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

        {/* BUTTON */}
        <motion.button
          variants={itemVariant}
          onClick={onOpenAction}
          initial={{ opacity: 0, y: 120, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 2.2,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 30px rgba(244,63,94,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${poppins.className}
            mt-10
            px-16 md:px-24
            py-3
            rounded-full
            bg-rose-500 text-white
            font-medium
            shadow-[0_10px_40px_rgba(244,63,94,0.35)]
          `}
        >
          Open Invitation
        </motion.button>

      </motion.div>
    </section>
  );
}