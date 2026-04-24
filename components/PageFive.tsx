"use client";

import Image from "next/image";
import { Allura } from "next/font/google";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

/* ================= FONT ================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

/* ================= DATA ================= */
const gallery = [
  { src: "/bg1.jpeg", featured: true },
  { src: "/bg2.jpeg", featured: true },
  
  { src: "/bg4.jpeg", featured: true },
  { src: "/bg5.jpeg", featured: true },
  { src: "/bg6.jpeg", featured: true },
  { src: "/bg7.jpeg", featured: true },
  { src: "/bg8.jpeg", featured: true },
  
  { src: "/bg10.jpeg", featured: true },
  { src: "/g1.jpeg", featured: true },
  { src: "/g2.jpeg", featured: true },
  { src: "/g3.jpeg",featured: true },
  { src: "/g4.jpeg", featured: true },
  { src: "/g5.jpeg", featured: true },
  { src: "/g6.jpeg", featured: true },
  { src: "/g9.jpg", featured: true },
 
];

/* ================= MAIN ================= */
export default function PageFive() {
  return (
    <section className="w-full py-16 px-4">

      
      {/* TITLE */}
      <div
        className={`flex items-center justify-center gap-2 mb-10 ${titleFont.className}`}
      >
        <h2 className="text-3xl text-gray-800">Portrait Of Us</h2>
        <Camera className="w-5 h-5 text-gray-600" />
      </div>

      {/* GALLERY */}
      <div className="max-w-md mx-auto columns-2 gap-4 space-y-4">
        {gallery.map((item, i) => (
          <GalleryItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

/* ================= ITEM ================= */
function GalleryItem({
  src,
  featured,
}: {
  src: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="break-inside-avoid"
    >
      <div
        className={`
          overflow-hidden rounded-xl bg-gray-100
          ${featured ? "p-0" : ""}
        `}
      >
        <Image
          src={src}
          alt="Gallery"
          width={800}
          height={1000}
          className={`
            w-full h-auto object-contain
            transition duration-500 ease-out
            hover:scale-[1.04]
            ${featured ? "scale-100" : "scale-[0.96]"}
          `}
        />
      </div>
    </motion.div>
  );
}