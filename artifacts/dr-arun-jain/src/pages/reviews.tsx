import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";

const reviews = [
  {
    initials: "RK", name: "Ramesh Kumar", detail: "Patient since 2005 · Rohini Sector-7", rating: 5,
    text: "My entire family — from my 3-month-old to my 75-year-old mother — sees Dr. Jain. He explains complex conditions in simple language. We feel genuinely cared for every visit.",
  },
  {
    initials: "PG", name: "Prabha Gupta", detail: "Diabetic patient · 12 years under care", rating: 5,
    text: "Dr. Jain has been managing my Type-2 diabetes for 12 years. My HbA1c went from 9.8 to 6.4 under his guidance — not just medicines but practical diet advice for Indian lifestyle.",
  },
  {
    initials: "AS", name: "Anita Sharma", detail: "Acupuncture patient · Rohini Sector-9", rating: 5,
    text: "The most patient and thorough doctor I have met. He actually listens — no rushing. His acupuncture for my chronic back pain gave me relief that no painkiller ever did.",
  },
  {
    initials: "SM", name: "Suresh Malhotra", detail: "Family patient · 8 years", rating: 5,
    text: "We shifted to Delhi 8 years ago and were anxious about finding a trustworthy family doctor. A neighbour recommended Dr. Jain and we haven't looked back since. His clinic feels like a second home.",
  },
  {
    initials: "NJ", name: "Neha Joshi", detail: "Mother · Rohini Sector-11", rating: 5,
    text: "My baby was only 2 months old when we first visited for vaccinations. Dr. Jain's gentleness with children is remarkable — the baby barely cried! Now my child is 6 and we still visit him.",
  },
  {
    initials: "VB", name: "Vijay Bhatia", detail: "Patient since 1998 · Pitampura", rating: 5,
    text: "In an era of expensive super-speciality hospitals, Dr. Jain is a reminder that great medicine doesn't need to cost a fortune. Honest, accessible, and his diagnosis is almost always spot-on.",
  },
  {
    initials: "MS", name: "Manish Srivastava", detail: "BP patient's son · Rohini Sector-14", rating: 5,
    text: "My father's BP was uncontrolled for years. After coming to Dr. Jain and following his lifestyle advice along with medication, it has been normal for the last 3 years. We are so grateful.",
  },
  {
    initials: "KA", name: "Kavita Arora", detail: "Migraine patient · Pitampura", rating: 5,
    text: "I was sceptical about acupuncture but Dr. Jain explained it so clearly. After 6 sessions for my migraine headaches, the frequency has reduced by 80%. Absolutely amazing results.",
  },
  {
    initials: "RT", name: "Rajesh Taneja", detail: "Patient since 2001 · Rohini", rating: 5,
    text: "Been visiting for 20+ years. Three generations of my family trust Dr. Jain. His clinic is always clean, waiting time is reasonable, and he remembers details about each patient. Truly exceptional.",
  },
];

const breakdown = [
  { stars: 5, count: 186, pct: 93 },
  { stars: 4, count: 10, pct: 5 },
  { stars: 3, count: 4, pct: 2 },
  { stars: 2, count: 0, pct: 0 },
];

export default function ReviewsPage() {
  return (
    <Layout>
      <PageBanner
        title="Patient"
        highlight="Stories"
        subtitle="37+ years · 50,000+ patients · 4.9 / 5 average rating"
        breadcrumb="Reviews"
      />

      {/* ── RATING SUMMARY ── */}
      <section className="py-10 bg-white border-b border-border w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 justify-center">
            {/* Score */}
            <div className="text-center shrink-0">
              <div className="font-serif text-6xl sm:text-7xl font-bold text-primary">4.9</div>
              <div className="flex justify-center text-yellow-400 my-2 gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
              </div>
              <div className="text-muted-foreground text-sm">200+ Google Reviews</div>
            </div>

            <div className="hidden sm:block h-20 w-px bg-border" />

            {/* Bar breakdown */}
            <div className="flex flex-col gap-2 w-full max-w-xs">
              {breakdown.map(({ stars, count, pct }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-yellow-400 text-sm font-bold w-5 shrink-0">{stars}★</span>
                  <div className="flex-1 bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-muted-foreground text-sm w-6 shrink-0 text-right">{count}</span>
                </div>
              ))}
            </div>

            <div className="hidden sm:block h-20 w-px bg-border" />

            <div className="text-center shrink-0">
              <div className="font-serif text-5xl font-bold text-secondary">37+</div>
              <div className="text-muted-foreground text-sm mt-1">Years of trusted care</div>
              <div className="font-serif text-3xl font-bold text-secondary mt-3">50K+</div>
              <div className="text-muted-foreground text-sm mt-1">Patients served</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEW CARDS ── */}
      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col gap-4">
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(r.rating)].map((_, s) => <span key={s} className="text-base">★</span>)}
                </div>
                <p className="text-muted-foreground italic text-sm sm:text-base leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold font-serif flex items-center justify-center shrink-0 text-sm">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-sm">{r.name}</p>
                      <p className="text-muted-foreground text-xs">{r.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-colors text-sm sm:text-base">
              Read All 200+ Reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
