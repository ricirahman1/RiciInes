"use client";

import { useState, useRef } from "react";
import Cover from "@/components/Cover";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = async () => {
    setOpened(true);

    // PLAY AUDIO (valid user interaction)
    try {
      await audioRef.current?.play();
    } catch (e) {
      console.log("Audio gagal play:", e);
    }

    // scroll ke konten
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
      {/* AUDIO GLOBAL */}
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        loop
        preload="auto"
      />

      {/* COVER */}
      <section className="min-h-screen">
        <Cover onOpenAction={handleOpenInvitation} />
      </section>

      {/* MAIN CONTENT */}
      <MainContent />
    </div>
  );
}