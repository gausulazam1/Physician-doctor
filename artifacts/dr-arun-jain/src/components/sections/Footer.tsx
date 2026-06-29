import React from 'react';
import { Link } from 'wouter';
import { SiFacebook, SiWhatsapp, SiGoogle } from 'react-icons/si';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'About Dr. Jain', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact & Location', href: '/contact' },
  { name: 'Patient Reviews', href: '/reviews' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Gallery', href: '/gallery' },
];

const services = [
  'General Medicine',
  'Diabetes Management',
  'Hypertension & BP',
  'Vaccination & Preventive Care',
  'Acupuncture Therapy',
  'Family Health Care',
];

export function Footer() {
  return (
    <footer className="bg-[#081b33] text-white w-full overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">⚕️</span>
              <span className="font-serif text-lg font-bold text-white">
                Dr. <span className="text-primary">Arun Jain</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Family Physician &amp; Diabetologist practicing compassionate, trusted medicine in Rohini, Delhi since 1988.
            </p>
            <p className="text-primary font-mono text-xs">MBBS · MD (Acu.) · M.R.S.H. (London)</p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { href: 'https://maps.google.com', Icon: SiGoogle, label: 'Google' },
                { href: 'https://facebook.com', Icon: SiFacebook, label: 'Facebook' },
                { href: 'https://wa.me/918092150012', Icon: SiWhatsapp, label: 'WhatsApp' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/65 hover:bg-primary hover:text-secondary transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Pages</h4>
            {pages.map(l => (
              <Link key={l.name} href={l.href} className="text-white/60 hover:text-primary transition-colors text-sm">
                {l.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Services</h4>
            {services.map(s => (
              <Link key={s} href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Contact</h4>
            <a href="tel:+919531323295" className="text-white/60 hover:text-primary transition-colors text-sm">📱 9531323295</a>
            <a href="tel:01143085455" className="text-white/60 hover:text-primary transition-colors text-sm">☎️ 011-43085455</a>
            <a href="mailto:arunjaindr@gmail.com" className="text-white/60 hover:text-primary transition-colors text-sm break-all">✉️ arunjaindr@gmail.com</a>
            <p className="text-white/60 text-sm leading-relaxed">📍 D-14/235, Opp. Metro Pillar No.412,<br />Som Bazar Road, Sector-7,<br />Rohini, Delhi–110085</p>
            <p className="text-white/60 text-xs">🕐 Mon–Sat: 9:30–1:30 &amp; 5–8:30 PM<br />⛔ Sunday Closed</p>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs sm:text-sm pt-6">
          © {new Date().getFullYear()} Dr. Arun Jain Clinic · All Rights Reserved · Rohini, Delhi &nbsp;|&nbsp; Practicing Since 1988 · MBBS · MD (Acu.) · M.R.S.H. (London)
        </p>
      </div>
    </footer>
  );
}
