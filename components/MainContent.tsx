"use client";

import PageTwo from "@/components/PageTwo";
import PageThree from "@/components/PageThree";
import PageFour from "@/components/PageFour";
import PageFive from "@/components/PageFive";
import PageSix from "@/components/PageSix";
import PageTempatNikah from "@/components/PageTempat";
import PageTerakhir from "@/components/PageTerakhir";

export default function MainContent() {
  return (
    <>
      <section id="page-two" className="min-h-screen">
        <PageTwo />
      </section>

      <section className="min-h-screen">
        <PageThree />
      </section>

      <section className="min-h-screen">
        <PageFour />
      </section>

      <section className="min-h-screen">
        <PageTempatNikah />
      </section>

      <section className="min-h-screen">
        <PageFive />
      </section>

      <section className="min-h-screen">
        <PageSix />
      </section>

      <section className="min-h-screen">
        <PageTerakhir />
      </section>
    </>
  );
}