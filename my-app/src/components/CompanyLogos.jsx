import { useEffect, useRef, useState } from 'react';
import React from 'react';
export default function CompanyLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  // Companies data
  const companies = [
    { name: 'Zapier', logoWidth: 'w-24' },
    { name: 'Spotify', logoWidth: 'w-24' },
    { name: 'Zoom', logoWidth: 'w-24' },
    { name: 'Amazon', logoWidth: 'w-28' },
    { name: 'Adobe', logoWidth: 'w-24' },
    { name: 'Notion', logoWidth: 'w-24' },
    { name: 'Netflix', logoWidth: 'w-28' }
  ];

  useEffect(() => {
    // Animation when component mounts
    setIsVisible(true);
    
    // Intersection Observer for scroll-based animation
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
        {/* Infinite logo carousel */}
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
                {/* You would replace the placeholder image with actual company logos */}
                <div className="relative group">
                  <div className="overflow-hidden">
                    {/* Replace with actual company logos */}
                    <img 
                      src="/api/placeholder/200/80" 
                      alt={`${company.name} logo`}
                      className="w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                  <span className="block text-center text-sm text-gray-600 font-medium mt-2">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}