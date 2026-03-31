"use client";

import Image from "next/image";
import { Allura } from "next/font/google";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

/* ================= FONT ================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

/* ================= DATA ================= */
const gallery = [
  { src: "/bg-cover.jpeg", featured: true },
  { src: "/bg-ines.jpeg" },
  { src: "/bg-cvr.jpeg" },
  { src: "/bg-sd2.jpeg", featured: true },
  { src: "/bg-rici.jpeg" },
  { src: "/bg-test.jpg" },
  { src: "/g7.jpg" },
  { src: "/g8.jpg", featured: true },
  { src: "/g9.jpg" },
  { src: "/g10.jpg" },
  { src: "/g11.jpg" },
  { src: "/g12.jpg", featured: true },
  { src: "/g13.jpg" },
  { src: "/g14.jpg" },
  { src: "/g15.jpg" },
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