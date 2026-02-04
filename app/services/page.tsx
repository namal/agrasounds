import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import {
  Music,
  Wrench,
  ArrowRight,
  Speaker,
  Hammer,
  Sparkles,
  Home,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SciFiTunnel from "@/components/SciFiTunnel";

export default function Services() {
  const services = [
    {
      title: "Equipment Rental",
      description:
        "Premium audio and video equipment for all types of events. From speakers to DJ consoles, we have everything you need.",
      icon: Speaker,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      link: createPageUrl("Renting"),
      features: [
        "Professional Speakers",
        "DJ Equipment",
        "Microphones & Mixers",
        "Amplifiers",
        "LED Screens",
      ],
    },
    {
      title: "Sound Repair Services",
      description:
        "Expert repair and maintenance services for all audio equipment. Fast turnaround and quality guaranteed.",
      icon: Wrench,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      link: createPageUrl("Repairing"),
      features: [
        "Speaker Repair",
        "Mixer Servicing",
        "Amplifier Repair",
        "DJ Equipment",
        "Quick Turnaround",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-600 to-white ">
      <div>
        <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          {/* <Image
            src="/img/services-hero.jpg" // change to your image path
            alt="Our Services"
            fill
            priority
            className="object-cover"
          /> */}
          {/* Optional dark overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <SciFiTunnel />
        </section>
      </div>
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-500/10" />
        <div className="max-w-7xl mx-auto relative">
          <Link
            href={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-zinc-200 hover:text-amber-600 mb-8 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-amber-500" />
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900">
              Our Services
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl">
            Comprehensive audio and video solutions for every need - from
            premium equipment rentals to professional repair services
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-all duration-500 group"
              >
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700`}
                />

                <div className="relative p-8 md:p-12">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8 space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        <span className="text-zinc-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.link}>
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-amber-50 mb-8">
              Our team is ready to assist you with the perfect solution for your
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-zinc-100 font-semibold px-8"
                >
                  Contact Us
                </Button>
              </a>
              <a
                href="https://wa.me/971528211284"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
