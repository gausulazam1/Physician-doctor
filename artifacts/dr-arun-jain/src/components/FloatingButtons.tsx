import React from 'react';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918092150012"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 w-[52px] h-[52px] sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 hover:bg-[#1fbe5c] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp"
        data-testid="floating-whatsapp-button"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-25"></div>
        <SiWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919531323295"
        className="group relative flex items-center justify-center w-[52px] h-[52px] sm:w-14 sm:h-14 bg-primary text-secondary rounded-full shadow-[0_4px_20px_rgba(200,150,62,0.4)] hover:scale-110 hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
        aria-label="Call Dr. Arun Jain"
        data-testid="floating-call-button"
      >
        <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-25"></div>
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Call: 95313 23295
        </span>
      </a>
    </div>
  );
}
