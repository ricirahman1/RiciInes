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

/* ================= ITEM ================= */
const RenderItem = ({ item }: { item: typeof data[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center"
  >
    {/* ================= FOTO ================= */}
    <div className="relative w-[260px] md:w-[320px] h-[380px] md:h-[460px] group">

      {/* OUTER FRAME */}
      <div className="absolute inset-0 rounded-t-[160px] rounded-b-[20px] border border-white/30" />

      {/* INNER FRAME (GOLD) */}
      <div className="absolute inset-[8px] rounded-t-[150px] rounded-b-[16px] border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.25)]" />

      {/* GLASS */}
      <div className="absolute inset-[8px] rounded-t-[150px] rounded-b-[16px] bg-white/5 backdrop-blur-[2px]" />

      {/* GLASS REFLECTION */}
      <div className="absolute inset-[8px] rounded-t-[150px] rounded-b-[16px] overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
      </div>

      {/* IMAGE */}
      <div className="absolute inset-[8px] overflow-hidden rounded-t-[150px] rounded-b-[16px]">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* SHADOW */}
      <div className="absolute inset-0 rounded-t-[160px] rounded-b-[20px] shadow-[0_25px_70px_rgba(0,0,0,0.45)] pointer-events-none" />
    </div>

    {/* ================= TEXT ================= */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="mt-10 text-center max-w-sm"
    >
      {/* NAME */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className={`
          ${oregano.className}
          text-4xl md:text-5xl
          text-white
          tracking-[0.08em]
        `}
      >
        {item.name}
      </motion.h2>

      {/* FULL NAME */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className={`
          ${bodyFont.className}
          text-white/90
          text-base md:text-lg
          mt-3
        `}
      >
        {item.full}
      </motion.p>

      {/* DESC */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className={`
          ${bodyFont.className}
          text-white/85
          text-sm md:text-base
          mt-4
          leading-relaxed
        `}
      >
        {item.desc}
      </motion.p>

      {/* IG */}
      <motion.div
  variants={{
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }}
  className="mt-6 px-3 py-2 rounded-lg border border-white/25 bg-white/5 backdrop-blur-sm inline-flex flex-col items-center"
>
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition"
  >
    <Instagram size={14} />
    @{item.ig}
  </a>

  <span className="mt-2 w-6 h-[1px] bg-white/30" />
</motion.div>
    </motion.div>
  </motion.div>
);

/* ================= MAIN ================= */
export default function PageThree() {
  return (
    <section className="relative w-full">

      {/* BACKGROUND */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/bg-sd2.jpg"
          alt="bg"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
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
          `}
          style={{
            textShadow:
              "0 10px 40px rgba(0,0,0,0.5), 0 0 25px rgba(212,175,55,0.25)",
          }}
        >
          The Wedding Of
        </motion.h1>

        {/* ORNAMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-16 md:w-24 h-px bg-white/40" />
          <span className="text-white/80 text-lg">✦</span>
          <div className="w-16 md:w-24 h-px bg-white/40" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          <RenderItem item={data[0]} />

          {/* & */}
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="w-10 md:w-16 h-[1px] bg-[#d4af37]/40" />
              <span className={`${titleFont.className} text-4xl md:text-5xl text-[#d4af37]`}>
                &
              </span>
              <span className="w-10 md:w-16 h-[1px] bg-[#d4af37]/40" />
            </div>
          </div>

          <RenderItem item={data[1]} />

        </div>
      </div>
    </section>
  );
}