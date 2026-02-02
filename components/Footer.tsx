"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-600 text-zinc-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Section 1: Logo & Description */}
        <div>
          <Image
            src="/img/Logo.png"
            width={120}
            height={120}
            alt="Agra Sound Logo"
          />
          <p className="text-sm mt-4 leading-relaxed">
            When you need great sound at the right price for an important event,
            contact us for a quick quote. We provide reliable delivery services
            across the UAE and specialize in renting high-end audio and video
            equipment in Dubai.
          </p>
        </div>

        {/* Section 2: Privacy */}
        <div className="md:text-center">
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <a href="/privacy" className="text-sm hover:underline block">
            Privacy Policy
          </a>
          <a href="/privacy" className="text-sm hover:underline block">
            Privacy Policy
          </a>
          <a href="/privacy" className="text-sm hover:underline block">
            Privacy Policy
          </a>
          <a href="/privacy" className="text-sm hover:underline block">
            Privacy Policy
          </a>
        </div>

        {/* Section 3: Terms */}
        <div className="md:text-right">
          <h4 className="text-white font-semibold mb-3">Terms</h4>
          <a href="/terms" className="text-sm hover:underline block">
            Terms of Service
          </a>
        </div>

      </div>
    </footer>
  );
}
