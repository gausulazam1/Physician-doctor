import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Link } from "wouter";

const qualifications = [
  { icon: "🎓", title: "MBBS", body: "Bachelor of Medicine and Bachelor of Surgery" },
  { icon: "🏅", title: "MD in Acupuncture", body: "Specialized postgraduate degree in Acupuncture therapy" },
  { icon: "🌐", title: "F.Ac.S.H.", body: "Fellow of the Acupuncture Society of Hong Kong" },
  { icon: "🇬🇧", title: "M.R.S.H. (London)", body: "Member of the Royal Society of Health, London" },
];

const experience = [
  { year: "1988", title: "Started Practice", desc: "Began serving families in Rohini, Delhi with compassionate care." },
  { year: "1995", title: "Diabetes Specialization", desc: "Became a specialist in diabetes management and metabolic health." },
  { year: "2000", title: "Acupuncture Integration", desc: "Integrated certified acupuncture into the practice for holistic healing." },
  { year: "2010+", title: "50K+ Patients", desc: "Achieved the milestone of serving over 50,000 patients across Delhi." },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageBanner
        title="About"
        highlight="Dr. Arun Jain"
        subtitle="37+ years of trusted, compassionate family care in Rohini, Delhi"
        breadcrumb="About"
      />

      {/* Bio section */}
      <section className="py-14 sm:py-20 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/gallery-1.png" alt="Dr. Arun Jain" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 bg-primary text-secondary font-bold px-4 py-2 rounded-xl shadow-lg text-sm">
                Since 1988
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
                A Legacy of <span className="text-primary">Care & Expertise</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Dr. Arun Jain is a renowned Family Physician and Diabetologist based in Rohini, Delhi. With over 37 years of
                dedicated service, he has built one of the most trusted medical practices in the region, serving over 50,000 patients.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                His approach combines modern evidence-based medicine with complementary therapies like acupuncture, offering
                patients a truly holistic healthcare experience. He is particularly known for his expertise in diabetes management,
                hypertension, and preventive care for all age groups.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a href="tel:+919531323295" className="flex-1 flex items-center justify-center gap-2 bg-primary text-secondary font-bold rounded-full py-3 px-6 text-sm sm:text-base transition-colors hover:bg-primary/90">
                  📞 Book Consultation
                </a>
                <Link href="/services" className="flex-1 flex items-center justify-center gap-2 border border-secondary/25 text-secondary font-bold rounded-full py-3 px-6 text-sm sm:text-base transition-colors hover:bg-secondary/5">
                  View Services →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-3">
              Qualifications &amp; <span className="text-primary">Credentials</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {qualifications.map(({ icon, title, body }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex gap-4 items-start bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm"
              >
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h3 className="font-bold text-secondary text-base sm:text-lg">{title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mt-1">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-14 sm:py-20 bg-secondary w-full overflow-x-clip">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              The <span className="text-primary">Journey</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
            {experience.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex gap-4 sm:gap-0 items-start pb-10 last:pb-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                <div className="sm:flex-1 sm:pr-8 sm:text-right flex flex-col gap-1 pl-14 sm:pl-0 order-2 sm:order-none" style={i % 2 !== 0 ? { textAlign: 'left', paddingLeft: '2rem', paddingRight: 0 } : {}}>
                  {i % 2 === 0 && (
                    <>
                      <span className="text-primary font-bold text-xl sm:text-2xl font-serif">{year}</span>
                      <h3 className="font-bold text-white text-base sm:text-lg">{title}</h3>
                      <p className="text-white/65 text-sm">{desc}</p>
                    </>
                  )}
                </div>
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-14 h-14 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-2 border-secondary shadow" />
                </div>
                <div className="sm:flex-1 sm:pl-8 flex flex-col gap-1 pl-14 sm:pl-8 order-3 sm:order-none">
                  {i % 2 !== 0 && (
                    <>
                      <span className="text-primary font-bold text-xl sm:text-2xl font-serif">{year}</span>
                      <h3 className="font-bold text-white text-base sm:text-lg">{title}</h3>
                      <p className="text-white/65 text-sm">{desc}</p>
                    </>
                  )}
                  {i % 2 === 0 && <div className="hidden sm:block" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
