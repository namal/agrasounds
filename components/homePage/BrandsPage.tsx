"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils";

import "swiper/css";

const brands = [
  { name: "EV", category: "Professional Audio", image: "img/brands/EV.png" },
  { name: "Shure", category: "Microphones", image: "img/brands/mic.jpeg" },
  {
    name: "Allen & Heath",
    category: "Mixing Consoles",
    image: "img/brands/3.jpeg",
  },
  { name: "Pioneer DJ", category: "DJ Equipment", image: "img/brands/4.jpeg" },
  { name: "Crown Audio", category: "Amplifiers", image: "img/brands/5.jpeg" },
  { name: "Yamaha", category: "Audio Equipment", image: "img/brands/6.jpg" },
  { name: "Behringer", category: "Sound Systems", image: "img/brands/7.jpeg" },
];

export default function BrandsPage() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Trusted Brands
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
            Industry-Leading Brands
          </h2>

          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
            We use premium global brands for powerful performance.
          </p>

          <Link href={createPageUrl("Renting")}>
            <Button className="bg-amber-500 hover:bg-amber-600 text-zinc-900 rounded-full px-8">
              View Rental Equipment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          slidesPerView={3} // ½ + 3 + ½
          spaceBetween={20}
          speed={5000} // 🔥 controls smoothness
          autoplay={{
            delay: 0, // 🔥 important
            disableOnInteraction: false,
          }}
          allowTouchMove={false} // optional (removes drag jerk)
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          className="brands-swiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <Badge className="mb-2 bg-cyan-500 text-white">
                      {brand.category}
                    </Badge>

                    <h3 className="text-xl font-bold text-white">
                      {brand.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔥 Make movement linear (VERY IMPORTANT) */}
      <style jsx global>{`
        .brands-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
