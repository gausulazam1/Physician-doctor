import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-clip w-full">
      <Navbar />
      <main className="pt-[52px]">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
