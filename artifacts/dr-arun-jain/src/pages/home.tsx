import React from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";

const treats = [
  { emoji: "🍬", title: "Diabetes Management", desc: "Blood sugar control, HbA1c monitoring & Indian lifestyle-specific advice" },
  { emoji: "👨‍👩‍👧", title: "Family Health Care", desc: "Trusted care for the whole family — from newborns to senior citizens" },
  { emoji: "🦴", title: "Physiotherapy & Acupuncture", desc: "MD-certified acupuncture for pain, stress & chronic conditions" },
  { emoji: "🩺", title: "General Medicine", desc: "Comprehensive diagnosis and treatment for common illnesses" },
  { emoji: "🫀", title: "Hypertension & BP", desc: "Blood pressure management, medication and cardiac risk reduction" },
  { emoji: "💉", title: "Vaccination & Preventive Care", desc: "Immunisations, health screenings & lifestyle counselling" },
];

const review = {
  stars: 5,
  text: "My entire family — from my 3-month-old to my 75-year-old mother — sees Dr. Jain. He has an incredible ability to explain complex conditions in simple language. We feel genuinely cared for every single visit.",
  name: "Ramesh Kumar",
  detail: "Patient since 2005 · Rohini Sector-7",
};

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[calc(100vh-52px)] flex items-center bg-secondary overflow-x-clip">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(18,43,74,1)_0%,rgba(11,37,69,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="flex flex-col gap-5 w-full">
            <span className="self-start inline-flex items-center gap-2 border border-primary/40 rounded-full px-3 py-1 bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              ✦ Trusted Family Physician — Since 1988
            </span>
            <h1 className="font-serif leading-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Dr.&nbsp;<span className="text-primary">Arun Jain</span>
            </h1>
            <h2 className="text-white font-medium text-lg sm:text-xl">Family Physician &amp; Diabetologist</h2>
            <p className="bg-white/5 text-white/70 font-mono text-xs sm:text-sm rounded px-3 py-2 w-fit max-w-full break-words">
              MBBS · MD (Acu.) · F.Ac.S.H. · M.R.S.H. (London)
            </p>
            <div className="h-px w-16 bg-primary/60" />
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Trusted by thousands of Delhi families for over 37 years. Expert diabetes management, preventive care &amp; acupuncture — for every age group.
            </p>

            <div className="flex items-stretch gap-0 divide-x divide-white/10 border-y border-white/10 py-4 w-full">
              {[
                { value: '37+', label: 'YEARS PRACTICE' },
                { value: '50K+', label: 'PATIENTS' },
                { value: '4.9+ ⭐', label: 'GOOGLE RATING' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-start px-4 first:pl-0 last:pr-0 gap-1 flex-1">
                  <span className="font-serif font-bold text-primary text-2xl sm:text-3xl leading-none">{value}</span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] font-bold tracking-wider">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a href="tel:+919531323295"
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full py-3.5 px-6 text-sm sm:text-base shadow-lg shadow-primary/25 transition-all hover:scale-105">
                📞 Call: 95313 23295
              </a>
              <Link href="/contact"
                className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold rounded-full py-3.5 px-6 text-sm sm:text-base transition-all hover:scale-105">
                📅 Book Appointment →
              </Link>
            </div>
          </motion.div>

          {/* Right — doctor photo (desktop only) */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-full border-4 border-primary/30 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
                  <img src="/images/doctor-hero.png" alt="Dr. Arun Jain — Family Physician & Diabetologist, Rohini Delhi"
                    className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-4 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="text-2xl">⭐</div>
                <div>
                  <div className="font-bold text-foreground text-sm leading-tight">37+ Years</div>
                  <div className="text-muted-foreground text-xs">Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OPD TIMINGS STRIP ── */}
      <section className="bg-primary py-3 w-full overflow-x-clip">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-secondary text-sm sm:text-base font-bold text-center">
            <span>🌅 Morning OPD: 9:30 AM – 1:30 PM</span>
            <span className="hidden sm:inline text-secondary/40">|</span>
            <span>🌆 Evening OPD: 5:00 PM – 8:30 PM</span>
            <span className="hidden sm:inline text-secondary/40">|</span>
            <span>📅 Monday – Saturday &nbsp;·&nbsp; ⛔ Sunday Closed</span>
          </div>
        </div>
      </section>

      {/* ── WHAT WE TREAT ── */}
      <section className="py-14 sm:py-20 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">What We Treat</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-2">
              Key <span className="text-primary">Specialities</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {treats.map(({ emoji, title, desc }) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex gap-4 items-start bg-white border border-border rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all group">
                <div className="text-3xl shrink-0">{emoji}</div>
                <div>
                  <h3 className="font-bold text-secondary text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-colors text-sm sm:text-base">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SINGLE PATIENT STORY ── */}
      <section className="py-14 sm:py-16 bg-secondary w-full overflow-x-clip">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-6">Patient Story</p>
          <div className="flex justify-center text-yellow-400 mb-4 gap-0.5">
            {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
          </div>
          <blockquote className="font-serif text-white text-xl sm:text-2xl lg:text-3xl italic leading-relaxed mb-8">
            "{review.text}"
          </blockquote>
          <p className="text-primary font-bold text-base">{review.name}</p>
          <p className="text-white/55 text-sm mt-1">{review.detail}</p>
          <div className="mt-8">
            <Link href="/reviews" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3 rounded-full transition-colors text-sm sm:text-base">
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FIND US ── */}
      <section className="py-14 sm:py-16 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Find Us</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary">Visit The <span className="text-primary">Clinic</span></h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-bold text-secondary text-base mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">D-14/235, Opp. Metro Pillar No.412, Som Bazar Road,<br/>Sector-7, Rohini, Delhi – 110085</p>
                  <a href="https://maps.google.com/?q=D-14/235+Sector-7+Rohini+Delhi" target="_blank" rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm hover:underline mt-1 inline-block">Open in Google Maps ↗</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🕐</span>
                <div>
                  <h4 className="font-bold text-secondary text-base mb-1">Timings</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Mon–Sat: 9:30–1:30 PM &amp; 5:00–8:30 PM<br/>Sunday: Closed</p>
                </div>
              </div>
              <Link href="/contact" className="self-start inline-flex items-center gap-2 bg-primary text-secondary font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base mt-2">
                📞 Book a Visit →
              </Link>
            </div>
            <div className="w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.1!2d77.0820!3d28.7218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06e2324f9b2d%3A0xc6c761b6c8b9d40b!2sSector%2022%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1714567890123"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Dr. Arun Jain Clinic Location" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
