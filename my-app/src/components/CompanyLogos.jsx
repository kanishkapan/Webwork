import { useEffect, useRef, useState } from 'react';
import React from 'react';

export default function CompanyLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Companies data with logo URLs
  const companies = [
    { name: 'Zapier', logoWidth: 'w-42', logoUrl: './src/assets/Card.png' },
    { name: 'Spotify', logoWidth: 'w-42', logoUrl: './src/assets/Card (1).png' },
    { name: 'Zoom', logoWidth: 'w-42', logoUrl: './src/assets/Card (2).png' },
    { name: 'Amazon', logoWidth: 'w-42', logoUrl: './src/assets/Card (3).png' }, 
    { name: 'Adobe', logoWidth: 'w-42', logoUrl: './src/assets/Card (4).png' },
    { name: 'Notion', logoWidth: 'w-42', logoUrl: './src/assets/Card (5).png' },
    { name: 'Netflix', logoWidth: 'w-42', logoUrl: './src/assets/Card (6).png' }
  ];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full bg-gray-50 py-10 px-4 overflow-hidden border-t border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div 
            className={`flex items-center justify-around space-x-8 md:space-x-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            {companies.map((company, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center ${company.logoWidth} transition-transform duration-500 hover:scale-110`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '0.7s'
                }}
              >
                <div className="relative group">
                  <div className="overflow-hidden">
                    <img 
                      src={company.logoUrl} 
                      alt={`${company.name} logo`}
                      className="w-full object-contain opacity-100 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
