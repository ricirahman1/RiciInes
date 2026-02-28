"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Allura, Poppins, Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

export default function PageTwo() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 text-center">
      
      {/* Background Image */}
      <Image
        src="/bg-qs.jpeg"   // ganti dengan path backgroundmu
        alt="Background Page Two"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay untuk membuat teks lebih terbaca */}
      <div className="absolute inset-0 " />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* QS Ar-Rum */}
        <motion.p
          className={`${caveat.className} text-3xl md:text-4xl text-white/90 italic mb-6 max-w-2xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu pasangan-pasangan
          dari jenismu sendiri, agar kamu merasa tenteram di sisinya, dan Dia menjadikan di antaramu
          rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
          bagi kaum yang berpikir.” <br />
          — QS Ar-Rum: 21
        </motion.p>

        
      </div>
    </section>
  );
}