import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { FAQs } from "@/components/sections/FAQs";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <FAQs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
