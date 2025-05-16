import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 0,
    type: 'rating',
    rating: 4.9,
    reviews: '200+ reviews',
    logos: ['Clutch', 'Upwork', 'Fiverr Pro'],
  },
  {
    id: 1,
    client: 'Israqh Khan',
    role: 'CEO',
    company: 'Kodezi',
    text: '“Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive”',
  },
  {
    id: 2,
    client: 'Nick Fisher',
    role: 'CEO',
    company: 'tournated',
    text: '“Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great and quality smooth communication.”',
  },
  {
    id: 3,
    client: 'Abraham Ajayi',
    role: 'CEO',
    company: 'ActiveSync',
    text: '“Wavespace brought my idea to life. Taken great care of my business & implement best user experience possible”',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Find your best design into us.
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 mb-8">
          We guarantee next success is yours!
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence exitBeforeEnter>
          {testimonials.map((item) =>
            item.id === current ? (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-lg rounded-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center"
              >
                {/* Rating Card */}
                {item.type === 'rating' ? (
                  <div className="col-span-1 text-center md:text-left">
                    <div className="text-5xl font-bold text-gray-800">
                      {item.rating}
                    </div>
                    <div className="flex justify-center md:justify-start mb-2">
                      {'★'.repeat(5)}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      {item.reviews}
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4">
                      {item.logos.map((logo) => (
                        <span key={logo} className="text-sm text-gray-400">{logo}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Testimonial Cards
                  <>
                    <div className="col-span-full md:col-span-3">
                      <div className="text-sm text-gray-500 uppercase mb-2">
                        {item.company}
                      </div>
                      <blockquote className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                        {item.text}
                      </blockquote>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          {/* Placeholder Avatar */}
                          <span className="text-gray-500 uppercase">{item.client.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">
                            {item.client}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-opacity duration-300 ${
                current === idx ? 'opacity-100 bg-gray-800' : 'opacity-50 bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
