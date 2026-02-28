"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Allura } from "next/font/google";
import { Camera } from "lucide-react";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

const images = [
  "/bg-test.jpg",
  "/bg-cvrr.jpeg",
  "/bg-cover.jpeg",
  "/bg-wedding.jpg",
];

const captions = [
  "Momen Bahagia",
  "Kenangan Indah",
  "Cinta Sejati",
  "Hari Istimewa",
];

export default function PageFive() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* auto slide ringan */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center px-6 py-16">

      {/* TITLE */}
      <div className={`flex items-center gap-3 mb-10 ${titleFont.className}`}>
        <h2 className="text-4xl md:text-5xl text-gray-800">
          Potrait Of Us
        </h2>
        <Camera className="w-7 h-7 text-gray-700" />
      </div>

      {/* MAIN IMAGE */}
    
        <div className="relative w-full h-[420px] md:h-[520px]">
          <Image
            
            src={images[activeIndex]}
            alt={`Foto ${activeIndex + 1}`}
            fill
            priority
            className="object-cover transition-opacity duration-700 ease-in-out rounded-xl"
          />
        </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-6 overflow-x-auto w-full max-w-4xl px-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden border transition
              ${activeIndex === idx ? "border-rose-500" : "border-transparent"}
            `}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

    </section>
  );
}