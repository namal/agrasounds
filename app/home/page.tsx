'use client';

import React, { useEffect, useState } from 'react';
import Hero from '@/components/homePage/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // mobile breakpoint (Tailwind md = 768px)
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleScroll = () => {
      if (mediaQuery.matches) {
        setScrollY(window.scrollY);
      }
    };

    // Attach scroll only if mobile
    if (mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);
    }

    // Handle resize (mobile ↔ desktop)
    const handleResize = () => {
      if (!mediaQuery.matches) {
        setScrollY(0); // reset for desktop
        window.removeEventListener('scroll', handleScroll);
      } else {
        window.addEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <Hero scrollY={scrollY} onGetQuote={scrollToContact} />
      <Footer />
    </div>
  );
}
