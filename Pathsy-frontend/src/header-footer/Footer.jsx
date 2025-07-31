import React from 'react';
import {
  Facebook, Linkedin, Twitter, Youtube, Instagram, MapPin, Phone, Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Row 1: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Logo & Info */}
          <div className="text-left">
            <div className="text-3xl font-bold text-yellow-500 mb-3">PATHSY</div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Pathsy Logistics Solutions delivers smart, fast, and reliable end-to-end logistics and exhibition solutions powered by AI technology, connecting businesses to global opportunities with precision.
            </p>

            <div className="space-y-6 text-white">
              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-full flex items-center justify-center w-10 h-10 mt-1">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-base font-medium">+1 (800) XXX-XXXX</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-500 p-3 rounded-full flex items-center justify-center w-10 h-10 mt-1">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-base font-medium">info@pathsy.com</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center w-10 h-10 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Headquarters</p>
                  <p className="text-base font-medium">[Your Location]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left ms-[0px] sm:ms-0 md:ms-[110px]">
  <h4 className="text-yellow-500 font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-3 text-sm text-gray-300">
    <li><Link to='/' className="hover:text-white">Home</Link></li>
    {/* <li><Link to='/' className="hover:text-white">About Us</Link></li> */}
    <li><Link to='/whoWeAre' className="hover:text-white">Who We Are</Link></li>
    <li><Link to='/services' className="hover:text-white">Our Services</Link></li>
    <li><Link to='/careers' className="hover:text-white">Careers</Link></li>
    <li><Link to='/contact' className="hover:text-white">Contact Us</Link></li>
  </ul>
</div>


          {/* Column 3: Our Services */}
          <div className="text-left">
            <h4 className="text-yellow-500 font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white block transition-colors">Freight & Shipping</a></li>
              <li><a href="#" className="hover:text-white block transition-colors">Tech-Enabled Warehousing</a></li>
              <li><a href="#" className="hover:text-white block transition-colors">Exhibition Logistics & Design</a></li>
              <li><a href="#" className="hover:text-white block transition-colors">AI-Powered Last-Mile</a></li>
              <li><a href="#" className="hover:text-white block transition-colors">Supply Chain Analytics</a></li>
              <li><a href="#" className="hover:text-white block transition-colors">Cold Chain & Reverse Logistics</a></li>
            </ul>
          </div>
        </div>

        {/* Row 2: Stay Updated */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:w-1/3">
            <h3 className="text-yellow-500 font-semibold mb-2 text-xl">Stay Updated</h3>
            <p className="text-sm text-gray-300">
              Get the latest updates on logistics trends, industry insights, and our services.
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow h-14 px-4 py-2 bg-[#20232a] border border-gray-700 text-base text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="h-14 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Row 3: Socials & CTA */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Connect With Us */}
          <div className="text-center md:text-left">
            <h4 className="text-yellow-500 font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center md:text-right">
            <h5 className="text-yellow-400 text-base font-semibold mb-2">Ready to Ship?</h5>
            <button className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white text-base font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all">
              Get Quote Now <span className="ml-2">📦</span>
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            © 2025 PATHSY LOGISTICS SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;