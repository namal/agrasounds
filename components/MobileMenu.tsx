"use client"

import React, { useEffect } from "react"
import Link from "next/link"

interface MobileMenuProps {
  menuItems: { name: string; href: string }[]
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ menuItems, isOpen, onClose }: MobileMenuProps) {
  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-end gap-12 bg-black/90 backdrop-blur-md md:hidden pb-20">
  {menuItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-white text-2xl hover:text-amber-400 transition-colors duration-300"
      onClick={onClose}
    >
      {item.name}
    </Link>
  ))}
</div>

  )
}
