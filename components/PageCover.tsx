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
                src="/foto/bg-s2.jpeg"
                alt="Background"
                fill
                priority
                className="object-cover scale-110 opacity-80"
              />
      
              <div className="absolute inset-0 bg-black/10" />
      
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.12),transparent_60%)]" />
      
            </div>


            {/* ================= Floral Decoration ================= */}
<div className="absolute inset-0 pointer-events-none z-[2]">
  {/* Top Left */}
  <motion.div
    initial={{ opacity: 0, x: -40, y: -40 }}
    animate={{ opacity: 0.9, x: 0, y: 0 }}
    transition={{ duration: 1.2 }}
    className="absolute -top-6 -left-6 w-52 md:w-72"
  >
    <Image
      src="/flowers/bottom-right.png"
      alt="Flower"
      width={200}
      height={200}
      className="object-contain rotate-180"
    />
  </motion.div>

  {/* Bottom Right */}
  <motion.div
    initial={{ opacity: 0, x: 40, y: 40 }}
    animate={{ opacity: 0.9, x: 0, y: 0 }}
    transition={{ duration: 1.4 }}
    className="absolute -bottom-6 -right-6 w-56 md:w-80"
  >
    <Image
      src="/flowers/center.png"
      alt="Flower"
      width={200}
      height={300}
      className="object-contain opacity-70"
    />
  </motion.div>

  {/* Small flower middle right */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ duration: 1.6 }}
    className="absolute top-[35%] right-4 w-20 md:w-28"
  >
    <Image
      src="/flowers/center.png"
      alt="Flower"
      width={200}
      height={200}
      className="object-contain"
    />
  </motion.div>
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
          className={`${cormorant.className} self-start uppercase tracking-[0.60em] text-[#c9a27b] text-2xl md:text-2xl`}
        >
          Ngunduh Mantu
        </p>

        

        <div className="mt-36 text-[#EACB75] pt-6">
          <p
            className={`${cormorant.className} `}
          >
            Sunday
          </p>

          <h3
            className={`${cormorant.className} text-[#EACB75] text-2xl md:text-3xl mt-2`}
          >
            5 • July • 2026
          </h3>
        </div>
      </motion.div>
    </section>
  );
}