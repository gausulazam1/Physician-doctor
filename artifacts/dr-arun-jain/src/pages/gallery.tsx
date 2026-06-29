import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";

const categories = [
  { emoji: "🏥", label: "Clinic Reception", src: "/images/gallery-1.png", alt: "Clinic Reception — Dr. Arun Jain, Rohini Delhi" },
  { emoji: "🩺", label: "Consultation Room", src: "/images/gallery-2.png", alt: "Consultation Room" },
  { emoji: "🩺", label: "Patient Examination", src: "/images/gallery-3.png", alt: "Patient Examination" },
  { emoji: "🏆", label: "Medical Certificates", src: "/images/gallery-4.png", alt: "Medical Certificates & Awards" },
  { emoji: "☯️", label: "Acupuncture Room", src: "/images/gallery-5.png", alt: "Acupuncture Therapy Room" },
  { emoji: "🏕️", label: "Health Camp", src: "/images/gallery-6.png", alt: "Health Camp" },
  { emoji: "👨‍⚕️", label: "Clinic Staff", src: "/images/gallery-1.png", alt: "Clinic Staff" },
  { emoji: "🩻", label: "Patient Care", src: "/images/gallery-2.png", alt: "Patient Care" },
  { emoji: "🔬", label: "Medical Equipment", src: "/images/gallery-3.png", alt: "Medical Equipment" },
];

export default function GalleryPage() {
  return (
    <Layout>
      <PageBanner
        title="Photo"
        highlight="Gallery"
        subtitle="A glimpse into our clinic, our patients, and our 37+ year journey"
        breadcrumb="Gallery"
      />

      {/* ── CLINIC PHOTOS ── */}
      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Clinic &amp; Doctor Photos</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary">
              Inside Dr. Jain's <span className="text-primary">Clinic</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {categories.map(({ emoji, label, src, alt }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-border bg-muted">
                <div className="aspect-video sm:aspect-[4/3]">
                  <img src={src} alt={alt} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent flex items-end p-4">
                  <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-2xl">{emoji}</span>
                    <p className="text-white font-semibold text-sm mt-1">{label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="tel:+919531323295"
              className="inline-flex items-center gap-2 bg-primary text-secondary font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-sm sm:text-base">
              📞 Book a Visit — 95313 23295
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-10 sm:py-12 bg-secondary w-full overflow-x-clip">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">⚕️</div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">Dr. Arun Jain</h3>
          <p className="text-white/70 text-sm sm:text-base mb-1">Family Physician &amp; Diabetologist</p>
          <p className="text-white/50 text-xs sm:text-sm">Practicing compassionate, trusted medicine in Rohini, Delhi since 1988.</p>
          <p className="text-primary font-mono text-xs mt-2">MBBS · MD (Acu.) · M.R.S.H. (London)</p>
        </div>
      </section>
    </Layout>
  );
}
