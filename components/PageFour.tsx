"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Allura, Poppins } from "next/font/google";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const WEDDING_DATE = new Date("2026-05-31T00:00:00");

export default function PageFour() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background */}
      <Image
        src="/bg-Ines.jpeg"
        alt="Wedding Date"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-md px-6 text-center">

        {/* Judul */}
        <motion.h2
          className={`${titleFont.className} text-white text-5xl mb-2`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Save The Date
        </motion.h2>

        <p className={`${bodyFont.className} text-white/90 mb-8`}>
          31 Mei 2026
        </p>

        {/* COUNTDOWN (CLIENT ONLY) */}
        <Countdown
          date={WEDDING_DATE}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="grid grid-cols-4 gap-3 mb-10">
              {[days, hours, minutes, seconds].map((val, i) => (
                <div
                  key={i}
                  className="bg-white/20 backdrop-blur-md rounded-xl py-4"
                >
                  <div className="text-white text-2xl font-semibold">
                    {val}
                  </div>
                  <div className="text-white/70 text-xs mt-1">
                    {["Hari", "Jam", "Menit", "Detik"][i]}
                  </div>
                </div>
              ))}
            </div>
          )}
        />

        {/* 🔽 KALENDER (STATIC – TIDAK HILANG) */}
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-white">
          <h3 className="mb-4 font-semibold">Mei 2026</h3>

          <div className="grid grid-cols-7 gap-2 text-xs">
            {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
  <div key={i} className="font-medium">
    {d}
  </div>
))}

            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-full
                  ${i + 1 === 31 ? "bg-rose-500 font-bold" : "opacity-70"}
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