import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, FileText } from 'lucide-react';

export default function Contact() {


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-br from-[#0052cc] to-[#26a69a] text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
            Let's Connect
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your <span className="text-[#26a69a]">Operations?</span>
          </h1>
          <p className="text-[16px] text-gray-400 max-w-xl mx-auto">
            Get in touch with our logistics and exhibition experts. We're here to help you
            streamline your operations and create exceptional brand experiences.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-8 mb-12"> */}
        {/* Contact Form */}


        {/* Contact Information */}
        <div className="flex gap-6 w-full">
          {/* Get in Touch */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300 flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

            <div className="space-y-7">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#0052cc] to-[#26a69a] p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-[#0052cc] font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#26a69a] to-[#fbc02d] p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-[#26a69a] font-medium">info@operations.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#fbc02d] to-[#d32f2f] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-[#d32f2f] font-medium">123 Business Center Dr</p>
                  <p className="text-sm text-gray-500">Suite 500<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="flex flex-col space-y-6 flex-1">
            <div className="bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">99%</div>
                  <div className="text-blue-100">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] rounded-xl shadow-lg p-6 text-white text-center ">
              <h3 className="text-lg font-bold mb-2">Emergency Support</h3>
              <p className="mb-4 text-red-100">Need urgent assistance?</p>
              <div className="text-xl font-bold">+1 (555) 911-HELP</div>
            </div>
          </div>
        </div>
      </div>


      {/* Google Maps Section */}
      <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-6xl mx-auto">
        <div className="relative h-96 bg-gray-900">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus&maptype=roadmap&style=feature:all%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:all%7Celement:labels.text.stroke%7Ccolor:0x242f3e&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape%7Celement:geometry%7Ccolor:0x263c3f&style=feature:landscape.man_made%7Celement:geometry%7Ccolor:0x334e87&style=feature:poi%7Celement:geometry%7Ccolor:0x406d80&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1a3646&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c"
            width="90%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>

          {/* Main overlay shadow for opacity reduction */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

          {/* Radial shadow overlay for spotlight effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/25 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.25) 100%)' }}></div>

          {/* Location details overlay with enhanced shadow */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-2xl max-w-sm border border-white/20">
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-br from-[#0052cc] to-[#26a69a] p-2 rounded-lg flex-shrink-0 shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Operations Hub</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  123 Business Center Dr<br />
                  Suite 500, New York, NY 10001
                </p>
                <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full shadow-sm">Open Now</span>
                  <span>Mon-Fri 9AM-6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}