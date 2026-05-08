"use client";

import Image from "next/image";
import { Allura } from "next/font/google";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

const gallery = [
  { src: "/bg3.jpeg", featured: true },
  { src: "/bg1.jpeg" },
  { src: "/bg2.jpeg" },
  { src: "/bg4.jpeg", featured: true },
  { src: "/bg5.jpeg" },
  { src: "/bg7.jpeg" },
  { src: "/bg-wedding.jpg", featured: true },
  { src: "/bg10.jpeg" },
  { src: "/g9.jpg" },
  { src: "/g1.jpeg" },
  { src: "/g6.jpeg" },
];

export default function PageFive() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#fafafa]">

      {/* BACKGROUND GARIS HALUS */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* FRAME UTAMA */}
      <div className="relative max-w-md mx-auto border border-gray-200 rounded-[28px] p-8 bg-white">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-4 mb-14">

          <div className="w-20 h-[1px] bg-gray-300" />

          <div className={`flex items-center gap-2 ${titleFont.className}`}>
            <h2 className="text-4xl text-gray-800 tracking-wide">
              Portrait Of Us
            </h2>
            <Camera className="w-5 h-5 text-gray-500" />
          </div>

          <div className="w-20 h-[1px] bg-gray-300" />
        </div>

        {/* GALLERY */}
        <div className="columns-2 gap-4 space-y-4">
          {gallery.map((item, i) => (
            <GalleryItem key={i} {...item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function GalleryItem({
  src,
  featured,
  index,
}: {
  src: string;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="break-inside-avoid"
    >
      <div
        className={`
          overflow-hidden rounded-xl
          border border-gray-200
          bg-white
        `}
      >
        <Image
          src={src}
          alt="Gallery"
          width={800}
          height={1000}
          className={`
            w-full h-auto object-cover
            ${featured ? "aspect-[3/4]" : "aspect-auto"}
          `}
        />
      </div>
    </motion.div>
  );
}