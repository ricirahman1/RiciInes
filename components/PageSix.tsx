"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Allura, Caveat } from "next/font/google";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

interface Wish {
  id: string;
  name: string;
  message: string;
}

export default function PageSix() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6) // ✅ hanya 6 terbaru
      .then(({ data }) => {
        if (data) setWishes(data as Wish[]);
      });
  }, []);

  const handleSend = async () => {
    if (!name.trim() || !message.trim()) return;

    const { data } = await supabase
      .from("wishes")
      .insert([{ name, message }])
      .select();

    if (data && data[0]) {
      setWishes((prev) => [data[0] as Wish, ...prev].slice(0, 6));
      setName("");
      setMessage("");
    }
  };

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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen px-6 py-14 flex flex-col items-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${titleFont.className} text-4xl text-white mb-8`}
        >
          Wedding Wishes
        </motion.h2>

        {/* FORM */}
        <div
          className="
            w-full max-w-md mb-8
            bg-white/15 backdrop-blur-xl
            rounded-2xl p-4
          "
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className="w-full mb-2 p-2.5 rounded-lg text-sm bg-white/85"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis doa terbaikmu…"
            className="w-full p-2.5 rounded-lg text-sm bg-white/85 h-20 resize-none"
          />
          <button
            onClick={handleSend}
            className="
              mt-3 w-full
              bg-rose-500 text-white
              py-2.5 rounded-lg text-sm
              hover:bg-rose-600 transition
            "
          >
            Kirim Ucapan
          </button>
        </div>

        {/* WISH LIST (NO SCROLL) */}
        <div className="w-full max-w-md space-y-3">
          {wishes.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="
                bg-white/20 backdrop-blur-lg
                rounded-xl px-4 py-3
              "
            >
              <p className="text-white text-xs mb-1 opacity-80">
                — {wish.name}
              </p>
              <p
                className={`${caveat.className}
                text-white text-sm leading-relaxed`}
              >
                {wish.message}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}