import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Clock, Shield, HeadphonesIcon, Wrench, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Professional Service',
    description: 'Dubai-based event service provider with proven track record'
  },
  {
    icon: HeadphonesIcon,
    title: 'Fully Equipped',
    description: 'Complete sound, lighting, and DJ setups for any event'
  },
  {
    icon: Wrench,
    title: 'Expert Technicians',
    description: 'Experienced and trained technicians for smooth execution'
  },
  {
    icon: CheckCircle,
    title: 'Quality Equipment',
    description: 'High-quality and well-maintained equipment from top brands'
  },
  {
    icon: Shield,
    title: 'Customized Packages',
    description: 'Tailored solutions for any budget and requirement'
  },
  {
    icon: Clock,
    title: 'Reliable Support',
    description: 'On-time delivery, installation, and technical support'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-zinc-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Excellence in Every Detail
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {"We're"} committed to making your event a resounding success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-700 transition-all duration-300 group hover:scale-105"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-zinc-400">{reason.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center hover:shadow-2xl transition-all duration-300">
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Ready to Elevate Your Event?
          </h3>
          <p className="text-xl text-zinc-800 mb-6">
            Join hundreds of satisfied clients across Dubai
          </p>
          <div className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 border-2 border-zinc-900" />
              ))}
            </div>
            <span className="ml-2 font-medium">500+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}