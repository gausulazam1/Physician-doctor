import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Reviews() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      text: "Excellent doctor! Very thorough and caring. My diabetes is well managed now.",
    },
    {
      name: "Priya Sharma",
      text: "Dr. Arun Jain is a gem. My whole family has been seeing him for 15 years.",
    },
    {
      name: "Suresh Verma",
      text: "Best family doctor in Rohini. Always available and very knowledgeable.",
    },
    {
      name: "Meena Singh",
      text: "His acupuncture treatment helped my chronic back pain tremendously.",
    },
    {
      name: "Amit Gupta",
      text: "Highly recommend for diabetes management. Very patient and explains everything clearly.",
    },
    {
      name: "Kavita Joshi",
      text: "Wonderful doctor with decades of experience. Trust him completely.",
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Patient <span className="text-primary">Reviews</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-secondary/5 px-4 sm:px-6 py-3 rounded-full border border-secondary/10"
          >
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </div>
            <span className="font-bold text-secondary text-sm sm:text-base">4.9 Google Rating</span>
            <span className="text-muted-foreground hidden xs:inline">•</span>
            <span className="font-semibold text-secondary text-sm sm:text-base">37+ Years</span>
            <span className="text-muted-foreground hidden xs:inline">•</span>
            <span className="font-semibold text-secondary text-sm sm:text-base">50K+ Patients</span>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="flex text-yellow-400 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-5 text-sm sm:text-base">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-serif text-base sm:text-lg shrink-0">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-bold text-secondary text-sm sm:text-base">{review.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary font-bold px-6 sm:px-8">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              Read All Reviews →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
