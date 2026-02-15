"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Music,
  Mic,
  Disc,
  Speaker,
  Zap,
  ArrowRight,
  Presentation,
} from "lucide-react";

import { createPageUrl } from "@/utils";
import Link from "next/link";

const services = [
  {
    icon: Speaker,
    title: "Sound System Rentals",
    description:
      "High-powered speakers, subwoofers, permanent speaker installation, and line arrays for indoor & outdoor events.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Disc,
    title: "DJ Equipment",
    description:
      "Pioneer DJ equipment, controllers, mixers, turntables, and complete DJ booths.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mic,
    title: "Mics & Accessories",
    description:
      "Wireless mics, instrument mics, conference mics, stands, cables, and DI boxes.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Event Lighting",
    description:
      "LED par lights, moving heads, LED Walls, lasers, and stage lighting solutions.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Projectors & Screens",
    description:
      "High-resolution projectors and screens for presentations, events, and entertainment.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Presentation,
    title: "Stage Renting",
    description:
      "Modular stages, risers, and platforms for concerts, conferences, and festivals.",
    color: "from-indigo-500 to-violet-500",
  },
  
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
            Premium Audio & Video Solutions
          </h2>

          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
            Everything you need to create an unforgettable event experience
          </p>

          <Link href={createPageUrl("services")}>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold rounded-full px-8"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              {/* Gradient Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`}
              />

              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
