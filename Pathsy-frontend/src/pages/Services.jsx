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
  Globe,
  ScrollText,
  TruckIcon,
  TruckElectric,
} from 'lucide-react';

function Services() {
  const services = [
    {
      id: 1,
      icon: Plane,
      title: 'Freight & Cargo Solutions',
      description: [
        'Road, Air & Sea Shipping – Flexible options for all cargo needs.',
        'Bulk & Fragile Shipments – Specialized handling for sensitive goods.',
      ],
      link: '#',
    },
    {
      id: 2,
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: [
        'Secure, Tech-Enabled Warehouses – Automated inventory management.',
        'Smart Distribution Hubs – Optimized for fast order fulfillment.',
      ],
      link: '#',
    },
    {
      id: 3,
      icon: TruckIcon,
      title: 'Last-Mile Delivery',
      description: [
        'Fast, On-Time Deliveries – Powered by route optimization AI.',
        'Real-Time Customer Updates – SMS/Email notifications for every milestone.',
      ],
      link: '#',
    },
    {
      id: 4,
      icon: Globe,
      title: 'Supply Chain Management',
      description: [
        'End-to-End Visibility – Track shipments from factory to doorstep.',
        'Data-Driven Insights – Reduce costs & delays with predictive analytics.',
      ],
      link: '#',
    },
    {
      id: 5,
      icon: ScrollText,
      title: 'Reverse Logistics',
      description: [
        'Hassle-Free Returns – Efficient systems for returned goods processing.',
        'Sustainable Disposal – Eco-conscious product disposal and recycling.',
      ],
      link: '#',
    },
    {
      id: 6,
      icon: UserCog,
      title: 'Cold Chain Logistics',
      description: [
        'Temperature-Controlled Transport – For pharmaceuticals, perishables & more.',
        '24/7 Monitoring – Ensure freshness with real-time temperature tracking.',
      ],
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-[#e6f2ff]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] md:text-[36px] font-bold text-gray-800 mb-2">
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
                {/* Top Icon */}
                <div className="mb-3 flex justify-center">
                  <div className="w-14 h-14 bg-[#004c99] rounded-full flex items-center justify-center transition duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title with icon */}
                <h3 className="text-lg font-semibold text-[#004c99] mb-3 flex items-center justify-center gap-2">
                  {/* <IconComponent className="w-5 h-5 text-[#004c99]" /> */}
                  {service.title}
                </h3>

                {/* Description Points with icon */}
                <ul className="text-gray-600 text-sm text-left leading-relaxed space-y-2 mt-3">
                  {service.description.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <IconComponent className="w-4 h-4 mt-1 text-[#004c99]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
