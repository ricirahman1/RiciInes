"use client";

import { Allura, Poppins, Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

const titleFont = Allura({
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

export default function PageLast() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(35,25,18,0.45), rgba(35,25,18,0.45)), url('/g1.jpeg')",
      }}
    >

      {/* SOFT LIGHT */}
      <div className="absolute top-[-100px] left-[-80px] w-[260px] h-[260px] rounded-full bg-[#ffe8d2]/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] rounded-full bg-[#fff7f0]/10 blur-3xl" />

      {/* FLOATING ICONS */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-20 left-10 text-white/60 text-2xl"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-24 right-12 text-white/50 text-3xl"
      >
        ✿
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* GLASS CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            border border-white/20
            bg-white/[0.10]
            backdrop-blur-xl
            px-8 py-12
            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            text-center
          "
        >

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

          {/* TOP HEART */}
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
                bg-white/10
                border border-white/20
                flex items-center justify-center
                shadow-inner
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
              text-[#f0d2af]
              text-xs
              mb-2
            `}
          >
            Thank You
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`
              ${titleFont.className}
              text-white
              text-6xl md:text-7xl
              leading-none
              mb-8
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]
            `}
          >
            See You
            <br />
            On Our Day
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`
              ${cormorant.className}
              text-white/90
              text-[1.2 rem]
              leading-[2]
              font-light
            `}
          >
            We have come to our new life, we want to share the joy of our marriage with all the families and friends. We write this invitation to invite all of you to share the joy with us on our wedding
          </motion.p>

          {/* ORNAMENT */}
          <div className="my-8 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-[#f0d2af]/50" />
            <span className="text-[#f0d2af] text-lg">✿</span>
            <div className="w-10 h-px bg-[#f0d2af]/50" />
          </div>


          {/* LOVE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`
              ${cormorant.className}
              text-[#f0d2af]
              uppercase
              tracking-[0.35em]
              text-sm
            `}
          >
            WITH LOVE
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
  className="
    mt-2
    text-center
    
  "
>
  

  <p
    className={`
      ${cormorant.className}
      text-[#dfa91f]
      text-xl md:text-3xl
      tracking-wide
      font-semibold
    `}
  >
    #RICIwithhappINESs
  </p>

  
</motion.div>

          {/* BOTTOM ICON */}
          <div className="mt-8 flex justify-center gap-2 opacity-80">
            <span className="text-[#f0d2af]">♡</span>
            <span className="text-[#f0d2af]">✿</span>
            <span className="text-[#f0d2af]">♡</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}