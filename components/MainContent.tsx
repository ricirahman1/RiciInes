"use client";

import Cover from "@/components/Cover";
import PageTwo from "@/components/PageTwo";
import PageThree from "@/components/PageThree";
import PageFour from "@/components/PageFour";
import PageFive from "@/components/PageFive";
import PageSix from "@/components/PageSix";

export default function MainContent() {
  return (
    <div
      className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      

      <section className="h-screen w-full snap-start">
        <PageTwo />
      </section>

      <section className="h-screen w-full snap-start">
        <PageThree />
      </section>

      <section className="h-screen w-full snap-start">
        <PageFour />
      </section>

      <section className="h-screen w-full snap-start">
        <PageFive />
      </section>
      <section className="h-screen w-full snap-start">
        <PageSix />
      </section>
    </div>
  );
}