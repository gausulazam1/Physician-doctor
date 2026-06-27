import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
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
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-secondary transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-2' : 'py-3'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 shrink-0 bg-transparent border-none cursor-pointer"
            aria-label="Go to top"
          >
            <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
              Dr.&nbsp;<span className="text-primary">Arun Jain</span>
            </span>
          </button>

          {/* Desktop Nav — visible at md+ (768px) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-white hover:text-primary transition-colors font-medium text-xs lg:text-sm xl:text-base px-2 lg:px-3 py-1 rounded bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+919531323295"
              className="ml-2 bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full px-4 lg:px-5 py-2 text-xs lg:text-sm whitespace-nowrap shadow-lg shadow-primary/20 transition-colors"
            >
              📞 95313 23295
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors bg-transparent border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[52px] bottom-0 bg-secondary/98 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-white hover:text-primary transition-colors font-serif text-2xl bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="tel:+919531323295"
          className="bg-primary text-secondary font-bold rounded-full px-8 py-3 text-lg"
        >
          📞 95313 23295
        </a>
      </div>
    </>
  );
}
