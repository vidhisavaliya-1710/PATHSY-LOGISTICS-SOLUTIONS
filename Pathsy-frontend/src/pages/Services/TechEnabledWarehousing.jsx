import React from 'react';
import { BarChart3, Shield, Zap, GitBranch, TrendingUp, Clock, Warehouse } from 'lucide-react';
import {
    Target,
    Lock,
    Truck,
    Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';


function TechEnabledWarehousing() {
    // Card data for mapping
    const cardData = [
        {
            id: 1,
            icon: BarChart3,
            bgColor: 'bg-gradient-to-br from-[#26a69a] to-[#fbc02d]',
            iconColor: 'text-white',
            buttonColor: 'text-yellow-600 hover:text-yellow-700',
            title: 'Live Inventory Tracking',
            description: 'Always know what\'s in stock, what\'s in progress, what has already shipped, and how many items are available for future sales.',
            buttonText: 'Real-Time Updates',
            buttonIcon: Clock, // ⏱ Time-based updates
        },
        {
            id: 2,
            icon: Zap,
            bgColor: 'bg-gradient-to-br from-[#0052cc] to-[#26a69a]',
            iconColor: 'text-white',
            buttonColor: 'text-blue-600 hover:text-blue-700',
            title: 'Automated Systems',
            description: 'Faster order processing with fewer mistakes. Smart automation means better time and improved order fulfillment.',
            buttonText: '99.9% Accuracy',
            buttonIcon: Target, // 🎯 Precision
        },
        {
            id: 3,
            icon: Shield,
            bgColor: 'bg-gradient-to-br from-[#fbc02d] to-[#d32f2f]',
            iconColor: 'text-white',
            buttonColor: 'text-orange-600 hover:text-orange-700',
            title: 'Safe & Climate-Controlled Storage',
            description: 'Ideal for sensitive or high-value goods. Controlled environments and secured access protect inventory integrity.',
            buttonText: 'Premium Security',
            buttonIcon: Lock, // 🔒 Security
        },
        {
            id: 4,
            icon: GitBranch,
            bgColor: 'bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]',
            iconColor: 'text-white',
            buttonColor: 'text-purple-600 hover:text-purple-700',
            title: 'Integrated Distribution',
            description: 'From storage to your customers\' doorsteps in your suppliers. Integrated logistics to streamline your entire supply chain.',
            buttonText: 'Door-to-Door',
            buttonIcon: Truck, // 🚚 Delivery
        },
        {
            id: 5,
            icon: TrendingUp,
            bgColor: 'bg-gradient-to-br from-[#0052cc] to-[#d32f2f]',
            iconColor: 'text-white',
            buttonColor: 'text-red-600 hover:text-red-700',
            title: 'Smart Insights & Reporting',
            description: 'Actionable insights from your operations data and predictive analytics to help you optimize inventory and logistics.',
            buttonText: 'AI-Powered',
            buttonIcon: Brain, // 🧠 Intelligence
        },
        {
            id: 6,
            icon: Warehouse,
            bgColor: 'bg-gradient-to-br from-[#d32f2f] to-[#26a69a]',
            iconColor: 'text-white',
            buttonColor: 'text-teal-600 hover:text-teal-700',
            title: 'Flexible Space Solutions',
            description: 'Adapt your warehousing needs on demand — whether you need extra room during peak seasons or scalable storage for growing inventory.',
            buttonText: 'On-Demand Space',
            buttonIcon: Warehouse, // 🏢 Space-related icon
        }
    ];


    const renderCard = (card) => {
        const IconComponent = card.icon;
        const ButtonIcon = card.buttonIcon;
        return (
            <div key={card.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow text-center">
                <div className={`w-16 h-16 ${card.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <button className={`font-semibold text-[18px] transition-colors flex items-center gap-2 text-[#fbc02d] mx-auto`}>
                    <ButtonIcon className="w-5 h-5" />
                    {card.buttonText}
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-[#26a69a] to-[#fbc02d] text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
                        Smart Storage
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Tech-Enabled <span className="text-transparent bg-gradient-to-r from-[#26a69a] to-[#fbc02d] bg-clip-text">Warehousing</span>
                    </h1>
                    <p className="text-2xl text-gray-500 mb-4 max-w-2xl mx-auto font-semibold">
                        Smarter Storage. Seamless Supply Chains.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[18px] mb-5">
                        Managing inventory doesn't have to be complicated. With our next-generation warehousing, we
                        bring together smart technology, expert fulfillment, and efficient processes to make storage and
                        distribution effortless.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[16px]">
                        Our modern warehouses are designed to give you real-time control, faster visibility, and
                        better fulfillment – at scale, reducing errors and risks.
                    </p>
                </div>

                {/* What We Offer Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer:</h2>

                    {/* Cards Grid - Clean responsive layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {cardData.slice(0, 6).map(renderCard)}


                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-[#26a69a] to-[#fbc02d] rounded-3xl p-8 mb-16 py-14 text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Warehousing Isn't Just About Storage</h2>
                        <p className="text-green-50 max-w-3xl mx-auto text-[18px]">
                            With Factory Logistics Solutions, warehousing isn't just about storage – it's about building a
                            smarter, faster, and more reliable supply chain for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3  text-center">
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
                            <div className="text-green-100">ORDER ACCURACY</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold mb-2">50%</div>
                            <div className="text-green-100">FASTER FULFILLMENT</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-green-100">MONITORING</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg text-center border border-[#e0e0e0] max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                        Ready to Simplify Your Storage and Logistics?
                    </h2>
                    <p className="text-[#777777] mb-8 max-w-2xl mx-auto text-base sm:text-lg lg:text-[18px] leading-relaxed">
                        Transform your warehousing with smart technology, real-time insights,
                        and automated processes that reduce costs and improve efficiency.
                    </p>
                    <Link to="/contact" className="bg-gradient-to-r from-[#26a69a] to-[#fbc02d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-colors inline-flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Let's Talk Smart Warehousing
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default TechEnabledWarehousing;