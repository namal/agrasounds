import React from 'react';
import { Card } from '@/components/ui/card';

const clients = [
  "Queen Elizabeth 2 (QE2)",
  "HyperSpace",
  "Dubai Festival City Mall",
  "Royal Canin",
  "SOBHA",
  "MIRFA (IBC)",
  "Longevity Hub",
  "Apparel Group UAE"
];

export default function Clients() {
  return (
    <section className="py-16 px-6 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8">Trusted by Prestigious Brands</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white px-6 py-4 rounded-xl shadow-sm border border-zinc-100 font-semibold text-zinc-600 hover:text-amber-600 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}