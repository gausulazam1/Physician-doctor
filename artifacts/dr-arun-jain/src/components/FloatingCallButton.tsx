import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="tel:+919531323295"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-secondary rounded-full shadow-[0_4px_20px_rgba(200,150,62,0.4)] transition-all duration-300 hover:scale-110 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Call Dr. Arun Jain"
      data-testid="floating-call-button"
    >
      <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30"></div>
      <Phone className="w-6 h-6 fill-current animate-pulse" />
    </a>
  );
}