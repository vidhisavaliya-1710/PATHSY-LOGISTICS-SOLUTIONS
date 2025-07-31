import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/images/logo/Navbarlogo.png"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top when pathname changes
        window.scrollTo(0, 0);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    {/* Logo */}
                    <div className="flex items-center py-2">
                        <Link to="/" onClick={closeMenu}>
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link 
                                to="/" 
                                className={`relative py-2 text-sm font-medium transition-colors group ${
                                    isActive('/') 
                                        ? 'text-[#004c99]' 
                                        : 'text-gray-700 hover:text-[#004c99]'
                                }`}
                            >
                                Home
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                    isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                            <Link 
                                to="/whoWeAre" 
                                className={`relative py-2 text-sm font-medium transition-colors group ${
                                    isActive('/whoWeAre') 
                                        ? 'text-[#004c99]' 
                                        : 'text-gray-700 hover:text-[#004c99]'
                                }`}
                            >
                                Who We Are
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                    isActive('/whoWeAre') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                            {/* <Link 
                                to="/whyChoose" 
                                className={`relative py-2 text-sm font-medium transition-colors group ${
                                    isActive('/whyChoose') 
                                        ? 'text-[#004c99]' 
                                        : 'text-gray-700 hover:text-[#004c99]'
                                }`}
                            >
                                Why Choose Us
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                    isActive('/whyChoose') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link> */}
                            <Link 
                                to="/services" 
                                className={`relative py-2 text-sm font-medium transition-colors group ${
                                    isActive('/services') 
                                        ? 'text-[#004c99]' 
                                        : 'text-gray-700 hover:text-[#004c99]'
                                }`}
                            >
                                Services
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                    isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                            <Link 
                                to="/careers" 
                                className={`relative py-2 text-sm font-medium transition-colors group ${
                                    isActive('/careers') 
                                        ? 'text-[#004c99]' 
                                        : 'text-gray-700 hover:text-[#004c99]'
                                }`}
                            >
                                Careers
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                    isActive('/careers') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`relative py-2 text-sm font-medium transition-colors group ${
                                    isActive('/contact') 
                                        ? 'text-[#004c99]' 
                                        : 'text-gray-700 hover:text-[#004c99]'
                                }`}
                            >
                                Contact
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                    isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                            <Link 
                                to="/contact"
                                className="bg-[#004c99] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#003d7a] transition-colors"
                            >
                               Request A Quote
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
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
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        <Link 
                            to="/" 
                            onClick={closeMenu}
                            className={`relative block px-3 py-2 text-base font-medium group ${
                                isActive('/') 
                                    ? 'text-[#004c99] bg-gray-50' 
                                    : 'text-gray-700 hover:text-[#004c99] hover:bg-gray-50'
                            }`}
                        >
                            Home
                            <span className={`absolute bottom-1 left-3 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                isActive('/') ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                            }`}></span>
                        </Link>
                        <Link 
                            to="/whoWeAre" 
                            onClick={closeMenu}
                            className={`relative block px-3 py-2 text-base font-medium group ${
                                isActive('/whoWeAre') 
                                    ? 'text-[#004c99] bg-gray-50' 
                                    : 'text-gray-700 hover:text-[#004c99] hover:bg-gray-50'
                            }`}
                        >
                            Who We Are
                            <span className={`absolute bottom-1 left-3 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                isActive('/whoWeAre') ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                            }`}></span>
                        </Link>
                        {/* <Link 
                            to="/whyChoose" 
                            onClick={closeMenu}
                            className={`relative block px-3 py-2 text-base font-medium group ${
                                isActive('/whyChoose') 
                                    ? 'text-[#004c99] bg-gray-50' 
                                    : 'text-gray-700 hover:text-[#004c99] hover:bg-gray-50'
                            }`}
                        >
                            Why Choose Us
                            <span className={`absolute bottom-1 left-3 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                isActive('/whyChoose') ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                            }`}></span>
                        </Link> */}
                        <Link 
                            to="/services" 
                            onClick={closeMenu}
                            className={`relative block px-3 py-2 text-base font-medium group ${
                                isActive('/services') 
                                    ? 'text-[#004c99] bg-gray-50' 
                                    : 'text-gray-700 hover:text-[#004c99] hover:bg-gray-50'
                            }`}
                        >
                            Services
                            <span className={`absolute bottom-1 left-3 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                isActive('/services') ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                            }`}></span>
                        </Link>
                        <Link 
                            to="/careers" 
                            onClick={closeMenu}
                            className={`relative block px-3 py-2 text-base font-medium group ${
                                isActive('/careers') 
                                    ? 'text-[#004c99] bg-gray-50' 
                                    : 'text-gray-700 hover:text-[#004c99] hover:bg-gray-50'
                            }`}
                        >
                            Careers
                            <span className={`absolute bottom-1 left-3 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                isActive('/careers') ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                            }`}></span>
                        </Link>
                        <Link 
                            to="/contact" 
                            onClick={closeMenu}
                            className={`relative block px-3 py-2 text-base font-medium group ${
                                isActive('/contact') 
                                    ? 'text-[#004c99] bg-gray-50' 
                                    : 'text-gray-700 hover:text-[#004c99] hover:bg-gray-50'
                            }`}
                        >
                            Contact
                            <span className={`absolute bottom-1 left-3 h-0.5 bg-[#004c99] transition-all duration-300 ${
                                isActive('/contact') ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                            }`}></span>
                        </Link>
                        <div className="px-3 py-2">
                            <Link 
                                to="/contact"
                                onClick={closeMenu}
                                className="block w-full bg-[#004c99] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#003d7a] transition-colors text-center"
                            >
                                Request A Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;