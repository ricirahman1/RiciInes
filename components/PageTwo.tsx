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
          src="/bg-s3.jpg"
          alt="Wedding Background"
          fill
          priority
          className="
            object-cover
            object-center
            scale-105
            brightness-[0.65]
          "
        />
      </div>

      {/* MAHOGANY OVERLAY */}
      <div className="absolute inset-0 bg-[#2d1810]/70" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#7a3b22]/25 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[#5a2413]/20 blur-3xl" />

      {/* FLOATING ORNAMENT */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute top-24 left-10 text-[#d8a574]/50 text-2xl"
      >
        ❦
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-32 right-12 text-[#d8a574]/50 text-3xl"
      >
        ✦
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full max-w-md"
      >
        {/* LUXURY CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            bg-gradient-to-br
            from-[#2a1812]/92
            via-[#3b2218]/88
            to-[#24120d]/92
            backdrop-blur-3xl
            border
            border-[#8b5a3c]/40
            px-8
            py-12
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            text-center
          "
        >

          {/* GOLD SHINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d8a574] to-transparent opacity-70" />

          {/* TOP ICON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <div
              className="
                w-20
                h-20
                rounded-full
                bg-[#4a281d]
                border
                border-[#8b5a3c]
                flex
                items-center
                justify-center
                shadow-[0_0_30px_rgba(184,115,69,0.25)]
              "
            >
              <span className="text-4xl">🤍</span>
            </div>
          </motion.div>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`
              ${cormorant.className}
              uppercase
              tracking-[0.4em]
              text-[#d8a574]
              text-xs
              mb-4
            `}
          >
            WITH LOVE
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`
              ${vibes.className}
              text-[#f1d1b0]
              text-5xl
              leading-none
              mb-8
            `}
          >
            Forever Starts Here
          </motion.h2>

          {/* VERSE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`
              ${poppins.className}
              text-[#f5ebe2]
              text-[0.92rem]
              leading-[2]
              font-light
            `}
          >
            "Dan di antara tanda-tanda kebesaran-Nya ialah Dia
            menciptakan pasangan untukmu dari jenismu sendiri agar
            kamu merasa tenteram kepadanya, dan dijadikan-Nya di
            antaramu rasa kasih dan sayang."
          </motion.p>

          {/* ORNAMENT */}
          <div className="my-8 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-[#b87345]" />
            <span className="text-[#b87345] text-xl">❦</span>
            <div className="w-10 h-px bg-[#b87345]" />
          </div>

          {/* SOURCE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`
              ${cormorant.className}
              text-[#d8a574]
              tracking-[0.3em]
              uppercase
              text-sm
            `}
          >
            QS AR-RUM • 21
          </motion.p>

          {/* BOTTOM ORNAMENT */}
          <div className="mt-10 flex justify-center gap-4 opacity-80">
            <span className="text-[#c98b59]">❦</span>
            <span className="text-[#d8a574]">✦</span>
            <span className="text-[#c98b59]">❦</span>
          </div>

          {/* BOTTOM GOLD LINE */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d8a574] to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}