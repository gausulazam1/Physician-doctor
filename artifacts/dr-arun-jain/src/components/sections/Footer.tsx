import React from 'react';
import { Leaf } from 'lucide-react';
import { SiFacebook, SiWhatsapp, SiGoogle } from 'react-icons/si';

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'FAQs', id: 'faqs' },
  { name: 'Gallery', id: 'gallery' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Footer() {
  return (
    <footer className="bg-[#081b33] text-white w-full overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-white/10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5 shrink-0">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 bg-transparent border-none cursor-pointer"
            >
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-serif text-lg font-bold text-white">
                Dr. <span className="text-primary">Arun Jain</span>
              </span>
            </button>
            <p className="text-white/55 text-xs sm:text-sm">Trusted Family Care Since 1988</p>
            <p className="text-white/35 text-xs">Rohini, Delhi · Family Physician &amp; Diabetologist</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            {links.map(l => (
              <button
                key={l.name}
                onClick={() => scrollTo(l.id)}
                className="text-xs sm:text-sm text-white/65 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                {l.name}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3 shrink-0">
            {[
              { href: 'https://maps.google.com', Icon: SiGoogle, label: 'Google' },
              { href: 'https://facebook.com', Icon: SiFacebook, label: 'Facebook' },
              { href: 'https://wa.me/918092150012', Icon: SiWhatsapp, label: 'WhatsApp' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/65 hover:bg-primary hover:text-secondary transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-white/45 text-xs sm:text-sm pt-6">
          © {new Date().getFullYear()} Dr. Arun Jain. All rights reserved. | Rohini, Delhi - 110086
        </p>
      </div>
    </footer>
  );
}
