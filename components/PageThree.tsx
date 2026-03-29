"use client";

import Image from "next/image";
import { Allura, Poppins, Oregano } from "next/font/google";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

/* ================= FONTS ================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });
const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });

/* ================= DATA ================= */
const data = [
  {
    name: "Rici",
    full: "Rici Rahman S.Tr.T",
    desc: "Putra dari Alm Bapak Syamsuri & Ibu Uuk Uswatul Chasanah",
    img: "/rici.jpeg",
    ig: "ric_rhmn",
    link: "https://www.instagram.com/ric_rhmn",
  },
  {
    name: "Ines",
    full: "Ines Leo Riesgo S.TP",
    desc: "Putri dari Bapak Jefandri & Ibu Eldawati",
    img: "/INESS.jpeg",
    ig: "inesleoriesgo",
    link: "https://www.instagram.com/inesleoriesgo",
  },
];

/* ================= ITEM COMPONENT ================= */
const RenderItem = ({ item }: { item: typeof data[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center"
  >
    {/* FOTO */}
    <div className="relative w-[260px] md:w-[320px] h-[340px] md:h-[420px] group">

      {/* GLOW */}
      <div className="absolute -inset-4 rounded-2xl bg-[#d4af37]/10 blur-xl group-hover:bg-[#d4af37]/20 transition" />

      {/* GOLD FRAME */}
      <div className="absolute -inset-2 rounded-2xl border border-[#d4af37]/50" />

      {/* GLASS */}
      <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)]" />

      {/* IMAGE */}
      <Image
        src={item.img}
        alt={item.name}
        fill
        className="object-cover rounded-2xl p-[6px] transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* TEXT */}
    <div className="mt-8 text-center">

      <h2
        className={`
          ${oregano.className}
          text-5xl md:text-6xl
          bg-gradient-to-r from-[#d4af37] via-[#fff3c4] to-[#d4af37]
          bg-clip-text text-transparent
        `}
      >
        {item.name}
      </h2>

      <p className={`${bodyFont.className} text-white/80 text-sm mt-2`}>
        {item.full}
      </p>

      <p className={`${bodyFont.className} text-white/70 text-sm mt-3 max-w-xs`}>
        {item.desc}
      </p>

      {/* IG */}
      <div className="flex flex-col items-center mt-4">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#d4af37] text-sm hover:scale-105 hover:text-white transition"
        >
          <Instagram size={16} />
          @{item.ig}
        </a>

        <span className="mt-1 w-10 h-[1px] bg-[#d4af37]/70" />
      </div>

    </div>
  </motion.div>
);

/* ================= MAIN COMPONENT ================= */
export default function PageThree() {
  return (
    <section className="relative w-full">

      {/* ===== BACKGROUND (STICKY) ===== */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/bg-sd2.jpg"
          alt="bg"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 -mt-[100vh] px-6 md:px-16 py-20 text-white">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`
            ${titleFont.className}
            text-center
            text-[clamp(3rem,6vw,6rem)]
            mb-20
          `}
          style={{
            textShadow:
              "0 10px 40px rgba(0,0,0,0.5), 0 0 25px rgba(212,175,55,0.25)",
          }}
        >
          The Wedding Of
        </motion.h1>

        {/* ===== GRID 3 KOLOM ===== */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* RICI */}
          <RenderItem item={data[0]} />

          {/* PEMISAH */}
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="w-10 md:w-16 h-[1px] bg-[#d4af37]/40" />
              <span className={`${titleFont.className} text-4xl md:text-5xl text-[#d4af37]`}>
                &
              </span>
              <span className="w-10 md:w-16 h-[1px] bg-[#d4af37]/40" />
            </div>
          </div>

          {/* INES */}
          <RenderItem item={data[1]} />

        </div>

      </div>
    </section>
  );
}