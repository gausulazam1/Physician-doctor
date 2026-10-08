import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    emoji: "🩺",
    title: "General Medicine",
    desc: "Comprehensive diagnosis and treatment for fevers, infections, respiratory illness, and all common ailments — for every age group.",
  },
  {
    emoji: "🍬",
    title: "Diabetes Management",
    desc: "Expert diabetology tailored to Indian diet and lifestyle. Blood sugar monitoring, HbA1c tracking, medication management, and practical diet advice.",
  },
  {
    emoji: "🫀",
    title: "Hypertension & Blood Pressure",
    desc: "Blood pressure monitoring, cardiac risk assessment, medication management, dietary guidance, and long-term BP control strategies.",
  },
  {
    emoji: "💉",
    title: "Vaccination & Preventive Care",
    desc: "Immunisations for all ages (children and adults), annual health screenings, and proactive lifestyle counselling to prevent disease.",
  },
  {
    emoji: "🦴",
    title: "Physiotherapy & Acupuncture",
    desc: "MD-certified acupuncture therapy for chronic pain, back pain, knee pain, migraines, stress, and rehabilitation. Sterile single-use needles always used.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family Health Care",
    desc: "Trusted primary care for the entire family — from newborns (vaccinations, fever, growth monitoring) to senior citizens (chronic disease, geriatric care).",
  },
  {
    emoji: "💬",
    title: "Sexual Counseling & Education",
    desc: "Confidential, compassionate counselling and education for sexual health concerns — delivered with professionalism and complete privacy.",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <PageBanner
        title="Our Medical"
        highlight="Services"
        subtitle="Comprehensive healthcare for every member of your family — all under one roof"
        breadcrumb="Services"
      />

      {/* ── SERVICES GRID ── */}
      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {services.map(({ emoji, title, desc }, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group flex flex-col gap-4"
              >
                <div className="text-4xl">{emoji}</div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{desc}</p>
                </div>
                <a href="tel:+919531323295"
                  className="self-start inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline mt-auto">
                  📅 Book Consultation →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TIMINGS BANNER ── */}
      <section className="py-10 sm:py-12 bg-secondary w-full overflow-x-clip">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🌅</span>
              <h4 className="text-primary font-bold text-lg">9:30 AM – 1:30 PM</h4>
              <p className="text-white/70 text-sm">Morning OPD · Mon–Sat</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🌆</span>
              <h4 className="text-primary font-bold text-lg">5:00 PM – 8:30 PM</h4>
              <p className="text-white/70 text-sm">Evening OPD · Mon–Sat</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">📞</span>
              <h4 className="text-primary font-bold text-lg">95313 23295</h4>
              <p className="text-white/70 text-sm">Call to Book · Walk-ins Welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-14 bg-white w-full">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary mb-3">
            Ready to <span className="text-primary">Book a Consultation?</span>
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg mb-6">Call us, send a WhatsApp, or walk in during clinic hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+919531323295"
              className="inline-flex items-center gap-2 bg-primary text-secondary font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-sm sm:text-base">
              📞 Call: 95313 23295
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 border border-secondary/25 text-secondary font-bold px-8 py-3.5 rounded-full hover:bg-secondary/5 transition-colors text-sm sm:text-base">
              Get Directions →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
