import { useState, useEffect } from 'react';
import React from 'react';
export default function FounderHeadline() {
  const [animationVisible, setAnimationVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation when component mounts
    setAnimationVisible(true);
    
    // For demo purposes, reset animation every 5 seconds
    const intervalId = setInterval(() => {
      setAnimationVisible(false);
      setTimeout(() => setAnimationVisible(true), 100);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="w-full flex flex-col items-center py-10 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className={`transform transition-all duration-1000 ${animationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1">
            <span className="inline-block relative">
              <span className="inline-block transform transition-all duration-700 delay-100 
                              hover:scale-105 hover:text-blue-600">
                500+
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all duration-700 
                              group-hover:w-full"></span>
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-200
                           hover:scale-105 hover:text-blue-600">
              Founders
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-300
                           hover:scale-105 hover:text-blue-600">
              trusted
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-400
                           hover:scale-105 hover:text-blue-600">
              us.
            </span>
          </h1>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 transform transition-all duration-1000 delay-500 ${animationVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <span className="inline-block transform transition-all duration-700 delay-600
                           hover:scale-105 hover:text-gray-500">
              Get
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-700
                           hover:scale-105 hover:text-gray-500">
              return
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-800
                           hover:scale-105 hover:text-gray-500">
              on
            </span>
          </h2>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 transform transition-all duration-1000 delay-700 ${animationVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <span className="inline-block transform transition-all duration-700 delay-900
                           hover:scale-105 hover:text-gray-500">
              your
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-1000
                           hover:scale-105 hover:text-gray-500">
              investment,
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-1100
                           hover:scale-105 hover:text-gray-500">
              multiplied!
            </span>
          </h2>
        </div>
        
        {/* Animated underline effect */}
        <div className={`h-1 bg-blue-600 w-0 transition-all duration-1500 ease-out ${animationVisible ? 'w-32 md:w-48 lg:w-64' : 'w-0'}`}></div>
      </div>
    </div>
  );
}