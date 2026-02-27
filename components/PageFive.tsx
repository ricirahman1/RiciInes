"use client";

import { useState, useEffect } from "react";
import { Allura } from "next/font/google";
import { Camera } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

const images = [
  "/bg-test.jpg",
  "/bg-cvrr.jpeg",
  "/bg-cover.jpeg",
  "/bg-wedding.jpg",
  "/bg-test.jpg",
  "/bg-cvrr.jpeg",
  "/bg-cover.jpeg",
  "/bg-wedding.jpg",
  "/bg-test.jpg",
  "/bg-cvrr.jpeg",
];

const captions = [
  "Momen Bahagia",
  "Kenangan Indah",
  "Cinta Sejati",
  "Hari Istimewa",
  "Momen Bahagia",
  "Kenangan Indah",
  "Cinta Sejati",
  "Hari Istimewa",
  "Momen Bahagia",
  "Kenangan Indah",
];

export default function PageFive() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gray-200 flex flex-col items-center justify-center px-6 py-12 text-center">

      {/* Judul dengan ikon kamera */}
      <motion.div
        className={`flex items-center justify-center gap-3 ${titleFont.className} mb-10`}
      >
        <motion.p className="text-4xl md:text-5xl text-white font-semibold">
          Potrait Of Us
        </motion.p>
        <Camera className="w-8 h-8 text-white" />
      </motion.div>

      {/* Foto Besar dengan kotak putih di bawah untuk caption */}
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-white">
        <div className="relative w-full h-[500px]">
          
            <motion.div
              key={activeIndex}
              className="absolute w-full h-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={images[activeIndex]}
                alt={`Foto Besar ${activeIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          

          {/* Kotak putih untuk caption */}
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 text-center">
            <span className="text-gray-800 font-semibold text-lg">
              {captions[activeIndex]}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-6 overflow-x-auto py-2 px-1 w-full max-w-4xl scrollbar-hide">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative w-32 h-20 md:w-40 md:h-24 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-transform ${
              activeIndex === idx ? "scale-105 border-2 border-rose-500" : "hover:scale-105"
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}