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
    <footer className="bg-[#081b33] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-bold tracking-tight">
                Dr. <span className="text-primary">Arun Jain</span>
              </span>
            </a>
            <p className="text-white/60 text-sm">Trusted Family Care Since 1988</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm text-white/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all">
              <SiGoogle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all">
              <SiFacebook className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919531323295" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all">
              <SiWhatsapp className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Dr. Arun Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}