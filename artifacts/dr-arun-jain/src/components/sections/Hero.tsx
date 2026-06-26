import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center bg-secondary pt-20 overflow-hidden">
      {/* Background patterns/gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,43,74,1)_0%,rgba(11,37,69,1)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-24">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1.5 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">✦ Trusted Family Physician — Since 1988</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[64px] leading-[1.1] text-white tracking-tight">
            Dr. <span className="text-primary">Arun Jain</span>
          </h1>

          <div className="space-y-4 w-full">
            <h2 className="text-xl md:text-2xl text-white font-medium">Family Physician & Diabetologist</h2>
            <p className="text-muted/80 text-sm md:text-base font-mono bg-white/5 inline-block px-3 py-1 rounded">
              MBBS · MD (Acu.) · F.Ac.S.H. · M.R.S.H. (London)
            </p>
            
            <div className="h-px w-24 bg-primary/60 my-6"></div>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              Trusted by thousands of Delhi families for over 37 years. Expert diabetes management, preventive care & acupuncture — for every age group.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-6 md:gap-10 py-4 w-full border-y border-white/10 my-2">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">37+</span>
              <span className="text-[10px] md:text-xs text-white/70 font-bold tracking-wider mt-1">YEARS PRACTICE</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">50K+</span>
              <span className="text-[10px] md:text-xs text-white/70 font-bold tracking-wider mt-1">PATIENTS</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary flex items-center gap-1">
                4.9+ <span className="text-xl text-yellow-400">★</span>
              </span>
              <span className="text-[10px] md:text-xs text-white/70 font-bold tracking-wider mt-1">GOOGLE RATING</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button 
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              data-testid="button-hero-call"
            >
              <a href="tel:+919531323295">📞 Call: 95313 23295</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-transparent hover:bg-white/10 text-white font-bold px-8 py-6 text-lg hover:scale-105 transition-transform"
              data-testid="button-hero-book"
            >
              <a href="#contact">📅 Book Appointment →</a>
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto max-w-md mx-auto w-full"
        >
          <div className="relative aspect-square rounded-full border-4 border-primary/30 p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary bg-secondary-foreground/5 relative">
              <img 
                src="/images/doctor-hero.png" 
                alt="Dr. Arun Jain" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply rounded-full"></div>
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -bottom-4 -left-4 sm:left-0 bg-white rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-primary/20 p-2 rounded-full">
                <span className="text-xl">⭐</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold leading-tight">37+ Years</span>
                <span className="text-muted-foreground text-sm">Experience</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}