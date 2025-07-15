import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        
                        
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="relative text-gray-700 hover:text-[#004c99] py-2 text-sm font-medium transition-colors group">
                                About Us
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#" className="relative text-gray-700 hover:text-[#004c99] py-2 text-sm font-medium transition-colors group">
                                Services
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#" className="relative text-gray-700 hover:text-[#004c99] py-2 text-sm font-medium transition-colors group">
                                Careers
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#" className="relative text-gray-700 hover:text-[#004c99] py-2 text-sm font-medium transition-colors group">
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-full"></span>
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
                        <a href="#" className="relative text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium group">
                            About Us
                            <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                        </a>
                        <a href="#" className="relative text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium group">
                            Services
                            <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                        </a>
                        <a href="#" className="relative text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium group">
                            Careers
                            <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                        </a>
                        <a href="#" className="relative text-gray-700 hover:text-[#004c99] hover:bg-gray-50 block px-3 py-2 text-base font-medium group">
                            Contact
                            <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-[#004c99] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
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