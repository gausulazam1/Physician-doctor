import React from 'react';
import { Leaf } from 'lucide-react';
import { SiFacebook, SiWhatsapp, SiGoogle } from 'react-icons/si';

export function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <footer className="bg-[#081b33] text-white py-10 sm:py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10">

          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-bold tracking-tight">
                Dr. <span className="text-primary">Arun Jain</span>
              </span>
            </a>
            <p className="text-white/60 text-sm text-center md:text-left">Trusted Family Care Since 1988</p>
            <p className="text-white/40 text-xs text-center md:text-left">Rohini, Delhi · Family Physician & Diabetologist</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-white/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all"
              aria-label="Google Reviews"
            >
              <SiGoogle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all"
              aria-label="Facebook"
            >
              <SiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://wa.me/918092150012"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#25D366] hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

        </div>

        <div className="text-center text-white/50 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Dr. Arun Jain. All rights reserved. | Rohini, Delhi</p>
        </div>
      </div>
    </footer>
  );
}
