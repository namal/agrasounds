"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface HeroProps {
  scrollY: number
  onGetQuote: () => void
}

export default function Hero({ scrollY, onGetQuote }: HeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const videos = [
    "https://videos.pexels.com/video-files/3196427/3196427-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/4124198/4124198-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/7722221/7722221-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/6558963/6558963-hd_1920_1080_25fps.mp4",
  ]

  // Fade opacity for text & buttons (based on scroll)
  // const fadeOpacity = Math.max(0, 1 - scrollY / 20) // adjust 200 for faster/slower fade

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
        setIsTransitioning(false)
      }, 500)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

// -----------------------------------------------------------------------------
// Hero section rotating text 

  const textList = [
  <>Bring unique insights into the needs of <span className="text-white">{"today's"}</span> event</>,
  <>With <span className="text-white">AGRA</span> Sounds, your event supercharged</>,
  <>
    Renting High-end AV Equipment in{" "}
    <span className="text-white">Dubai</span>
  </>,
    
  ]

  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textList.length)
    }, 2500)

    return () => clearInterval(textTimer)
  }, [ textList.length ])


  // ---------------------------------------------------------


  // const textPara = [
  //   // "AGRA Sounds offers professional audiovisual consulting services to make your events a complete success.",
  //   // "",
  //   // "Elevate your upcoming big or small event to new heights with out audio & sound setups for rent"
  // ]

  // const [ParaIndex, setParaIndex] = useState(0)

  // useEffect(() => {
  //   const textTimer = setInterval(() => {
  //     setParaIndex((prev) => (prev + 1) % textPara.length)
  //   }, 2000)

  //   return () => clearInterval(textTimer)
  // }, [ textPara.length ])


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-50 sm:pt-60 md:pt-10">
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
      {/* Hero Content (Text + Buttons) */}
      <div
        className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-white transition-opacity duration-300 mt-12  md:mt-12"
        // style={{ opacity: fadeOpacity }}
      >
        <div>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-12 sm:mb-6">
            
            <span
              key={textIndex}
              className="block text-amber-400 transition-all duration-500"
            >
              {textList[textIndex]}
            </span>
          </h1>

          {/* Subtext */}
          {/* <p key={ParaIndex} className="text-base sm:text-lg md:text-xl text-zinc-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            {textPara[ParaIndex]}
          </p> */}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-4 mb-20 max-w-3xl mx-auto">
          {[
            { number: "500+", label: "Events Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
