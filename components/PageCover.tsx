"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Oregano } from "next/font/google";

/* =======================
   FONT
======================= */
const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const TITLE_TEXT = "Rici & Ines";

/* =======================
   ANIMATION
======================= */
const bgVariant: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const overlayVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const contentVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.07,
    },
  },
};

const titleLetter: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =======================
   COMPONENT
======================= */
export default function Cover() {
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
          src="/BG-SD2.jpeg"
          alt="Wedding Cover"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </motion.div>

      {/* OVERLAY */}
      <motion.div
        variants={overlayVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-black/30"
      />

      {/* CONTENT */}
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className="
          relative z-10 min-h-screen
          flex items-start justify-start
          px-16 md:px-12
          pt-[32vh] md:pt-[34vh]
        "
      >
        <div className="max-w-xl">

          {/* SUBTITLE */}
          <motion.p
            variants={itemVariant}
            className={`
              ${oregano.className}
              text-xs md:text-sm
              uppercase tracking-[0.3em]
              text-white/90
            `}
          >
            Wedding Invitation
          </motion.p>

          {/* TITLE */}
          <motion.h1
            variants={titleContainer}
            className={`
              ${oregano.className}
              flex items-end
              text-white
              leading-none
              text-[clamp(6rem,12vw,11rem)]
            `}
            style={{
              textShadow:
                "0 5px 25px rgba(0,0,0,0.4), 0 10px 50px rgba(255,105,180,0.25)",
            }}
          >
            {"Rici".split("").map((char, i) => (
              <motion.span key={i} variants={titleLetter}>
                {char}
              </motion.span>
            ))}

            {/* FIXED & */}
            <motion.span
              variants={titleLetter}
              className="
                mx-4 md:mx-6
                text-rose-300
                text-[0.4em]
                self-center
              "
            >
              &
            </motion.span>

            {"Ines".split("").map((char, i) => (
              <motion.span key={i + 10} variants={titleLetter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* HASHTAG */}
          <motion.p
            variants={itemVariant}
            className={`
              ${oregano.className}
              mt-3
              text-lg md:text-2xl
              text-white/90
            `}
          >
            #RICIwithhappINESs
          </motion.p>

          {/* LINE */}
          <motion.div
            variants={itemVariant}
            className="mt-4 w-20 h-px bg-white/50"
          />

        </div>
      </motion.div>
    </section>
  );
}