import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918092150012"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:bg-[#1fbe5c] transition-all duration-300"
        aria-label="Chat on WhatsApp"
        data-testid="floating-whatsapp-button"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20"></div>
        <SiWhatsapp className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919531323295"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary text-secondary rounded-full shadow-[0_4px_20px_rgba(200,150,62,0.5)] hover:scale-110 hover:bg-primary/90 transition-all duration-300"
        aria-label="Call Dr. Arun Jain"
        data-testid="floating-call-button"
      >
        <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Call Now
        </span>
      </a>
    </div>
  );
}
