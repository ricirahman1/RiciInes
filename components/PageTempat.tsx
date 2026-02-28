"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { Allura, Poppins } from "next/font/google";
import { MapPin, Clock } from "lucide-react";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const WEDDING_DATE = new Date("2026-05-31T09:00:00");

export default function PageWeddingLocation() {
  return (
    <section className="relative w-full">

      {/* BACKGROUND STICKY */}
      <div className="sticky top-0 h-screen w-full bg-black/20">
        <Image
          src="/bg-qs.jpeg"
          alt="Wedding Location"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-[100vh] px-6 pt-28 pb-40 max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${titleFont.className} text-white text-5xl md:text-6xl text-center`}
        >
          The Wedding Day
        </motion.h2>

        {/* ORNAMENT */}
        <div className="flex items-center justify-center my-10">
          <span className="w-24 h-px bg-white/40" />
          <span className="mx-4 text-white/70 text-xl">✦</span>
          <span className="w-24 h-px bg-white/40" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left space-y-5"
          >
            <h3 className={`${titleFont.className} text-4xl text-rose-300`}>
              Akad & Resepsi
            </h3>

            <p className={`${bodyFont.className} text-white/90`}>
              Minggu, 31 Mei 2026
            </p>

            <div className="flex items-center gap-2 text-white/90">
              <Clock size={18} />
              <span className={`${bodyFont.className}`}>
                09.00 – 17.00 WIB
              </span>
            </div>

            {/* COUNTDOWN */}
            <Countdown
              date={WEDDING_DATE}
              renderer={({ days, hours, minutes }) => (
                <div className="flex gap-4 mt-6">
                  {[days, hours, minutes].map((v, i) => (
                    <div
                      key={i}
                      className="bg-white/15 backdrop-blur-md px-4 py-3 rounded-xl text-center"
                    >
                      <div className="text-white text-xl font-semibold">
                        {v}
                      </div>
                      <div className="text-white/70 text-xs">
                        {["Hari", "Jam", "Menit"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-right space-y-6"
          >
            <p className={`${bodyFont.className} text-white/90 leading-relaxed`}>
              Gedung Pramuka <br />
              Jln. Pramuka <br />
              Padang, Indonesia 25136
            </p>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Gedung+Pramuka+Padang&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gedung+Pramuka+Padang"
              target="_blank"
              className="inline-flex items-center gap-2 justify-end
                         px-6 py-3 rounded-full
                         bg-rose-500 text-white font-medium
                         hover:bg-rose-600 transition"
            >
              <MapPin size={18} />
              Buka di Google Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}