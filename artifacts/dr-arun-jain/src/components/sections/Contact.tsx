import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,150,62,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Address</h4>
                    <p className="text-white/70">Pocket 7, Sector 22, Rohini,<br/>Delhi - 110086</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full text-primary mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Phone</h4>
                    <p className="text-white/70">95313 23295</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full text-primary mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Timings</h4>
                    <p className="text-white/70">Mon–Sat: 10:00 AM – 1:00 PM<br/>and 5:00 PM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full text-primary mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email</h4>
                    <p className="text-white/70">drarunjain@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button 
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
                >
                  <a href="tel:+919531323295">📞 Call Now: 95313 23295</a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.392942475477!2d77.06206685!3d28.7218321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06e2324f9b2d%3A0xc6c761b6c8b9d40b!2sSector%2022%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
              className="grayscale-[30%] contrast-[1.1] opacity-90"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}