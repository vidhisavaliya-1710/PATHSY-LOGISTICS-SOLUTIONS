import React from 'react';
import { CheckCircle, Award, Zap,  Clock, Eye, Brain, Shield, ArrowRight } from 'lucide-react';
import { Globe, PenTool, Bot } from 'lucide-react'; // Add these at the top
import whoweare from "../assets/images/whoweare.png";
import Exhibition from '../assets/images/exhibition.png'
import { FaDraft2Digital, FaDraftingCompass, FaHeadphonesAlt, FaTools, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WhoWeAre() {
    return (
        <>
        
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${whoweare})`,
                }}
            >
                <div className="absolute inset-0"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header Tag */}
                    <div className="mb-8">
                        <span className="inline-block bg-[#26a69a] text-white px-6 py-2 rounded-full text-sm font-medium">
                            Who We Are
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                                    Your Trusted Partner in{' '}
                                    <span className="text-[#fbc02d]">Global Logistics</span>
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                    We are a next-generation logistics and exhibition company, committed to
                                    transforming supply chains and brand experiences. With 2+ years of
                                    excellence, our mission is simple: deliver smarter, faster, and better.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#0052cc] rounded-full flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">Global Network, Local Expertise</h3>
                                        <p className="text-gray-400">Operating in multiple countries with localized efficiency.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#26a69a] rounded-full flex items-center justify-center">
                                        <PenTool  className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">Exhibition Mastery</h3>
                                        <p className="text-gray-400">Creative, immersive booths with flawless logistics support.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbc02d] rounded-full flex items-center justify-center">
                                        <Bot  className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">Logistics Reinvented</h3>
                                        <p className="text-gray-400">AI-powered systems for precision and transparency.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Mission Statement */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <p className="text-gray-300 leading-relaxed">
                                    We are committed to innovation, technology-driven operations, and eco-friendly practices,
                                    ensuring businesses thrive in today's competitive market.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/whyChoose" className="bg-[#0052cc] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2">
                                    Learn About Us
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                
                            </div>
                        </div>

                        {/* Right Column - Stats */}
                        <div className="grid grid-cols-2 gap-6 lg:gap-y-6 lg:gap-x-0">
                            {/* Years Experience */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6   min-w-[140px] max-w-[250px] flex-1 rounded-xl  border border-white/20 text-center">

                                <div className="text-3xl lg:text-4xl  font-bold text-yellow-400 mb-2">2+</div>
                                <div className="text-gray-300 font-medium">Years Excellence</div>
                            </div>

                            {/* AI Powered */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6  min-w-[140px] max-w-[250px] flex-1 rounded-xl  border border-white/20 text-center">

                                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">AI</div>
                                <div className="text-gray-300 font-medium">Powered Systems</div>
                            </div>

                            {/* Live Tracking */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6  min-w-[140px] max-w-[250px] flex-1 rounded-xl  border border-white/20 text-center">

                                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                                <div className="text-gray-300 font-medium">Live Tracking</div>
                            </div>

                            {/* Transparency */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6  min-w-[140px] max-w-[250px] flex-1 rounded-xl  border border-white/20 text-center">

                                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">100%</div>
                                <div className="text-gray-300 font-medium">Transparency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

         <div className="bg-blue-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-16">
                  {/* Badge */}
                  <div className="inline-block mb-4 md:mb-6">
                    <span className="px-4 py-2 bg-[#26a69a] text-white text-sm md:text-base font-medium rounded-full">
                      Exhibition Excellence
                    </span>
                  </div>
                  
                  {/* Main Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                    Premier Exhibition <span className="text-[#0052cc] block md:inline">Management Services</span>
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                    From concept to completion, we handle every aspect of your exhibition presence 
                    with precision, creativity, and professional excellence.
                  </p>
                </div>
        
                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
                  {/* Left Side - Services List */}
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Complete Exhibition Solutions</h3>
                    
                    {/* Service Items */}
                    <div className="space-y-5 md:space-y-6">
                      {/* Stand Design & Build */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-8 h-8 bg-[#0052cc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaDraftingCompass className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Stand Design & Build</h4>
                          <p className="text-gray-600 text-sm md:text-base">
                            Custom exhibition stand design and construction that captures your brand essence and 
                            maximizes visitor engagement.
                          </p>
                        </div>
                      </div>
        
                      {/* Logistics & Transportation */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-8 h-8 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaTruck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Logistics & Transportation</h4>
                          <p className="text-gray-600 text-sm md:text-base">
                            Seamless transportation of exhibition materials, booth components, and merchandise to 
                            venues worldwide.
                          </p>
                        </div>
                      </div>
        
                      {/* Setup & Installation */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-8 h-8 bg-[#fbc02d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaTools className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Setup & Installation</h4>
                          <p className="text-gray-600 text-sm md:text-base">
                            Professional on-site setup, installation, and dismantling services with experienced 
                            technical teams.
                          </p>
                        </div>
                      </div>
        
                      {/* Event Support */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-8 h-8 bg-[#f44336] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaHeadphonesAlt className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Event Support</h4>
                          <p className="text-gray-600 text-sm md:text-base">
                            Dedicated on-site support throughout your event to ensure smooth operations and 
                            immediate issue resolution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* Right Side - Exhibition Image and Stats */}
                  <div className="relative order-1 lg:order-2">
                    {/* Main Exhibition Image */}
                    {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-72 md:h-96 lg:h-[450px] flex items-center justify-center text-gray-500">
                      Exhibition Image
                    </div> */}
                    <img 
          src={Exhibition} 
          alt="" 
          className=" h-[400px] w-[700px] rounded-2xl"
        />
        
                      
                    {/* Stats Overlays */}
                    <div className="absolute -top-4 -right-2 md:-top-3 md:-right-2 bg-white rounded-lg p-3 md:p-4 shadow-lg z-10">
                      <div className="text-2xl md:text-3xl font-bold text-[#26a69a]">200+</div>
                      <div className="text-xs md:text-sm text-gray-600">Exhibitions</div>
                    </div>
                    
                    <div className="absolute bottom-4 -left-2 md:bottom-6 md:left-1 bg-white rounded-lg p-3 md:p-4 shadow-lg z-10">
                      <div className="text-2xl md:text-3xl font-bold text-[#26a69a]">30+</div>
                      <div className="text-xs md:text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
        
                {/* Call to Action Section */}
                <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#0052cc] to-[#26a69a] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Make Your Mark?</h3>
                  <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
                    Let us help you create an unforgettable exhibition experience that drives results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-[#0052cc] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      Start Your Project
                    </button>
                    <button className="px-6 py-2 md:px-8 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0052cc] transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </>

        
    );
}

export default WhoWeAre;