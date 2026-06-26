import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-secondary ${
          isScrolled ? 'py-2 shadow-md' : 'py-3 sm:py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group" data-testid="link-home-logo">
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            <span className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
              Dr. <span className="text-primary group-hover:text-white transition-colors duration-300">Arun Jain</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
                    data-testid={`link-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 xl:px-6 shadow-lg shadow-primary/20 text-sm xl:text-base"
              data-testid="button-nav-call"
            >
              <a href="tel:+919531323295">📞 95313 23295</a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer — rendered outside header to avoid stacking context issues */}
      <div
        className={`lg:hidden fixed inset-0 bg-secondary/98 backdrop-blur-sm z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '56px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 pb-16">
          <ul className="flex flex-col items-center gap-5 text-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-white hover:text-primary transition-colors font-serif text-2xl"
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground font-bold mt-2 px-8"
          >
            <a href="tel:+919531323295" onClick={handleNavClick}>📞 95313 23295</a>
          </Button>
        </nav>
      </div>
    </>
  );
}
