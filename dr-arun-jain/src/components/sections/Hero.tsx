import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-secondary overflow-hidden pt-[52px]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(18,43,74,1)_0%,rgba(11,37,69,1)_100%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col gap-5 w-full"
        >
          {/* Badge */}
          <span className="self-start inline-flex items-center gap-2 border border-primary/40 rounded-full px-3 py-1 bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            ✦ Trusted Family Physician — Since 1988
          </span>

          {/* Heading */}
          <h1 className="font-serif leading-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Dr.&nbsp;<span className="text-primary">Arun Jain</span>
          </h1>

          {/* Sub-heading */}
          <h2 className="text-white font-medium text-lg sm:text-xl">
            Family Physician &amp; Diabetologist
          </h2>

          {/* Credentials */}
          <p className="bg-white/5 text-white/70 font-mono text-xs sm:text-sm rounded px-3 py-2 w-fit max-w-full break-words">
            MBBS · MD (Acu.) · F.Ac.S.H. · M.R.S.H. (London)
          </p>

          <div className="h-px w-16 bg-primary/60" />

          {/* Description */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Trusted by thousands of Delhi families for over 37 years. Expert diabetes management, preventive care &amp; acupuncture — for every age group.
          </p>

          {/* Stats */}
          <div className="flex items-stretch gap-0 divide-x divide-white/10 border-y border-white/10 py-4 w-full">
            {[
              { value: '37+', label: 'YEARS PRACTICE' },
              { value: '50K+', label: 'PATIENTS' },
              { value: '4.9+★', label: 'GOOGLE RATING' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-start px-4 first:pl-0 last:pr-0 gap-1 flex-1">
                <span className="font-serif font-bold text-primary text-2xl sm:text-3xl leading-none">{value}</span>
                <span className="text-white/60 text-[9px] sm:text-[10px] font-bold tracking-wider">{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href="tel:+919531323295"
              className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full py-3.5 px-6 text-sm sm:text-base shadow-lg shadow-primary/25 transition-all hover:scale-105"
              data-testid="button-hero-call"
            >
              📞 Call: 95313 23295
            </a>
            <a
              href="#contact"
              className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold rounded-full py-3.5 px-6 text-sm sm:text-base transition-all hover:scale-105"
              data-testid="button-hero-book"
            >
              📅 Book Appointment →
            </a>
          </div>
        </motion.div>

        {/* ── Right: doctor photo (hidden on mobile, visible lg+) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full max-w-md">
            <div className="aspect-square rounded-full border-4 border-primary/30 p-2">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="/images/doctor-hero.png"
                  alt="Dr. Arun Jain — Family Physician & Diabetologist, Rohini Delhi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-2 left-4 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3"
              style={{ animationDuration: '3s' }}
            >
              <div className="bg-primary/20 p-2 rounded-full text-xl">⭐</div>
              <div>
                <div className="font-bold text-foreground text-sm leading-tight">37+ Years</div>
                <div className="text-muted-foreground text-xs">Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
