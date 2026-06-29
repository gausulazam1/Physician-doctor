import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", rating: 5, date: "March 2024", text: "Excellent doctor! Very thorough and caring. My diabetes is now well managed after years of struggle. Dr. Arun Jain explained everything so clearly." },
  { name: "Priya Sharma", rating: 5, date: "February 2024", text: "Dr. Arun Jain is a gem. My whole family has been seeing him for over 15 years. Always available, always caring." },
  { name: "Suresh Verma", rating: 5, date: "January 2024", text: "Best family doctor in Rohini. Very knowledgeable and takes time to listen. Never feel rushed during consultation." },
  { name: "Meena Singh", rating: 5, date: "December 2023", text: "His acupuncture treatment helped my chronic back pain tremendously. I had tried many doctors but Dr. Jain's treatment really worked." },
  { name: "Amit Gupta", rating: 5, date: "November 2023", text: "Highly recommend for diabetes management. Very patient and explains every detail about diet, medicine and lifestyle changes." },
  { name: "Kavita Joshi", rating: 5, date: "October 2023", text: "Wonderful doctor with decades of experience. I trust him completely with my family's health. Very honest advice." },
  { name: "Sandeep Arora", rating: 5, date: "September 2023", text: "Dr. Jain has been my family's doctor for 20 years. His acupuncture for my knee pain worked wonders when surgery seemed like the only option." },
  { name: "Rekha Malhotra", rating: 5, date: "August 2023", text: "So glad I found Dr. Arun Jain. He managed my thyroid and weight issues with a holistic approach. Truly a doctor who cares." },
  { name: "Vikram Nair", rating: 5, date: "July 2023", text: "Visited for hypertension management. Dr. Jain's systematic approach and regular follow-ups have kept my BP under control without side effects." },
];

export default function ReviewsPage() {
  return (
    <Layout>
      <PageBanner
        title="Patient"
        highlight="Reviews"
        subtitle="What thousands of patients across Delhi say about Dr. Arun Jain"
        breadcrumb="Reviews"
      />

      {/* Rating summary */}
      <section className="py-10 bg-white border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-primary">4.9</div>
              <div className="flex justify-center text-yellow-400 my-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <div className="text-muted-foreground text-sm">Google Rating</div>
            </div>
            <div className="h-px w-16 sm:h-16 sm:w-px bg-border" />
            <div className="text-center">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-secondary">50K+</div>
              <div className="text-muted-foreground text-sm mt-1">Patients Served</div>
            </div>
            <div className="h-px w-16 sm:h-16 sm:w-px bg-border" />
            <div className="text-center">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-secondary">37+</div>
              <div className="text-muted-foreground text-sm mt-1">Years of Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Review cards */}
      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="flex text-yellow-400">
                  {[...Array(r.rating)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground italic text-sm sm:text-base leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold font-serif flex items-center justify-center shrink-0">
                      {r.name.charAt(0)}
                    </div>
                    <span className="font-bold text-secondary text-sm sm:text-base">{r.name}</span>
                  </div>
                  <span className="text-muted-foreground text-xs">{r.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-colors text-sm sm:text-base"
            >
              Read All Reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
