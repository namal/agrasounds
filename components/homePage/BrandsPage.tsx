"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const brands = [
  {
    name: "Electro-Voice (EV)",
    category: "Professional Audio",
    image: "/img/EV.png",
  },
  {
    name: "Shure",
    category: "Microphones",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80",
  },
  {
    name: "Allen & Heath",
    category: "Mixing Consoles",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
  },
  {
    name: "Pioneer DJ",
    category: "DJ Equipment",
    image:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80",
  },
  {
    name: "Crown Audio",
    category: "Amplifiers",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80",
  },
];

export default function BrandsPage() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

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

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={3.5}   // 👈 This makes 3 and half visible
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
    </section>
  );
}
