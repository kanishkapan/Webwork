import { useState, useEffect } from 'react';
import React from 'react';

export default function ImpactfulCTA() {
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    setAnimationVisible(true);
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
            <span className="inline-block transform transition-all duration-700 delay-100 hover:scale-105 hover:text-blue-600">
              Turn
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-200 hover:scale-105 hover:text-blue-600">
              your
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-300 hover:scale-105 hover:text-blue-600">
              ideas
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-400 hover:scale-105 hover:text-blue-600">
              into
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-500 hover:scale-105 hover:text-blue-600">
              impactful
            </span>
          </h1>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 transform transition-all duration-1000 delay-500 ${animationVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <span className="inline-block transform transition-all duration-700 delay-600 hover:scale-105 hover:text-gray-500">
              solutions
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-700 hover:scale-105 hover:text-gray-500">
              like
            </span>{" "}
            <span className="inline-block transform transition-all duration-700 delay-800 hover:scale-105 hover:text-gray-500">
              them!
            </span>
          </h2>
        </div>

        <div className={`h-1 bg-blue-600 w-0 transition-all duration-1500 ease-out ${animationVisible ? 'w-32 md:w-48 lg:w-64' : 'w-0'}`}></div>
      </div>
    </div>
  );
}
