import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/images/logo/Footerlogo.png'

const Footer = () => {
  return (
    <footer className="bg-[#002f5d] text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            

              <img src={logo} alt="" />
              
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leading Exhibition & Logistics Partner delivering exceptional solutions across India and <br/> globally for over 15 years.
            </p>
           <div className="flex space-x-3">
  <div className="w-10 h-10 bg-[#004c99] rounded-full text-white hover:text-[#004c99] flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
    <Facebook className="w-4 h-4  transition-colors" />
  </div>
  <div className="w-10 h-10 bg-[#004c99] text-white hover:text-[#004c99] rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
    <Linkedin className="w-4 h-4  transition-colors" />
  </div>
  <div className="w-10 h-10 bg-[#004c99] text-white hover:text-[#004c99] rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
    <Twitter className="w-4 h-4  transition-colors" />
  </div>
  <div className="w-10 h-10 bg-[#004c99] text-white hover:text-[#004c99] rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
    <Instagram className="w-4 h-4  transition-colors" />
  </div>
</div>


          </div>

          {/* Quick Links */}
          <div className='ms-15'>
            <h4 className="text-orange-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className=''>
            <h4 className="text-orange-400 font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Exhibition Booths</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Logistics Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Warehousing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">International Cargo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Custom Clearance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Corporate Office</p>
                  <p className="text-sm text-gray-300">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">+91 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">info@pathsylogistics.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <p className="text-center text-sm text-gray-500">
            © 2025 PATHSY LOGISTICS SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;