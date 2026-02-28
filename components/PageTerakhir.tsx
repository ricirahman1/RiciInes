"use client";

import { Allura } from "next/font/google";
import { motion } from "framer-motion";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

export default function PageLast() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-center px-6"
      style={{ backgroundImage: "url('/bg-test.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-xl text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`${titleFont.className} text-4xl md:text-5xl mb-6`}>
          Thank You
        </h2>

        <p className="text-lg leading-relaxed opacity-90">
          Today we celebrate love, <br />
          tomorrow we build a lifetime together. <br />
          Thank you for being part of our forever.
        </p>

        <div className="mt-10 text-sm tracking-widest opacity-80">
          WITH LOVE
        </div>
      </motion.div>
    </section>
  );
}