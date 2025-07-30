import React from 'react';
// import team1 from '../assets/images/team1.jpg';
// import team2 from '../assets/images/team2.jpg';
// import team3 from '../assets/images/team3.jpg';
import { Briefcase, Users, Trophy, Heart, MapPin, Clock, DollarSign, Send, ArrowRight, Rocket, LineChart, Globe, CheckCircle, GraduationCap, CalendarDays } from 'lucide-react';
import { AiFillCalendar, AiFillHeart } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';

function Careers() {
  return (
   <>
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#26a69a] to-[#fbc02d] text-white text-sm font-medium rounded-full">
              Join Our Team
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Build Your Career at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#26a69a]">Pathsy</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Join our team of technology experts and innovators with forwarding 
            technology. We're looking for passionate professionals to help shape the future of 
            the industry.
          </p>
        </div>

        {/* Career Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Performance */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-15 h-15 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">
              Work with AI, IoT, and blockchain technologies
            </p>
          </div>

          {/* Great Team */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-15 h-15 bg-gradient-to-br from-[#26a69a] to-[#fbc02d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Great Team</h3>
            <p className="text-gray-600 text-sm">
              Collaborate with industry experts and thought leaders
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-15 h-15 bg-gradient-to-br from-[#fbc02d] to-[#d32f2f] rounded-full flex items-center justify-center mx-auto mb-4">
              <LineChart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
            <p className="text-gray-600 text-sm">
              Rapid advancement opportunities in a growing company
            </p>
          </div>

          {/* Global Impact */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-15 h-15 bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2] rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Impact</h3>
            <p className="text-gray-600 text-sm">
              Make a difference in logistics worldwide
            </p>
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center ">Current Openings</h3>
          
         
           

            {/* Exhibition Project Coordinator */}
            <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Logistics Operations Manager */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Logistics Operations Manager</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1  text-[#26a69a]" />
                    <span className='text-lg text-[#777777]'>New York, NY</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-[#26a69a]" />
                    <span className='text-lg text-[#777777]'>Full-time</span>
                  </div>
                </div>
              </div>
              <span className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </span>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Oversee daily logistics operations and optimize supply chain processes</span>
                </li>
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Manage relationships with carriers and logistics partners</span>
                </li>
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Implement AI-driven solutions for route optimization</span>
                </li>
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Lead cross-functional teams to achieve operational excellence</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">5+ years logistics experience</span>
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">Bachelor's degree</span>
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">Team leadership</span>
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">Data analysis</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="text-2xl font-bold text-[#0052cc]">
                $85k - $110k <span className="text-sm font-normal text-gray-500">+ Benefits</span>
              </div>
              <button className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                Apply Now
              </button>
            </div>
          </div>

          {/* Exhibition Project Coordinator */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Exhibition Project Coordinator</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-[#26a69a]" />
                    <span  className='text-lg  text-[#777777]'>Remote/Hybrid</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-[#26a69a]" />
                    <span  className='text-lg text-[#777777]'>Full-time</span>
                  </div>
                </div>
              </div>
              <span className="bg-gradient-to-r from-[#ff9800] to-[#f57c00] text-white px-3 py-1 rounded-full text-sm font-medium">
                Hot
              </span>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span className=''>Coordinate end-to-end exhibition project management</span>
                </li>
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Liaise with clients, vendors, and venue stakeholders</span>
                </li>
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Manage budgets, timelines, and project deliverables</span>
                </li>
                <li className="flex items-start text-md text-[#777777]">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#26a69a] flex-shrink-0" />
                  <span>Ensure high-quality exhibition setup and execution</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">3+ years project management</span>
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">Events/exhibitions experience</span>
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">Client relations</span>
                <span className="bg-blue-100 text-gray-600 px-3 py-1 rounded-full text-sm">PMP preferred</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="text-2xl font-bold text-[#0052cc]">
                $65k - $85k <span className="text-sm font-normal text-gray-500">+ Benefits</span>
              </div>
              <button className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
         
        </div>

        {/* What We Offer Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#0052cc] to-[#26a69a] rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Health & Wellness */}
              <div className="text-center text-white">
                <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                  <AiFillHeart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Health & Wellness</h4>
                <ul className="space-y-2 text-white/90 text-md">
                  <li>Comprehensive health insurance</li>
                  <li>Mental health support</li>
                  <li>Fitness club membership</li>
                  <li>Annual health checkups</li>
                </ul>
              </div>

              {/* Growth & Development */}
              <div className="text-center text-white">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Growth & Development</h4>
                <ul className="space-y-2 text-white/90 text-md">
                  <li>Professional training programs</li>
                  <li>Leadership development</li>
                  <li>Conference and seminar attendance</li>
                  <li>Career advancement opportunities</li>
                </ul>
              </div>

              {/* Work-Life Balance */}
              <div className="text-center text-white">
                <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                  <AiFillCalendar className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Work-Life Balance</h4>
                <ul className="space-y-2 text-white/90 text-md">
                  <li>Flexible working hours</li>
                  <li>Remote work options</li>
                  <li>Paid time off and holidays</li>
                  <li>Family support programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Hiring Process */}
         <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">Our Hiring Process</h3>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Step 1 - Apply */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Apply</h4>
            <p className="text-gray-600 text-sm">
              Submit your application and resume
            </p>
          </div>

          {/* Step 2 - Screen */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#26a69a] to-[#fbc02d] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Screen</h4>
            <p className="text-gray-600 text-sm">
              Initial phone/video screening
            </p>
          </div>

          {/* Step 3 - Interview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff9800] to-[#f57c00] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Interview</h4>
            <p className="text-gray-600 text-sm">
              In-depth interviews with the team
            </p>
          </div>

          {/* Step 4 - Offer */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#e91e63] to-[#ad1457] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Offer</h4>
            <p className="text-gray-600 text-sm">
              Welcome to the Pathsy family!
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>

   </>
  );
}

export default Careers;