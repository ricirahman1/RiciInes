"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Oregano, Poppins } from "next/font/google";
import { BookOpen } from "lucide-react";

/* ======================= FONTS ======================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const TITLE_TEXT = ["Rici", " & ", "Ines"];

/* ======================= ANIMATION ======================= */
const bgVariant: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

const overlayVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
};

const titleLetter: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6 },
  },
};

/* ======================= COMPONENT ======================= */
export default function Cover({
  onOpenAction,
}: {
  onOpenAction: () => void;
}) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");

    const formatName = (name: string) =>
      name.replace(/\b\w/g, (c) => c.toUpperCase());

    setGuestName(name ? formatName(decodeURIComponent(name)) : "-");
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        variants={bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src="/BG-CVRR.png"
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
        className="absolute inset-0 bg-black/10"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-6 min-h-[100svh]">

        {/* LOGO */}
        <motion.div
          variants={itemVariant}
          initial="hidden"
          animate="visible"
          className="mb-4 sm:mb-6 translate-y-[-40px] sm:translate-y-[-60px]"
        >
          <Image
            src="/LOGO.png"
            alt="Wedding Logo"
            width={280}
            height={260}
            priority
            className="mx-auto w-[200px] sm:w-[200px] md:w-[260px]"
          />
        </motion.div>

        {/* GARIS + TEXT */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-0">
          <div className="w-6 sm:w-10 h-px bg-white/70" />

          <p
            className={`
              ${poppins.className}
              text-white
              text-[14px] sm:text-xs
              tracking-[0.25em]
            `}
          >
            THE WEDDING OF
          </p>

          <div className="w-6 sm:w-10 h-px bg-white/70" />
        </div>

        {/* TITLE */}
<h1
  className={`
    ${oregano.className}
    w-full max-w-[900px] mx-auto
    text-white
    leading-none
    text-[clamp(5rem,13vw,8rem)]
    mt-1
  `}
>
  {/* Rici */}
  <div className="flex justify-center -translate-x-8">
    {"Rici".split("").map((char, i) => (
      <motion.span key={i} variants={titleLetter}>
        {char}
      </motion.span>
    ))}
  </div>

  {/* & */}
  <div className="flex justify-center text-[0.4em] translate-x-2 my-1">
    {"&".split("").map((char, i) => (
      <motion.span key={i} variants={titleLetter}>
        {char}
      </motion.span>
    ))}
  </div>

  {/* Ines */}
  <div className="flex justify-center translate-x-8">
    {"Ines".split("").map((char, i) => (
      <motion.span key={i} variants={titleLetter}>
        {char}
      </motion.span>
    ))}
  </div>
</h1>

{/* GARIS + TEXT */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          

          <p
            className={`
              ${poppins.className}
              text-white
              text-[14px] sm:text-xs
              tracking-[0.25em]
            `}
          >
            SUNDAY, 31 MAY 2026
          </p>

          
        </div>

        {/* GUEST */}
        <motion.div variants={itemVariant} className="mt-6 sm:mt-8">
          <p className={`${poppins.className} text-white/80 text-xs sm:text-sm`}>
            Dear
          </p>
          <p
            className={`
              ${poppins.className}
              text-white
              text-lg sm:text-xl md:text-2xl
              font-medium
              mt-1
            `}
          >
            {guestName}
          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          variants={itemVariant}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenAction}
          className={`
            ${poppins.className}
            mt-10 sm:mt-14
            px-6 sm:px-10
            py-3
            rounded-full
            bg-gradient-to-r from-rose-500 to-pink-500
            text-white
            text-sm sm:text-base
            flex items-center gap-2 sm:gap-3
          `}
        >
          <BookOpen size={18} />
          Open Invitation
        </motion.button>
      </div>
    </section>
  );
}