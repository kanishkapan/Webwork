import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Matt Kabus',
    role: 'CEO & Founder @LifeTales',
    image: './src/assets/6795bfcf60dbd390d6edee04_1ef034f4c36b38ceee42be8e99eee2b8_review image (1)-p-500.jpg',
    text: '“DesignSpace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”',
  },
  {
    id: 2,
    name: 'Matt Kabus',
    role: 'CEO & Founder @LifeTales',
    image: './src/assets/67877f9495e27059b10a6422_96f7f37762eb6a222ca8aafae632defd_review image-1-p-500.jpg',
    text: '“DesignSpace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”',
  },
  {
    id: 3,
    name: 'Matt Kabus',
    role: 'CEO & Founder @LifeTales',
    image: './src/assets/67877f9495e27059b10a6430_b60b4273447225993e1fe6f4b9fb8c20_review image-p-500.jpg',
    text: '“DesignSpace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”',
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 }
  }
};

export default function TestimonialCards() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Image container uses aspect-square to maintain 1:1 ratio */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">/ {t.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t.role}</p>
                </div>
                <p className="mt-4 text-gray-700 flex-1">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}