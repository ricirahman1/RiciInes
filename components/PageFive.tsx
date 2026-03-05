"use client";

import Image from "next/image";
import { Allura } from "next/font/google";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

const gallery = [
  { src: "/bg-cover.jpeg", type: "double" },
  { src: "/bg-ines.jpeg", type: "double" },

  { src: "/bg-cvr.jpeg", type: "single" },

  { src: "/bg-sd2.jpeg", type: "double" },
  { src: "/bg-rici.jpeg", type: "double" },

  { src: "/bg-test.jpg", type: "single" },

  { src: "/g7.jpg", type: "double" },
  { src: "/g8.jpg", type: "double" },

  { src: "/g9.jpg", type: "single" },

  { src: "/g10.jpg", type: "double" },
  { src: "/g11.jpg", type: "double" },

  { src: "/g12.jpg", type: "single" },

  { src: "/g13.jpg", type: "double" },
  { src: "/g14.jpg", type: "double" },

  { src: "/g15.jpg", type: "single" },
];

export default function PageFive() {
  return (
    <section className="w-full bg-[#f7f6f4] px-3 py-16">

      {/* TITLE */}
      <div className={`flex items-center justify-center gap-2 mb-12 ${titleFont.className}`}>
        <h2 className="text-3xl text-gray-800">Portrait Of Us</h2>
        <Camera className="w-5 h-5 text-gray-700" />
      </div>

      {/* GALLERY */}
      <div className="max-w-md mx-auto flex flex-col gap-2">
        {gallery.map((item, index) =>
          item.type === "single" ? (
            <SingleImage key={index} src={item.src} />
          ) : (
            <DoubleImageRow
              key={index}
              left={gallery[index].src}
              right={gallery[index + 1]?.src}
            />
          )
        )}
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function DoubleImageRow({ left, right }: { left: string; right?: string }) {
  if (!right) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-2 gap-2"
    >
      {[left, right].map((img, i) => (
        <div
          key={i}
          className="relative h-[160px] rounded-lg overflow-hidden"
        >
          <Image
            src={img}
            alt="Gallery"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}

function SingleImage({ src }: { src: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-[260px] rounded-xl overflow-hidden"
    >
      <Image
        src={src}
        alt="Gallery Highlight"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}