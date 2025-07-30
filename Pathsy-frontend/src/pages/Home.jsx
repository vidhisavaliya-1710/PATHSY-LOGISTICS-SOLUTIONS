import React from 'react';
import homeBanner from "../assets/images/homeBanner.png"
import { Quote, HandCoins } from 'lucide-react';


export default function LogisticsHero() {
    return (
        <div className=" relative min-h-screen  overflow-hidden py-5">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${homeBanner})`
                }}
            >
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Top Badge */}
                <div className="mb-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#26a69a] text-white shadow-lg">
                        Smart. Fast. Reliable.
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white leading-tight max-w-3xl">
                        End-to-End Logistics, <span className="text-transparent bg-gradient-to-r from-[#26a69a] to-[#fbc02d] bg-clip-text">Supply Chain & Exhibition
                        </span>
                    </h1>

                    <h1 className="text-4xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white leading-tight ">
                        Powered by Technology
                    </h1>
                </div>

                {/* Description */}
                <div className="mb-12 max-w-2xl">
                    <p className="text-[18px] sm:text-xl text-gray-300 leading-relaxed">
                        Your Global Partner in Logistics & Exhibitions
                        At Pathsy Logistics Solutions, we don’t just deliver shipments we deliver efficiency, impact, and trust.
                        We combine AI-driven logistics precision with stunning exhibition solutions, ensuring your brand moves forward, both in the market and on the stage.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="flex gap-4 sm:gap-2 mb-12 max-w-[2xl]">
                    {/* AI Card */}
                    <div className="bg-white/10 backdrop-blur-sm p-4 px-2 sm:p-6 text-center rounded-lg w-[150px]">
                        <div className="text-[#fbc02d] text-xl sm:text-2xl font-bold mb-2">AI</div>
                        <div className="text-gray-300 text-sm">Powered Operations</div>
                    </div>

                    {/* 24/7 Card */}
                    <div className="bg-white/10 backdrop-blur-sm p-4 px-2 sm:p-6 text-center rounded-lg w-[150px]">
                        <div className="text-[#fbc02d] text-xl sm:text-2xl font-bold mb-2">24/7</div>
                        <div className="text-gray-300 text-sm">Global Support</div>
                    </div>

                    {/* 100% Card */}
                    <div className="bg-white/10 backdrop-blur-sm p-4 px-2 sm:p-6 text-center rounded-lg w-[150px]">
                        <div className="text-[#fbc02d] text-xl sm:text-2xl font-bold mb-2">100%</div>
                        <div className="text-gray-300 text-sm">Transparency</div>
                    </div>

                    {/* Smart Card */}
                    <div className="bg-white/10 backdrop-blur-sm p-4 px-2 sm:p-6 text-center rounded-lg w-[150px]">
                        <div className="text-[#fbc02d] text-xl sm:text-2xl font-bold mb-2">Smart</div>
                        <div className="text-gray-300 text-sm">Technology</div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
  <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-[#0052cc] hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
    Request Quote <Quote className="ml-2 w-5 h-5" />
  </button>

  <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-[#0052cc] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
    Our Services <HandCoins className="ml-2 w-5 h-5" />
  </button>
</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

            {/* Animated Background Elements */}

        </div>
    );
}