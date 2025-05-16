import { useState, useEffect } from 'react';
import React from 'react';

export default function BrandIdentityBannerred
() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const brandServices = [
  'Flyer Design',
  'Promotional Flyers',
  'Event Flyers',
  'Product Launch Flyers',
  'Corporate Flyers',
  'Real Estate Flyers',
  'Restaurant Menu Flyers'
];

  return (
    <div className="w-full bg-orange-500 text-black m-0 p-0">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
           Flyers
          </h1>
          
          <p 
            className={`mb-8 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Stand out with expertly crafted flyers that deliver your message effectively. From promotions to events, we design high-impact flyers that enhance your brand’s visibility, credibility, and customer connection — both online and offline.
          </p>
          
          <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {brandServices.map((service, index) => (
              <div 
                key={service}
                className={`mb-1 transition-all duration-300 delay-${index * 50} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - keep as-is */}
        {/* ... no changes to this section ... */}
        {/* Right Content rendering preserved from your original code */}
         <div 
          className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Color Palette */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-center mb-2">
                <div className="text-orange-500 font-bold">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>
                </div>
              </div>
              
              {/* Color Swatches */}
              <div className="grid grid-cols-5 gap-1">
                {['bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400', 'bg-orange-500'].map((color) => (
                  <div key={color} className={`${color} h-6 rounded-sm`}></div>
                ))}
                {['bg-red-800', 'bg-red-900', 'bg-yellow-800', 'bg-yellow-900', 'bg-gray-900'].map((color) => (
                  <div key={color} className={`${color} h-6 rounded-sm mt-1`}></div>
                ))}
              </div>
            </div>
            
            {/* Website Mockup */}
            <div className="bg-white p-2 rounded-md shadow-md">
              <div className="bg-gray-100 h-full rounded-sm flex items-center justify-center">
                <div className="w-full h-full bg-white rounded p-1 flex flex-col">
                  <div className="bg-gray-200 h-2 w-full rounded-sm mb-1"></div>
                  <div className="flex-grow grid grid-cols-3 gap-1">
                    <div className="bg-gray-100 rounded-sm"></div>
                    <div className="bg-gray-100 rounded-sm"></div>
                    <div className="bg-gray-100 rounded-sm"></div>
                    <div className="bg-gray-100 rounded-sm"></div>
                    <div className="bg-gray-100 rounded-sm"></div>
                    <div className="bg-gray-100 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logo Variants */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-black rounded-md flex items-center justify-center">
                  <div className="text-white">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12" y2="16"></line>
                    </svg>
                  </div>
                </div>
                <div className="bg-yellow-400 rounded-md flex items-center justify-center">
                  <div className="text-black">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12" y2="16"></line>
                    </svg>
                  </div>
                </div>
                <div className="bg-blue-600 rounded-md flex items-center justify-center">
                  <div className="text-white">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12" y2="16"></line>
                    </svg>
                  </div>
                </div>
                <div className="bg-orange-500 rounded-md flex items-center justify-center">
                  <div className="text-white">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12" y2="16"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile App Mockup */}
            <div className="bg-white p-2 rounded-md shadow-md flex items-center justify-center relative">
              <div className="w-2/3 h-full bg-gray-900 rounded-xl overflow-hidden flex flex-col relative">
                <div className="h-4 w-1/3 bg-black absolute top-0 left-1/3 rounded-b-lg"></div>
                <div className="bg-white h-full w-full mt-5 p-1">
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-2"></div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-gray-100 h-10 rounded"></div>
                    <div className="bg-gray-100 h-10 rounded"></div>
                    <div className="bg-gray-100 h-10 rounded"></div>
                    <div className="bg-gray-100 h-10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand Logo and App Icon */}
            <div className="bg-white p-4 rounded-md shadow-md col-span-2 flex items-center">
              <div className="flex-1 flex items-center">
                <div className="text-orange-500 font-bold text-2xl">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>
                </div>
                <span className="ml-2 text-orange-500 font-bold">oppa tools</span>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-2 max-w-xs ml-auto">
                  <div className="bg-orange-400 text-white p-2 rounded-lg text-xs text-center">
                    New Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
