import React from 'react';
import banner from '../assets/images/banner.png';
import { Quote, Settings } from 'lucide-react';
import AboutUs from './AboutUs'
import HelpAndSupport from './HelpAndSupport';

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
                Deliver Beyond Borders
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-200 font-medium mb-4">
              Leading Exhibition & Logistics Partner Across India & 
              <span className="block">Globally</span>
            </p>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              From seamless event setups to comprehensive logistics solutions, we deliver 
              <span className="block">excellence at every step. Trust us to make your exhibitions unforgettable and</span>
              your deliveries dependable.
            </p>

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
    <HelpAndSupport/>
    </>
  );
}

export default Home;
