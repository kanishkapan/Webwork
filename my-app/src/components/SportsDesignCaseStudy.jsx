import { useState, useEffect } from 'react';
import React from 'react';
export default function SportsDesignCaseStudy() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <div 
        className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left section with image and title */}
          <div className="w-full md:w-7/12">
            {/* Image */}
            <div className="w-full aspect-[4/3] bg-gray-200 mb-6">
              <img 
                src="/api/placeholder/800/600" 
                alt="Sports federation UI design" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title and startup name */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Designing Whole Experience from scratch to product for Latvia based sports federation</h2>
              <div className="flex items-center text-gray-600 text-sm">
                <span>Startup:</span>
                <span className="font-medium ml-1">/kodezi</span>
              </div>
            </div>
          </div>
          
          {/* Right section - empty on top, testimonial on bottom */}
          <div className="w-full md:w-5/12 flex flex-col">
            {/* Empty space to align testimonial with the bottom */}
            <div className="flex-grow md:min-h-64"></div>
            
            {/* Testimonial */}
            <div className="mt-8 md:mt-0">
              <blockquote className="text-sm text-gray-700 mb-4 italic">
                "DesignSpace exceeded all expectations and demonstrated exceptional creativity and professionalism. Designs are visually appealing and he is very attentive to feedback consistently delivering updates promptly and with thoughtful iterations."
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-400">
                  <img src="/api/placeholder/40/40" alt="Alexandros Ally" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">/ Alexandros Ally</p>
                  <p className="text-xs text-gray-600">Product Manager, MedicalDentalAI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}