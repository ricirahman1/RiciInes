"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
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
        className="object-cover"
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // very soft cinematic
        }}
        className="
          relative z-10
          w-full max-w-md
          rounded-2xl
          bg-white/20
          backdrop-blur-sm
          px-5 py-6
          shadow-[0_6px_24px_rgba(0,0,0,0.14)]
        "
      >
        {/* AYAT */}
        <p
          className={`
            ${caveat.className}
            text-[0.95rem]
            leading-relaxed
            text-rose-200
            italic
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
            ${caveat.className}
            mt-4
            text-sm
            text-rose-300
          `}
        >
          — QS Ar-Rum: 21
        </p>
      </motion.div>
    </section>
  );
}