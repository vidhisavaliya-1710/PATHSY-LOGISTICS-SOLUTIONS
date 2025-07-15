import React, { useState, useEffect } from 'react';
import { Target, Eye, Calendar, MapPin, Headphones } from 'lucide-react';
import Aboutus from '../assets/images/Aboutus.avif'

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
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Image and Badge */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src={Aboutus}
                                alt="Warehouse professional using tablet"
                                className="w-full h-90 object-cover"
                            />
                            {/* Badge */}
                            
                        </div>
                        <div className="absolute -bottom-10 z-99 -right-4 bg-[#004c99] text-white px-6 py-4 rounded-lg shadow-lg">
                                <div className="text-3xl font-bold">
                                    <CountUp end={15} suffix="+" />
                                </div>
                                <div className="text-sm font-medium ">Years of Moving Ideas
                                </div>
                            </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-[32px] font-bold text-gray-900 mb-1">
                                Who We Are
                            </h2>
                            <div className="w-14 h-1 bg-[#ff6600] mb-4"></div>

                            <p className="text-[#808080] mb-4 leading-relaxed text-[16px]">
                                <span className="font-semibold">At Pathsy Logistics Solutions Pvt. Ltd.,</span> we believe logistics is more than moving cargo — it's about moving possibilities.
                                For over 15 years, we’ve helped brands showcase their products and reach new markets through seamless exhibition and logistics solutions across India and worldwide.
                                internationally.
                            </p>

                            <p className="text-[#808080] leading-relaxed">
                                From our early days to today, our mission has stayed the same:<br></br>
                                Deliver smart, reliable logistics backed by personal commitment and cutting-edge technology.
                            </p>
                        </div>

                        {/* Mission and Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#e6f2ff] p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Target className="text-[#004c99] mr-2" size={20} />
                                    <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-[#808080] text-sm leading-relaxed">
                                    To deliver impactful logistics and exhibition solutions that help businesses thrive — locally and globally.                                </p>
                            </div>

                            <div className="bg-[#e6f2ff] p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Eye className="text-[#004c99] mr-2" size={20} />
                                    <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-[#808080] text-sm leading-relaxed">
                                    To become a trusted leader in integrated logistics, setting benchmarks in reliability, innovation, and service excellence.
                                </p>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#004c99] mb-2">
                                    <CountUp end={500} suffix="+" />
                                </div>
                                <div className="text-gray-600 text-sm">Events Delivered</div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#004c99] mb-2">
                                    <CountUp end={50} suffix="+" />
                                </div>
                                <div className="text-gray-600 text-sm">Cities Served</div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#004c99] mb-2">
                                    24/7
                                </div>
                                <div className="text-gray-600 text-sm">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}