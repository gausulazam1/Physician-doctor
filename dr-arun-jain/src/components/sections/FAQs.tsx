import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What are your clinic timings?', a: 'Mon–Sat: 10:00 AM – 1:00 PM and 5:00 PM – 8:00 PM. Sundays by appointment only.' },
  { q: 'How do I book an appointment?', a: 'Call 95313 23295 or visit the clinic directly. Walk-ins are also welcome.' },
  { q: 'What is your experience in diabetes management?', a: 'Dr. Arun Jain has over 37 years of experience treating diabetic patients with comprehensive management including diet counseling and medication.' },
  { q: 'Do you offer acupuncture treatment?', a: 'Yes, Dr. Jain is a certified acupuncturist with MD in Acupuncture, offering treatment for pain, stress, and chronic conditions.' },
  { q: 'Is the clinic accessible from Rohini metro?', a: 'Yes, the clinic is conveniently located near Rohini and is accessible via metro.' },
  { q: 'What should I bring for my first visit?', a: 'Please bring any previous medical records, reports, and a list of current medications.' },
  { q: 'Do you accept walk-ins?', a: 'Yes, walk-in patients are welcome, though prior appointments are preferred to reduce waiting time.' },
];

export function FAQs() {
  return (
    <section id="faqs" className="py-16 sm:py-20 bg-background w-full overflow-x-clip">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
          >
            Frequently <span className="text-primary">Asked Questions</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-border"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-secondary hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4">
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
