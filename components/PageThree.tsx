"use client";

import Image from "next/image";
import { Allura, Poppins } from "next/font/google";
import { Instagram } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const TITLE_TEXT_THREE = "The wedding of";

/* ================= ANIMATION ================= */
const titleLetter: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function PageThree() {
  return (
    <section className="relative w-full">

      {/* BACKGROUND STICKY */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/bg-sd2.jpg"
          alt="Wedding Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      
      {/* SCROLL CONTENT */}
<div className="relative z-10 -mt-[100vh]">

  {/* ===== JUDUL ===== */}
  <div className="min-h-[20vh] flex items-end justify-center pb-12">
    <motion.h1
      variants={titleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`
        ${titleFont.className}
        flex items-end justify-center
        text-white
        leading-none
        text-[clamp(4rem,10vw,9rem)]
        drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]
      `}
    >
      {TITLE_TEXT_THREE.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={titleLetter}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  </div>

  {/* ===== CARD LAKI-LAKI ===== */}
  <div className="flex flex-col items-center text-center pb-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl bg-white">
        <Image
          src="/rici.jpeg"
          alt="Rici Rahman"
          width={400}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-6 text-white">
        <h2 className={`${titleFont.className} text-5xl mb-4 
        `}>
          Rici Rahman
        </h2>
        <p className={`${bodyFont.className} text-white/90 mb-4`}>
          Putra dari Alm Bapak Syamsuri <br />
          & Ibu Uuk Uswatul Chasanah
        </p>
        <div className="flex flex-col items-center">
  <a
    href="https://instagram.com/rici"
    target="_blank"
    className="inline-flex items-center gap-2 text-rose-600 font-medium"
  >
    <Instagram size={18} />
    @rici
  </a>

  <motion.span
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: 80, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mt-1 h-[1.5px] rounded-full bg-rose-600/90"
  />
</div>
      </div>
    </motion.div>
  </div>


  {/* ===== LOGO PEMISAH ===== */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex items-center justify-center gap-6 py-6 mb-16"
>
  {/* garis kiri */}
  <span className="h-[1px] w-20 bg-white/40" />

  {/* logo / simbol */}
  <span
    className={`
      ${titleFont.className}
      text-8xl text-rose-400 drop-shadow 
    `}
  >
    &
  </span>

  {/* garis kanan */}
  <span className="h-[1px] w-20 bg-white/40" />
</motion.div>

  {/* ===== CARD PEREMPUAN ===== */}
  <div className="flex flex-col items-center text-center pb-32 ">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl bg-white">
        <Image
          src="/INESS.jpeg"
          alt="Ines"
          width={400}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-6 text-white">
        <h2 className={`${titleFont.className} text-5xl mb-4`}>
          Ines Leo Riesgo
        </h2>
        <p className={`${bodyFont.className} text-white/90 mb-4`}>
          Putri dari Bapak Jefandri <br />
          & Ibu Eldawati
        </p>
        <div className="flex flex-col items-center">
  <a
    href="https://instagram.com/rici"
    target="_blank"
    className="inline-flex items-center gap-2 text-rose-600 font-medium"
  >
    <Instagram size={18} />
    @InesLeoRiesgo
  </a>

  <motion.span
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: 80, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mt-1 h-[1.5px] rounded-full bg-rose-600/90"
  />
</div>
      </div>
    </motion.div>
  </div>

</div>
    </section>
  );
}