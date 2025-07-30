import React from 'react';

export default function LogisticsHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500 text-white shadow-lg">
            Smart. Fast. Reliable.
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            End-to-End Logistics, <span className="text-yellow-400">Supply</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-2">
            <span className="text-teal-400">Chain & Exhibition</span> <span className="text-white">Solutions</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-2">
            Powered by Technology
          </h1>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-2xl">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Your Global Partner in Logistics & Exhibitions. At Pathsy Logistics
            Solutions, we don't just deliver shipments - we deliver efficiency,
            impact, and trust. We combine AI-driven logistics precision with
            stunning exhibition solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* AI Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-2">AI</div>
            <div className="text-gray-300 text-sm">Powered Operations</div>
          </div>

          {/* 24/7 Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Global Support</div>
          </div>

          {/* 100% Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-2">100%</div>
            <div className="text-gray-300 text-sm">Transparency</div>
          </div>

          {/* Smart Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-2">Smart</div>
            <div className="text-gray-300 text-sm">Technology</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Request Quote 📋
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Our Services 🚀
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}