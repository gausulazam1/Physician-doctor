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
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Patient <span className="text-primary">Reviews</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 bg-secondary/5 px-6 py-3 rounded-full border border-secondary/10"
          >
            <div className="flex items-center text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-secondary">4.9 Google Rating</span>
            <span className="text-muted-foreground mx-2">•</span>
            <span className="font-semibold text-secondary">37+ Years</span>
            <span className="text-muted-foreground mx-2">•</span>
            <span className="font-semibold text-secondary">50K+ Patients</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-serif text-lg">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-bold text-secondary">{review.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary font-bold px-8">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              Read All Reviews →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}