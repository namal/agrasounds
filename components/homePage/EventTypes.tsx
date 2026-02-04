import React from 'react';
import { Card } from '@/components/ui/card';
import { Cake, Ship, Users, Crown, Briefcase, ShoppingBag, Music, Building, Tent } from 'lucide-react';

const eventTypes = [
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Make every birthday celebration memorable with premium sound',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Ship,
    title: 'Yacht Parties',
    description: 'Luxury audio setups perfect for Dubai\'s premium yacht events',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Professional AV solutions for conferences and seminars',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Crown,
    title: 'VIP & Fashion Shows',
    description: 'Exclusive equipment for high-profile gatherings',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Briefcase,
    title: 'Office Parties',
    description: 'Complete setups for team celebrations',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ShoppingBag,
    title: 'Product Launches',
    description: 'Impactful audio for new product reveals',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Building,
    title: 'Mall Activations',
    description: 'Engaging sound systems for mall events',
    image: 'https://images.unsplash.com/photo-1519567752329-3719d6533c27?w=800&q=80',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Tent,
    title: 'Outdoor Festivals',
    description: 'Powerful line arrays for large outdoor events',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    icon: Music,
    title: 'Live Performances',
    description: 'Concert-grade equipment for live entertainment',
    image: 'https://images.unsplash.com/photo-1501612766622-27c843537876?w=800&q=80',
    color: 'from-fuchsia-500 to-pink-500'
  }
];

export default function EventTypes() {
  return (
    <section id="events" className="py-24 px-6 bg-zinc-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Event Types
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-4">
            We Cater to Every Occasion
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            From intimate gatherings to large corporate functions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                  <event.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative p-6 bg-white">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-zinc-600">{event.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}