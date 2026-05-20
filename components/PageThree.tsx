"use client";

import Image from "next/image";
import { Allura, Poppins, Oregano } from "next/font/google";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Great_Vibes} from "next/font/google";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });
const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const data = [
  {
    name: "Rici",
    full: "Rici Rahman S.Tr.T",
    desc: "Putra dari Alm. Bapak Syamsuri & Ibu Uuk Uswatul Chasanah",
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

/* ================= IG CARD ================= */
const RenderItem = ({ item }: { item: typeof data[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center"
  >
    {/* IG POST CARD */}
    <div className="w-[300px] md:w-[350px] bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#d8c3a5]/40" />
          <span className="text-white/80 text-sm">
            @{item.ig}
          </span>
        </div>
        <span className="text-white/60 text-lg">•••</span>
      </div>

      {/* IMAGE */}
      <div className="relative w-full h-[380px] md:h-[440px]">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
        <div className="flex gap-3 text-white/70 text-lg">
          <span>♡</span>
          <span>✉</span>
          <span>⌲</span>
        </div>
        <span className="text-xs text-white/50">wedding post</span>
      </div>
    </div>

    {/* TEXT */}
    <div className="mt-6 text-center max-w-sm">

      <h2 className={`${oregano.className} text-4xl text-[#e7d3b2]`}>
        {item.name}
      </h2>

      <p className={`${cormorant.className} text-white/90 mt-2 text-lg`}>
        {item.full}
      </p>

      <p className={`${cormorant.className} text-white/90 mt-3 text-lg leading-relaxed`}>
        {item.desc}
      </p>

      <div className="mt-4 text-xs text-white/50">
        instagram.com/{item.ig}
      </div>
    </div>
  </motion.div>
);

/* ================= MAIN ================= */
export default function PageThree() {
  return (
    <section className="relative w-full">

      {/* STICKY BACKGROUND (KEEP SCROLL) */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/bg-sd2.jpg"
          alt="bg"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[#1d1410]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-[100vh] px-6 md:px-16 py-24 text-white">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${titleFont.className} text-center text-6xl md:text-7xl text-[#e7d3b2]`}
        >
          The Wedding Of
        </motion.h1>

        {/* DECOR LINE */}
        <div className="flex items-center justify-center gap-5 my-12">
          <div className="w-24 h-px bg-[#c8a97e]/40" />
          <span className="text-[#e7d3b2] text-sm tracking-[0.3em]">
            EST. LOVE
          </span>
          <div className="w-24 h-px bg-[#c8a97e]/40" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-16 items-center">

          <RenderItem item={data[0]} />

          {/* CENTER ICON */}
          <div className="flex justify-center items-center">
            <div className="text-5xl text-[#e7d3b2] animate-pulse">
              ♡
            </div>
          </div>

          <RenderItem item={data[1]} />

        </div>
      </div>
    </section>
  );
}