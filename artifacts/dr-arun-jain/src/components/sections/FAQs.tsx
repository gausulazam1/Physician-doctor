import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  const faqs = [
    {
      q: "What are your clinic timings?",
      a: "Mon–Sat: 10:00 AM – 1:00 PM and 5:00 PM – 8:00 PM. Sundays by appointment only."
    },
    {
      q: "How do I book an appointment?",
      a: "You can call 95313 23295 or visit the clinic directly. Walk-ins are also welcome."
    },
    {
      q: "What is your experience in diabetes management?",
      a: "Dr. Arun Jain has over 37 years of experience treating diabetic patients with comprehensive management including diet counseling and medication."
    },
    {
      q: "Do you offer acupuncture treatment?",
      a: "Yes, Dr. Jain is a certified acupuncturist with MD in Acupuncture, offering treatment for pain, stress, and chronic conditions."
    },
    {
      q: "Is the clinic accessible from Rohini metro?",
      a: "Yes, the clinic is conveniently located near Rohini area and accessible via metro."
    },
    {
      q: "What should I bring for my first visit?",
      a: "Please bring any previous medical records, reports, and a list of current medications."
    },
    {
      q: "Do you accept walk-ins?",
      a: "Yes, walk-in patients are welcome, though prior appointments are preferred to minimize waiting time."
    }
  ];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Frequently <span className="text-primary">Asked Questions</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-border"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-1 sm:py-2">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-secondary hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-3 sm:pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}