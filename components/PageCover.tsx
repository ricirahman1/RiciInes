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
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

const overlayVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2 },
  },
};

const contentVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
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
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.08,
    },
  },
};

const titleLetter: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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
          src="/B-S5.jpeg"
          alt="Wedding Cover"
          fill
          priority
          className="object-cover object-center"
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
          flex items-center md:items-start
          justify-start
          px-10 md:px-20
          pt-12 md:pt-32
        "
      >
        <div>

          <motion.p
            variants={itemVariant}
            className={`${oregano.className} mb-3 text-xs md:text-sm uppercase tracking-[0.3em] text-white/80`}
          >
            Wedding Invitation
          </motion.p>

          <motion.h1
            variants={titleContainer}
            className={`${oregano.className} flex flex-wrap items-center text-white leading-none text-[clamp(5rem,10vw,10rem)]`}
          >
            {TITLE_TEXT.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={titleLetter}
                className={char === "&" ? "mx-3 md:mx-6 text-rose-300 text-[clamp(2rem,6vw,4rem)]" : ""}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariant}
            className={`${oregano.className} mt-4 text-lg md:text-3xl text-white/85`}
          >
            #RICIwithhappINESs
          </motion.p>

          <motion.div
            variants={itemVariant}
            className="mt-6 w-24 h-[2px] bg-white/50"
          />

        </div>
      </motion.div>
    </section>
  );
}