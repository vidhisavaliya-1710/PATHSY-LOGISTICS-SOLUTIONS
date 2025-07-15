import React from 'react';
import { Network, Clock, Headphones, Shield, Phone, ExternalLink } from 'lucide-react';
import helpAndsupport from "../assets/images/helpandsupport.png"

function HelpAndSupport() {
    const features = [
        {
            icon: <Network className="w-6 h-6" />,
            title: "PAN India Network",
            subtitle: "Connected like never before.",
            description: "Our expansive logistics footprint spans 50+ cities, powered by local expertise and global efficiency — ensuring smooth operations, wherever you are."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "On-Time Delivery",
            subtitle: "Because timing is everything.",

            description: "With a 99.5% on-time success rate, we combine smart tracking and proactive communication to keep your deliveries always on schedule."
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "24/7 Support",
            subtitle: "Real people. Real help.",

            description: "Whether it's day or night, our dedicated account managers are always available to guide, update, and support you — every step of the way."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure & Reliable",
            subtitle: "Your cargo, our responsibility.",

            description: "We prioritize safety with robust protocols and insurance coverage — ensuring every shipment is protected from origin to destination."
        }
    ];

    return (
        <div className="relative py-8 px-4 overflow-hidden ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${helpAndsupport})`
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-300 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[32px] md:text-[32px] font-bold text-white mb-2">
                        What Makes Us Different
                    </h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-[16px] text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        More than a logistics provider — we’re your long-term growth partner.<br></br>
                        At Pathsy Logistics, we don’t just deliver packages — we deliver precision, partnerships, and peace of mind.
                        Here’s why businesses across India and beyond trust us:


                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            {/* Icon Container */}
                            <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300 shadow-lg">
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[16px] font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            <h3 className="text-[16px] font-semibold text-white  transition-colors duration-300">
                                {feature.subtitle}
                            </h3>

                            {/* Description */}
                            <p className="text-blue-100 text-sm leading-relaxed px-2">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h3 className="text-[28px] md:text-[28px] font-semibold text-white mb-4">
                        Ready to Experience the Difference?
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-[14px] px-6 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                            <Phone className="w-5 h-5" />
                            Contact Us Today
                        </button>

                        <button className="bg-transparent border-2 border-white text-blue-100 text-[14px]  px-6 py-1.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-lg">
                            <ExternalLink className="w-5 h-5" />
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpAndSupport;