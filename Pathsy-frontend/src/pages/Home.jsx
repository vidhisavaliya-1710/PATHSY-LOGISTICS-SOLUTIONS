import React from 'react';
import banner from '../assets/images/banner.png';
import { Quote, Settings } from 'lucide-react';
import AboutUs from './AboutUs'
import Services from './Services';
import HelpAndSupport from './HelpAndSupport';
import Contact from './Contact';

function Home() {
  return (
    <>
    
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        />

        {/* Gradient Overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl  px-20 py-20">
          <div className="max-w-xl text-left">
            {/* Heading */}
            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight mb-6">
             We Bring Your Events to Life &
              <span className="text-orange-400 block mt-2">
                Deliver Without Limits
              </span>
            </h1>

            <p className="text-xl text-gray-200 font-medium mb-3">
              Your trusted partner for Exhibition & Logistics solutions across India and beyond. 
              {/* <span className="block">Globally</span> */}
            </p>
            {/* Subheading */}

            {/* Description */}
            <p className="text-md text-gray-300 mb-5 leading-relaxed">
             From planning to execution, we handle every move with care, speed, and precision.Making your exhibitions memorable and your deliveries unstoppable — that’s our promise.
            </p>


            <ul className="text-white text-md mb-6 space-y-3">
  <li className="flex items-start">
    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    Seamless setups
  </li>
  <li className="flex items-start">
    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    Smart logistics
  </li>
  <li className="flex items-start">
    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    Global reach, local touch
  </li>
</ul>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#004c99] hover:bg-white text-white hover:text-[#004c99] px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2"><Quote className='w-4'/></span>
                Get a Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2"><Settings className='w-4'/></span>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    
    <AboutUs/>
    <Services/>
    <HelpAndSupport/>
    <Contact/>
    </>
  );
}

export default Home;
