"use client";
import { useState } from "react";
import Cover from "@/components/Cover";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <Cover onOpenAction={() => setOpened(true)} />}
      {opened && <MainContent />}
    </>
  );
}