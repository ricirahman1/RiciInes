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
    <section
      className="
        relative min-h-screen w-full
        flex items-center justify-center
        px-4
        text-center
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <Image
        src="/bg-qs.jpeg"
        alt="Background Page Two"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* SOFT DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
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
          shadow-[0_4px_18px_rgba(0,0,0,0.12)]
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