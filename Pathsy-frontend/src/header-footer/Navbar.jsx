import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-sm flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PATHSY</h1>
                <p className="text-xs text-gray-600 -mt-1">LOGISTICS SOLUTIONS</p>
                <p className="text-xs text-gray-600 -mt-1">PRIVATE LIMITED</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#004c99] px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-[#004c99] px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-[#004c99] px-3 py-2 text-sm font-medium transition-colors">
                Careers
              </a>
              <a href="#" className="text-gray-700 hover:text-[#004c99] px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <button className="bg-[#004c99] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#003d7a] transition-colors">
                Request a Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#004c99] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#004c99]"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium">
              Careers
            </a>
            <a href="#" className="text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium">
              Contact
            </a>
            <div className="px-3 py-2">
              <button className="w-full bg-[#004c99] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#003d7a] transition-colors">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;