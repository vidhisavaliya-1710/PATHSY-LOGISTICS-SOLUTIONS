import React from 'react';
import homeBanner from "../assets/images/homeBanner.png"
import { Quote, HandCoins } from 'lucide-react';


export default function LogisticsHero() {
    return (
        <div className="relative min-h-screen overflow-hidden ">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${homeBanner})`
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col  min-h-screen px-4 sm:px-6 lg:px-8 max-w-6xl pt-15">
                {/* Top Badge */}
                <div className="mb-3 sm:mb-5">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#26a69a] text-white shadow-lg">
                        Smart. Fast. Reliable.
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl">
                        End-to-End Logistics,&nbsp;
                        <span className="text-transparent bg-gradient-to-r from-[#26a69a] to-[#fbc02d] bg-clip-text">
                            Supply Chain & Exhibition
                        </span>
                    </h1>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                        Powered by Technology
                    </h1>
                </div>

                {/* Description */}
                <div className="mb-7 sm:mb-9 max-w-3xl">
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        Your Global Partner in Logistics & Exhibitions. At Pathsy Logistics Solutions, we don’t just deliver shipments—we deliver efficiency, impact, and trust. We combine AI-driven logistics precision with stunning exhibition solutions, ensuring your brand moves forward, both in the market and on the stage.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="flex flex-wrap  gap-4 sm:gap-2 md:gap-4  mb-10 sm:mb-12 max-w-6xl ">
                    {[
                        { title: 'AI', desc: 'Powered Operations' },
                        { title: '24/7', desc: 'Global Support' },
                        { title: '100%', desc: 'Transparency' },
                        { title: 'Smart', desc: 'Technology' }
                    ].map(({ title, desc }, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 text-center rounded-lg min-w-[140px] max-w-[180px] flex-1"
                        >
                            <div className="text-[#fbc02d] text-xl sm:text-2xl font-bold mb-2">
                                {title}
                            </div>
                            <div className="text-gray-300 text-sm">{desc}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center pb-4">
                    <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base font-medium rounded-lg text-white bg-[#0052cc] hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Request Quote <Quote className="ml-2 w-5 h-5" />
                    </button>

                    <button className="inline-flex items-center  px-6 sm:px-8 py-3 sm:py-4 text-base font-medium rounded-lg text-[#0052cc] bg-white hover:bg-gray-50 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Our Services <HandCoins className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
            </div>

    );
}