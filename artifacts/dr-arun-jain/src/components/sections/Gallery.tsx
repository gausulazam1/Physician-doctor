import React from 'react';
import { motion } from 'framer-motion';

export function Gallery() {
  const images = [
    { src: "/images/gallery-1.png", alt: "Dr. Arun Jain at desk" },
    { src: "/images/gallery-2.png", alt: "Clinic Waiting Room" },
    { src: "/images/gallery-3.png", alt: "Elderly Patient Care" },
    { src: "/images/gallery-4.png", alt: "Acupuncture Session" },
    { src: "/images/gallery-5.png", alt: "Blood Sugar Test" },
    { src: "/images/gallery-6.png", alt: "Pediatric Care" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Gallery <span className="text-secondary">Photo Gallery</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group overflow-hidden rounded-xl aspect-[4/3] relative bg-muted"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}