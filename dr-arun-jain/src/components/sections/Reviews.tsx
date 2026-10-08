import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Rajesh Kumar', text: 'Excellent doctor! Very thorough and caring. My diabetes is well managed now.' },
  { name: 'Priya Sharma', text: 'Dr. Arun Jain is a gem. My whole family has been seeing him for 15 years.' },
  { name: 'Suresh Verma', text: 'Best family doctor in Rohini. Always available and very knowledgeable.' },
  { name: 'Meena Singh', text: 'His acupuncture treatment helped my chronic back pain tremendously.' },
  { name: 'Amit Gupta', text: 'Highly recommend for diabetes management. Very patient and explains everything clearly.' },
  { name: 'Kavita Joshi', text: 'Wonderful doctor with decades of experience. Trust him completely.' },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white w-full overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
          >
            Patient <span className="text-primary">Reviews</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />

          {/* Rating pill — wraps on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-secondary/5 border border-secondary/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
          >
            <span className="text-yellow-400 flex items-center gap-1 font-bold text-secondary">
              <Star className="w-4 h-4 fill-current text-yellow-400" /> 4.9 Google Rating
            </span>
            <span className="text-muted-foreground hidden xs:inline">•</span>
            <span className="font-semibold text-secondary">37+ Years</span>
            <span className="text-muted-foreground hidden xs:inline">•</span>
            <span className="font-semibold text-secondary">50K+ Patients</span>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-muted-foreground italic text-sm sm:text-base mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold font-serif flex items-center justify-center shrink-0">
                  {r.name.charAt(0)}
                </div>
                <span className="font-bold text-secondary text-sm sm:text-base">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary/25 hover:bg-primary/5 text-primary font-bold px-6 sm:px-8 py-2.5 rounded-full transition-colors text-sm sm:text-base"
          >
            Read All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
