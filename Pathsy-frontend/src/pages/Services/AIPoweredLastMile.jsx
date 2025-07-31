import React from 'react'
import { FaRoute, FaMapMarkerAlt, FaBolt, FaShieldAlt, FaUndoAlt, FaClock } from "react-icons/fa";
import { FiEye, FiZap, FiShield, FiRefreshCw, FiTrendingUp, FiClock } from "react-icons/fi";
import { MdOutlineUpdate } from "react-icons/md";
import { Link } from 'react-router-dom';


function AIPoweredLastMile() {
    const services = [
        {
  title: "Smarter Routes",
  description:
    "AI finds the fastest, most efficient way to deliver. Dynamic route optimization saves time and reduces costs.",
  icon: <FaRoute className="text-white w-5 h-5" />,
  iconBg: "bg-gradient-to-br from-[#0052cc] to-[#26a69a]",
  tagIcon: <FiTrendingUp className="w-4 h-4 mr-1" />,
  tagText: "AI-Optimized",
},
{
  title: "Live Tracking",
  description:
    "Know exactly where your package is, every step of the way. Real-time visibility for complete peace of mind.",
  icon: <FaMapMarkerAlt className="text-white w-5 h-5" />,
  iconBg: "bg-gradient-to-br from-[#26a69a] to-[#fbc02d]",
  tagIcon: <FiEye className="w-4 h-4 mr-1" />,
  tagText: "Real-Time",
},
{
  title: "Quick Dispatching",
  description:
    "The nearest driver gets the job instantly for faster drop-offs. Smart assignment reduces delivery time.",
  icon: <FaBolt className="text-white w-5 h-5" />,
  iconBg: "bg-gradient-to-br from-[#fbc02d] to-[#ff6f00]",
  tagIcon: <FiZap className="w-4 h-4 mr-1" />,
  tagText: "Instant Assignment",
},
{
  title: "Safe & Contactless Deliveries",
  description:
    "Easy, reliable, and customer-friendly. Modern delivery options that prioritize safety and convenience.",
  icon: <FaShieldAlt className="text-white w-5 h-5" />,
  iconBg: "bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]",
  tagIcon: <FiShield className="w-4 h-4 mr-1" />,
  tagText: "Contactless",
},
{
  title: "Hassle-Free Returns",
  description:
    "Smooth reverse logistics when items need to come back. Simple return process that keeps customers happy.",
  icon: <FaUndoAlt className="text-white w-5 h-5" />,
  iconBg: "bg-gradient-to-br from-[#7b1fa2] to-[#0052cc]",
  tagIcon: <FiRefreshCw className="w-4 h-4 mr-1" />,
  tagText: "Easy Returns",
},
{
  title: "Predictive Delivery ETAs",
  description:
    "Accurate arrival estimates powered by AI forecasting for better planning and customer satisfaction.",
  icon: <MdOutlineUpdate className="text-white w-5 h-5" />,
  iconBg: "bg-gradient-to-br from-[#0052cc] to-[#26a69a]",
  tagIcon: <FiClock className="w-4 h-4 mr-1" />,
  tagText: "ETA Forecasted",
}

      ];
  return (
    <>
        <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-blue-50">
      {/* Header Section */}
      <div className="mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Smart Delivery
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            AI-Powered Last-Mile <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#26a69a]">Delivery</span>
          </h1>

          <p className="text-[#777777] text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
            Fast, Accurate, and Right on Time.
          </p>

          <p className="text-[#777777] max-w-3xl mx-auto text-sm sm:text-lg">
            Getting a package to the doorstep is the most important part of the journey – and we make it effortless. With our AI-powered last-mile delivery, we use smart technology to plan the quickest routes, track every move in real time, and ensure your customers receive their orders exactly when they expect them.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
            How We Make It Simple:
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
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 to-teal-500 rounded-3xl py-10 sm:py-6 md:py-11 px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
           We Take the Stress Out of Last-Mile Delivery
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-4 md:mb-6 text-sm sm:text-base">
           So you can focus on growing your business while we handle the rest. Our AI-powered system ensures every delivery is fast, accurate, and perfectly timed.
          </p>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">30%</div>
              <div className="text-blue-100 text-sm sm:text-base">Faster Deliveries</div>
            </div>
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">99.5%</div>
              <div className="text-blue-100 text-sm sm:text-base">On-Time Rate</div>
            </div>
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-blue-100 text-sm sm:text-base">Real-Time Tracking</div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-4 sm:px-6 mb-10 '>

      <div className="px-4 sm:px-6 py-8 sm:py-10 bg-white shadow-xl rounded-2xl max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#26a69a]">
          Deliver faster. Deliver smarter. Deliver better.
        </h2>

        
      </div>
      </div>

      {/* Contact Section */}
      <div className='px-4 sm:px-6 '>

      <div className="px-4 sm:px-6 py-8 sm:py-10 bg-white shadow-xl rounded-2xl max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          Ready for Smarter Deliveries?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-4 sm:mb-5 text-sm sm:text-base">
          Transform your last-mile delivery with AI-powered routes, real-time tracking, and seamless customer experiences that drive satisfaction and loyalty.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md hover:opacity-90 transition text-sm sm:text-base">
           Experience Smarter Deliveries Today →
          </Link>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default AIPoweredLastMile