"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Allura } from "next/font/google";

/* =======================
   FONT
======================= */
const titleFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const title = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

/* =======================
   ANIMATED WIND LINE
======================= */
function WindLine() {
  return (
    <motion.svg
      width={340}
      height={140}
      viewBox="0 0 340 140"
      className="-rotate-12 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.path
        d="M20 80 C90 20, 160 20, 230 80 S320 140, 260 80 S160 20, 90 80"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={1.2}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.path
        d="M30 70 C100 30, 160 30, 230 70 S310 110, 260 70 S160 30, 100 70"
        fill="none"
        stroke="rgba(253,164,175,0.85)"
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

/* =======================
   TITLE TYPEWRITER CONFIG
======================= */
const TITLE_TEXT = "Rici & Ines";

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const titleLetter: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

/* =======================
   COVER COMPONENT
======================= */
export default function Cover({ onOpenAction }: { onOpenAction: () => void }) {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(onOpenAction, 700);
  };

  return (
    <section
      className={`
        fixed inset-0 z-50 overflow-hidden
        transition-all duration-700 ease-in-out
        ${closing ? "-translate-y-full opacity-0" : "opacity-100"}
      `}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/bg-cvr.jpeg"
        alt="Wedding Cover"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/1" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">

        <WindLine />

        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className={`
            ${titleFont.className}
            text-[7.5rem] md:text-[9rem]
            text-white
            leading-none
            flex items-end
            -rotate-12
            origin-left
            -translate-y-40
            drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]
          `}
        >
          {TITLE_TEXT.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={titleLetter}
              className={`
                inline-block
                ${char === "&" ? "text-rose-300 mx-4" : ""}
              `}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          <motion.span
            className="ml-2 text-rose-300"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p className={`${titleFont.className} text-2xl text-white/90 mt-4 text-center`}>
            #RICIwithhappINESs
        </motion.p>

        <div className="mt-32">
            <motion.p
              className={`${title.className} text-2xl text-white/90 mt-4 text-center`}
            >
              "kepada Yth <br /> Bapak/Ibu/Saudara/i"
            </motion.p>
        </div>

        <motion.button
          onClick={handleOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className={`
            ${titleFont.className}
            mt-6
            px-20 py-3
            rounded-full
            bg-rose-500 text-white
            shadow-lg
            transition-transform
            hover:scale-105
            active:scale-95
          `}
        >
          Open Invitation
        </motion.button>

      </div>
    </section>
  );
}