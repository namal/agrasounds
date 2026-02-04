"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const whatsappNumber = "971528211284";

  // 👉 Images for auto carousel
  const images = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80",
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // 👉 Auto change image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-64 overflow-hidden">
          <img
            src={images[currentImage]}
            alt="Dubai Skyline"
            className="w-full h-full object-cover transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <div className="text-2xl font-bold mb-2">
                Serving All of Dubai
              </div>
              <div className="text-zinc-200">
                Premium equipment rental across the emirate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button (unchanged) */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your event equipment rental services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-white hover:scale-110 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:text-green-500 transition-colors" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </a>
    </section>
  );
}
