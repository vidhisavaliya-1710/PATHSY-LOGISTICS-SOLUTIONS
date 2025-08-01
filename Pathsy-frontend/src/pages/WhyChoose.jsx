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
import { Link } from 'react-router-dom';
import { ArrowRight,Shield, Bot, Check, Play } from 'lucide-react';

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

        <>
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
                    <Link to="/services" className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
                       Explore Services
                    </Link>
                   
                </div>
            </div>
        </section>

        <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#26a69a] to-[#fbc02d] text-white text-sm md:text-base font-medium rounded-full">
              Technology That Moves You Forward
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26a69a] to-[#fbc02d]">AI IoT & Blockchain</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            We use cutting-edge technology to deliver precision, security, and speed in every 
            logistics operation and exhibition project.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {/* Card 1 - AI-Powered Intelligence */}
          <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-[#0052cc] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Brain className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">AI-Powered Intelligence</h3>
            <div className="space-y-3 md:space-y-4">
              {['Automated Route Optimization', 'Predictive Analytics', 'Smart Inventory Management', 'Lower Costs, Faster Deliveries'].map(item => (
                <div className="flex items-start space-x-2 md:space-x-3" key={item}>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 - Blockchain Security */}
          <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-[#fbc02d] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#26a69a] to-[#fbc02d] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Shield className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Blockchain Security</h3>
            <div className="space-y-3 md:space-y-4">
              {['Tamper Proof Documentation', 'Risk-Free Trade Operations', 'Complete Transaction Transparency', 'Secure Data Management'].map(item => (
                <div className="flex items-start space-x-2 md:space-x-3" key={item}>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - IoT & Robotics */}
          <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-[#d32f2f] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#fbc02d] to-[#d32f2f] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Bot className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">IoT & Robotics</h3>
            <div className="space-y-3 md:space-y-4">
              {['Warehouse Automation', 'Event Robotics Setup', 'Real-Time Monitoring', 'Unmatched Accuracy'].map(item => (
                <div className="flex items-start space-x-2 md:space-x-3" key={item}>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#26a69a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { value: "95%", label: "Route Efficiency" },
            { value: "100%", label: "Secure Transactions" },
            { value: "24/7", label: "Smart Monitoring" },
            { value: "AI", label: "Driven Operations" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0052cc] mb-1 md:mb-2">{stat.value}</div>
              <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0052cc] via-[#26a69a] to-[#fbc02d]"></div>
          
          {/* Content */}
          <div className="relative z-10 px-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Redefine Logistics & Exhibitions?
            </h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto">
              Let Pathsy be the engine behind your next breakthrough. Experience 
              the future of smart logistics today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 bg-white text-[#0052cc] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0052cc] transition-colors">
                Explore Technology
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4 md:-translate-y-32 md:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full translate-y-1/4 -translate-x-1/4 md:translate-y-24 md:-translate-x-24"></div>
        </div>
      </div>
    </div>
        </>
       
    )
}

export default WhyChoose