import React from 'react';
import { Truck, Package, Monitor, BarChart3, Snowflake, Warehouse } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Freight & Cargo Solutions",
      description: "Road, Air & Sea Shipping with flexible options for every cargo type. Specialized handling for bulk & fragile shipments with real-time tracking.",
      bgColor: "bg-blue-600",
      iconBg: "bg-gradient-to-br from-[#0052cc] to-[#26a69a]"
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: "Tech-Enabled Warehousing",
      description: "Automated inventory & 24/7 monitoring with smart distribution hubs optimized for rapid order fulfillment and AI-powered operations.",
      bgColor: "bg-green-600",
      iconBg: "bg-gradient-to-br from-[#26a69a] to-[#fbc02d]"
    },
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: "Exhibition Logistics & Design",
      description: "Custom booth designs with eye-catching brand-aligned structures. Global event logistics with end-to-end transport, setup & dismantling.",
      bgColor: "bg-orange-600",
      iconBg: "bg-gradient-to-br from-[#fbc02d] to-[#d32f2f]"
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "AI-Powered Last-Mile",
      description: "Fast deliveries with route optimization solutions powered by AI. Live tracking with updates via SMS & email notifications for complete transparency.",
      bgColor: "bg-purple-600",
      iconBg: "bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Supply Chain Analytics",
      description: "End-to-end visibility to track & freight factory to delivery. Predictive analytics to reduce operational costs & delays with AI insights.",
      bgColor: "bg-indigo-600",
      iconBg: "bg-gradient-to-br from-[#7b1fa2] to-[#0052cc]"
    },
    {
      icon: <Snowflake className="w-8 h-8 text-white" />,
      title: "Cold Chain & Reverse Logistics",
      description: "Temperature-controlled transport for pharma & perishables with 24/7 monitoring. Seamless returns processing with eco-friendly disposal solutions.",
      bgColor: "bg-blue-600",
      iconBg: "bg-gradient-to-br from-[#0052cc] to-[#7b1fa2]"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#0052cc] text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 mb-6">
              Comprehensive Logistics <span className="text-[#0052cc]">Solutions</span>
            </h1>
            <p className="text-xl md:text-xl text-[#777777] max-w-3xl mx-auto leading-relaxed">
              From global freight forwarding to specialized exhibition management, we deliver end-to-end logistics solutions tailored to your business needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 group  group-hover:border-blue-600"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0052cc] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="inline-flex items-center text-[#0052cc] font-semibold hover:text-[#0052cc] transition-colors duration-300 group/btn">
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}

        </div>
      </div>

    </>
  );
}

export default Services;