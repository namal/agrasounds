'use client';

import React, { useEffect, useState } from 'react';
import Hero from '@/components/home/Hero';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Hero scrollY={scrollY} onGetQuote={scrollToContact} />

      
    </div>
  );
}
