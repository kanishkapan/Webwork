import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import React from 'react';
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className=" mt-24 w-full bg-white py-16 md:py-24 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content - Main Heading */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              <span className="block">Global UI UX design</span>
              <span className="block">agency digital partner</span>
              <span className="block">for <span className="text-blue-600">Future Unicorns</span></span>
            </h1>
            
            {/* Call to Action Button */}
            <div className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="flex items-center">
                <a href="#book-call" className="relative group flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg" 
                      alt="Founder" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-medium text-lg">Book a free call</span>
                </a>
                
                {/* Clutch Review */}
                <div className="ml-4 flex flex-col items-start">
                  <div className="text-gray-600 text-sm">REVIEWED ON</div>
                  <div className="flex items-center">
                    <div className="font-bold text-gray-700 mr-2">Clutch</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FF5733" color="#FF5733" />
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">5 REVIEWS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Description and Testimonial */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                Bold posters. Stunning flyers. Stronger brands.
                We design visuals that make your message unforgettable.
              </p>
              
              {/* Testimonial Section */}
              <div className="flex items-center mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((index) => (
                    <div 
                      key={index} 
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img 
                        src={`https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg`} 
                        alt={`Client ${index}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">Loved by 500+</p>
                  <p className="text-gray-600">Founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}