"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Oregano, Poppins } from "next/font/google";
import { BookOpen } from "lucide-react";

/* =======================
   FONTS
======================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const TITLE_TEXT = "Rici & Ines";

/* =======================
   ANIMATION
======================= */
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
      staggerChildren: 0.2,
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

const logoVariant: Variants = {
  hidden: { opacity: 0, y: -60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
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
    scale: 0.9,
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
export default function Cover({
  onOpenAction,
}: {
  onOpenAction: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");

    const formatName = (name: string) =>
      name.replace(/\b\w/g, (c) => c.toUpperCase());

    setGuestName(name ? formatName(decodeURIComponent(name)) : "-");
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
          src="/BG-CVRR.png"
          alt="Wedding Cover"
          fill
          priority
          className="object-cover scale-105"
        />
      </motion.div>

      {/* OVERLAY biar teks kebaca */}
      <motion.div
        variants={overlayVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 "
      />

      {/* CONTENT */}
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6"
      >

        {/* LOGO */}
        <motion.div
          variants={logoVariant}
          className="mb-6 -translate-y-20 md:-translate-y-24"
        >
          <Image
            src="/LOGO.png"
            alt="Wedding Logo"
            width={300}
            height={260}
            priority
            className="mx-auto drop-shadow-[0_10px_40px_rgba(255,255,255,0.4)]"
          />
        </motion.div>

        {/* TITLE */}

        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mt-1 mb-2"
      >
        {/* GARIS KIRI */}
        <div className="w-10 sm:w-14 h-px bg-white/80" />

        {/* TEXT */}
        <p
          className={`
            ${oregano.className}
            text-white
            text-xs sm:text-sm
            tracking-[0.3em]
            whitespace-nowrap
          `}
          style={{
            textShadow:
              "0 5px 25px rgba(0,0,0,0.4), 0 10px 50px rgba(255,105,180,0.25)",
          }}
        >
          THE WEDDING OF
        </p>

        {/* GARIS KANAN */}
        <div className="w-10 sm:w-14 h-px bg-white/80" />
      </motion.div>

        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className={`
            ${oregano.className}
            flex justify-center
            whitespace-nowrap
            text-white
            leading-none
            text-[clamp(5.5rem,14vw,12rem)]
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
              className={char === "&" ? " mt-4 text-6xl mx-4 text-rose-300" : ""}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
    </motion.h1>

        {/* NAMA TAMU */}
        <motion.div variants={itemVariant} className="mt-10">
          <p className={`${poppins.className} text-white/80 text-sm`}>
            Dear
          </p>
          <p
            className={`
              ${poppins.className}
              text-white
              text-xl md:text-2xl
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenAction}
          className={`
            ${poppins.className}
            mt-16
            px-6 md:px-16
            py-3
            rounded-full
            bg-gradient-to-r from-rose-500 to-pink-500
            border border-rose-500/50
            text-white
            font-medium
            shadow-[0_10px_40px_rgba(244,63,94,0.35)]
            flex items-center gap-3
          `}
        >
          <BookOpen size={20} />
          Open Invitation
        </motion.button>
      </motion.div>
    </section>
  );
}