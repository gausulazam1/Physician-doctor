import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-secondary transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'py-3'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0" data-testid="link-home-logo">
            <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
              Dr.&nbsp;<span className="text-primary">Arun Jain</span>
            </span>
          </a>

          {/* Desktop Nav — visible at md+ (768px) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary transition-colors font-medium text-xs lg:text-sm xl:text-base px-2 lg:px-3 py-1 rounded"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919531323295"
              className="ml-2 bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full px-4 lg:px-5 py-2 text-xs lg:text-sm whitespace-nowrap shadow-lg shadow-primary/20 transition-colors"
              data-testid="button-nav-call"
            >
              📞 95313 23295
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu-toggle"
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
        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-primary transition-colors font-serif text-2xl"
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+919531323295"
          onClick={() => setMobileMenuOpen(false)}
          className="bg-primary text-secondary font-bold rounded-full px-8 py-3 text-lg"
        >
          📞 95313 23295
        </a>
      </div>
    </>
  );
}
