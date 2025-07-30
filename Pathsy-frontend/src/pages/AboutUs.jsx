import React, { useState, useEffect } from 'react';
import { Target, Eye, Calendar, MapPin, Headphones } from 'lucide-react';
// import Aboutus from '../assets/images/Aboutus.avif'


const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

export default function AboutUs() {
    return (
        <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
                    {/* Left Side - Image and Badge */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src={Aboutus}
                                alt="Warehouse professional using tablet"
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                            />
                        </div>
                        
                        {/* Badge - Responsive positioning */}
                        <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -right-2 sm:-right-4 bg-[#004c99] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg z-10 max-w-[140px] sm:max-w-none">
                            <div className="text-2xl sm:text-3xl font-bold">
                                <CountUp end={2} suffix="+" />
                            </div>
                            <div className="text-xs sm:text-sm font-medium">
                                Years of Moving Ideas
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 mb-1">
                                Who We Are
                            </h2>
                            <div className="w-14 h-1 bg-[#ff6600] mb-4"></div>

                            <p className="text-[#808080] mb-4 leading-relaxed text-sm sm:text-base lg:text-[16px]">
                                <span className="font-semibold">At Pathsy Logistics Solutions Pvt. Ltd.,</span> we believe logistics is more than moving cargo  it's about moving possibilities.
                                For over 2+ years, we've helped brands showcase their products and reach new markets through seamless exhibition and logistics solutions across India and worldwide.
                                internationally.
                            </p>

                            <p className="text-[#808080] leading-relaxed text-sm sm:text-base">
                                From our early days to today, our mission has stayed the same:<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>Deliver smart, reliable logistics backed by personal commitment and cutting-edge technology.
                            </p>
                        </div>

                        {/* Mission and Vision */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#e6f2ff] p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Target className="text-[#004c99] mr-2 flex-shrink-0" size={20} />
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-[#808080] text-xs sm:text-sm leading-relaxed">
                                    To deliver impactful logistics and exhibition solutions that help businesses thrive  locally and globally.
                                </p>
                            </div>

                            <div className="bg-[#e6f2ff] p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Eye className="text-[#004c99] mr-2 flex-shrink-0" size={20} />
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-[#808080] text-xs sm:text-sm leading-relaxed">
                                    To become a trusted leader in integrated logistics, setting benchmarks in reliability, innovation, and service excellence.
                                </p>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#004c99] mb-1 sm:mb-2">
                                    <CountUp end={200} suffix="+" />
                                </div>
                                <div className="text-gray-600 text-xs sm:text-sm">Events Delivered</div>
                            </div>

                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#004c99] mb-1 sm:mb-2">
                                    <CountUp end={50} suffix="+" />
                                </div>
                                <div className="text-gray-600 text-xs sm:text-sm">Cities Served</div>
                            </div>

                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#004c99] mb-1 sm:mb-2">
                                    24/7
                                </div>
                                <div className="text-gray-600 text-xs sm:text-sm">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}