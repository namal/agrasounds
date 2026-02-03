"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createPageUrl } from "@/utils"
import MobileMenu from "./MobileMenu"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", href: createPageUrl("") },
    { name: "Services", href: createPageUrl("Services") },
    { name: "Events", href: createPageUrl("Events") },
    { name: "Equipment", href: createPageUrl("Equipment") },
    { name: "Reviews", href: createPageUrl("Reviews") },
    { name: "Contact", href: createPageUrl("Contact") },
  ]

  return (
    <div>
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 md:top-24 md:left-[45%] md:-translate-x-1/2 md:w-[90%] md:max-w-7xl transition-all duration-300">
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
        <div className="relative flex items-center justify-center w-56 h-56 mx-auto md:mx-0 md:-mt-8">
          <div
            className={`
              absolute inset-0
              rounded-full
              border-4
              animate-equalizer
              pointer-events-none
              ${isScrolled ? "border-blue-400/80" : "border-white/40"}
            `}
          />
          <div
            className={`flex items-center justify-center rounded-full transition-all duration-300
              ${isScrolled ? "bg-blue-300/40 border-4 border-white" : "bg-white/40 border-4 border-white/40"}
              w-48 h-48
              z-10
            `}
          >
            <Image
              src="/img/Logo.png"
              width={100}
              height={100}
              alt="Agra Sound Logo"
            />
          </div>
        </div>

        {/* Desktop / Tablet Menu */}
<div
  className={`
    hidden md:flex
    rounded-full
    items-center
    gap-6      {/* Increased gap between menu items */}
    ml-6      {/* Add margin-left to separate from logo */}
    px-10 py-4
    text-1xl
    transition-all duration-300
    uppercase
    ${isScrolled
      ? "bg-black/90 border border-black text-white"
      : "bg-white/40 border-2 border-white/40 text-white/90"
    }
  `}
>
  {menuItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="hover:text-amber-400 transition-colors duration-200"
    >
      {item.name}
    </Link>
  ))}
</div>

      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        menuItems={menuItems}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  )
}
