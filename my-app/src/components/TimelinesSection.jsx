import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
export default function TimelinesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const timelineItems = [
    {
      id: '01',
      title: 'Onboard in <1 day',
    },
    {
      id: '02',
      title: 'Understand Scope & Strategy',
    },
    {
      id: '03',
      title: 'First designs in 4-5 days',
    }
  ];

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* First heading section */}
        <div 
          className={`mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            We deliver on time, in days and weeks
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400">—not months.</p>
        </div>
        
        {/* Timeline and testimonial section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline items */}
          <div className="w-full lg:w-7/12">
            <div className="bg-gray-900 rounded-sm p-2">
              {timelineItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex items-center justify-between p-4 border-b border-gray-800 last:border-0 transition-all duration-300 ${activeItem === index ? 'bg-gray-800' : ''} hover:bg-gray-800 cursor-pointer`}
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">{item.id}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className={`transition-all duration-300 ${activeItem === index ? 'opacity-100' : 'opacity-0'}`} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial and CTA */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            {/* Testimonial */}
            <div 
              className={`mb-8 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <blockquote className="text-sm text-gray-300 mb-4">
                "DesignSpace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended."
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700">
                  <img src="/api/placeholder/40/40" alt="Mari Kalba" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">/ Mari Kalba</p>
                  <p className="text-xs text-gray-400">CEO at House & Garden</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div 
              className={`transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-yellow-300 text-black font-medium px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Book a call
                <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Second heading section */}
        <div 
          className={`mt-20 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            From startup to enterprise, <span className="text-gray-400">grow your business</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400">with fast and creative designs!</p>
        </div>
      </div>
    </div>
  );
}