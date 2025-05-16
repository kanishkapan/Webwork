import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-cursive font-bold text-gray-800 italic">Design Space</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/case-studies" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">
                Case Studies
              </a>
              <a href="/pricing" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="/services" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="/about-us" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">
                About Us
              </a>
              <a href="/blog" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">
                Blog
              </a>
            </div>
          </div>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="/case-studies"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Case Studies
          </a>
          <a
            href="/pricing"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Pricing
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Services
          </a>
          <a
            href="/about-us"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium" 
          >
            About Us
          </a>
          <a
            href="/blog"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md bg-blue-600 text-white text-center mt-4 font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}