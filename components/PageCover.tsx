"use client";

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

      {/* BACKGROUND VIDEO */}
      <motion.div
        variants={bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* OVERLAY */}
      <motion.div
        variants={overlayVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-black/40"
      />

      {/* ANIMATED LINES */}
      {/* ANIMATED ELEGANT LINES */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">

  {/* === HORIZONTAL LINES === */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "70%", opacity: 0.35 }}
    transition={{ duration: 1.6, delay: 1 }}
    className="absolute top-[20%] left-0 h-[2px] bg-white"
  />

  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "50%", opacity: 0.25 }}
    transition={{ duration: 1.6, delay: 1.2 }}
    className="absolute top-[35%] right-0 h-[1px] bg-white"
  />

  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "60%", opacity: 0.3 }}
    transition={{ duration: 1.6, delay: 1.4 }}
    className="absolute top-[55%] left-0 h-[2px] bg-white"
  />

  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "40%", opacity: 0.2 }}
    transition={{ duration: 1.6, delay: 1.6 }}
    className="absolute top-[75%] right-0 h-[1px] bg-white"
  />

  {/* === VERTICAL LINES === */}
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "60%", opacity: 0.25 }}
    transition={{ duration: 1.6, delay: 1.3 }}
    className="absolute left-[8%] top-0 w-[1px] bg-white"
  />

  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "50%", opacity: 0.2 }}
    transition={{ duration: 1.6, delay: 1.5 }}
    className="absolute right-[10%] bottom-0 w-[2px] bg-white"
  />

  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "40%", opacity: 0.15 }}
    transition={{ duration: 1.6, delay: 1.7 }}
    className="absolute left-[20%] bottom-0 w-[1px] bg-white"
  />

  {/* === FLOATING LINES (GERAK HALUS) === */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{
      width: "50%",
      opacity: 0.2,
      x: [0, 40, 0],
    }}
    transition={{
      duration: 8,
      delay: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[45%] left-0 h-[1px] bg-white"
  />

  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{
      height: "50%",
      opacity: 0.15,
      y: [0, 30, 0],
    }}
    transition={{
      duration: 9,
      delay: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-[25%] top-0 w-[1px] bg-white"
  />

</div>

      {/* CONTENT */}
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className="
          relative z-10 min-h-screen
          flex items-center md:items-start
          justify-start
          px-8 md:px-20
          pt-40 md:pt-32
        "
      >
        <div className="max-w-2xl">

          {/* SUBTITLE */}
          <motion.p
            variants={itemVariant}
            className={`
              ${oregano.className}
              mb-3
              text-xs md:text-sm
              uppercase tracking-[0.3em]
              text-white/80
            `}
          >
            Wedding Invitation
          </motion.p>

<motion.h1
  variants={titleContainer}
  className={`
    ${oregano.className}
    flex flex-wrap items-center justify-center md:justify-start
    text-white
    leading-none
    text-[clamp(5rem,10vw,10rem)]
  `}
  style={{
    textShadow:
      "0 5px 25px rgba(0,0,0,0.4), 0 10px 50px rgba(255,105,180,0.25)",
  }}
>
  {TITLE_TEXT.split("").map((char, i) => (
    <motion.span
      key={i}
      variants={titleLetter}
      className={`
        inline-flex items-center justify-center
        ${char === "&"
          ? "mx-3 md:mx-6 text-rose-300 text-[clamp(2rem,6vw,4rem)]"
          : ""}
      `}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h1>

          {/* HASHTAG */}
          <motion.p
            variants={itemVariant}
            className={`
              ${oregano.className}
              mt-4
              text-lg md:text-3xl
              text-white/85
            `}
          >
            #RICIwithhappINESs
          </motion.p>

          {/* DECOR LINE */}
          <motion.div
            variants={itemVariant}
            className="mt-6 w-24 h-[2px] bg-white/50"
          />

        </div>
      </motion.div>
    </section>
  );
}