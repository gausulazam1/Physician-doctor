import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            About <span className="text-primary">Dr. Arun Jain</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none overflow-hidden"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-2xl">
              <img
                src="/images/gallery-1.png"
                alt="Dr. Arun Jain in Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-2xl -z-10 border border-primary/20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-secondary">
              A Legacy of Care & Expertise
            </h3>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Dr. Arun Jain is a renowned Family Physician & Diabetologist practicing in Rohini, Delhi since 1988. With over 37 years of experience, he has served 50,000+ patients and built a reputation for compassionate, expert care that treats the whole person, not just the symptoms.
            </p>

            <div className="space-y-4 sm:space-y-6 mt-2">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base sm:text-lg">Qualifications</h4>
                  <p className="text-muted-foreground mt-1 text-sm sm:text-base">MBBS, MD in Acupuncture, F.Ac.S.H., M.R.S.H. (London)</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m9.1 14.9-2.3 2.3a2.4 2.4 0 0 1-3.4 0l-1.2-1.2a2.4 2.4 0 0 1 0-3.4l2.3-2.3"></path><path d="m14 13 5.3-5.3a2.4 2.4 0 0 0 0-3.4l-1.2-1.2a2.4 2.4 0 0 0-3.4 0L9.4 8.4"></path><path d="M5 22v-3"></path><path d="M22 5h-3"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base sm:text-lg">Specializations</h4>
                  <p className="text-muted-foreground mt-1 text-sm sm:text-base">Family Medicine, Diabetes Management, Preventive Care, Acupuncture</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base sm:text-lg">Location</h4>
                  <p className="text-muted-foreground mt-1 text-sm sm:text-base">Pocket 7, Sector 22, Rohini, Delhi — near Rohini Metro Station.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
