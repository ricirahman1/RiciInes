"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Allura, Caveat, Oregano } from "next/font/google";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

/* ================= FONT ================= */
const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

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

    if (error) {
      console.error("Fetch error:", error);
      return;
    }

    if (data) setWishes(data as Wish[]);
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

    if (error) {
      console.error("Insert error:", error);
      setLoading(false);
      return;
    }

    await fetchWishes();

    setName("");
    setMessage("");
    setLoading(false);
  };

  /* ================= UI ================= */
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/bg-cvrr.jpeg"
        alt="Wedding Wishes"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

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

        {/* FORM - NOTE STYLE */}
<div className="w-full max-w-md mb-12 flex justify-center">
  <div className="relative">

    {/* PIN */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full shadow-md z-10" />

    {/* NOTE */}
    <div className="
      bg-white/60
      w-[280px]
      rounded-xl
      p-5 pt-6
      shadow-[0_10px_25px_rgba(0,0,0,0.2)]
      rotate-[-1deg]
      hover:rotate-0
      transition-all duration-300
    ">

      {/* NAME */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama kamu..."
        className="
          w-full mb-3
          bg-transparent
          border-b border-gray-500/40
          text-sm text-gray-800
          placeholder:text-gray-500
          outline-none
          focus:border-gray-700
          pb-1
        "
      />

      {/* MESSAGE */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tulis doa terbaikmu..."
        className="
          w-full
          bg-transparent
          text-sm text-gray-800
          placeholder:text-gray-500
          outline-none
          resize-none
          h-20
          leading-relaxed
        "
      />

      {/* BUTTON */}
      <button
        onClick={handleSend}
        disabled={loading}
        className="
          mt-4 w-full
          text-xs font-semibold
          text-white
          bg-rose-400
          py-2 rounded-lg
          shadow-md
          hover:bg-rose-500
          hover:scale-105
          active:scale-95
          transition-all duration-200
          disabled:opacity-50
        "
      >
        {loading ? "Mengirim..." : "Kirim 💌"}
      </button>
    </div>
  </div>
</div>

        {/* LIST UCAPAN - NOTE STYLE */}
<div className="w-full max-w-md flex flex-col gap-4 justify-center">
{wishes.map((wish, i) => {
  const colors = [
    "bg-yellow-200/70",
    "bg-pink-200/70",
    "bg-blue-200/70",
    "bg-green-200/70",
    "bg-rose-200/70",
  ];

  const rotations = [
    "rotate-[-1deg]",
    "rotate-[1deg]",
    "rotate-0",
  ];

  return (
    <motion.div
      key={wish.id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: i * 0.08 }}
      className={`
        ${colors[i % colors.length]}
        ${rotations[i % rotations.length]}
        w-[280px]   // 🔥 samakan dengan form
        rounded-xl p-4 pt-6
        shadow-[0_10px_25px_rgba(0,0,0,0.2)]
        text-gray-800
        flex flex-col
        hover:scale-[1.03] hover:rotate-0
        transition-all duration-300
        relative
      `}
    >
      {/* PIN */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow" />

      {/* NAME */}
      <p className="text-xs mb-2 opacity-70 italic">
        — {wish.name}
      </p>

      {/* MESSAGE */}
      <p className={`${oregano.className} text-sm leading-relaxed`}>
        {wish.message}
      </p>
    </motion.div>
  );
})}
</div>
      </div>
    </section>
  );
}