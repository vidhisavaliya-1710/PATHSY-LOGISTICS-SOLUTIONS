import React from 'react';
import { CheckCircle, Award, Zap,  Clock, Eye, Brain, Shield, ArrowRight } from 'lucide-react';
import { Globe, PenTool, Bot } from 'lucide-react'; // Add these at the top
import whoweare from "../assets/images/whoweare.png"

function WhoWeAre() {
    return (
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
                                <button className="bg-[#0052cc] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2">
                                    Learn About Us
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="text-[#0052cc] bg-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </button>
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
    );
}

export default WhoWeAre;