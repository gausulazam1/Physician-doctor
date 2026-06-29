import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Activity, Stethoscope, Syringe, ShieldCheck, Baby, HeartHandshake, Gauge, Weight, Pill, Heart, Brain, Microscope } from "lucide-react";
import { Link } from "wouter";

const services = [
  { Icon: Stethoscope, title: "Family Medicine", desc: "General health consultations and holistic care for the entire family — from newborns to seniors.", color: "bg-blue-50 text-blue-600" },
  { Icon: Activity, title: "Diabetes Management", desc: "Expert diabetology, blood sugar control, HbA1c monitoring, and lifestyle counselling for long-term control.", color: "bg-amber-50 text-amber-600" },
  { Icon: Syringe, title: "Acupuncture Therapy", desc: "Certified acupuncture treatment for pain relief, stress reduction, and chronic condition management.", color: "bg-green-50 text-green-600" },
  { Icon: ShieldCheck, title: "Preventive Care", desc: "Annual health screenings, vaccinations, and proactive lifestyle counselling to stay ahead of disease.", color: "bg-purple-50 text-purple-600" },
  { Icon: Baby, title: "Child Health (Pediatrics)", desc: "Pediatric consultations, immunity building, nutrition guidance, and developmental tracking for children.", color: "bg-pink-50 text-pink-600" },
  { Icon: HeartHandshake, title: "Geriatric Care", desc: "Specialised, compassionate care tailored to the unique health needs and challenges of elderly patients.", color: "bg-teal-50 text-teal-600" },
  { Icon: Gauge, title: "Hypertension Management", desc: "Blood pressure monitoring, medication management, dietary guidance, and cardiovascular risk reduction.", color: "bg-red-50 text-red-600" },
  { Icon: Weight, title: "Weight Management", desc: "Clinical obesity counselling, safe evidence-based diet planning, and metabolic health optimisation.", color: "bg-orange-50 text-orange-600" },
  { Icon: Pill, title: "Thyroid Disorders", desc: "Accurate diagnosis and ongoing management of hypothyroidism, hyperthyroidism, and related conditions.", color: "bg-indigo-50 text-indigo-600" },
  { Icon: Heart, title: "Cardiac Risk Assessment", desc: "Early detection and risk profiling for heart disease, cholesterol management, and lifestyle advice.", color: "bg-rose-50 text-rose-600" },
  { Icon: Brain, title: "Stress & Mental Wellness", desc: "Counselling for stress, anxiety, sleep disorders, and overall mental wellbeing using holistic methods.", color: "bg-violet-50 text-violet-600" },
  { Icon: Microscope, title: "Diagnostic Services", desc: "Comprehensive pathology referrals, blood tests, and interpretation of diagnostic reports with expert advice.", color: "bg-cyan-50 text-cyan-600" },
];

export default function ServicesPage() {
  return (
    <Layout>
      <PageBanner
        title="Our"
        highlight="Services"
        subtitle="Comprehensive healthcare for every stage of life"
        breadcrumb="Services"
      />

      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {services.map(({ Icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-5 text-base sm:text-lg">Ready to book a consultation?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+919531323295" className="inline-flex items-center gap-2 bg-primary text-secondary font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-sm sm:text-base">
                📞 Call: 95313 23295
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-secondary/25 text-secondary font-bold px-8 py-3.5 rounded-full hover:bg-secondary/5 transition-colors text-sm sm:text-base">
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
