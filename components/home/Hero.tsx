'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  scrollY: number;
  onGetQuote: () => void;
}

export default function Hero({ scrollY, onGetQuote }: HeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videos = [
    "https://videos.pexels.com/video-files/3196427/3196427-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/4124198/4124198-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/7722221/7722221-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/6558963/6558963-hd_1920_1080_25fps.mp4",
  ];

  // Fade opacity for text & buttons (based on scroll)
  const fadeOpacity = Math.max(0, 1 - scrollY / 250); // adjust 200 for faster/slower fade

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-50">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900/90 z-30" />
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
              index === currentVideoIndex && !isTransitioning
                ? "opacity-1000"
                : "opacity-10"
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Hero Content (Text + Buttons) */}
      <div
  className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-white transition-opacity duration-300"
  style={{ opacity: fadeOpacity }}
>
  {/* Heading */}
  <h1 className="text-6xl sm:text-4xl md:text-7xl font-bold mb-12 sm:mb-6">
    Elevate Your 
    <span className="block text-amber-400">Event Experience</span>
  </h1>

  {/* Subtext */}
  <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
    Trusted events and entertainment service provider based in Dubai.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Button
      size="lg"
      onClick={onGetQuote}
      className="bg-amber-300 hover:bg-white hover:text-amber-600 text-zinc-900 rounded-full w-full sm:w-60 h-14 sm:h-15 text-base sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
    >
      Get a Free Quote
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>

    <Button
      size="lg"
      variant="outline"
      className="rounded-full text-black border-white/40 w-full sm:w-60 h-14 sm:h-15 text-base sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
    >
      <Play className="mr-2 w-5 h-5" />
      View Our Work
    </Button>
  </div>
</div>

    </section>
  );
}
