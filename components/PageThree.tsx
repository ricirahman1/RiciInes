"use client";

import Image from "next/image";
import {
  Allura,
  Poppins,
  Oregano,
  Cormorant_Garamond,
} from "next/font/google";
import {
  Heart,
  Send,
 Bookmark,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

const titleFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/* ================= DATA ================= */
const data = [
  {
    name: "Rici",
    full: "Rici Rahman S.Tr.T",
    desc: "Putra dari Alm. Bapak Syamsuri & Ibu Uuk Uswatul Chasanah",
    img: "/foto/abang.jpeg",
    ig: "ric_rhmn",
    link: "https://www.instagram.com/ric_rhmn",
  },
  {
    name: "Ines",  
    full: "Ines Leo Riesgo S.TP",
    desc: "Putri dari Bapak Jefandri & Ibu Eldawati",
    img: "/foto/adekk.jpeg",
    ig: "inesleoriesgo",
    link: "https://www.instagram.com/inesleoriesgo",
  },
];

const RenderItem = ({
  item,
}: {
  item: (typeof data)[0];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="flex flex-col items-center"
  >
    {/* CARD */}
    <div
      className="
        relative
        w-[320px]
        md:w-[380px]
        rounded-[36px]
        overflow-hidden
        bg-gradient-to-br
        from-[#24120d]/95
        via-[#3b2218]/92
        to-[#1b0f0a]/95
        border
        border-[#b78b61]/40
        shadow-[0_30px_100px_rgba(0,0,0,0.5)]
        backdrop-blur-xl
      "
    >
      {/* TOP DECOR */}
      <div className="pt-8 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-px bg-[#b78b61]" />
          <span className="text-[#d9b78a] text-xl">❦</span>
          <div className="w-10 h-px bg-[#b78b61]" />
        </div>
      </div>

      {/* FRAME */}
      <div className="px-8 pt-8">
        <div
          className="
            relative
            aspect-[3/4]
            rounded-[180px]
            overflow-hidden
            border-[4px]
            border-[#d78227]
            shadow-[0_0_35px_rgba(197,156,115,0.25)]
          "
        >
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-cover scale-110 opacity-80"
          />

          <div className="absolute inset-0 ring-8 ring-[#6d4229]/80 rounded-[180px]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-8 py-10 text-center">
        <p
          className={`
            ${cormorant.className}
            uppercase
            tracking-[0.35em]
            text-[#d8b48a]
            text-xs
          `}
        >
          THE BRIDE & GROOM
        </p>

        <h2
          className={`
            ${oregano.className}
            text-[#f1d7bc]
            text-6xl
            mt-4
          `}
        >
          {item.name}
        </h2>

        <p
          className={`
            ${cormorant.className}
            text-[#f5ebe2]
            text-2xl
            mt-4
          `}
        >
          {item.full}
        </p>

        <div className="flex justify-center my-6">
          <div className="w-20 h-px bg-[#b78b61]" />
        </div>

        <p
          className={`
            ${cormorant.className}
            text-[#d6c6b8]
            text-lg
            leading-relaxed
          `}
        >
          {item.desc}
        </p>

        {/* BUTTON */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            mt-8
            px-6
            py-3
            rounded-full
            bg-[#5a2413]
            border
            border-[#b78b61]
            hover:bg-[#743822]
            transition
          "
        >
          <Instagram size={16} />
          <span>@{item.ig}</span>
        </a>
      </div>

      {/* BOTTOM ORNAMENT */}
      <div className="pb-8 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-px bg-[#b78b61]" />
          <span className="text-[#d9b78a]">❦</span>
          <div className="w-10 h-px bg-[#b78b61]" />
        </div>
      </div>
    </div>
  </motion.div>
);

/* ================= PAGE ================= */
export default function PageThree() {
  return (
    <section className="relative w-full min-h-[220vh]">

      {/* STICKY BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
  <Image
    src="/foto/bg-s2.jpeg"
    alt="background"
    fill
    priority
    className="object-cover scale-110 brightness-[0.80]"
  />

  <div className="absolute inset-0 bg-[#1a0d08]/60" />

  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-[#2d1810]/20
      via-[#1b100b]/50
      to-[#120805]/95
    "
  />

  {/* candle glow */}
  <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[#b87345]/20 blur-3xl" />

  <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-[#7a3b22]/20 blur-3xl" />
</div>

      {/* CONTENT */}
      <div
        className="
        relative z-10
        -mt-[100vh]
        px-6 md:px-16
        py-24
        text-white
      "
      >
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1
            className={`${titleFont.className}
            text-6xl md:text-8xl
            text-[#f2d7b6]
            drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]`}
          >
            The Wedding Of
          </h1>

          <p
            className={`${bodyFont.className}
            mt-4
            text-white/70
            tracking-[0.3em]
            text-sm`}
          >
            FOREVER • TOGETHER • ALWAYS
          </p>
        </motion.div>

        {/* DECOR */}
        <div className="flex items-center justify-center gap-5 my-14">
          <div className="w-24 h-px bg-[#d8b48a]/40" />

          <div className="text-[#f2d7b6] text-2xl">
            ♡
          </div>

          <div className="w-24 h-px bg-[#d8b48a]/40" />
        </div>

        {/* GRID */}
        <div
          className="
          grid
          md:grid-cols-[1fr_auto_1fr]
          gap-16
          items-center
        "
        >
          <RenderItem item={data[0]} />

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center"
          >
            <div
              className={`${titleFont.className}
              text-[120px]
              text-[#f2d7b6]
              drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]`}
            >
              &
            </div>
          </motion.div>

          <RenderItem item={data[1]} />
        </div>

        {/* EXTRA SPACE AGAR STICKY SCROLL TETAP ADA */}
        <div className="h-[40vh]" />

      </div>
    </section>
  );
}