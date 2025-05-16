import { useState, useEffect } from 'react';
import React from 'react';
export default function CaseStudy() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div 
        className={`flex flex-col md:flex-row transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left side - Empty space on small screens, visible on medium+ */}
        <div className="hidden md:block md:w-1/3"></div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-2/3">
          {/* Image area */}
          <div className="w-full aspect-[4/3] bg-gray-200 mb-6">
              <img 
                src="/api/placeholder/800/600" 
                alt="Sports federation UI design" 
                className="w-full h-full object-cover"
              />
            </div>
          
          {/* Content area with title and testimonial */}
          <div className="flex flex-col lg:flex-row">
            {/* Title section */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Designing Whole Experience from scratch to product for Latvia based sports federation</h2>
              <div className="flex items-center text-gray-600 text-sm">
                <span>Startup:</span>
                <span className="font-medium ml-1">/kodezi</span>
              </div>
            </div>
            
            {/* Testimonial section */}
            <div className="w-full lg:w-1/2">
              <blockquote className="text-sm text-gray-700 mb-4">
                "DesignSpace exceeded all expectations and demonstrated exceptional creativity and professionalism. Designs are visually appealing and he is very attentive to feedback consistently delivering updates promptly and with thoughtful iterations."
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-400">
                  <img src="/api/placeholder/40/40" alt="Alexandros Ally" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">/ Alexandros Ally</p>
                  <p className="text-xs text-gray-600">Product Manager, MedicalDental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}