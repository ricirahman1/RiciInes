"use client";

import { useState, useRef } from "react";
import Cover from "@/components/Cover";
import MainContent from "@/components/MainContent";
import MusicControl from "@/components/MusicControl";

export default function Home() {
  const [opened, setOpened] = useState(false);

  // ✅ FIX: explicit nullable type
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = async () => {
    setOpened(true);

    // ✅ extra safety check
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (e) {
        console.log("Audio gagal play:", e);
      }
    }

    setTimeout(() => {
      document.getElementById("page-two")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div
      className={`
        h-screen w-full scroll-smooth
        ${opened ? "overflow-y-auto" : "overflow-hidden"}
      `}
    >
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        loop
        preload="auto"
      />

      {/* CONTROL BUTTON */}
      {opened && <MusicControl audioRef={audioRef} />}
      

      {/* COVER */}
      <section className="min-h-screen">
        <Cover onOpenAction={handleOpenInvitation} />
      </section>

      {/* MAIN */}
      <MainContent />
    </div>
  );
}