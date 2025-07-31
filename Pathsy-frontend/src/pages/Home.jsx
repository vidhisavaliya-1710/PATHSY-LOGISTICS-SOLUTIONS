import React from 'react';
import homeBanner from '../assets/images/homeBanner.png';
import { Quote, HandCoins } from 'lucide-react';
import { Truck, Package, Settings, Headphones, ArrowRight, ExternalLink } from 'lucide-react';
import Services from './Services';
import WhoWeAre from './WhoWeAre';
import Exhibition from '../assets/images/exhibition.png'
import { FaDraft2Digital, FaDraftingCompass, FaHeadphonesAlt, FaTools, FaTruck } from 'react-icons/fa';
import WhyChoose from './WhyChoose';
import { Brain, Shield, Bot, Check, Play } from 'lucide-react';
import Careers from './Carrers';
import { Link } from 'react-router-dom';

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
            <Link to='/services'>
              <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0052cc] hover:bg-gray-100 transition">
              Our Services <HandCoins className="ml-2 w-5 h-5" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <WhoWeAre/>


    <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#26a69a] to-[#fbc02d] text-white text-sm md:text-base font-medium rounded-full">
              Technology That Moves You Forward
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26a69a] to-[#fbc02d]">AI IoT & Blockchain</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            We use cutting-edge technology to deliver precision, security, and speed in every 
            logistics operation and exhibition project.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {/* Card 1 - AI-Powered Intelligence */}
          <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-[#0052cc] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Brain className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">AI-Powered Intelligence</h3>
            <div className="space-y-3 md:space-y-4">
              {['Automated Route Optimization', 'Predictive Analytics', 'Smart Inventory Management', 'Lower Costs, Faster Deliveries'].map(item => (
                <div className="flex items-start space-x-2 md:space-x-3" key={item}>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 - Blockchain Security */}
          <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-[#fbc02d] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#26a69a] to-[#fbc02d] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Shield className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Blockchain Security</h3>
            <div className="space-y-3 md:space-y-4">
              {['Tamper Proof Documentation', 'Risk-Free Trade Operations', 'Complete Transaction Transparency', 'Secure Data Management'].map(item => (
                <div className="flex items-start space-x-2 md:space-x-3" key={item}>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - IoT & Robotics */}
          <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-[#d32f2f] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#fbc02d] to-[#d32f2f] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Bot className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">IoT & Robotics</h3>
            <div className="space-y-3 md:space-y-4">
              {['Warehouse Automation', 'Event Robotics Setup', 'Real-Time Monitoring', 'Unmatched Accuracy'].map(item => (
                <div className="flex items-start space-x-2 md:space-x-3" key={item}>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { value: "95%", label: "Route Efficiency" },
            { value: "100%", label: "Secure Transactions" },
            { value: "24/7", label: "Smart Monitoring" },
            { value: "AI", label: "Driven Operations" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0052cc] mb-1 md:mb-2">{stat.value}</div>
              <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0052cc] via-[#26a69a] to-[#fbc02d]"></div>
          
          {/* Content */}
          <div className="relative z-10 px-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Redefine Logistics & Exhibitions?
            </h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto">
              Let Pathsy be the engine behind your next breakthrough. Experience 
              the future of smart logistics today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 bg-white text-[#0052cc] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0052cc] transition-colors">
                Explore Technology
                <Play className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4 md:-translate-y-32 md:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full translate-y-1/4 -translate-x-1/4 md:translate-y-24 md:-translate-x-24"></div>
        </div>
      </div>
    </div>


    <WhyChoose/>
    <Careers/>

    
    </>
  );
}
