"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Great_Vibes,
  Poppins,
  Cormorant_Garamond,
} from "next/font/google";

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function PageTwo() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/bg-qs.jpeg"
          alt="Wedding"
          fill
          priority
          className="
            object-cover
            object-center
            brightness-[0.88]
            scale-105
          "
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#6b4d38]/25" />

      {/* BLUR LIGHT */}
      <div className="absolute top-[-100px] right-[-60px] w-[260px] h-[260px] rounded-full bg-[#ffe4d1]/30 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[-80px] w-[280px] h-[280px] rounded-full bg-[#fff7ef]/20 blur-3xl" />

      {/* FLOATING HEARTS */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute top-24 left-10 text-white/60 text-2xl"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-32 right-12 text-white/50 text-3xl"
      >
        ✿
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          w-full max-w-md
        "
      >

        {/* PAPER CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            bg-[#fffaf6]/78
            backdrop-blur-2xl
            border border-white/60
            px-8 py-12
            shadow-[0_20px_80px_rgba(0,0,0,0.18)]
            text-center
          "
        >

          {/* TOP ICON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5 flex justify-center"
          >
            <div
              className="
                w-20 h-20
                rounded-full
                bg-[#f6e7d8]
                flex items-center justify-center
                shadow-inner
                border border-[#ecd8c4]
              "
            >
              <span className="text-4xl">🤍</span>
            </div>
          </motion.div>

          {/* SMALL TITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`
              ${cormorant.className}
              uppercase
              tracking-[0.35em]
              text-[#c1966a]
              text-xs
              mb-3
            `}
          >
            With Love
          </motion.p>

          {/* MAIN TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`
              ${vibes.className}
              text-[#9c7152]
              text-5xl
              leading-none
              mb-8
            `}
          >
            Forever Starts Here
          </motion.h2>

          {/* AYAT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`
              ${poppins.className}
              text-[#5e4b3f]
              text-[0.93rem]
              leading-[2]
              font-light
            `}
          >
            “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
            pasangan untukmu dari jenismu sendiri agar kamu merasa tenteram,
            dan dijadikan-Nya di antaramu rasa kasih dan sayang.”
          </motion.p>

          {/* MINI FLOWER */}
          <div className="my-8 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#d8b594]" />
            <span className="text-[#d8b594] text-lg">✿</span>
            <div className="w-8 h-px bg-[#d8b594]" />
          </div>

          {/* SOURCE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`
              ${cormorant.className}
              text-[#a88462]
              tracking-[0.28em]
              uppercase
              text-sm
            `}
          >
            QS Ar-Rum • 21
          </motion.p>

          {/* BOTTOM DECOR */}
          <div className="mt-10 flex justify-center gap-2 opacity-70">
            <span className="text-[#d7b08a]">♡</span>
            <span className="text-[#d7b08a]">✿</span>
            <span className="text-[#d7b08a]">♡</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}