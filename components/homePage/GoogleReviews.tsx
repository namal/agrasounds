
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Added this import
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Al Mansouri',
    role: 'Corporate Event Manager',
    rating: 5,
    review: 'Outstanding service! The audio quality was crystal clear throughout our conference. The team was professional and handled everything perfectly.',
    date: '2 weeks ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed'
  },
  {
    name: 'Sarah Thompson',
    role: 'Birthday Party Host',
    rating: 5,
    review: 'Made my daughter\'s birthday party absolutely magical! The sound system was amazing and the setup was seamless. Highly recommend!',
    date: '1 month ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    name: 'Mohammed Hassan',
    role: 'Yacht Party Organizer',
    rating: 5,
    review: 'Best equipment rental in Dubai! Used them for multiple yacht parties and they never disappoint. Professional team and top-quality gear.',
    date: '3 weeks ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed'
  },
  {
    name: 'Jennifer Lee',
    role: 'Wedding Coordinator',
    rating: 5,
    review: 'Incredible experience from start to finish. The DJ equipment was state-of-the-art and the technical support was excellent. Will definitely use again!',
    date: '2 months ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer'
  },
  {
    name: 'Khalid Ibrahim',
    role: 'VIP Event Planner',
    rating: 5,
    review: 'Elite Events Dubai exceeded all expectations. Premium equipment, professional service, and unmatched reliability. Perfect for high-end events.',
    date: '1 week ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khalid'
  },
  {
    name: 'Lisa Anderson',
    role: 'Office Party Organizer',
    rating: 5,
    review: 'Made our company event a huge success! The team was punctual, equipment was flawless, and the sound quality was outstanding. Highly professional!',
    date: '3 weeks ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
  }
];

const StarRating = ({ rating = 0 }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

export default function GoogleReviews() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Reviews
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
            Trusted by hundreds of satisfied clients across Dubai
          </p>
          
          {/* Google Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 rounded-2xl border border-blue-100">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google"
              className="h-6"
            />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-zinc-900">{averageRating.toFixed(1)}</span>
              <div>
                <StarRating rating={Math.round(averageRating)} />
                <p className="text-sm text-zinc-600 mt-1">{reviews.length} reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-amber-500" />
              </div>
              <div className="p-6 relative">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full bg-zinc-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-zinc-900">{review.name}</h4>
                    <p className="text-sm text-zinc-500">{review.role}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-zinc-700 mt-4 leading-relaxed">{review.review}</p>
                <p className="text-sm text-zinc-400 mt-4">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-600 mb-4">Want to leave your review?</p>
          <Button 
            variant="outline"
            className="gap-2 hover:bg-blue-50"
          >
            <Star className="w-4 h-4" />
            Write a Review on Google
          </Button>
        </div>
      </div>
    </section>
  );
}
