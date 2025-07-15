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
        'End-to-end event execution no guesswork, just great results.We handle everything from booth design to final teardown, making your brand stand out at every event',
      link: '#',
    },
    {
      id: 2,
      icon: Truck,
      title: 'End-to-End Logistics',
      description:
        'Everything your cargo needs from door to destination.Transport, storage, and supply chain solutions that flex with your business demands.',
      link: '#',
    },
    {
      id: 3,
      icon: Warehouse,
      title: 'Warehousing & Freight',
      description:
        'Safe, secure, and always on schedule.Your inventory is handled with care in our reliable storage and freight network.',
      link: '#',
    },
    {
      id: 4,
      icon: Globe,
      title: 'International Cargo',
      description:
        'Cross borders with confidence.Global shipping is made easy with expert handling of customs, regulations, and routes.',
      link: '#',
    },
    {
      id: 5,
      icon: FileText,
      title: 'Custom Clearance',
      description:
        'No paperwork hassles. Just smooth deliveries.We take care of the formalities so you can focus on business.',
      link: '#',
    },
    {
      id: 6,
      icon:UserCog,
      title: 'On-site Management',
      description:
        'Logistics support right where you need it.From exhibitions to complex freight operations, our experts are on-ground to keep everything under control.',
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
