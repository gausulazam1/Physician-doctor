import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiWhatsapp } from 'react-icons/si';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary text-white relative overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,150,62,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-stretch max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary mt-1 shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-1">Address</h4>
                    <p className="text-white/70 text-sm sm:text-base">Pocket 7, Sector 22, Rohini,<br/>Delhi - 110086</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary mt-1 shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-1">Phone</h4>
                    <a href="tel:+919531323295" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">95313 23295</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary mt-1 shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-1">Timings</h4>
                    <p className="text-white/70 text-sm sm:text-base">Mon–Sat: 10:00 AM – 1:00 PM<br/>and 5:00 PM – 8:00 PM</p>
                    <p className="text-white/50 text-xs sm:text-sm mt-1">Sundays by appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary mt-1 shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-1">Email</h4>
                    <a href="mailto:drarunjain@gmail.com" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">drarunjain@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 sm:py-6 text-sm sm:text-base"
                >
                  <a href="tel:+919531323295">📞 Call: 95313 23295</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="flex-1 rounded-full bg-[#25D366] hover:bg-[#1fbe5c] text-white font-bold py-5 sm:py-6 text-sm sm:text-base"
                >
                  <a href="https://wa.me/918092150012" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[300px] sm:h-[400px] lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.392942475477!2d77.06206685!3d28.7218321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06e2324f9b2d%3A0xc6c761b6c8b9d40b!2sSector%2022%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Arun Jain Clinic Location - Rohini, Delhi"
              className="grayscale-[30%] contrast-[1.1] opacity-90"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
