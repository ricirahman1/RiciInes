"use client";

import { useState, useRef, useEffect } from "react";
import { Allura } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

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

  // Load wishes from Supabase
  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Fetch wishes error:", error);
    } else if (data) {
      setWishes(data as Wish[]);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  // Handle send
  const handleSend = async () => {
    if (!name.trim() || !message.trim()) return;

    try {
      const { data, error } = await supabase
        .from("wishes")
        .insert([{ name, message }])
        .select();

      if (error) {
        console.error("Insert wish error:", error);
      } else if (data && data[0]) {
        setWishes([data[0] as Wish, ...wishes]);
        setName("");
        setMessage("");
      }
    } catch (err) {
      console.error("Unexpected insert error:", err);
    }
  };

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [wishes]);

  return (
    <section className="min-h-screen w-full bg-pink-50 flex flex-col items-center justify-start px-6 py-12">
      {/* Judul */}
      <motion.div
        className={`flex items-center justify-center gap-3 ${titleFont.className} mb-8`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl md:text-5xl text-rose-600 font-semibold">
          Wedding Wishes
        </h2>
        <Camera className="w-8 h-8 text-rose-600" />
      </motion.div>

      {/* Form Input */}
      <motion.div
        className="w-full max-w-2xl flex flex-col gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
        <textarea
          placeholder="Tulis ucapan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none h-24"
        />
        <button
          onClick={handleSend}
          className="bg-rose-500 text-white font-semibold py-3 rounded-xl hover:bg-rose-600 transition-colors"
        >
          Send
        </button>
      </motion.div>

      {/* List Ucapan */}
      <div
        ref={containerRef}
        className="w-full max-w-2xl flex flex-col gap-4 overflow-y-auto h-[60vh] pr-2"
      >
        <AnimatePresence>
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-4 rounded-2xl shadow-lg border-l-4 border-rose-500"
            >
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-rose-500" />
                <p className="text-gray-800 font-semibold">{wish.name}</p>
              </div>
              <p className="text-gray-600 mt-1">{wish.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}