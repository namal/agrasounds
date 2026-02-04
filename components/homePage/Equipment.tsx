import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Link from 'next/link';

const equipment = [
  {
    name: 'JBL Professional Series',
    category: 'Speakers',
    image: 'https://images.unsplash.com/photo-1545135950-b20c5a23d677?w=600&q=80',
    features: ['High Power', 'Crystal Clear']
  },
  {
    name: 'Shure Wireless Systems',
    category: 'Microphones',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
    features: ['Wireless', 'Professional Grade']
  },
  {
    name: 'Allen & Heath Mixers',
    category: 'Mixing Consoles',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
    features: ['Multi-Channel', 'Digital Control']
  },
  {
    name: 'Pioneer DJ Setup',
    category: 'DJ Equipment',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80',
    features: ['Complete Setup', 'Pro Grade']
  },
  {
    name: 'Crown Amplifiers',
    category: 'Amplification',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80',
    features: ['High Power', 'Reliable']
  },
  {
    name: 'LED Video Walls',
    category: 'Visual Solutions',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80',
    features: ['HD Display', 'Scalable']
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Equipment
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
            Industry-Leading Brands
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
            We use only the best equipment from trusted manufacturers
          </p>
          <Link href={createPageUrl('Renting')}>
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-8">
              View Rental Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                  <Badge className="mb-2 bg-amber-500 text-zinc-900 hover:bg-amber-500">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}