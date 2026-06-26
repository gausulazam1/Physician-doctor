import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const info = [
  { Icon: MapPin, label: 'Address', body: 'Pocket 7, Sector 22, Rohini, Delhi - 110086' },
  { Icon: Phone, label: 'Phone', body: '95313 23295', href: 'tel:+919531323295' },
  { Icon: Clock, label: 'Timings', body: 'Mon–Sat: 10 AM – 1 PM & 5 PM – 8 PM\nSundays by appointment only' },
  { Icon: Mail, label: 'Email', body: 'drarunjain@gmail.com', href: 'mailto:drarunjain@gmail.com' },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary text-white w-full overflow-x-clip relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,150,62,0.06)_0%,transparent_55%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: details */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-sm flex flex-col gap-5">
              {info.map(({ Icon, label, body, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="p-2.5 bg-primary/20 rounded-full text-primary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-base sm:text-lg mb-0.5">{label}</h4>
                    {href ? (
                      <a href={href} className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base break-all">
                        {body}
                      </a>
                    ) : (
                      <p className="text-white/70 text-sm sm:text-base whitespace-pre-line">{body}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="tel:+919531323295"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full py-3 px-4 text-sm sm:text-base transition-colors"
                >
                  📞 Call: 95313 23295
                </a>
                <a
                  href="https://wa.me/918092150012" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbe5c] text-white font-bold rounded-full py-3 px-4 text-sm sm:text-base transition-colors"
                >
                  <SiWhatsapp className="w-5 h-5 shrink-0" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full h-[280px] sm:h-[360px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.392942475477!2d77.06206685!3d28.7218321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06e2324f9b2d%3A0xc6c761b6c8b9d40b!2sSector%2022%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Arun Jain Clinic — Rohini, Delhi"
              className="grayscale-[25%] opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
