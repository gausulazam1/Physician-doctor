import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery-1.png', alt: 'Dr. Arun Jain at his clinic desk' },
  { src: '/images/gallery-2.png', alt: 'Modern clinic waiting room' },
  { src: '/images/gallery-3.png', alt: 'Compassionate elderly patient care' },
  { src: '/images/gallery-4.png', alt: 'Acupuncture therapy session' },
  { src: '/images/gallery-5.png', alt: 'Diabetes blood sugar monitoring' },
  { src: '/images/gallery-6.png', alt: 'Pediatric care for children' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white w-full overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
          >
            Photo <span className="text-primary">Gallery</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl aspect-video sm:aspect-[4/3] bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
