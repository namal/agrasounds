'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Menu, X } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils/index";
import Image from "next/image";

interface HeroProps {
  scrollY: number;
  onGetQuote: () => void;
}

export default function Hero({ scrollY, onGetQuote }: HeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const videos = [
    "https://videos.pexels.com/video-files/3196427/3196427-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/4124198/4124198-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/7722221/7722221-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/6558963/6558963-hd_1920_1080_25fps.mp4",
  ];

const [mobileMenuOpacity, setMobileMenuOpacity] = useState(1);

useEffect(() => {
  const handleScroll = () => {
    const scrollThreshold = 100; // adjust when you want fade to start
    const opacity = Math.max(0, 1 - window.scrollY / scrollThreshold);
    setMobileMenuOpacity(opacity);
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900/90 z-10" />
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex && !isTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

     


      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Elevate Your
          <span className="block text-amber-400">Event Experience</span>
        </h1>

        <p className="text-xl text-zinc-300 mb-12 max-w-3xl mx-auto">
          Trusted events and entertainment service provider based in Dubai.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onGetQuote}
            className="bg-amber-500 hover:bg-white hover:text-amber-600 text-zinc-900 rounded-full"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-black border-white/40"
          >
            <Play className="mr-2 w-5 h-5" />
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
