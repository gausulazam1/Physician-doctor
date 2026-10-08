import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Syringe, ShieldCheck, Baby, HeartHandshake, Gauge, Weight, Pill } from 'lucide-react';

const services = [
  { title: 'Family Medicine', desc: 'General health consultations and holistic care for all age groups.', Icon: Stethoscope },
  { title: 'Diabetes Management', desc: 'Expert diabetology, blood sugar control and HbA1c monitoring.', Icon: Activity },
  { title: 'Acupuncture', desc: 'Traditional acupuncture therapy for pain, stress relief and wellness.', Icon: Syringe },
  { title: 'Preventive Care', desc: 'Health screenings, vaccinations and proactive lifestyle counseling.', Icon: ShieldCheck },
  { title: 'Child Health', desc: 'Pediatric consultations, immunity building and development tracking.', Icon: Baby },
  { title: 'Geriatric Care', desc: 'Compassionate, specialised care for the unique needs of elderly patients.', Icon: HeartHandshake },
  { title: 'Hypertension', desc: 'Blood pressure monitoring, medication management and risk reduction.', Icon: Gauge },
  { title: 'Weight Management', desc: 'Clinical obesity counseling, safe diet planning and metabolic health.', Icon: Weight },
  { title: 'Thyroid Disorders', desc: 'Accurate diagnosis and ongoing management of thyroid conditions.', Icon: Pill },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-background w-full overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <p className="text-muted-foreground text-base sm:text-lg">Comprehensive healthcare for the whole family</p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {services.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 hover:ring-2 hover:ring-primary/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-foreground text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
