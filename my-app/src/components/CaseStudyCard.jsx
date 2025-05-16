import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import React from 'react';
export default function CaseStudyCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-4">
        {/* Left Card */}
        <div 
          className={`w-full md:w-1/2 bg-gray-200 rounded-none shadow-md transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image area - exactly 50% of the card height */}
          <div className="relative w-full h-64 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1563050860-87d45eaaeabb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Kodezi product interface" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content area */}
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-900">Behind UI- How We Rebuild Kodezi's Product Experience</h2>
            <div className="flex items-center mt-1 text-gray-600 text-sm">
              <span>Startup:</span>
              <span className="font-medium ml-1">/kodezi</span>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <blockquote className="text-sm text-gray-700">
                "We had the pleasure of working with DesignSpace for our prototype and he has been exceptional from start to finish. His creativity brought our ideas to life in ways we hadn't even imagined."
              </blockquote>
              
              <div className="flex items-center mt-4 space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-400">
                  <img src="https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Michael Amar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">/ Michael Amar</p>
                  <p className="text-xs text-gray-600">Uri AI Travel Marketing | UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Card */}
        <div 
          className={`w-full md:w-1/2 bg-gray-200 rounded-none shadow-md transition-all duration-500 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* Image area - takes up nearly the full card height */}
          <div className="relative w-full h-96 md:h-[28rem] bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Kodezi product showcase" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content area - much smaller than left card */}
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-900">Behind UI- How We Rebuild Kodezi's Product Experience</h2>
            <div className="flex items-center mt-1 text-gray-600 text-sm">
              <span>Startup:</span>
              <span className="font-medium ml-1">/kodezi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}