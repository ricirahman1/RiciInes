"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Allura,
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";
import { MapPin } from "lucide-react";

/* ================= FONT ================= */
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/* ================= PAGE ================= */
export default function PageWeddingLocation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5efe8]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* IMAGE */}
        <Image
          src="/g11.png"
          alt="Wedding"
          fill
          priority
          className="
            object-cover
            opacity-[0.24]
            scale-105
            saturate-[0.88]
          "
        />

        {/* DARK ELEGANT OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#1e1611]/25
            via-[#3b2d24]/15
            to-[#f5efe8]
          "
        />

        {/* EXTRA DARK LAYER */}
        <div className="absolute inset-0 bg-[#1d1611]/8" />

        {/* LIGHT EFFECT */}
        <div className="absolute -top-32 -left-32 w-[320px] h-[320px] rounded-full bg-[#ceb39a]/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-[#b69276]/20 blur-3xl" />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p
            className={`
              ${poppins.className}
              uppercase
              tracking-[0.45em]
              text-[11px]
              text-[#6f5e52]
              mb-5
            `}
          >
            Wedding Celebration
          </p>

          <h1
            className={`
              ${allura.className}
              text-[68px]
              md:text-[96px]
              text-[#241c17]
              leading-none
              drop-shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            `}
          >
            Save The Date
          </h1>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-px bg-[#b79b85]" />
            <span className="text-[#9d7f67] text-lg">✦</span>
            <div className="w-16 h-px bg-[#b79b85]" />
          </div>

        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">

          {/* ================= LEFT DATE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border border-[#d9cabc]
                bg-[#f7f1eb]/75
                backdrop-blur-[10px]
                p-10
                shadow-[0_20px_70px_rgba(0,0,0,0.08)]
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#ead8c7] blur-3xl opacity-60" />

              <div className="relative z-10">

                <p
                  className={`
                    ${poppins.className}
                    uppercase
                    tracking-[0.35em]
                    text-[11px]
                    text-[#8a7361]
                  `}
                >
                  Sunday
                </p>

                <h2
                  className={`
                    ${cormorant.className}
                    text-[120px]
                    md:text-[145px]
                    text-[#241c17]
                    leading-[0.82]
                    mt-5
                  `}
                >
                  31
                </h2>

                <div className="mt-4">
                  <h3
                    className={`
                      ${cormorant.className}
                      text-4xl
                      text-[#6f5a4b]
                    `}
                  >
                    May 2026
                  </h3>
                </div>

                <div className="mt-10">
                  <p
                    className={`
                      ${poppins.className}
                      text-[#67584c]
                      text-sm
                      leading-relaxed
                    `}
                  >
                    “A beautiful day to celebrate
                    love, laughter, and forever.”
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-8">

            {/* ================= AKAD ================= */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                rounded-[2.5rem]
                border border-[#ddd0c3]
                bg-[#f8f3ee]/70
                backdrop-blur-[10px]
                p-8 md:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >

              <div className="flex items-start justify-between gap-5 flex-wrap">

                <div>

                  <p
                    className={`
                      ${poppins.className}
                      uppercase
                      tracking-[0.35em]
                      text-[10px]
                      text-[#8f7765]
                      mb-4
                    `}
                  >
                    Wedding Ceremony
                  </p>

                  <h2
                    className={`
                      ${cormorant.className}
                      text-5xl md:text-6xl
                      text-[#241c17]
                    `}
                  >
                    Akad Nikah
                  </h2>

                </div>

                <div className="text-right">
                  <p className="text-[#7d6859] text-sm">
                    08.00 WIB
                  </p>
                </div>

              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-10">

                <div>

                  <p
                    className={`
                      ${poppins.className}
                      uppercase
                      tracking-[0.25em]
                      text-[10px]
                      text-[#8f7c6f]
                      mb-3
                    `}
                  >
                    Venue
                  </p>

                  <h3
                    className={`
                      ${cormorant.className}
                      text-3xl
                      text-[#392f28]
                    `}
                  >
                    Gedung Pramuka
                  </h3>

                </div>

                <div>

                  <p
                    className={`
                      ${poppins.className}
                      uppercase
                      tracking-[0.25em]
                      text-[10px]
                      text-[#8f7c6f]
                      mb-3
                    `}
                  >
                    Address
                  </p>

                  <p
                    className={`
                      ${poppins.className}
                      text-[#65584d]
                      text-sm
                      leading-relaxed
                    `}
                  >
                    Jl. Pramuka Raya No.10,
                    Lolong Belanti, Padang Utara,
                    Kota Padang, Sumatera Barat
                  </p>

                </div>

              </div>

            </motion.div>

            {/* ================= RESEPSI ================= */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                rounded-[2.5rem]
                border border-[#ddd0c3]
                bg-[#f3ebe3]/75
                backdrop-blur-[10px]
                p-8 md:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >

              <div className="flex items-start justify-between gap-5 flex-wrap">

                <div>

                  <p
                    className={`
                      ${poppins.className}
                      uppercase
                      tracking-[0.35em]
                      text-[10px]
                      text-[#8b7562]
                      mb-4
                    `}
                  >
                    Wedding Reception
                  </p>

                  <h2
                    className={`
                      ${cormorant.className}
                      text-5xl md:text-6xl
                      text-[#241c17]
                    `}
                  >
                    Resepsi
                  </h2>

                </div>

                <div className="text-right">
                  <p className="text-[#7d6859] text-sm">
                    10.00 WIB
                  </p>
                </div>

              </div>

              <div>

                <p
                  className={`
                    ${poppins.className}
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    text-[#8f7c6f]
                    mt-10
                    mb-3
                  `}
                >
                  Venue
                </p>

                <h3
                  className={`
                    ${cormorant.className}
                    text-3xl
                    text-[#392f28]
                  `}
                >
                  Gedung Pramuka
                </h3>

              </div>

              <div>

                <p
                  className={`
                    ${poppins.className}
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    text-[#8f7c6f]
                    mb-3
                    mt-6
                  `}
                >
                  Address
                </p>

                <p
                  className={`
                    ${poppins.className}
                    text-[#65584d]
                    text-sm
                    leading-relaxed
                  `}
                >
                  Jl. Pramuka Raya No.10,
                  Lolong Belanti, Padang Utara,
                  Kota Padang, Sumatera Barat
                </p>

              </div>

              {/* BUTTON */}
              <div className="mt-10">

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gedung+Pramuka+Padang"
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border border-[#d1bba8]
                    bg-[#fffaf6]
                    px-6
                    py-3
                    text-[#3a3028]
                    hover:scale-105
                    hover:bg-[#f7efe8]
                    transition-all
                    duration-300
                    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                  "
                >

                  <MapPin size={18} />

                  <span
                    className={`
                      ${poppins.className}
                      text-sm
                    `}
                  >
                    View Maps
                  </span>

                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}