import React from 'react';
import {
  Calendar,
  Truck,
  Warehouse,
  Plane,
  FileText,
  Users,
  ArrowRight,
  UserCog,
  Earth,
  EarthIcon,
  Globe,
  ScrollText,
  TruckIcon,
  TruckElectric,
} from 'lucide-react';
import { FaUsersGear } from "react-icons/fa6";

function Services() {
  const services = [
    {
      id: 1,
      icon: FileText,
      title: 'Event Setup & Exhibition Booths',
      description:
        'End-to-end event execution — no guesswork, just great results.We handle everything from booth design to final teardown, making your brand stand out at every event',
      link: '#',
    },
    {
      id: 2,
      icon: Truck,
      title: 'End-to-End Logistics',
      description:
        'Comprehensive logistics solutions including transportation, warehousing, and supply chain management tailored to your business needs.',
      link: '#',
    },
    {
      id: 3,
      icon: Warehouse,
      title: 'Warehousing & Freight',
      description:
        'Secure storage facilities and efficient freight services ensuring your products are handled with care and delivered on time.',
      link: '#',
    },
    {
      id: 4,
      icon: Globe,
      title: 'International Cargo',
      description:
        'Global shipping solutions with expertise in international regulations, customs, and cross-border logistics management.',
      link: '#',
    },
    {
      id: 5,
      icon: FileText,
      title: 'Custom Clearance',
      description:
        'Expert customs clearance services ensuring smooth import-export operations with full compliance and documentation support.',
      link: '#',
    },
    {
      id: 6,
      icon:UserCog,
      title: 'On-site Management',
      description:
        'Dedicated on-site teams providing real-time support, coordination, and management throughout your event or logistics operation.',
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-[#e6f2ff]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions for your exhibition and logistics needs, delivered
            with precision and excellence across India and globally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 group"
              >
                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <div className="w-14 h-14 bg-[#004c99] rounded-full flex items-center justify-center  transition duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-[#004c99] mb-3  transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
