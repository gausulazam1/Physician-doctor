import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What are your clinic timings?", a: "Monday to Saturday: 10:00 AM – 1:00 PM and 5:00 PM – 8:00 PM. Sundays are by appointment only. Please call ahead on Sundays to confirm availability." },
  { q: "How do I book an appointment?", a: "You can book an appointment by calling 95313 23295 or by sending a WhatsApp message to +91 80921 50012. Walk-ins are also welcome during clinic hours." },
  { q: "What is Dr. Arun Jain's experience in diabetes management?", a: "Dr. Arun Jain has over 37 years of specialised experience in managing diabetic patients. His comprehensive approach includes blood sugar monitoring, HbA1c tracking, dietary counselling, medication management, and lifestyle guidance." },
  { q: "Do you offer acupuncture treatment?", a: "Yes! Dr. Jain holds an MD in Acupuncture and is a certified practitioner. He offers acupuncture therapy for chronic pain, stress, anxiety, back pain, knee pain, migraine, and various other conditions." },
  { q: "Where is the clinic located?", a: "The clinic is located at Pocket 7, Sector 22, Rohini, Delhi - 110086. It is easily accessible from the Rohini area and nearby metro stations." },
  { q: "What should I bring for my first visit?", a: "Please bring any previous medical records, laboratory reports, prescription history, and a list of all current medications. This helps Dr. Jain give you the most accurate and effective consultation." },
  { q: "Do you accept walk-in patients?", a: "Yes, walk-in patients are welcome during clinic hours. However, calling ahead for an appointment is recommended as it reduces waiting time, especially during peak morning hours." },
  { q: "Do you treat children and elderly patients?", a: "Absolutely. Dr. Arun Jain provides paediatric care for children of all ages and specialised geriatric care for the elderly. He is experienced with the unique health needs of both age groups." },
  { q: "What conditions does Dr. Jain specialise in?", a: "Dr. Jain specialises in Diabetes Management, Hypertension, Thyroid Disorders, Obesity, Preventive Care, Acupuncture Therapy, Family Medicine, and Geriatric Care." },
  { q: "Is there parking available near the clinic?", a: "Yes, there is parking space available in Sector 22, Rohini near the clinic. The clinic is also accessible via public transport from the Rohini area." },
];

export default function FaqsPage() {
  return (
    <Layout>
      <PageBanner
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Everything you need to know about the clinic and consultations"
        breadcrumb="FAQs"
      />

      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="text-center mt-10 p-6 sm:p-8 bg-secondary rounded-2xl text-white">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-white/70 mb-5 text-sm sm:text-base">Call us or send a WhatsApp message — we're happy to help.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+919531323295" className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base">
                📞 95313 23295
              </a>
              <a href="https://wa.me/918092150012" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1fbe5c] transition-colors text-sm sm:text-base">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
