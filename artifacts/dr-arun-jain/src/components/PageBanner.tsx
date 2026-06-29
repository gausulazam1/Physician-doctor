import React from 'react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  highlight: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageBanner({ title, highlight, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="bg-secondary w-full py-12 sm:py-16 relative overflow-x-clip">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,150,62,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="text-primary/80 text-xs sm:text-sm font-bold tracking-widest uppercase mb-3"
        >
          Dr. Arun Jain &mdash; {breadcrumb}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
        >
          {title} <span className="text-primary">{highlight}</span>
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-white/65 text-base sm:text-lg max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-5" />
      </div>
    </section>
  );
}
