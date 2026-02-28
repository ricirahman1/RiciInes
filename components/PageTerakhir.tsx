"use client";

import { Allura } from "next/font/google";
import { motion } from "framer-motion";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

export default function PageLast() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/bg-ending.jpg')",
      }}
    >
      <motion.div
        className="max-w-xl text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={`${titleFont.className} text-4xl md:text-5xl mb-6`}>
          Thank You
        </h2>

        <p className="text-lg leading-relaxed opacity-90">
          Today we celebrate love,
          <br />
          tomorrow we build a lifetime together.
          <br />
          Thank you for being part of our forever.
        </p>

        <div className="mt-10 text-sm tracking-widest opacity-80">
          WITH LOVE
        </div>
      </motion.div>
    </section>
  );
}