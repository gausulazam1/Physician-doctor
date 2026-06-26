import React from 'react';
import { motion } from 'framer-motion';

const qualifications = [
  {
    title: 'Qualifications',
    body: 'MBBS, MD in Acupuncture, F.Ac.S.H., M.R.S.H. (London)',
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
  },
  {
    title: 'Specializations',
    body: 'Family Medicine, Diabetes Management, Preventive Care, Acupuncture',
    icon: (
      <><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m9.1 14.9-2.3 2.3a2.4 2.4 0 0 1-3.4 0l-1.2-1.2a2.4 2.4 0 0 1 0-3.4l2.3-2.3" /></>
    ),
  },
  {
    title: 'Location',
    body: 'Pocket 7, Sector 22, Rohini, Delhi — near Rohini Metro Station.',
    icon: (
      <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white w-full overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
          >
            About <span className="text-primary">Dr. Arun Jain</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image — hidden on mobile to save space, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/gallery-1.png" alt="Dr. Arun Jain at his clinic" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-2xl -z-10 border border-primary/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary">
              A Legacy of Care &amp; Expertise
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Dr. Arun Jain is a renowned Family Physician &amp; Diabetologist practising in Rohini, Delhi since 1988.
              With over 37 years of experience, he has served 50,000+ patients and built a reputation for
              compassionate, expert care.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {qualifications.map(({ title, body, icon }) => (
                <div key={title} className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">{title}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base mt-0.5">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
