"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0); // track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Services", href: createPageUrl("Services") },
    { name: "Events", href: "#events" },
    { name: "Equipment", href: "#equipment" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-4 md:top-24 md:left-[45%] md:-translate-x-1/2 md:w-[90%] md:max-w-7xl transition-all duration-300">
        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo */}
        <div className="relative flex items-center justify-center w-56 h-56 mx-auto md:mx-0 md:-mt-10">
          {/* OUTER RING — animated ONLY */}
          <div
            className="
      absolute inset-0
      rounded-full
      border-2 border-white/40
      animate-equalizer
      pointer-events-none
    "
          />

          {/* INNER LOGO — NO animation */}
          <div
            className={`flex items-center justify-center rounded-full transition-all duration-300
        ${isScrolled ? "bg-white/40 border-4 border-white" : "bg-white/40 border-4 border-white/40"}
        w-48 h-48
        z-10
      `}
          >
            <Image
              src="/img/logo.png"
              width={100}
              height={100}
              alt="Agra Sound Logo"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:border-2 md:bg-white/40 rounded-full items-center gap-8 px-10 py-4 text-lg text-white/90 md:-mt-50">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-amber-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute justify-center h-full w-full flex flex-col items-center gap-6 bg-black/70 backdrop-blur-md py-100 md:hidden z-40">
          {menuItems.map((item, index) => {
            const delay = index * 60;
            const itemOpacity = Math.max(0, 1 - (scrollY - delay) / 30);

            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-3xl hover:text-amber-400 transition-opacity duration-300"
                style={{ opacity: itemOpacity }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
