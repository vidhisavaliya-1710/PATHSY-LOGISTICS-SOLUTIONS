import React from 'react';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import { Briefcase, BriefcaseBusiness } from 'lucide-react';

function Careers() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-4">
              <h2 className="text-4xl lg:text-[36px] font-bold text-[#004c99] mb-2 leading-tight">
                Join Our Team
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 mb-2 leading-relaxed">
              <span className='font-bold'>Be Part of Something Bigger — Build the Future of Logistics with Us</span> At <span className='font-bold'>Pathsy Logistics Solutions</span>, we’re more than a logistics company 
 We're a team of thinkers, doers, planners, and problem-solvers.
            </p>

            <p className="text-base text-gray-500 mb-4 leading-relaxed">
             We’re on a mission to reshape how businesses move their goods and ideas across the world.
 If you're passionate about innovation, teamwork, and real impact — you’ll fit right in.
            </p>

            <ul className="space-y-4 mb-4">
              {[
                'Inclusive & Collaborative Culture',
                'Growth That Never Stops',
                'Rewarding Compensation',
                'Flexible Work-Life Balance',
                'Work With Top Brands',
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">●</span>
                  <span className="text-gray-600 text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <button className="bg-[#004c99] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-3">
              <span className="text-xl"><BriefcaseBusiness className='w-5 h-5'/></span>
              View Current Openings
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative w-full max-w-lg">
            {/* Badge */}
                 <div className="absolute -top-5 sm:-top-5 -right-2 sm:-right-5 z-20 max-w-[120px] w-auto">
  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg text-center">
    <div className="text-sm sm:text-lg font-bold">200+</div>
    <div className="text-[10px] sm:text-xs font-medium">Team Members</div>
  </div>
</div>

            {/* Image Grid */}
            <div className="flex flex-col gap-4">
              {/* Large Top Image */}
              <div className="w-full h-48 md:h-60 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={team1}
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two Bottom Images */}
              <div className="flex gap-4">
                <div className="w-1/2 h-32 md:h-36 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={team2}
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 h-32 md:h-36 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={team3}
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Careers;