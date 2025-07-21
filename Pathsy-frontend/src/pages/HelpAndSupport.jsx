import React from 'react';
import { Network, Clock, Headphones, Shield, Phone, ExternalLink } from 'lucide-react';
import helpAndsupport from "../assets/images/helpandsupport.png"
import { Link } from 'react-router-dom';


function HelpAndSupport() {
    const features = [
        {
            icon: <Network className="w-6 h-6" />,
            title: "Global Networkk",
            description: "Partnerships with trusted carriers worldwide."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: " Eco-Friendly Logistics ",
            description: "Sustainable practices for reduced carbon footprint."
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "24/7 Tracking Dashboard",
            description: "Know your shipment’s status anytime."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Dedicated Support",
            subtitle: "Your cargo, our responsibility.",
            description: "A single point of contact for all queries."
        }
    ];

    return (
        <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-4 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${helpAndsupport})`
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-blue-300 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] font-bold text-white mb-2 sm:mb-3 md:mb-2 px-2">
                        What Makes Us Different
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6"></div>
                    <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                        More than a logistics provider — we're your long-term growth partner.<br className="hidden sm:block" />
                        At Pathsy Logistics, we don't just deliver packages — we deliver precision, partnerships, and peace of mind.
                        Here's why businesses across India and beyond trust us:
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group px-2 sm:px-4">
                            {/* Icon Container */}
                            <div className="bg-orange-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-600 transition-colors duration-300 shadow-lg">
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-orange-300 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center px-2 sm:px-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
                        Ready to Experience the Difference?
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <Link to='/contact'>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                Contact Us Today
                            </button>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpAndSupport;