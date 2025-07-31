import React from 'react';
import { Briefcase, Users, Trophy, Heart, MapPin, Clock, DollarSign, Send, ArrowRight, Rocket, LineChart, Globe, CheckCircle } from 'lucide-react';
import { AiFillCalendar, AiFillHeart } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';

function Careers() {
  return (
    <div className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#26a69a] to-[#fbc02d] text-white text-sm md:text-base font-medium rounded-full">
              Join Our Team
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Build Your Career at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#26a69a]">Pathsy</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            Join our team of technology experts and innovators with forwarding 
            technology. We're looking for passionate professionals to help shape the future of 
            the industry.
          </p>
        </div>

        {/* Career Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {/* Performance */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 text-center hover:border-[#0052cc] transition-colors duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Rocket className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Performance</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Work with AI, IoT, and blockchain technologies
            </p>
          </div>

          {/* Great Team */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 text-center hover:border-[#26a69a] transition-colors duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#26a69a] to-[#fbc02d] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Great Team</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Collaborate with industry experts and thought leaders
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 text-center hover:border-[#fbc02d] transition-colors duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#fbc02d] to-[#d32f2f] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <LineChart className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Career Growth</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Rapid advancement opportunities in a growing company
            </p>
          </div>

          {/* Global Impact */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 text-center hover:border-[#d32f2f] transition-colors duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Globe className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Global Impact</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Make a difference in logistics worldwide
            </p>
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mb-10 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">Current Openings</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Logistics Operations Manager */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Logistics Operations Manager</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-[#26a69a]" />
                      <span className='text-sm md:text-base text-[#777777]'>New York, NY</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-[#26a69a]" />
                      <span className='text-sm md:text-base text-[#777777]'>Full-time</span>
                    </div>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                  New
                </span>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3">Key Responsibilities:</h4>
                <ul className="space-y-1 md:space-y-2">
                  {[
                    "Oversee daily logistics operations and optimize supply chain processes",
                    "Manage relationships with carriers and logistics partners",
                    "Implement AI-driven solutions for route optimization",
                    "Lead cross-functional teams to achieve operational excellence"
                  ].map((item, index) => (
                    <li className="flex items-start text-sm md:text-base text-[#777777]" key={index}>
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-5 md:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3">Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {["5+ years logistics experience", "Bachelor's degree", "Team leadership", "Data analysis"].map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-gray-600 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-100 gap-4">
                <div className="text-xl md:text-2xl font-bold text-[#0052cc]">
                  $85k - $110k <span className="text-xs md:text-sm font-normal text-gray-500">+ Benefits</span>
                </div>
                <button className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-5 py-2 md:px-6 md:py-2 rounded-lg font-medium hover:shadow-lg transition-all w-full sm:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Exhibition Project Coordinator */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Exhibition Project Coordinator</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-[#26a69a]" />
                      <span className='text-sm md:text-base text-[#777777]'>Remote/Hybrid</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-[#26a69a]" />
                      <span className='text-sm md:text-base text-[#777777]'>Full-time</span>
                    </div>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-[#ff9800] to-[#f57c00] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                  Hot
                </span>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3">Key Responsibilities:</h4>
                <ul className="space-y-1 md:space-y-2">
                  {[
                    "Coordinate end-to-end exhibition project management",
                    "Liaise with clients, vendors, and venue stakeholders",
                    "Manage budgets, timelines, and project deliverables",
                    "Ensure high-quality exhibition setup and execution"
                  ].map((item, index) => (
                    <li className="flex items-start text-sm md:text-base text-[#777777]" key={index}>
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-5 md:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3">Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {["3+ years project management", "Events/exhibitions experience", "Client relations", "PMP preferred"].map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-gray-600 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-100 gap-4">
                <div className="text-xl md:text-2xl font-bold text-[#0052cc]">
                  $65k - $85k <span className="text-xs md:text-sm font-normal text-gray-500">+ Benefits</span>
                </div>
                <button className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-5 py-2 md:px-6 md:py-2 rounded-lg font-medium hover:shadow-lg transition-all w-full sm:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="">
          <div className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">What We Offer</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Health & Wellness */}
              <div className="text-center text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <AiFillHeart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Health & Wellness</h4>
                <ul className="space-y-1 md:space-y-2 text-white/90 text-sm md:text-base">
                  {["Comprehensive health insurance", "Mental health support", "Fitness club membership", "Annual health checkups"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Growth & Development */}
              <div className="text-center text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FaGraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Growth & Development</h4>
                <ul className="space-y-1 md:space-y-2 text-white/90 text-sm md:text-base">
                  {["Professional training programs", "Leadership development", "Conference and seminar attendance", "Career advancement opportunities"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Work-Life Balance */}
              <div className="text-center text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <AiFillCalendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Work-Life Balance</h4>
                <ul className="space-y-1 md:space-y-2 text-white/90 text-sm md:text-base">
                  {["Flexible working hours", "Remote work options", "Paid time off and holidays", "Family support programs"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Hiring Process */}
        <div className="py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Hiring Process</h3>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Step 1 - Apply */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-xl md:text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Apply</h4>
              <p className="text-gray-600 text-xs md:text-sm">
                Submit your application and resume
              </p>
            </div>

            {/* Step 2 - Screen */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#26a69a] to-[#fbc02d] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-xl md:text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Screen</h4>
              <p className="text-gray-600 text-xs md:text-sm">
                Initial phone/video screening
              </p>
            </div>

            {/* Step 3 - Interview */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#fbc02d] to-[#d32f2f] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-xl md:text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Interview</h4>
              <p className="text-gray-600 text-xs md:text-sm">
                In-depth interviews with the team
              </p>
            </div>

            {/* Step 4 - Offer */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-xl md:text-2xl font-bold">4</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Offer</h4>
              <p className="text-gray-600 text-xs md:text-sm">
                Welcome to the Pathsy family!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;