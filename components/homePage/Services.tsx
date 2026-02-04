import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Mic, Radio, Disc, Speaker, Zap, ArrowRight } from 'lucide-react';

import { createPageUrl } from '@/utils';
import Link from 'next/link';

const services = [
  {
    icon: Speaker,
    title: 'Sound System Rentals',
    description: 'High-powered speakers, subwoofers, and line arrays for indoor & outdoor events.',
    color: 'from-blue-500 to-cyan-500',
    span: 'md:col-span-2'
  },
  {
    icon: Disc,
    title: 'DJ Equipment',
    description: 'Pioneer DJ equipment, controllers, mixers, turntables, and complete DJ booths.',
    color: 'from-green-500 to-emerald-500',
    span: 'md:col-span-2'
  },
  {
    icon: Mic,
    title: 'Mics & Accessories',
    description: 'Wireless mics, instrument mics, stands, cables, and DI boxes.',
    color: 'from-purple-500 to-pink-500',
    span: 'md:col-span-1'
  },
  {
    icon: Zap,
    title: 'Event Lighting',
    description: 'LED par lights, moving heads, lasers, and stage lighting solutions.',
    color: 'from-amber-500 to-orange-500',
    span: 'md:col-span-1'
  },
  {
    icon: Music,
    title: 'Event Production',
    description: 'Full sound & lighting setup, trussing, and technical crew support.',
    color: 'from-indigo-500 to-violet-500',
    span: 'md:col-span-2'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
            Premium Audio & Video Solutions
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
            Everything you need to create an unforgettable sonic experience
          </p>
          <Link href={createPageUrl('services')}>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold rounded-full px-8">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`${service.span} group relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} 
              />
              <div className="relative p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}