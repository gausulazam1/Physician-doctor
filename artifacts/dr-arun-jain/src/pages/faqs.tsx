import React from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiWhatsapp } from "react-icons/si";

const faqGroups = [
  {
    group: "Clinic & Appointments",
    faqs: [
      {
        q: "What are the clinic timings?",
        a: "The clinic is open Monday to Saturday. Morning OPD: 9:30 AM to 1:30 PM. Evening OPD: 5:00 PM to 8:30 PM. The clinic is closed on Sundays. For urgent queries you can call 9531323295.",
      },
      {
        q: "Do I need an appointment or can I walk in?",
        a: "Walk-in patients are welcome during clinic hours. However, calling ahead on 9531323295 is recommended to reduce waiting time, especially for the evening OPD which is usually busier.",
      },
      {
        q: "What should I bring for my first visit?",
        a: "Please bring: any previous medical reports or prescriptions, a list of current medications, your Aadhaar card or ID, and if visiting for diabetes or BP — your last blood test reports if available. For children, bring the vaccination card.",
      },
      {
        q: "Which health insurance is accepted?",
        a: "Please call 9531323295 or email arunjaindr@gmail.com to confirm current insurance acceptance. The clinic accepts many major insurance providers and can provide detailed receipts for reimbursement.",
      },
    ],
  },
  {
    group: "Common Questions",
    faqs: [
      {
        q: "Does acupuncture hurt? Is it safe?",
        a: "Acupuncture performed by Dr. Jain (MD Acu. certified) is very safe. Most patients feel minimal to no pain — typically a mild tingling or pressure sensation. Sterile single-use needles are always used. Dr. Jain will assess your suitability before recommending this therapy.",
      },
      {
        q: "What tests are needed for diabetes?",
        a: "For initial diabetes assessment: Fasting Blood Sugar, Post-Prandial Blood Sugar, and HbA1c are the main tests. Dr. Jain may also recommend kidney function, lipid profile, and thyroid tests. He will guide you on which tests to do and how to read the results.",
      },
      {
        q: "Can Dr. Jain treat children and senior citizens?",
        a: "Absolutely yes. Dr. Jain is a family physician who treats patients of all age groups — from newborns (vaccinations, fever, growth monitoring) to senior citizens (chronic disease management, general health). Thousands of families bring multiple generations to the same clinic.",
      },
      {
        q: "How is diabetes managed differently for Indian patients?",
        a: "Dr. Jain specialises in diabetes management tailored to the Indian lifestyle — accounting for our diet (roti, rice, dal, sweets), festivals, and cultural habits. He provides practical, realistic advice rather than generic Western dietary guidelines that are hard to follow in Indian households.",
      },
      {
        q: "Can you provide home visits for physiotherapy?",
        a: "Yes, home visits for physiotherapy can be arranged for patients who are unable to visit the clinic due to mobility issues or post-operative recovery. Please call 9531323295 or email arunjaindr@gmail.com to discuss availability, location, and scheduling.",
      },
      {
        q: "Can all tests be done here?",
        a: "The clinic offers a wide range of common diagnostic tests including blood sugar, HbA1c, lipid profile, kidney function, thyroid, and routine blood work. For specialised or advanced investigations, Dr. Jain will refer you to a trusted nearby diagnostic centre and guide you on how to interpret the results.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <Layout>
      <PageBanner
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Quick answers to the most common patient queries"
        breadcrumb="FAQs"
      />

      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {faqGroups.map(({ group, faqs }) => (
            <motion.div key={group}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 py-4 bg-secondary/5 border-b border-border">
                <h3 className="font-bold text-secondary text-base sm:text-lg">{group}</h3>
              </div>
              <div className="px-5 sm:px-7">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${group}-${i}`} className="border-b border-border last:border-b-0">
                      <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-secondary hover:text-primary transition-colors py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}

          {/* ── CTA ── */}
          <div className="text-center p-6 sm:p-8 bg-secondary rounded-2xl text-white">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">Still have a question?</h3>
            <p className="text-white/70 mb-5 text-sm sm:text-base">Call the clinic directly or send us an email.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+919531323295"
                className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base">
                📞 95313 23295
              </a>
              <a href="https://wa.me/918092150012" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1fbe5c] transition-colors text-sm sm:text-base">
                <SiWhatsapp className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href="mailto:arunjaindr@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base">
                ✉️ Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
