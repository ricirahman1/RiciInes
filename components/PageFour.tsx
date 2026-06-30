"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Allura, Poppins } from "next/font/google";

const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false,
});

const titleFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const WEDDING_DATE = new Date("2026-07-05T00:00:00");

const DAYS = ["M", "S", "S", "R", "K", "J", "S"];

const CALENDAR = [
  "", "", "", 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31,
];

export default function PageFour() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <Image
        src="/foto/bg-s4.jpeg"
        alt="Wedding Background"
        fill
        priority
        className="object-cover scale-105 brightness-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1b100b]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1810]/20 via-[#1b100b]/50 to-[#120805]/90" />

      {/* Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#b87345]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#7a3b22]/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="rounded-[36px] bg-[#24120d]/45 backdrop-blur-2xl border border-[#d8b48a]/20 shadow-2xl px-8 py-12">

          {/* Header */}
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="w-12 h-px bg-[#b78b61]" />
            <span className="text-[#d8b48a]">❦</span>
            <div className="w-12 h-px bg-[#b78b61]" />
          </div>

          <h1
            className={`${titleFont.className} text-center text-[#f1d7bc] text-6xl`}
          >
            Save The Date
          </h1>

          <p
            className={`${bodyFont.className} text-center text-[#d8b48a] uppercase tracking-[0.35em] text-xs mt-3`}
          >
            Sunday • 5 July 2026
          </p>

          <div className="w-20 h-px bg-[#b78b61] mx-auto my-8" />

          {/* Countdown */}
          <Countdown
            date={WEDDING_DATE}
            renderer={({ days, hours, minutes, seconds }) => {
              const items = [
                { label: "Days", value: days },
                { label: "Hours", value: hours },
                { label: "Minutes", value: minutes },
                { label: "Seconds", value: seconds },
              ];

              return (
                <div className="grid grid-cols-4 gap-3 mb-10">
                  {items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#2d1810]/50 border border-[#d8b48a]/20 py-4"
                    >
                      <div className="text-[#f5ebe2] text-2xl font-semibold text-center">
                        {item.value}
                      </div>
                      <div className="text-[#d8b48a]/70 text-[10px] uppercase mt-1 text-center">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          />

          {/* Calendar */}
          <div className="rounded-2xl bg-[#2d1810]/45 border border-[#d8b48a]/20 p-5">
            <h2 className="text-center text-[#f1d7bc] text-2xl mb-5">
              July 2026
            </h2>

            <div className="grid grid-cols-7 gap-2 mb-3">
              {DAYS.map((day, i) => (
                <div
                  key={i}
                  className="text-center text-[#d8b48a] text-xs"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {CALENDAR.map((date, i) => (
                <div
                  key={i}
                  className={`h-9 flex items-center justify-center rounded-full text-sm
                    ${
                      date === 5
                        ? "bg-[#d8b48a] text-[#24120d] font-bold shadow-lg"
                        : date
                        ? "text-[#f5ebe2]/80"
                        : ""
                    }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="w-12 h-px bg-[#b78b61]" />
            <span className="text-[#d8b48a]">❦</span>
            <div className="w-12 h-px bg-[#b78b61]" />
          </div>
        </div>
      </div>
    </section>
  );
}