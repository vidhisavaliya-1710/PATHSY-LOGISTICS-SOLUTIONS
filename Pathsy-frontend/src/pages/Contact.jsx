import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#e6f2ff] py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 mb-2">Contact Us</h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto px-4 sm:px-0">
            Ready to elevate your exhibition experience or streamline your logistics? Get in
            touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mx-0 sm:mx-4 md:mx-7">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border-[1.5px] border-[#e6f2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border-[1.5px] border-[#e6f2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#004c99] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm sm:text-base border-[1.5px] border-[#e6f2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm sm:text-base border-[1.5px] border-[#e6f2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm sm:text-base border-[1.5px] border-[#e6f2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="exhibition">Exhibition Services</option>
                  <option value="logistics">Logistics</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-3 py-2 text-sm sm:text-base border-[1.5px] border-[#e6f2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#004c99] text-white py-3 px-6 rounded-md hover:bg-[#004c99] transition-colors duration-200 font-medium text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Corporate Office */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Corporate Office</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Mumbai, Maharashtra, India</p>
                    <p className="text-gray-500 text-xs sm:text-sm">PAN India Network - 50+ Cities</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 123 456 7890</p>
                    <p className="text-gray-500 text-xs sm:text-sm">24/7 Support Available</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base break-all">info@pratheylogistics.com</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Quick Response Guaranteed</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-[#004c99] text-white rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                
              </div>
              
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Quick Response Promise</h3>
              </div>
              
              <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
                We understand that time is crucial in your business. Our team responds to all inquiries within 2 hours during business hours.
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                <span className="text-orange-400 font-medium text-sm sm:text-base">Guaranteed Response Within 2 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}