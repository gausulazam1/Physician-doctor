import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery-1.png", alt: "Dr. Arun Jain at his clinic desk", caption: "Clinic Consultation" },
  { src: "/images/gallery-2.png", alt: "Modern clinic waiting room", caption: "Clinic Interior" },
  { src: "/images/gallery-3.png", alt: "Compassionate elderly patient care", caption: "Patient Care" },
  { src: "/images/gallery-4.png", alt: "Acupuncture therapy session", caption: "Acupuncture Therapy" },
  { src: "/images/gallery-5.png", alt: "Diabetes blood sugar monitoring", caption: "Diabetes Management" },
  { src: "/images/gallery-6.png", alt: "Pediatric care for children", caption: "Child Health" },
  { src: "/images/gallery-1.png", alt: "Medical equipment", caption: "Modern Equipment" },
  { src: "/images/gallery-2.png", alt: "Warm clinic environment", caption: "Clinic Environment" },
  { src: "/images/gallery-3.png", alt: "Family medicine consultation", caption: "Family Consultation" },
];

export default function GalleryPage() {
  return (
    <Layout>
      <PageBanner
        title="Photo"
        highlight="Gallery"
        subtitle="A glimpse into our clinic, treatments, and the care we provide"
        breadcrumb="Gallery"
      />

      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-border bg-muted"
              >
                <div className="aspect-video sm:aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
