import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqItems = [
    {
      question: 'What Services do you Offer ?',
      answer: 'We offer web design, branding, mobile app design, and digital marketing services tailored to your business needs.'
    },
    {
      question: 'How Long it take You to complete a project and dilever it ?',
      answer: 'Project timelines vary by scope. Small projects: 2-4 weeks, medium: 4-8 weeks, large: 8+ weeks. We provide specific timelines during consultation.'
    },
    {
      question: 'My website isnt generating enough leads. How can your design help?',
      answer : 'We improve conversion rates through user experience optimization, better navigation, mobile responsiveness, and strategic call-to-actions.'
    },
    {
      question: 'What separates DesignSpoce from other top design agencies?',
      answer: 'Our strategic approach, dedicated specialists, transparent communication, and focus on designs that drive measurable business growth.'
    },
    {
      question: 'How could you help us redesign our poster for Brand Promotions ?',
      answer: 'We analyze your brand identity and goals to create visually compelling posters that capture attention and effectively communicate your message.'
    },
    {
      question: 'Do you work with startups or only with B2B/enterprise companies?',
      answer: 'We work with both startups and established enterprises, offering scalable solutions for startups and comprehensive services for larger businesses.'
    },
    {
      question: 'How to contact DesignSpace Team ?',
      answer: 'Reach us via our website form, email at hello@designspace.com, or call (555) 123-4567. We respond within 24 business hours.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <div className="mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Frequently Ask Questions</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 mt-1">FAQ's</h2>
      </div>
      
      <div className="space-y-px">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="group"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fadeIn 0.6s ease-out forwards'
            }}
          >
            <div 
              className={`cursor-pointer py-6 border-b border-gray-200 hover:border-gray-300 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'border-gray-400' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center group">
                <span className={`text-lg sm:text-xl font-medium transition-all duration-300 ${
                  openIndex === index ? 'text-black font-semibold' : 'text-gray-800 group-hover:text-black'
                }`}>
                  {item.question}
                </span>
                <ArrowUpRight 
                  size={24} 
                  className={`transition-all duration-300 transform ${
                    openIndex === index 
                      ? 'rotate-45 text-black' 
                      : 'text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 group-hover:-translate-y-1'
                  }`}
                />
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'mt-4 max-h-40' : 'max-h-0'
                }`}
                style={{ 
                  opacity: openIndex === index ? 1 : 0,
                  transform: openIndex === index ? 'translateY(0)' : 'translateY(-8px)',
                  transition: 'max-height 0.3s ease-in-out, opacity 0.2s ease-in-out, transform 0.3s ease-in-out'
                }}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}