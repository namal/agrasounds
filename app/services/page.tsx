"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Wrench, ArrowRight, Speaker, } from "lucide-react";
import RentingPage from "./renting/page";
import RepairingPage from "./repairing/page";

export default function Services() {
  const [openForm, setOpenForm] = useState<"rent" | "repair" | null>(null);

  const services = [
    {
      title: "Equipment Rental",
      description:
        "Premium audio and video equipment for all types of events. From speakers to DJ consoles, we have everything you need.",
      icon: Speaker,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Professional Speakers",
        "DJ Equipment",
        "Microphones & Mixers",
        "Amplifiers",
        "LED Screens",
      ],
      type: "rent",
    },
    {
      title: "Sound Repair Services",
      description:
        "Expert repair and maintenance services for all audio equipment. Fast turnaround and quality guaranteed.",
      icon: Wrench,
      color: "from-amber-500 to-orange-500",
      features: [
        "Speaker Repair",
        "Mixer Servicing",
        "Amplifier Repair",
        "DJ Equipment",
        "Quick Turnaround",
      ],
      type: "repair",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-600 to-white">
      {/* HERO */}
      <section className="relative  min-h-210 flex items-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/services-hero.png')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-white">
          {/* <Link
            href={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-zinc-200 hover:text-amber-400 mb-8"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link> */}

          <div className="flex sm:items-center justify-center sm:justify-start gap-3 mb-6 ">
            <h1 className="text-5xl md:text-7xl font-bold">Our Services</h1>
          </div>

          <p className="text-xl md:text-2xl text-zinc-200 max-w-3xl text-center sm:text-start">
            Premium equipment rentals and professional sound repair services
            <span className="block">all under one roof.</span>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-all group"
            >
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${service.color} opacity-10 group-hover:scale-150 transition-transform`}
              />

              <div className="relative p-8 md:p-12">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>

                <p className="text-lg text-zinc-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={() => setOpenForm(service.type as any)}
                  className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90`}
                >
                  Request
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* RENT FORM */}
      <Dialog open={openForm === "rent"} onOpenChange={() => setOpenForm(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Equipment Rental Request</DialogTitle>
          </DialogHeader>
          <RentingPage />
        </DialogContent>
      </Dialog>

      {/* REPAIR FORM */}
      <Dialog
        open={openForm === "repair"}
        onOpenChange={() => setOpenForm(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Sound Repair Request</DialogTitle>
          </DialogHeader>
          <RepairingPage />
        </DialogContent>
      </Dialog>
    </div>
  );
}
