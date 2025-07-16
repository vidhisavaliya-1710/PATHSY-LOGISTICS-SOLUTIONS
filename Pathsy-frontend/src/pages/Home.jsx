import React from 'react';
import banner from '../assets/images/banner.png';
import { Quote, Settings } from 'lucide-react';
import AboutUs from './AboutUs'
import Services from './Services';
import HelpAndSupport from './HelpAndSupport';
import Careers from './Carrers';
import Contact from './Contact';

function Home() {
  return (
    <>

      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${banner})` }}
  />

  {/* Gradient Overlay from left to right */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
    <div className="max-w-xl text-left">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
         We Bring Your Events to Life &
        <span className="text-orange-400 block mt-1 sm:mt-2">
          Deliver Without Limits
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-2 sm:mb-3">
        Your trusted partner for Exhibition & Logistics solutions across India and beyond.
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 leading-relaxed">
         From planning to execution, we handle every move with care, speed, and precision.
        Making your exhibitions memorable and your deliveries unstoppable that’s our promise.
      </p>

      {/* Feature List */}
      <ul className="text-white text-sm sm:text-base mb-6 space-y-3">
        {[
          'Seamless setups',
          'Smart logistics',
          'Global reach, local touch',
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#004c99] hover:bg-white text-white hover:text-[#004c99] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
          <span className="mr-2"><Quote className="w-4 h-4" /></span>
          Get a Quote
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
          <span className="mr-2"><Settings className="w-4 h-4" /></span>
          Our Services
        </button>
      </div>
    </div>
  </div>
</section>

    
    <AboutUs/>
    <Services/>
    <HelpAndSupport/>
    <Careers/>
      <Contact />
    </>
  );
}

export default Home;
