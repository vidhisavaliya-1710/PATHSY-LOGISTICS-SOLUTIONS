import React from 'react';
import homeBanner from '../assets/images/homeBanner.png';
import { Quote, HandCoins } from 'lucide-react';
import { Truck, Package, Settings, Headphones, ArrowRight, ExternalLink } from 'lucide-react';
import Services from './Services';
import WhoWeAre from './WhoWeAre';
import Exhibition from '../assets/images/exhibition.png'
import { FaDraft2Digital } from 'react-icons/fa';

export default function LogisticsHero() {
  return (
        <>
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={homeBanner}
        alt="Home Banner"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full text-white">
          {/* Badge */}
          <div className="mb-5">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#26a69a] text-white shadow">
              Smart. Fast. Reliable.
            </span>
          </div>

          {/* Headings */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl">
            End-to-End Logistics,&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26a69a] to-[#fbc02d]">
              Supply Chain & Exhibition
            </span>
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2">
            Powered by Technology
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-100 max-w-3xl leading-relaxed">
            Your Global Partner in Logistics & Exhibitions. At Pathsy Logistics Solutions, we don’t just deliver shipments—we deliver efficiency, impact, and trust.
          </p>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-4 max-w-4xl">
            {[
              { title: 'AI', desc: 'Powered Operations' },
              { title: '24/7', desc: 'Global Support' },
              { title: '100%', desc: 'Transparency' },
              { title: 'Smart', desc: 'Technology' }
            ].map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-4 text-center rounded-lg max-w-[180px] min-w-[140px] flex-1"
              >
                <div className="text-[#fbc02d] text-xl font-bold">{title}</div>
                <div className="text-gray-100 text-sm">{desc}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-[#0052cc] text-white hover:bg-blue-700 transition">
              Request Quote <Quote className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0052cc] hover:bg-gray-100 transition">
              Our Services <HandCoins className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <WhoWeAre/>


     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#26a69a] text-white text-sm font-medium rounded-full">
              Exhibition Excellence
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premier Exhibition <span className="text-[#0052cc]">Management Services</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we handle every aspect of your exhibition presence 
            with precision, creativity, and professional excellence.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Services List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Complete Exhibition Solutions</h3>
            
            {/* Service Items */}
            <div className="space-y-6">
              {/* Stand Design & Build */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0052cc] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaDraft2Digital/>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Stand Design & Build</h4>
                  <p className="text-gray-600">
                    Custom exhibition stand design and construction that captures your brand essence and 
                    maximizes visitor engagement.
                  </p>
                </div>
              </div>

              {/* Logistics & Transportation */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Logistics & Transportation</h4>
                  <p className="text-gray-600">
                    Seamless transportation of exhibition materials, booth components, and merchandise to 
                    venues worldwide.
                  </p>
                </div>
              </div>

              {/* Setup & Installation */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#fbc02d] rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Setup & Installation</h4>
                  <p className="text-gray-600">
                    Professional on-site setup, installation, and dismantling services with experienced 
                    technical teams.
                  </p>
                </div>
              </div>

              {/* Event Support */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#f44336] rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Event Support</h4>
                  <p className="text-gray-600">
                    Dedicated on-site support throughout your event to ensure smooth operations and 
                    immediate issue resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* View Services Button */}
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 bg-[#0052cc] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View Exhibition Services 
                <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Exhibition Image and Stats */}
          <div className="relative">
            {/* Main Exhibition Image */}
            <div className=" rounded-2xl overflow-hidden ">
           <img src={Exhibition} alt="" />
              
              {/* Stats Overlays */}
              <div className="absolute -top-3 -right-2 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-[#26a69a]">200+</div>
                <div className="text-sm text-gray-600">Exhibitions</div>
              </div>
              
              <div className="absolute bottom-6 left-1 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-[#26a69a]">30+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0052cc] to-[#26a69a] rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Make Your Mark?</h3>
          <p className="text-lg mb-8 opacity-90">
            Let us help you create an unforgettable exhibition experience that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#0052cc] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0052cc] transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
