"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Allura, Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function PageSix() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchWishes = async () => {
  const { data, error } = await supabase
    .from("wishes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10); // ⬅️ hanya 10 data terbaru

  if (error) {
    console.error("Fetch wishes error:", error);
  } else if (data) {
    setWishes(data as Wish[]);
  }
};

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSend = async () => {
    if (!name.trim() || !message.trim()) return;

    const { data } = await supabase
      .from("wishes")
      .insert([{ name, message }])
      .select();

    if (data && data[0]) {
      setWishes([data[0] as Wish, ...wishes]);
      setName("");
      setMessage("");
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/bg-cvrr.jpeg"   // ganti sesuai foto kamu
        alt="Wedding Wishes Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-3 mb-10 ${titleFont.className}`}
        >
          <h2 className="text-4xl md:text-5xl text-white">
            Wedding Wishes
          </h2>
          <Camera className="w-8 h-8 text-rose-300" />
        </motion.div>

        {/* FORM (GLASS CARD) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            w-full max-w-2xl
            backdrop-blur-xl
            bg-white/15
            border border-white/20
            rounded-3xl
            p-6 mb-8
            shadow-xl
          "
        >
          <div className="flex flex-col gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="
                p-3 rounded-xl
                bg-white/80
                focus:outline-none
                focus:ring-2 focus:ring-rose-400
              "
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan doa & ucapan terbaik..."
              className="
                p-3 rounded-xl
                bg-white/80
                focus:outline-none
                focus:ring-2 focus:ring-rose-400
                resize-none h-24
              "
            />
            <button
              onClick={handleSend}
              className="
                bg-rose-500 text-white
                py-3 rounded-xl
                font-medium
                hover:bg-rose-600
                transition
              "
            >
              Kirim Ucapan
            </button>
          </div>
        </motion.div>

        {/* WISH LIST */}
        <div
          ref={containerRef}
          className="w-full max-w-2xl space-y-4 overflow-y-auto max-h-[55vh] pr-1"
        >
          <AnimatePresence>
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="
                  backdrop-blur-lg
                  bg-white/20
                  border border-white/20
                  rounded-2xl
                  p-4
                  shadow-lg
                "
              >
                <p className="text-white font-semibold mb-1">
                  {wish.name}
                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {wish.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}