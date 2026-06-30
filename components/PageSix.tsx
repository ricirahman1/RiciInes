"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Allura,
  Oregano,
  Poppins,
} from "next/font/google";
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

/* ================= FONT ================= */
const titleFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const handwriting = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/* ================= TYPE ================= */
interface Wish {
  id: string;
  name: string;
  message: string;
  created_at?: string;
}

/* ================= PAGE ================= */
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
      .order("created_at", {
        ascending: false,
      })
      .limit(20);

    if (!error && data) {
      setWishes(data as Wish[]);
    }
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
      .insert([
        {
          name,
          message,
        },
      ]);

    if (!error) {
      setName("");
      setMessage("");
      await fetchWishes();
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/g5.jpeg"
        alt=""
        fill
        priority
        className="
          object-cover
          brightness-[0.2]
          scale-105
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#120805]/75" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#2a1710]/20
          via-[#120805]/50
          to-[#120805]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#b87345]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#6b331c]/20
          blur-3xl
        "
      />

      {/* FLORAL */}
      <Image
        src="/floral-gold.png"
        width={260}
        height={260}
        alt=""
        className="
          absolute
          top-0
          left-0
          opacity-20
          pointer-events-none
        "
      />

      <Image
        src="/floral-gold.png"
        width={260}
        height={260}
        alt=""
        className="
          absolute
          bottom-0
          right-0
          rotate-180
          opacity-20
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center mb-16"
        >
          <p
            className={`
              ${poppins.className}
              uppercase
              tracking-[0.5em]
              text-[#c9a27b]
              text-xs
            `}
          >
            Guest Book
          </p>

          <h1
            className={`
              ${titleFont.className}
              text-6xl
              md:text-8xl
              text-[#f4e3d2]
              mt-4
            `}
          >
            Wedding Wishes
          </h1>

          <div className="mt-6 text-[#c9a27b]">
            ❦
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="
              rounded-[40px]
              bg-[#24120d]/50
              backdrop-blur-xl
              border
              border-[#c9a27b]/20
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,.4)]
            "
          >
            <h2
              className={`
                ${titleFont.className}
                text-5xl
                text-[#f4e3d2]
                mb-8
              `}
            >
              Leave Your Wishes
            </h2>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Your Name"
              className="
                w-full
                bg-transparent
                border-b
                border-[#c9a27b]/20
                py-4
                text-[#f4e3d2]
                placeholder:text-[#9e8269]
                outline-none
              "
            />

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Write your wishes..."
              className="
                mt-6
                w-full
                h-40
                resize-none
                bg-transparent
                text-[#f4e3d2]
                placeholder:text-[#9e8269]
                outline-none
              "
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-[#c9a27b]
                text-[#120805]
                font-medium
                hover:scale-105
                transition
                disabled:opacity-50
              "
            >
              <Send size={18} />
              {loading
                ? "Sending..."
                : "Send Wishes"}
            </button>
          </motion.div>

          {/* WISHES */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="
              space-y-5
              max-h-[700px]
              overflow-y-auto
              pr-2
            "
          >
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="
                  rounded-[30px]
                  bg-[#24120d]/60
                  backdrop-blur-xl
                  border
                  border-[#c9a27b]/20
                  p-6
                  shadow-[0_10px_40px_rgba(0,0,0,.3)]
                "
              >
                <p
                  className={`
                    ${poppins.className}
                    uppercase
                    tracking-[0.25em]
                    text-[#c9a27b]
                    text-xs
                  `}
                >
                  {wish.name}
                </p>

                <div className="w-12 h-px bg-[#c9a27b]/30 my-4" />

                <p
                  className={`
                    ${handwriting.className}
                    text-[#f4e3d2]
                    text-xl
                    leading-8
                  `}
                >
                  {wish.message}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}