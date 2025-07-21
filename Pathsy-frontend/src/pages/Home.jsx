import React from 'react';
import banner from '../assets/images/banner.png';
import { Quote, Settings } from 'lucide-react';
import AboutUs from './AboutUs'
import Services from './Services';
import HelpAndSupport from './HelpAndSupport';
import Careers from './Carrers';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { Zap, Shield, Bot, ArrowRight, Cpu, Truck, Database } from 'lucide-react';



function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Automated Route Optimization",
      description: "Faster deliveries, lower fuel costs.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tamper-Proof Documentation",
      description: "Secure digital contracts & invoices.",
      gradient: "from-orange-400 to-orange-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Smart Warehouse Robotics",
      description: "Precision in inventory handling.",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  const techIcons = [
    { icon: <Cpu className="w-6 h-6" />, label: "AI" },
    { icon: <Database className="w-6 h-6" />, label: "IoT" },
    { icon: <Shield className="w-6 h-6" />, label: "Blockchain" }
  ];
  return (
    <>

      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner})` }}
        />

        {/* Gradient Overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
          <div className="max-w-xl text-left">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Smart. Fast. Reliable.

            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-2 sm:mb-3">
              End-to-End Logistics & Supply Chain Solutions Powered by Technology

            </p>
            <span className="text-orange-400 block mt-1 sm:mt-2 text-[22px] font-medium">
              Your Trusted Logistics Partner

            </span>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 leading-relaxed">
              At Pathsy Logistics Solutions, we redefine supply chain efficiency with AI-driven logistics, real-time tracking, and seamless global freight management. Whether you're shipping locally or internationally, we ensure speed, security, and cost-effectiveness at every step.
            </p>

            {/* Feature List */}


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/contact' className="bg-[#004c99] hover:bg-white text-white hover:text-[#004c99] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2"><Quote className="w-4 h-4" /></span>
                Get a Quote
              </Link>
              <Link to="services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2"><Settings className="w-4 h-4" /></span>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>


      <AboutUs />
      <Services />
      <HelpAndSupport />
      <section className="relative py-16 bg-[#e6f2ff] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/40 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-200/20 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Tech Stack Indicator */}
            

            {/* Main Title */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-[36px] font-bold text-gray-900 mb-2">
                <span className="text-[#004c99] bg-clip-text ">
                  Technology That Moves You

                </span>

              </h2>
              <div className='w-16 sm:w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6'></div>


              {/* Decorative spark */}
              
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to revolutionize your supply chain operations
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#004c99] text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-[18px] font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  
                </div>

                {/* Decorative corner accent */}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}

        </div>
      </section>

      <Careers />
      <Contact />
    </>
  );
}

export default Home;

