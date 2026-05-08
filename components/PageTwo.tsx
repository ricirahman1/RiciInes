"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function PageTwo() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center px-4 text-center">

  

  {/* BACKGROUND */}
  <Image
    src="/bg-qs.jpeg"
    alt="Background Page Two"
    fill
    priority
    className="object-cover scale-105 opacity-100"
  />

  

      {/* CONTENT */}

      <div className="absolute inset-0 opacity-[1.15] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          w-full max-w-sm
          rounded-xl
          bg-white/10
          backdrop-blur-md
          px-4 py-5

          border border-white/20
          shadow-[0_8px_30px_rgba(0,0,0,0.2)]
          before:absolute before:inset-0 before:rounded-xl
          before:border before:border-white/10
          before:pointer-events-none
          after:absolute after:inset-0 after:rounded-xl
          after:border after:border-white/10 after:blur
        "
      >
        {/* AYAT */}
        <p
          className={`
            ${poppins.className}
            text-[0.85rem] md:text-[0.95rem]
            leading-relaxed md:leading-loose
            text-white/90
          `}
        >
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu
          pasangan-pasangan dari jenismu sendiri, agar kamu merasa tenteram di sisinya,
          dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu
          benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”
        </p>

        {/* SOURCE */}
        <p
          className={`
            ${poppins.className}
            mt-3
            text-[0.75rem] md:text-xs
            tracking-wide
            text-white/70
          `}
        >
          — QS Ar-Rum: 21
        </p>

        {/* DECOR LINE */}
        <div className="mx-auto mt-4 h-[1px] w-10 bg-white/40" />
      </motion.div>
    </section>
  );
}