import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, FileText } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

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

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300 h-max">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052cc] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052cc] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a Service</option>
                    <option value="logistics">Logistics Solutions</option>
                    <option value="exhibition">Exhibition Services</option>
                    <option value="consulting">Operations Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your project or requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052cc] focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0052cc] to-[#26a69a] text-white font-semibold py-4 px-6 rounded-lg hover:from-[#0052cc] hover:to-[#26a69a] transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Send Message 
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Get in Touch */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#0052cc]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-[#0052cc] font-medium">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#26a69a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-[#26a69a] font-medium">info@operations.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#d32f2f]" />
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
            <div className="bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] rounded-xl shadow-lg p-6 text-white text-center">
              <h3 className="text-lg font-bold mb-2">Emergency Support</h3>
              <p className="mb-4 text-red-100">Need urgent assistance?</p>
              <div className="text-xl font-bold"> +1 (555) 911-HELP</div>
            </div>
          </div>
        </div>

        {/* Other Ways to Connect */}
       
      </div>
    </div>
  );
}