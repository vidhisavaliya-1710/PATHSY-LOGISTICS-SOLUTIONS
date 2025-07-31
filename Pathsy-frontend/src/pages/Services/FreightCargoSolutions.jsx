import React from 'react';
import { FaPlane, FaShip, FaTruck, FaFileAlt, FaHome, FaWarehouse } from "react-icons/fa";
import { FiClock, FiDollarSign, FiGlobe, FiShield, FiPackage, FiBox } from "react-icons/fi";
import { Link } from 'react-router-dom';

  function FreightCargoSolutions() {
    const services = [
      {
        title: "Air Freight",
        description:
          "Fast, priority shipping for urgent deliveries. Get your cargo delivered quickly with our premium air freight services.",
        icon: <FaPlane className="text-white w-5 h-5" />,
        iconBg: "bg-gradient-to-br from-[#0052cc] to-[#26a69a]",
        tagIcon: <FiClock className="w-4 h-4 mr-1" />,
        tagText: "24-48 Hour Delivery",
      },
      {
        title: "Sea Freight",
        description:
          "Cost-effective solutions for bulk cargo. Perfect for large shipments with flexible delivery timelines.",
        icon: <FaShip className="text-white w-5 h-5" />,
        iconBg: "bg-gradient-to-br from-[#26a69a] to-[#fbc02d]",
        tagIcon: <FiDollarSign className="w-4 h-4 mr-1" />,
        tagText: "Best Value Option",
      },
      {
        title: "Road Transport",
        description:
          "Secure and efficient regional delivery. Reliable ground transportation for domestic and cross-border shipments.",
        icon: <FaTruck className="text-white w-5 h-5" />,
        iconBg: "bg-gradient-to-br from-[#fbc02d] to-[#d32f2f]",
        tagIcon: <FiGlobe className="w-4 h-4 mr-1" />,
        tagText: "Regional Coverage",
      },
      {
        title: "Customs & Documentation",
        description:
          "Smooth clearance at every port. Our experts handle all paperwork and customs procedures for you.",
        icon: <FaFileAlt className="text-white w-5 h-5" />,
        iconBg: "bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]",
        tagIcon: <FiShield className="w-4 h-4 mr-1" />,
        tagText: "Compliance Guaranteed",
      },
      {
        title: "Door-to-Door Service",
        description:
          "End-to-end shipping convenience. Complete logistics solution from pickup to final delivery at your destination.",
        icon: <FaHome className="text-white w-5 h-5" />,
        iconBg: "bg-gradient-to-br from-[#0052cc] to-[#d32f2f]",
        tagIcon: <FiPackage className="w-4 h-4 mr-1" />,
        tagText: "Full Service",
      },
      {
        title: "Warehousing & Distribution",
        description:
          "Safe storage with seamless dispatch. We manage inventory with care and ensure efficient distribution to your destinations.",
        icon: <FaWarehouse className="text-white w-5 h-5" />,
        iconBg: "bg-gradient-to-br from-[#7b1fa2] to-[#0052cc]",
        tagIcon: <FiBox className="w-4 h-4 mr-1" />,
        tagText: "Inventory Managed",
      },
    ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-blue-50">
      {/* Header Section */}
      <div className="mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Freight Services
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Freight & Cargo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#26a69a]">Solutions</span>
          </h1>

          <p className="text-[#777777] text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
            Global Shipping. Local Expertise.
          </p>

          <p className="text-[#777777] max-w-3xl mx-auto text-sm sm:text-lg">
            Move your cargo anywhere in the world with our reliable, cost-effective, and time-bound freight solutions.
            We ensure every shipment reaches its destination safely and on schedule.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
            Our Services Include:
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

      {/* Statistics Section */}
      <div className="px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 to-teal-500 rounded-3xl py-10 sm:py-12 md:py-16 px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            From Small Parcels to Heavy Loads
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
            We deliver with precision and care. Our experienced team ensures your cargo is handled
            professionally every step of the way, providing you with peace of mind and reliable service you can trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">99.8%</div>
              <div className="text-blue-100 text-sm sm:text-base">On-Time Delivery</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
              <div className="text-blue-100 text-sm sm:text-base">Countries Served</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-blue-100 text-sm sm:text-base">Tracking Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className='px-4 sm:px-6 '>

      <div className="px-4 sm:px-6 py-8 sm:py-10 bg-white shadow-xl rounded-2xl max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          Ready to Ship Your Cargo?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-4 sm:mb-5 text-sm sm:text-base">
          Get a custom freight solution tailored to your specific needs. Our logistics experts are standing by to help you move your cargo efficiently and cost-effectively.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md hover:opacity-90 transition text-sm sm:text-base">
            Book Your Freight Solution Today →
          </Link>
          {/* <button className="border border-blue-600 text-blue-600 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md font-medium hover:bg-blue-50 transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m0 0L5 7m4-4l4 4" />
            </svg>
            Get Instant Quote
          </button> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default FreightCargoSolutions;