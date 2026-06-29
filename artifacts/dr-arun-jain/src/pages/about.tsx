import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Link } from "wouter";

const qualifications = [
  { emoji: "🎓", title: "MBBS", body: "Bachelor of Medicine & Bachelor of Surgery" },
  { emoji: "🏥", title: "MD (Acu.)", body: "Doctor of Medicine — Acupuncture" },
  { emoji: "🌍", title: "M.R.S.H. (London)", body: "Member, Royal Society of Health, London" },
  { emoji: "🔬", title: "F.Ac.S.H.", body: "Fellow, Acupuncture Society of Hong Kong" },
];

const credentials = [
  { icon: "🏆", label: "M.R.S.H. London", sub: "Member, Royal Society of Health — International Medical Excellence" },
  { icon: "🔬", label: "F.Ac.S.H.", sub: "Fellow, Acupuncture Society of Hong Kong — Specialist Recognition" },
  { icon: "💉", label: "MD Acupuncture", sub: "One of Delhi's few dual-certified modern medicine + acupuncture specialists" },
  { icon: "⭐", label: "50,000+ Patients · 4.9★", sub: "37 years · Highest-rated family doctor in Rohini, Delhi" },
];

const timeline = [
  { year: "1988", event: "Began medical practice in Punjab, Barnala — serving the local community with dedication and care." },
  { year: "1989", event: "Completed advanced training in Acupuncture (MD Acu.) — one of few physicians in Delhi with this dual qualification." },
  { year: "1990", event: "Began medical practice in Rohini, Delhi. Established his first clinic serving families across Sector-7." },
  { year: "1991", event: "Awarded Fellowship — F.Ac.S.H. and M.R.S.H. (London), recognising international-level medical standards." },
  { year: "2010", event: "Expanded speciality in Diabetology — treating 1,000+ diabetic patients annually with outstanding outcomes." },
  { year: "2026", event: "Today — 37+ years, 50,000+ patients treated, and still the most trusted family physician in Rohini, Delhi." },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageBanner
        title="About"
        highlight="Dr. Arun Jain"
        subtitle="A Physician Delhi Has Trusted for Generations"
        breadcrumb="About"
      />

      {/* ── BIO ── */}
      <section className="py-14 sm:py-20 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/gallery-1.png" alt="Dr. Arun Jain at his clinic" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 bg-primary text-secondary font-bold px-4 py-2 rounded-xl shadow-lg text-sm">
                Practicing Since 1988
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex flex-col gap-5">
              <p className="text-primary font-bold tracking-widest text-xs uppercase">Professional Biography</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
                A Physician Delhi Has Trusted <span className="text-primary">for Generations</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                In 1988, a young doctor opened a small clinic in Rohini with one simple promise — to give every patient honest care, genuine attention, and treatment they could trust. Over 37 years later, that promise has never changed.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Today, Dr. Arun Jain is one of North Delhi's most loved and respected family physicians — trusted by three generations of families across Rohini, Pitampura, Shalimar Bagh, Paschim Vihar, and Punjabi Bagh.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                He is one of the very few doctors in Delhi who combines modern medicine with certified acupuncture therapy, offering patients a truly complete healing experience. His expertise spans diabetes management, hypertension, thyroid disorders, respiratory infections, chronic pain, preventive health checkups, and compassionate care for children and senior citizens alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a href="tel:+919531323295"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-secondary font-bold rounded-full py-3 px-6 text-sm sm:text-base hover:bg-primary/90 transition-colors">
                  📅 Book Consultation
                </a>
                <Link href="/services"
                  className="flex-1 flex items-center justify-center gap-2 border border-secondary/25 text-secondary font-bold rounded-full py-3 px-6 text-sm sm:text-base hover:bg-secondary/5 transition-colors">
                  View Services →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY CREDENTIALS ── */}
      <section className="py-14 sm:py-16 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {credentials.map(({ icon, label, sub }) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex gap-4 items-start bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm">
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h3 className="font-bold text-secondary text-base sm:text-lg">{label}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mt-1">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT NOTE ── */}
      <section className="py-10 sm:py-12 bg-secondary/5 border-y border-border w-full">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed italic mb-4">
            Over <strong className="text-secondary">50,000 patients</strong>. A <strong className="text-secondary">4.9‑star Google rating</strong>. But what patients remember most is not the numbers — it is the doctor who sat with them, explained everything in simple Hindi, Punjabi or English, and never made them feel rushed.
          </p>
          <p className="text-muted-foreground text-sm">
            📍 Clinic accessible from Rohini East, Rohini West &amp; Rithala Metro stations. Same-day appointments available.<br/>
            Serving Rohini, Pitampura, Shalimar Bagh, Paschim Vihar &amp; North Delhi.
          </p>
        </div>
      </section>

      {/* ── QUALIFICATIONS ── */}
      <section className="py-14 sm:py-20 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Qualifications</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
              Academic &amp; Professional <span className="text-primary">Credentials</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {qualifications.map(({ emoji, title, body }) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-secondary text-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center gap-3">
                <div className="text-4xl">{emoji}</div>
                <h3 className="font-bold text-primary text-lg font-serif">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Career Journey</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
              37+ Years of <span className="text-primary">Service</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="relative flex flex-col gap-0 pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/25" />
            {timeline.map(({ year, event }, i) => (
              <motion.div key={year}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative flex flex-col gap-1 pb-8 last:pb-0">
                <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-primary border-2 border-white shadow-sm top-1" />
                <span className="font-serif font-bold text-primary text-xl">{year}</span>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DR JAIN'S QUOTE ── */}
      <section className="py-14 sm:py-16 bg-secondary w-full overflow-x-clip">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-primary mb-6">"</div>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed italic mb-4">
            People eat Vada and Samosas fried in recycled spoiled oil. Relish Panipuri filled with 'dirty' water. Eat pesticide-laden vegetables. Pay money for a black liquid called Coke or Pepsi. Smoke, drink and chew Tobacco like there is no Tomorrow — all without thinking twice! But after I write a prescription, they ask in all seriousness…
          </p>
          <p className="text-primary font-bold text-lg sm:text-xl font-serif italic mb-4">
            "Doctor, I hope there's no side effect for these!"
          </p>
          <p className="text-white/50 text-sm">— Dr. Arun Jain &nbsp;|&nbsp; Personal Philosophy</p>
        </div>
      </section>
    </Layout>
  );
}
