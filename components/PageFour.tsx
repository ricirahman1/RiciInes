"use client";

import { motion } from "framer-motion";
import { Allura } from "next/font/google";
import Image from "next/image";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

export default function PageFour() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 text-center">
      
      {/* Background Image */}
      <Image
        src="/bg-Ines.jpeg" // ganti dengan background yang diinginkan
        alt="Background Page Perempuan"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay supaya teks terbaca */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-6 h-full pt-32 md:pt-40">
        {/* Nama mempelai perempuan */}
        <motion.h2
          className={`${titleFont.className} text-5xl md:text-6xl text-white mb-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ines Leo Riesgo
        </motion.h2>

        {/* Anak dari */}
        <motion.p
          className={`${titleFont.className} text-2xl md:text-3xl text-white/90 mb-2`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Putri dari:
        </motion.p>

        {/* Nama orang tua */}
        <motion.p
          className={`${titleFont.className} text-xl md:text-2xl text-white/80 italic`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Bapak Jefandri & Ibu Eldawati
        </motion.p>
      </div>
    </section>
  );
}