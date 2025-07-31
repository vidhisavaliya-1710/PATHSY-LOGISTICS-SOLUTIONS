// import { BarChart3, Clock, PieChart } from 'lucide-react';
import React from 'react'
import {
    FiClock,
    FiDollarSign,
    FiGlobe,
    FiShield,
    FiPackage,
} from "react-icons/fi";
import {
    Truck,
    Plane,
    Ship,
    Clock,
    LineChart,
    Radar,
    Eye,
    PieChart,
    BarChart3,
    TrendingUp,
    LayoutDashboard,
} from "lucide-react";
import { Link } from 'react-router-dom';

function SupplyChainAnalytics() {
    const services = [
        {
            title: "Real-Time Performance Tracking",
            description:
                "Monitor every stage of your supply chain instantly. Live dashboards provide complete visibility into operations.",
            icon: <LayoutDashboard className="text-white w-5 h-5" />, // better than plane
            iconBg: "bg-gradient-to-br from-[#0052cc] to-[#26a69a]",
            tagIcon: <FiClock className="w-4 h-4 mr-1" />,
            tagText: "Live Monitoring",
        },
        {
            title: "AI-Driven Forecasting",
            description:
                "Predict demand, manage inventory, and reduce waste. Smart algorithms help you stay ahead of market changes.",
            icon: <Radar className="text-white w-5 h-5" />, // AI-related icon
            iconBg: "bg-gradient-to-br from-[#26a69a] to-[#fbc02d]",
            tagIcon: <FiDollarSign className="w-4 h-4 mr-1" />,
            tagText: "Predictive AI",
        },
        {
            title: "Bottleneck Detection",
            description:
                "Spot and fix delays before they impact deliveries. Proactive identification prevents costly disruptions.",
            icon: <TrendingUp className="text-white w-5 h-5" />, // indicates problem rise or tracking
            iconBg: "bg-gradient-to-br from-[#fbc02d] to-[#d32f2f]",
            tagIcon: <FiGlobe className="w-4 h-4 mr-1" />,
            tagText: "Early Warning",
        },
        {
            title: "Cost Optimization Insights",
            description:
                "Lower operational costs with smarter planning. Data-driven recommendations maximize efficiency and savings.",
            icon: <LineChart className="text-white w-5 h-5" />, // financial insight icon
            iconBg: "bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]",
            tagIcon: <FiShield className="w-4 h-4 mr-1" />,
            tagText: "Cost Savings",
        },
        {
            title: "End-to-End Visibility",
            description:
                "See the big picture with complete supply chain transparency. Unified view of all operations and processes.",
            icon: <Eye className="text-white w-5 h-5" />, // visual clarity
            iconBg: "bg-gradient-to-br from-[#0052cc] to-[#d32f2f]",
            tagIcon: <FiPackage className="w-4 h-4 mr-1" />,
            tagText: "Complete View",
        },
        {
            title: "Data-Backed Decision Making",
            description:
                "Transform insights into growth by leveraging analytics and trends that guide smarter strategies.",
            icon: <BarChart3 className="text-white w-5 h-5" />, // perfect for decisions/data
            iconBg: "bg-gradient-to-br from-[#0f172a] to-[#0052cc]",
            tagIcon: <PieChart className="w-4 h-4 mr-1" />,
            tagText: "Real-time Analytics",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-[#d32f2f] to-[#fbc02d] text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
                        Data Intelligence
                    </div>
                    <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Supply Chain  <span className="text-transparent bg-gradient-to-r from-[#d32f2f] to-[#fbc02d] bg-clip-text">Analytics</span>
                    </h1>
                    <p className="text-2xl text-gray-500 mb-4 max-w-2xl mx-auto font-semibold">
                        Turn Data Into Smarter Decisions.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[18px] mb-5">
                        A supply chain isn't just about moving goods – it's about knowing what's working, what's not,
                        and how to improve it.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[16px]">
                        Our supply chain analytics use real-time data and intelligent insights to
                        help you plan better, cut costs, and avoid disruptions before they happen.
                    </p>
                </div>

                {/* ========= */}
                <div className="px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
                            What We Offer:
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{service.description}</p>
                                    <div className="inline-flex items-center text-teal-600 text-xs sm:text-sm font-medium">
                                        {service.tagIcon}
                                        {service.tagText}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#d32f2f] to-[#fbc02d] rounded-3xl p-8 mb-16 py-14 text-white my-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">You Don't Just React – You Stay Ahead</h2>
                        <p className="text-green-50 max-w-3xl mx-auto text-[18px]">
                            With our analytics, you don't just react – you stay ahead, make informed decisions, and keep
                            your supply chain running smoothly. Turn data into your competitive advantage.                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3  text-center">
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold mb-2">85%</div>
                            <div className="text-green-100">Cost Reduction</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold mb-2">95%</div>
                            <div className="text-green-100">Forecast Accuracy</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-green-100">Real-Time Analytics</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-10  shadow-lg text-center border border-[#e0e0e0] mb-15">
                    <h2 className="text-4xl font-bold  mb-4 text-transparent bg-gradient-to-r from-[#d32f2f] to-[#fbc02d] bg-clip-text">
                        Smarter insights. Better control. Stronger supply chains.
                    </h2>


                </div>


                <div className="bg-white rounded-3xl p-8 sm:p-12  shadow-lg text-center border border-[#e0e0e0] ">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready for Data-Driven Logistics?
                    </h2>
                    <p className="text-[#777777] mb-8 max-w-2xl mx-auto text-[18px]">
                        Transform your supply chain with intelligent analytics, predictive
                        insights, and real-time visibility that keeps you ahead of challenges and
                        opportunities.
                    </p>
                    <Link to="/contact" className="bg-gradient-to-r from-[#d32f2f] to-[#fbc02d] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center gap-2">
                        
                        Discover Data-Driven Logistics Today
                        <Clock className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SupplyChainAnalytics