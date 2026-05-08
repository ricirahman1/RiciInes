"use client";

import { useEffect, useState } from "react";

type Props = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

export default function MusicControl({ audioRef }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.log("Error play/pause:", e);
    }
  };

  // Sync state kalau user pause dari browser
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  return (
    <button
      onClick={toggleMusic}
      className="
        fixed bottom-5 right-5 z-50
        w-12 h-12 rounded-full
        bg-white/20 backdrop-blur-md
        border border-white/30
        flex items-center justify-center
        text-white text-lg
        shadow-lg
        hover:scale-110 transition
      "
    >
      {isPlaying ? "⏸️" : "▶️"}
    </button>
  );
}