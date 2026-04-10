"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Allura, Poppins } from "next/font/google";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

/* =======================
   FONT
======================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

/* =======================
   DATE
======================= */
const WEDDING_DATE = new Date("2026-05-31T00:00:00");

/* =======================
   COMPONENT
======================= */
export default function PageFour() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden mb-0">

      {/* BACKGROUND */}
      <Image
        src="/BG-SVT.jpeg"
        alt="Wedding Date"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-sm px-8 text-center">

        {/* TITLE */}
        <motion.h2
          className={`${titleFont.className} text-white text-6xl md:text-6xl mb-2`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Save The Date
        </motion.h2>

       <div className="flex items-center justify-center gap-4 mb-6">
  <span className="w-10 h-[1px] bg-white/40" />
  
  <p className={`${bodyFont.className} text-white/90 text-sm md:text-base tracking-[0.2em] uppercase`}>
    31 Mei 2026
  </p>
  
  <span className="w-10 h-[1px] bg-white/40" />
</div>

        {/* COUNTDOWN MINI */}
        <Countdown
          date={WEDDING_DATE}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="grid grid-cols-4 gap-2 mb-6 ">
              {[days, hours, minutes, seconds].map((val, i) => (
                <div
                  key={i}
                  className="bg-white/15 backdrop-blur-sm rounded-md py-2 border border-white/20"
                >
                  <div className="text-white text-lg font-medium">
                    {val}
                  </div>
                  <div className="text-white/60 text-[9px] mt-[2px]">
                    {["Hari", "Jam", "Menit", "Detik"][i]}
                  </div>
                </div>
              ))}
            </div>
          )}
        />

        {/* CALENDAR MINI */}
        <div className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-white max-w-xs mx-auto shadow-lg shadow-black/20">

          <h3 className="mb-3 text-sm font-medium">
            Mei 2026
          </h3>

          {/* HARI */}
          <div className="grid grid-cols-7 gap-1 text-[10px] mb-1">
            {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
              <div key={i} className="opacity-80">
                {d}
              </div>
            ))}
          </div>

          {/* TANGGAL */}
          <div className="grid grid-cols-7 gap-1">
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`
                  w-6 h-6 flex items-center justify-center rounded-full text-[10px]
                  ${i + 1 === 31
                    ? "bg-rose-500 text-white font-bold"
                    : "text-white/70"}
                `}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}