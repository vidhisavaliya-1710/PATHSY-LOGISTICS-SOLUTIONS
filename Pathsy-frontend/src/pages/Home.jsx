import React from 'react';
import homeBanner from '../assets/images/homeBanner.png';
import { Quote, HandCoins } from 'lucide-react';
import Services from './Services';
import WhoWeAre from './WhoWeAre';

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
  );
}
