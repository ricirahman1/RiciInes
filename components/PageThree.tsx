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

/* ================= CARD ================= */
const RenderItem = ({
  item,
}: {
  item: (typeof data)[0];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center"
  >
    {/* IG CARD */}
    <div
      className="
      w-[300px] md:w-[350px]
      rounded-[28px]
      overflow-hidden
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-[0_25px_80px_rgba(0,0,0,0.35)]
    "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-white font-medium group-hover:text-[#f6d4b1] transition">
              @{item.ig}
            </p>

            <p className="text-[10px] tracking-[0.25em] text-white/50">
              WEDDING POST
            </p>
          </div>
        </a>

        <span className="text-white/60 text-lg">•••</span>
      </div>

      {/* IMAGE */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative w-full h-[380px] md:h-[460px] overflow-hidden">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </a>

      {/* ACTION */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Heart
              size={22}
              className="text-white/80 hover:text-pink-400 transition cursor-pointer"
            />

            <Send
              size={20}
              className="text-white/80 hover:text-white transition cursor-pointer"
            />

            <Instagram
              size={20}
              className="text-white/80 hover:text-[#f6d4b1] transition cursor-pointer"
            />
          </div>

          <Bookmark
            size={20}
            className="text-white/70 hover:text-white transition cursor-pointer"
          />
        </div>

        <p className="mt-4 text-sm text-white">
          <span className="font-semibold">@{item.ig}</span>{" "}
          forever starts today ♡
        </p>

        <p className="mt-2 text-xs text-white/50">
          View all comments
        </p>
      </div>
    </div>

    {/* TEXT */}
    <div className="mt-8 text-center max-w-sm">
      <h2
        className={`${oregano.className}
        text-5xl text-[#eb2190]`}
      >
        {item.name}
      </h2>

      <p
        className={`${cormorant.className}
        text-white/90 mt-3 text-2xl`}
      >
        {item.full}
      </p>

      <p
        className={`${cormorant.className}
        text-white/80 mt-4 text-lg leading-relaxed`}
      >
        {item.desc}
      </p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
        inline-flex items-center gap-2
        mt-6 px-5 py-2
        rounded-full
        bg-white/10 hover:bg-white/20
        border border-white/20
        transition
      "
      >
        <Instagram size={16} />
        <span className="text-sm">
          @{item.ig}
        </span>
      </a>
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
          src="/bg-sd2.jpg"
          alt="background"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="
          absolute inset-0
          bg-gradient-to-b
          from-black/20
          via-black/10
          to-[#120d0a]/80
        "
        />
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