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
    <section className="relative h-screen w-full flex items-center justify-center px-6 text-center overflow-hidden">
      
      {/* BACKGROUND */}
      <Image
        src="/bg-qs.jpeg"
        alt="Background Page Two"
        fill
        priority
        className="object-cover"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            max-w-3xl
            rounded-3xl
            bg-white/25
            backdrop-blur-[2px]
            px-8 py-10
            md:px-12 md:py-12
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          "
        >
          {/* AYAT */}
          <p
            className={`
              ${caveat.className}
              text-base md:text-xl
              leading-relaxed
              text-rose-300
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
              mt-5
              text-sm md:text-base
              text-rose-300
            `}
          >
            — QS Ar-Rum: 21
          </p>
        </motion.div>
      </div>
    </section>
  );
}