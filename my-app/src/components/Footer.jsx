import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import React from 'react';
export default function Footer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isHovered, setIsHovered] = useState({
    scheduleButton: false,
    sendButton: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white">
      {/* Left Side - Text content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Let's start a project together.
        </h1>
        
        <div className="mb-10">
          <p className="text-sm mb-4 opacity-80">
            "Highly happy with a design delivered by DeskSpace. Definitely will
            keep working with Wavespace. Great quality and smooth
            communication."
          </p>
          
          <div className="flex items-center mt-4">
            <div className="h-12 w-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
              {/* Person image placeholder */}
              <div className='w-full h-full'>

              
              <img src="https://cdn.pixabay.com/photo/2016/11/18/16/17/man-1835599_1280.jpg"  alt="" />
              </div>
            </div>
            <div>
              <p className="font-semibold">Nikita Ribakov</p>
              <p className="text-xs opacity-70">Founder & CEO @Journaled</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Book a free schedule strategy call.
          </h2>
          
          <button 
            className="flex items-center justify-center bg-yellow-300 text-black px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400 font-medium"
            onMouseEnter={() => setIsHovered(prev => ({...prev, scheduleButton: true}))}
            onMouseLeave={() => setIsHovered(prev => ({...prev, scheduleButton: false}))}
          >
            <span>Schedule 20 minute call</span>
            <Phone 
              className={`ml-2 transition-transform duration-300 ${isHovered.scheduleButton ? 'rotate-12' : ''}`} 
              size={20} 
            />
          </button>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="bg-neutral-800 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-neutral-800 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <select
              name="service"
              className="w-full bg-neutral-800 rounded-md px-4 py-3 appearance-none focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled selected>Select service</option>
              <option value="design">Web Design</option>
              <option value="development">Development</option>
              <option value="branding">Branding</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          
          <div className="mb-4">
            <select
              name="budget"
              className="w-full bg-neutral-800 rounded-md px-4 py-3 appearance-none focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              value={formData.budget}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled selected>Budget range</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
          </div>
          
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full bg-neutral-800 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-md">
              <div className="flex items-center">
                <div className="w-5 h-5 border border-gray-400 mr-2 flex items-center justify-center">
                  {/* Checkbox placeholder */}
                </div>
                <span className="text-sm text-gray-300">I'm not a robot</span>
              </div>
              <div className="ml-auto">
                <div className="h-8 w-16 bg-gray-700 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Hate contact forms?</p>
              <a href="mailto:hello@wavespace.agency" className="text-sm hover:underline transition duration-300">
                hello@wavespace.agency
              </a>
            </div>
            
            <button 
              type="submit" 
              className="bg-white text-black px-6 py-3 rounded-full flex items-center font-medium transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(prev => ({...prev, sendButton: true}))}
              onMouseLeave={() => setIsHovered(prev => ({...prev, sendButton: false}))}
            >
              <span>Send Message</span>
              <ArrowRight 
                className={`ml-2 transition-transform duration-300 ${isHovered.sendButton ? 'translate-x-1' : ''}`} 
                size={20} 
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}