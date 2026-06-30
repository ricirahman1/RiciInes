"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Oregano } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Cover() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= Background ================= */}
      
            <div className="absolute inset-0">
      
              <div className="absolute inset-0 bg-gradient-to-b from-[#ea6262] via-[#3A1010] to-[#1B0808]" />
      
              <Image
                src="/bg-s2.jpg"
                alt="Background"
                fill
                priority
                className="object-cover scale-110 opacity-30"
              />
      
              <div className="absolute inset-0 bg-black/10" />
      
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.12),transparent_60%)]" />
      
            </div>

            
      {/* Particles */}

      <div className="gold-particles absolute inset-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex min-h-screen flex-col justify-center items-end px-8 md:px-20 text-right"
      >
        <p
          className={`${cormorant.className} self-start uppercase tracking-[0.60em] text-[#EACB75] text-lg md:text-base`}
        >
          Wedding Invitation
        </p>

        <div className="mt-6 leading-none">
          <h1
            className={`${oregano.className} text-[82px] md:text-[120px] text-[#EACB75] drop-shadow-xl`}
          >
            Rici
          </h1>

          <p
            className={`${cormorant.className} text-[#EACB75] text-4xl md:text-5xl text-center my-3`}
          >
            &
          </p>

          <h1
            className={`${oregano.className} text-[82px] md:text-[120px] text-[#EACB75] drop-shadow-xl`}
          >
            Ines
          </h1>
        </div>

        <div className="mt-8 border-t border-[#C9A96A]/40 pt-6">
          <p
            className={`${cormorant.className} uppercase tracking-[0.3em] text-[#EACB75] text-sm`}
          >
            Sunday
          </p>

          <h3
            className={`${cormorant.className} text-[#EACB75] text-2xl md:text-3xl mt-2`}
          >
            31 • May • 2026
          </h3>
        </div>
      </motion.div>
    </section>
  );
}