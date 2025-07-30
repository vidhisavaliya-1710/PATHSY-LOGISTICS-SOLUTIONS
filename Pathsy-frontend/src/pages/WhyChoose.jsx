import React from 'react'
import {
    Handshake,
    Brain,
    Globe,
    Leaf,
    Headset,
    LineChart,

    Truck,
    Recycle,
    Clock,
    Package,
    Users,
    Boxes,
    Cpu,
    Network,
    Trees,
} from 'lucide-react';

function WhyChoose() {


    const features = [
        {
            id: '01',
            title: 'One Partner for Logistics & Exhibitions',
            description:
                'Integrated solutions for both movement & brand presence, providing seamless coordination across all your logistics and exhibition needs.',
            label: 'Unified Solutions',
            stat: '100%',
            statLabel: 'Integrated Service Delivery',
            icon: <Boxes className="w-10 h-10 text-white" />, // better than Package for logistics
            colorClasses: {
                iconBg: 'bg-gradient-to-br from-[#0052cc] to-[#26a69a]',
                labelBg: 'bg-cyan-500',
                statBg: 'from-gray-800 to-gray-900',
            },
        },
        {
            id: '02',
            title: 'AI-Driven Intelligence',
            description:
                'From automated routing to smart warehousing, our AI-powered systems optimize every aspect of your supply chain operations.',
            label: 'Smart Automation',
            stat: '95%',
            statLabel: 'Route Optimization Efficiency',
            icon: <Cpu className="w-10 h-10 text-white" />, // better than Brain: AI logic/system chip
            colorClasses: {
                iconBg: 'bg-gradient-to-br from-[#26a69a] to-[#fbc02d]',
                labelBg: 'bg-emerald-500',
                statBg: 'from-gray-800 to-gray-900',
            },
            reverse: true,
        },
        {
            id: '03',
            title: 'Proven Global Network',
            description:
                'Trusted carriers and event partners worldwide ensure reliable service delivery no matter where your business takes you.',
            label: 'Worldwide Reach',
            stat: '50+',
            statLabel: 'Global Partner Network',
            icon: <Network className="w-10 h-10 text-white" />, // better representation of network
            colorClasses: {
                iconBg: 'bg-gradient-to-br from-[#fbc02d] to-[#d32f2f]',
                labelBg: 'bg-orange-500',
                statBg: 'from-gray-800 to-gray-900',
            },
        },
        {
            id: '04',
            title: 'Sustainability First',
            description:
                'Green logistics & eco-conscious event execution, helping your business reduce its environmental footprint while maintaining excellence.',
            label: 'Eco-Friendly Operations',
            stat: 'Carbon',
            statLabel: 'Neutral Operations',
            icon: <Trees className="w-10 h-10 text-white" />, // more obvious than Leaf
            colorClasses: {
                iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
                labelBg: 'bg-pink-500',
                statBg: 'from-gray-800 to-gray-900',
            },
            reverse: true,
        },
        {
            id: '05',
            title: 'Dedicated Support Experts',
            description:
                'Personalized service every step of the way, with dedicated experts who understand your unique business requirements and challenges.',
            label: '24/7 Expert Support',
            stat: '24/7',
            statLabel: 'Customer Support',
            icon: <Headset className="w-10 h-10 text-white" />, // support-focused icon
            colorClasses: {
                iconBg: 'bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]',
                labelBg: 'bg-purple-500',
                statBg: 'from-gray-800 to-gray-900',
            },
        },
    ];


    return (
        <section className="py-20 bg-[#0f111c] text-white px-4 md:px-10">
            <div className="text-center mb-12">
                <div className="inline-block px-5 py-2 text-white text-sm font-medium bg-gradient-to-r from-[#26a69a] to-[#fbc02d] rounded-full mb-4">
                    The Pathsy Advantage
                </div>
                <h2 className="lg:text-5xl md:text-4xl font-bold mb-2">
                    Why Choose{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc02d] via-[#26a69a] to-[#0052cc]">
                        Pathsy?
                    </span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Five powerful reasons that make Pathsy your ultimate logistics and exhibition partner
                </p>
            </div>

            <div className="space-y-20">
                {features.map((item, index) => (
                    <div
                        key={item.id}
                        className={`grid lg:grid-cols-2 gap-8 mb-12 items-center ${item.reverse ? 'lg:grid-cols-2' : ''
                            }`}
                    >
                        {/* Left Section: Icon + Content */}
                        <div className={`space-y-6 ${item.reverse ? 'lg:order-2' : ''}`}>
                            {/* Icon + Label */}
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl ${item.colorClasses.iconBg}`}
                                >
                                    {item.icon}
                                </div>
                                <div
                                    className={`text-white px-4 py-2 rounded-full text-sm font-semibold ${item.colorClasses.labelBg}`}
                                >
                                    {item.id}
                                </div>
                            </div>

                            {/* Title + Description */}
                            <h3 className="text-3xl font-bold text-[#fbc02d]">{item.title}</h3>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">{item.description}</p>

                            {/* Feature Label */}
                            <div className="flex text-[16px] items-center text-cyan-400 font-semibold">
                                <span>{item.label}</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Section: Stat Box */}
                        <div
                            className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl ${item.reverse ? 'lg:order-1' : ''
                                }`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-4xl font-bold text-[#fbc02d]">{item.stat}</div>
                                {/* <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.colorClasses.iconBg}`}>
                                    {item.icon}
                                </div> */}

                            </div>
                            <div className="text-gray-300 text-lg font-medium">{item.statLabel}</div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-16 bg-gradient-to-r from-[#0052cc] via-[#26a69a] to-[#fbc02d] rounded-2xl p-14 text-center shadow-md">
                <h3 className="text-4xl font-bold text-white mb-3">Ready to Transform Your Operations?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto text-[22px]">
                    Experience the Pathsy difference and see why leading businesses choose us for their logistics and exhibition needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
                        Start Your Journey
                    </button>
                    <button className="bg-black text-white px-6 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition">
                        Explore Services
                    </button>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose