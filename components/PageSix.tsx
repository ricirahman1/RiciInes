"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Allura, Oregano } from "next/font/google";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

/* ================= FONT ================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });

/* ================= TYPE ================= */
interface Wish {
  id: string;
  name: string;
  message: string;
  created_at?: string;
}

/* ================= MAIN ================= */
export default function PageSix() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data) setWishes(data as Wish[]);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  /* ================= SEND ================= */
  const handleSend = async () => {
    if (!name.trim() || !message.trim()) return;

    setLoading(true);

    const { error } = await supabase
      .from("wishes")
      .insert([{ name, message }]);

    if (!error) {
      await fetchWishes();
      setName("");
      setMessage("");
    }

    setLoading(false);
  };

  /* ================= UI ================= */
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/g5.jpeg"
        alt="Wedding Wishes"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* FRAME BORDER */}
      <div className="pointer-events-none absolute inset-5 sm:inset-6 md:inset-8 rounded-3xl border border-white/90" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen px-6 py-16 flex flex-col items-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${titleFont.className} text-4xl text-white mb-10`}
        >
          Wedding Wishes
        </motion.h2>

        {/* FORM */}
        <div className="w-full max-w-md flex justify-center mb-12">
          <div className="relative">

            {/* PIN */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full shadow-md" />

            {/* CARD */}
            <div className="bg-white/50 backdrop-blur-sm w-[300px] rounded-xl p-5 pt-6 shadow-lg border border-white/90">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu..."
                className="w-full mb-3 bg-transparent border-b border-gray-500/40 text-sm text-gray-800 outline-none pb-1"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis doa terbaikmu..."
                className="w-full bg-transparent text-sm text-gray-800 outline-none resize-none h-20"
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="mt-4 w-full text-sm text-white bg-rose-400 py-2 rounded-lg shadow hover:bg-rose-500 disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim 💌"}
              </button>
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="w-full max-w-md max-h-[60vh] overflow-y-auto flex flex-col items-center gap-4 pr-2 ">
          {wishes.map((wish, i) => {
            const colors = [
              "bg-yellow-200/70",
              "bg-pink-200/70",
              "bg-blue-200/70",
              "bg-green-200/70",
              "bg-rose-200/70",
            ];

            return (
              <div
                key={wish.id}
                className={`
                  ${colors[i % colors.length]}
                  w-[300px]
                  rounded-xl p-4 pt-6
                  shadow-lg
                  text-gray-800
                  relative
                  border border-white/80
                  backdrop-blur-sm
                `}
              >
                {/* PIN */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow" />

                <p className="text-xs mb-2 opacity-70 italic text-start">
                  — {wish.name}
                </p>

                <p className={`${oregano.className} text-sm text-start`}>
                  {wish.message}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}