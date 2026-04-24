"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Allura, Caveat, Oregano } from "next/font/google";
import { MapPin } from "lucide-react";
import { Poppins } from "next/font/google";



const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const caveatFont = Caveat({ subsets: ["latin"], weight: ["400"] });
const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });



export default function PageWeddingLocation() {
  return (
    <section className="relative w-full">

      {/* BACKGROUND */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/g11.png"
          alt="Wedding Location"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-[100vh] px-6 pt-28 pb-40 max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${titleFont.className} text-white text-5xl md:text-6xl text-center`}
        >
          The Wedding Day
        </motion.h2>

        {/* ORNAMENT */}
        <div className="flex items-center justify-center my-12">
          <span className="w-24 h-px bg-white/40" />
          <span className="mx-4 text-white/70 text-xl">✦</span>
          <span className="w-24 h-px bg-white/40" />
        </div>

        {/* ================= AKAD ================= */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 items-start mt-24">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-left"
          >
            <h3 className={`${oregano.className} text-6xl text-white`}>
              Akad Nikah
            </h3>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 text-right"
          >
            <h4 className={`${oregano.className} text-white/90 text-2xl`}>
              Wedding Venue
            </h4>

            <p className={`${poppins.className} text-white/80 text-sm md:text-base`}>
              Gedung Pramuka <br />
              Jl. Pramuka Raya No.10, Lolong Belanti,<br /> Kec. Padang Utara, Kota Padang, Sumatera Barat
            </p>
          </motion.div>
          
        </div>

        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative text-left"
>


  {/* MAIN TEXT */}
  <h3
    className={`${oregano.className} relative font-extrabold text-6xl text-white mt-10`}
      
  >
    31 <br /> 05 <br /> 26
  </h3>
</motion.div>

          <motion.div                
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 text-right"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gedung+Pramuka+Padang"
              target="_blank"
              className="inline-flex items-center gap-2
                         px-6 py-3 rounded-full
                         bg-rose-500 text-white font-medium
                         hover:bg-rose-600 transition"
            >
              <MapPin size={18} />
              View Maps
            </a>
          </motion.div>

        

        {/* ================= RESEPSI ================= */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 items-start mt-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-left"
          >
            <h3 className={`${oregano.className} text-5xl text-white`}>
              Resepsi
            </h3>

            <p className={`${poppins.className} text-white/80 text-sm md:text-base`}>
              Gedung Pramuka <br />
              Jl. Pramuka Raya No.10, Lolong Belanti,<br /> Kec. Padang Utara, Kota Padang, Sumatera Barat
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}