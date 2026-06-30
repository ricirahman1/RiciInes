"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Oregano, Poppins } from "next/font/google";

/* ===========================
   Fonts
=========================== */

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/* ===========================
   Utils
=========================== */

const formatGuestName = (name: string) =>
  decodeURIComponent(name.replace(/\+/g, " ")).replace(
    /\b\w/g,
    (c) => c.toUpperCase()
  );

/* ===========================
   Component
=========================== */

export default function Cover({
  onOpenAction,
}: {
  onOpenAction: () => void;
}) {
  const [guestName, setGuestName] = useState("-");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("to");

    if (guest) {
      setGuestName(formatGuestName(guest));
    }
  }, []);

  const titleClass = `
    ${oregano.className}
    text-[#F7E8C4]
    text-[74px]
    md:text-[120px]
    leading-none
    drop-shadow-[0_0_25px_rgba(212,175,55,.35)]
  `;

  return (
    <section className="relative h-screen overflow-hidden">

      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#c03333] via-[#3A1010] to-[#1B0808]" />

        <Image
          src="/foto/slide-1.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover scale-110 opacity-80"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.12),transparent_60%)]" />

      </div>

      {/* Particles */}

      <div className="gold-particles absolute inset-0" />

      {/* Borders */}

      <div className="absolute inset-5 rounded-[34px] border border-[#d4af37]/60" />

      <div className="absolute inset-8 rounded-[30px] border border-[#d4af37]/20" />

      {/* ================= Flowers ================= */}

      

      <motion.div
        className="absolute top-0 right-0"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <Image
          src="/flowers.png"
          width={180}
          height={180}
          alt="Flower"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <Image
          src="/flowers/top-left.png"
          width={180}
          height={180}
          alt="Flower"
        />
      </motion.div>

      {/* ================= Content ================= */}

      <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/logoo.png"
            width={180}
            height={180}
            alt="Logo"
            priority
          />
        </motion.div>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xs tracking-[0.45em] text-[#EACB75] pb-3"
        >
          
        </motion.p>
        <div className="mt-36 flex items-center justify-center gap-6">
  {/* Rici */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className={titleClass}
  >
    Rici
  </motion.h1>

  {/* & */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.9 }}
    className="text-4xl text-[#D4AF37] leading-none"
  >
    &
  </motion.div>

  {/* Ines */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className={titleClass}
  >
    Ines
  </motion.h1>
</div>

        

        {/* Guest */}

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-white/70">
            Dear
          </p>

          <h2
            className={`${poppins.className} mt-2 text-2xl font-medium text-[#FFF8E7]`}
          >
            {guestName}
          </h2>
        </motion.div>

        {/* Button */}

        <motion.button
          onClick={onOpenAction}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(212,175,55,.35)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#D4AF37]
            bg-gradient-to-r
            from-[#5A1818]
            via-[#7C2222]
            to-[#5A1818]
            px-8
            py-4
            text-[#FDEFC5]
            transition-all
          "
        >
          <BookOpen size={20} />
          Open Invitation
        </motion.button>

      </div>
    </section>
  );
}