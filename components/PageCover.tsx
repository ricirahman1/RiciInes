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

const TITLE_TEXT = "RICI & Ines";

/* =======================
   ANIMATION CONFIG
======================= */
const bgVariant: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const contentVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.25,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
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
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // cinematic easing
    },
  },
};

/* =======================
   COMPONENT
======================= */
export default function Cover() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <motion.div
        variants={bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src="/bg-slide-2.jpeg"
          alt="Wedding Cover"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className="
          relative z-10 min-h-screen
          flex items-start justify-start
          px-8 pt-24
          text-left
        "
      >
        {/* ROTATED GROUP */}
        <div className="-rotate-6">

          {/* SUBTITLE */}
          <motion.p
            variants={itemVariant}
            className={`
              ${caveat.className}
              text-white/90
              uppercase tracking-[0.28em]
              mb-3
              text-sm md:text-base
            `}
          >
            Wedding Invitation
          </motion.p>

          {/* TITLE */}
          <motion.h1
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className={`
              ${titleFont.className}
              flex items-end
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
                className={char === "&" ? "text-rose-300 mx-4" : ""}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* HASHTAG */}
          <motion.p
            variants={itemVariant}
            className={`
              ${caveat.className}
              mt-2
              text-white/90
              text-lg md:text-2xl
            `}
          >
            #RICIwithhappINESs
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
}