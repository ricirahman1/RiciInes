"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Allura, Oregano } from "next/font/google";
import { useState } from "react";

/* ================= FONT ================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });

export default function PageGift() {
  const [copied, setCopied] = useState(false);

  const rekening = "1234567890";
  const bank = "BCA";
  const nama = "Rici & Ines";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/bg-cvrr.jpeg"
        alt="Gift"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${titleFont.className} text-4xl text-white mb-10`}
        >
          Wedding Gift
        </motion.h2>

        {/* CARD LUCU */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          className="
            relative
            w-[300px]
            rounded-3xl
            p-6
            bg-pink-200/90
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            text-center
            hover:scale-105
            transition-all duration-300
          "
        >

          {/* STICKER */}
          <div className="absolute -top-4 -right-3 bg-white px-3 py-1 text-[10px] rounded-full shadow rotate-12">
            💖 Gift
          </div>

          {/* ICON */}
          <div className="text-3xl mb-3">💳</div>

          {/* BANK */}
          <p className="text-sm text-gray-700">{bank}</p>

          {/* NOMOR */}
          <p className="text-lg tracking-widest text-gray-800 mt-1">
            {rekening}
          </p>

          {/* NAMA */}
          <p className={`${oregano.className} text-sm mt-3 text-gray-700`}>
            {nama}
          </p>

          {/* BUTTON */}
          <button
            onClick={handleCopy}
            className="
              mt-5 w-full
              py-2.5
              rounded-full
              text-xs font-semibold
              text-white
              bg-rose-400
              shadow-md
              hover:bg-rose-500
              hover:scale-105
              active:scale-95
              transition
            "
          >
            {copied ? "Tersalin 💖" : "Copy Rekening"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}